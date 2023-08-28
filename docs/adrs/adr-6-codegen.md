## ADR6 - Architecture Decision Record for the m8a Platform


#### **ADR 6 - m8a.io - Code generation für the frontend**

Authored by Scott Molinari on 28 August 2023

#### Context

In order to improve the DX for the frontend developer, we have chosen graphql as the API of choice. Graphql allows for an automated generation of the API, which is a huge benefit for the frontend developer. However, the frontend developer still needs to write the code to use the API. This is a huge time sink and also a source of errors. We want to automate this process as well.

This is where frontend codegen comes into play. It allows for the generation of the code to use the API. It is a huge time saver and also a source of less errors.

#### Decision

We will have a code generation process in place, so that 

1. the frontend developer can call the CLI to generate the base types from the API
2. the frontend developer must create query, mutation, subscription and fragment files, which will be used to generate the code to use the API
3. while developing, changes in the API will be automatically refreshed and reflected in the generated code
4. the developer will only need to update hos or her documents to match the new API changes


#### Status

Points 1-3 are currently implemented. Point 4 is still in the works.

#### Consequences

In order for the code generation to work, the API must also be up and running. If the API isn't available, the code generation will fail. This also requires connectivity via the Internet. 
