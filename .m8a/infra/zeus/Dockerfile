
###################
# BUILD FOR m8a DEVELOPMENT
###################
FROM node:21-alpine

# Run everything as root
USER root

# add apps needed for development
RUN apt-get update && \
  DEBIAN_FRONTEND="noninteractive" apt-get install --yes \
  bash \
  unzip \
  vim \
  git\
  sudo\
  curl\
  wget


# Install pnpm
RUN wget -qO- https://get.pnpm.io/install.sh | ENV="$HOME/.bashrc" SHELL="$(which bash)" bash -

# Install Rush
RUN npm install -g @microsoft/rush

# Create app directory
WORKDIR /usr/src/app

