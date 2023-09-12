## ADR4 - Architecture Decision Record for the m8a Platform

#### **m8a.io - Fields**

Authored by Scott Molinari on 

#### Context

When creating an application, the smallest elements of data represented to the User usually is more than just a string or a number. There are a number of "parts" to show that data in a more useful manner for the user. This might even be a determination of how the data is represented, for instance between editing it or just reading it.

In order to make these distinctions available in an system that will automate field representations, metadata about the field needs to be stored in parallel to the actual data itself.

#### Decision

In order to have this metadata, m8a will store additional information about each field. This metadata will be stored in parallel to the actual application property's information (the actual value). The metadata should be flexible so that different types of fields can be created.

#### Status

This decision is in the PoC stage.

#### Consequences

Being we have this parallel metadata needing to be stored and retrieved, it adds overhead to the property value itself. That overhead adds value to the user's experience. However, there should also be ways to store properties that aren't bagged with field metadata. That decision and concept is TBD.
