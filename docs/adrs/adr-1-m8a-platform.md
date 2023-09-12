## ADR1 - Architecture Decision Record for the m8a Platform

#### **m8a.io - Why build another PaaS?**

Authored by Scott Molinari on 15 January 2023

#### Context

10 years ago I had just gotten through 13 years of service working on a forum software called vBulletin. I ran a company that sold the German version of the software successfully for about 10 years. Forums were, the go-to software for creating communities. Then Facebook came along and some other poor decisions were made by the "owning company" of vBulletin and they cancelled our partnership.

At the time, forums were on the downfall. However, software like vBulletin and similarly, Wordpress, were able to build up ecosystems around their software. Developers were building and even selling plugins to be used additionally to that software. These software were becoming "platforms" themselves. Even Wordpress is going strong to this day.

It was clear to me, however, that the "lock-in" of a software as a platform meant that there were innate issues that rears its ugly head often. They are:

- 1a - As a software platform (like Wordpress) user, you were basically stuck with their administration UI, but not UX. The plugins of Wordpress can add whole new applications to Wordpress, like an eCommerce web shop. However, the admin area ends up a sloppy mess. Some plugin authors adding UX that you can only shake your head at. Also the Wordpress UI is pretty sad too.

- 1b - The UI for the "team" work (explained more in adr-2) isn't separate from administration. So, users that only do partial work to say, run the shop, end up with full access to all Wordpress functionality.

- 2 - Above and beyond the plugin scene of Wordpress, a company might also want to have external applications, for instance a more powerful warehouse inventory management system, for when their web shop grows. That means, integrations into Wordpress are necessary. And this can and does get messy too.

- 3 - Wordpress is a content management software first. A platform second. Many, many, many applications have gone this route, wth the intention of first being a successful software, but then with tons of users needing the ability to expand its use cases, the platform-like features evolve. These software platforms are, in effect, always a result of a "second thought" and thus the plugin ecosystem is also always based on that "afterthought". Even a massive company like Salesforce has done the same, even though their platform is a bit more thought out, they still sell their platform as a software solution with other issues, I won't go into here.

- 4 - Wordpress does offer a hosted version of its software. However, if a Wordpress user wants its full power, they have to host the site themselves. This entails a ton of work. And obviously, that work isn't too difficult as over 30% of websites are powered by Wordpress. The only thing is, it doesn't truly support scale of a company. If a company ever gets bigger, they end up paying tons of money for other solutions, or to get specialists on Wordpress to make Wordpress scalable. This is a guess on my part, but I'll bet my left nut it is true. I've seen it happen in smaller companies. Heck, I even had to do some similar work in the past myself.

At any rate, the thing is, software as a platform can only go so far. And that brought me to my decision.

#### Decision

Make a platform for any software application. m8a. my-infinite-apps. (or Mozzarella, or spoken meighta, which is German for meta) m8a will be a PaaS first with applications and even plugins or rather app extensions second and third. The applications built on m8a will be true Software as a Service, meaning, the vendors of the software will be able to sell seats to their software, as long as they are providing service (i.e. service support and software maintenance). Their customers, the users of m8a, can also take that software application and extend it (app extensions again) to their liking and needs. It will offer full flexibility to extend and to integrate with any all all apps, because it is built on the m8a platform.

#### Status

POC - currently everything being worked on in m8a is basically pre-alpha. Once an alpha version is working, the platform will be demonstrated to a number of developers, who have been closer to me through my learning and support of other software, in the hopes of gaining some interest and team members to the endeavor.

#### Consequences

None so far except taking up a lot of my time. It's been 10 years to date of writing this ADR. I'm still happy as a peach, because right now I can finally see a path to making it happen. If all works out, things will come together quickly.
