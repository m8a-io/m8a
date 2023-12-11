terraform {
  required_providers {
    coder = {
      source  = "coder/coder"
      version = "~> 0.12.0"
    }
    kubernetes = {
      source  = "hashicorp/kubernetes"
      version = "~> 2.23.0"
    }
  }
}

# variable "use_kubeconfig" {
#   type        = bool
#   sensitive   = true
#   description = <<-EOF
#   Use host kubeconfig? (true/false)

#   Set this to false if the Coder host is itself running as a Pod on the same
#   Kubernetes cluster as you are deploying workspaces to.

#   Set this to true if the Coder host is running outside the Kubernetes cluster
#   for workspaces.  A valid "~/.kube/config" must be present on the Coder host.
#   EOF
# }

variable "namespace" {
  type        = string
  sensitive   = false
  description = "The namespace to create workspaces in (must exist prior to creating workspaces)"
}

# variable "home_disk_size" {
#   type        = number
#   description = "How large would you like your home volume to be (in GB)?"
#   default     = 0.5
#   # validation {
#   #   condition     = var.home_disk_size >= 1
#   #   error_message = "Value must be greater than or equal to 1."
#   # }
# }

provider "kubernetes" {
  # Authenticate via ~/.kube/config or a Coder-specific ServiceAccount, depending on admin preferences
  # config_path = var.use_kubeconfig == true ? "~/.kube/config" : null
  config_path = null
}

data "coder_workspace" "me" {}

resource "coder_agent" "main" {
  os             = "linux"
  arch           = "amd64"
  startup_script = <<EOT
    #!/bin/bash

    # home folder can be empty, so copying default bash settings
    if [ ! -f ~/.profile ]; then
      cp /etc/skel/.profile $HOME
    fi
    if [ ! -f ~/.bashrc ]; then
      cp /etc/skel/.bashrc $HOME
    fi

    # install and start code-server
    curl -fsSL https://code-server.dev/install.sh | sh -s -- --version 4.9.1 | tee code-server-install.log
    code-server --auth none --port 13337 | tee code-server-install.log &
  EOT
}

# # code-server
# resource "coder_app" "code-server" {
#   agent_id     = coder_agent.main.id
#   slug         = "code-server"
#   display_name = "code-server"
#   icon         = "/icon/code.svg"
#   url          = "http://localhost:13337?folder=/home/coder"
#   subdomain    = false
#   share        = "owner"

#   healthcheck {
#     url       = "http://localhost:13337/healthz"
#     interval  = 3
#     threshold = 10
#   }
# }

# resource "kubernetes_persistent_volume_claim" "home" {
#   metadata {
#     name      = "m8a-${lower(data.coder_workspace.me.owner)}-${lower(data.coder_workspace.me.name)}-home"
#     namespace = var.namespace
#   }
#   wait_until_bound = false
#   spec {
#     access_modes = ["ReadWriteOnce"]
#     resources {
#       requests = {
#         storage = "${var.home_disk_size}Gi"
#         # storage = ".5Gi"
#       }
#     }
#     storage_class_name = "longhorn"
#   }
# }

resource "kubernetes_pod" "main" {
  count = data.coder_workspace.me.start_count
  metadata {
    name      = "coder-${lower(data.coder_workspace.me.owner)}-${lower(data.coder_workspace.me.name)}"
    namespace = var.namespace
  }
  spec {
    security_context {
      run_as_user = "0"
      fs_group    = "0"
    }
    container {
      name    = "dev"
      image   = "m8aio/node-18:latest"
      command = ["sh", "-c", coder_agent.main.init_script]
      security_context {
        run_as_user = "0"
      }
      env {
        name  = "CODER_AGENT_TOKEN"
        value = coder_agent.main.token
      }
      volume_mount {
        mount_path = "/usr/src/app"
        name       = "m8a"
        read_only  = false
      }
    }

    volume {
      name = "theme"
      persistent_volume_claim {
        claim_name = "pvc-keycloak-theme"
        read_only  = false
      }
    }
  }
}

# variable "workspace_name" {
#   type        = string
#   sensitive   = false
#   description = "The name of the workspace"
# }

# resource "coder_metadata" "test-metadata" {
#   resource_id = var.workspace_name
#   item {
#     key = "test"
#     value = var.workspace_name
#   }
# }
