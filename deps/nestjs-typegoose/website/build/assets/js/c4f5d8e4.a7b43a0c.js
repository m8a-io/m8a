/*! For license information please see c4f5d8e4.a7b43a0c.js.LICENSE.txt */
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [195],
  {
    5239: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return f;
          },
        });
      const n = r(7294),
        a = r(4184),
        i = r.n(a),
        o = r(215),
        s = r(9960),
        l = r(2263),
        u = r(4996),
        c = {
          heroBanner: "heroBanner_UJJx",
          buttons: "buttons_pzbO",
          features: "features_keug",
          featureImage: "featureImage_yA8i",
        };
      var f = function () {
        const e = (0, l.Z)().siteConfig,
          t = void 0 === e ? {} : e;
        return n.createElement(
          o.Z,
          {
            title: "Hello from " + t.title,
            description: "Description will go into a meta tag in <head />",
          },
          n.createElement(
            "header",
            { className: i()("hero hero--primary", c.heroBanner) },
            n.createElement(
              "div",
              { className: "container" },
              n.createElement("h1", { className: "hero__title" }, t.title),
              n.createElement("p", { className: "hero__subtitle" }, t.tagline),
              n.createElement(
                "div",
                { className: c.buttons },
                n.createElement(
                  s.Z,
                  {
                    className: i()(
                      "button button--outline button--secondary button--lg",
                      c.getStarted
                    ),
                    to: (0, u.Z)("docs/install"),
                  },
                  "Get Started"
                )
              )
            )
          )
        );
      };
    },
    4184: function (e, t) {
      let r;
      !(function () {
        "use strict";
        const n = {}.hasOwnProperty;
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            const r = arguments[t];
            if (r) {
              const i = typeof r;
              if (i === "string" || i === "number") e.push(r);
              else if (Array.isArray(r)) {
                if (r.length) {
                  const o = a.apply(null, r);
                  o && e.push(o);
                }
              } else if (i === "object") {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes("[native code]")
                ) {
                  e.push(r.toString());
                  continue;
                }
                for (const s in r) n.call(r, s) && r[s] && e.push(s);
              }
            }
          }
          return e.join(" ");
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (r = function () {
                return a;
              }.apply(t, [])) || (e.exports = r);
      })();
    },
  },
]);
