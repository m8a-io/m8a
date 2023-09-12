## ADR2 - Architecture Decision Record for the m8a Platform

#### **m8a.io - The User Structure**

Authored by Scott Molinari on 28 August 2023

#### Context

From experience, user structures within "app platforms" (like Wordpress) basically puts admins, devs and team members into one group. There are inherent problems with viewing admins and devs as the same kind of user. Admins are usually the ones who pay for the service. They are the owners and may delegate the admin work to others they trust. Devs are the ones who build the apps. Team members are usually the ones who are invited to work in the app. They are not admins nor devs. They are just team members.

One problem is over-complication of system usage for team members. Because they can see practically everything admins can, the learning curve to do the "teamwork" is higher. Also, if the system doesn't separate abilities between a team member and admin, the team member can do really bad/ unwanted things with the software, like deleting data.

Another problem is, if a software/system is licensed, the cost of a license is based on the overall ability of the admin. Whereas, a team member might only need to do a small part of the work. This isn't "cloud computing" i.e. only paying for what you use.   

#### Decision

We will have three levels of users. 

1. Highest level - Devs and admins - also the most expensive license
2. Middle level - Team members - less expensive license
3. Lowest level - Guests/ users - no cost to use apps

#### Status

Currently this is a proposal. No work has been done on this yet.

#### Consequences

We haven't made the decision yet, but the license structure may need to also be followed by the ISVs. Meaning, they may need to also the same license structure for their apps. This is TBD.
