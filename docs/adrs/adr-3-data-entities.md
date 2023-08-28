## ADR3 - Architecture Decision Record for the m8a Platform

#### **m8a.io - The Data Entity**

Authored by Scott Molinari on 28 August 2023 

#### Context

In order to define what data a business must store along with the state of processes, they need data entities. These entities are stored in one or more databases. The data entities are the basis for the data model of the business. An application may use one or more data entities to store data. It may also use data from other applications. These will also be data entities. 

#### Decision

We will have a UI section in the admin area where entities can be managed. This will include the ability to create, update and delete entities. It will also include the ability to create, update and delete fields for the entities. (see ADR-4)

The number of entities a business can create will be limited. The actual number is TBD, but should be enough to allow for many applications. 

#### Status

This decision is in the PoC stage.

#### Consequences

No consequences currently. 
