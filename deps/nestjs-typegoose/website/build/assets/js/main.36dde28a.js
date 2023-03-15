/*! For license information please see main.36dde28a.js.LICENSE.txt */
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [179],
  {
    723: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      const r = n(7294),
        a = n(7462),
        o = n(8356),
        i = n.n(o),
        l = n(6887),
        u = {
          "0480b142": [
            function () {
              return n.e(836).then(n.bind(n, 3584));
            },
            "@site/docs/faq.md",
            3584,
          ],
          "16c91d09": [
            function () {
              return n.e(519).then(n.bind(n, 3944));
            },
            "@site/docs/async-configuration.md",
            3944,
          ],
          17896441: [
            function () {
              return Promise.all([n.e(532), n.e(918)]).then(n.bind(n, 9360));
            },
            "@theme/DocItem",
            9360,
          ],
          "1be78505": [
            function () {
              return Promise.all([n.e(532), n.e(514)]).then(n.bind(n, 9963));
            },
            "@theme/DocPage",
            9963,
          ],
          "1f1a89eb": [
            function () {
              return n.e(755).then(n.t.bind(n, 3769, 19));
            },
            "/home/scott/Documents/tmp/m8a-new/deps/nestjs-typegoose/website/.docusaurus/docusaurus-plugin-content-docs/default/plugin-route-context-module-100.json",
            3769,
          ],
          "3a4a95f6": [
            function () {
              return n.e(78).then(n.t.bind(n, 5745, 19));
            },
            "/home/scott/Documents/tmp/m8a-new/deps/nestjs-typegoose/website/.docusaurus/docusaurus-plugin-content-pages/default/plugin-route-context-module-100.json",
            5745,
          ],
          "4020c8f9": [
            function () {
              return n.e(888).then(n.bind(n, 5396));
            },
            "@site/docs/schema-options.md",
            5396,
          ],
          "5e9f5e1a": [
            function () {
              return Promise.resolve().then(n.bind(n, 6809));
            },
            "@generated/docusaurus.config",
            6809,
          ],
          "6476eba6": [
            function () {
              return n.e(827).then(n.bind(n, 2175));
            },
            "@site/docs/usage.md",
            2175,
          ],
          "935f2afb": [
            function () {
              return n.e(53).then(n.t.bind(n, 1109, 19));
            },
            "~docs/default/version-current-metadata-prop-751.json",
            1109,
          ],
          "99f6fac0": [
            function () {
              return n.e(11).then(n.bind(n, 1505));
            },
            "@site/docs/discriminators.md",
            1505,
          ],
          c4de80f8: [
            function () {
              return n.e(943).then(n.bind(n, 7520));
            },
            "@site/docs/install.md",
            7520,
          ],
          c4f5d8e4: [
            function () {
              return Promise.all([n.e(532), n.e(195)]).then(n.bind(n, 5239));
            },
            "@site/src/pages/index.js",
            5239,
          ],
          fb7b7bcb: [
            function () {
              return n.e(730).then(n.bind(n, 2482));
            },
            "@site/docs/multiple-connections.md",
            2482,
          ],
          fbe93038: [
            function () {
              return n.e(432).then(n.bind(n, 4534));
            },
            "@site/docs/testing.md",
            4534,
          ],
        };
      function s(e) {
        const t = e.error,
          n = e.retry,
          a = e.pastDelay;
        return t
          ? r.createElement(
              "div",
              {
                style: {
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor: "#fa383e",
                  borderColor: "#fa383e",
                  borderStyle: "solid",
                  borderRadius: "0.25rem",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "block",
                  padding: "1rem",
                  flex: "0 0 50%",
                  marginLeft: "25%",
                  marginRight: "25%",
                  marginTop: "5rem",
                  maxWidth: "50%",
                  width: "100%",
                },
              },
              r.createElement("p", null, String(t)),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "button",
                  { type: "button", onClick: n },
                  "Retry"
                )
              )
            )
          : a
          ? r.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                },
              },
              r.createElement(
                "svg",
                {
                  id: "loader",
                  style: {
                    width: 128,
                    height: 110,
                    position: "absolute",
                    top: "calc(100vh - 64%)",
                  },
                  viewBox: "0 0 45 45",
                  xmlns: "http://www.w3.org/2000/svg",
                  stroke: "#61dafb",
                },
                r.createElement(
                  "g",
                  {
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(1 1)",
                    strokeWidth: "2",
                  },
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "1.5s",
                      dur: "3s",
                      values: "6;22",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-opacity",
                      begin: "1.5s",
                      dur: "3s",
                      values: "1;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-width",
                      begin: "1.5s",
                      dur: "3s",
                      values: "2;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  ),
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "3s",
                      dur: "3s",
                      values: "6;22",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-opacity",
                      begin: "3s",
                      dur: "3s",
                      values: "1;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-width",
                      begin: "3s",
                      dur: "3s",
                      values: "2;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  ),
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "8" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "0s",
                      dur: "1.5s",
                      values: "6;1;2;3;4;5;6",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  )
                )
              )
            )
          : null;
      }
      const c = n(9670),
        d = n(226);
      function f(e, t) {
        if (e === "*")
          return i()({
            loading: s,
            loader: function () {
              return n.e(972).then(n.bind(n, 4972));
            },
            modules: ["@theme/NotFound"],
            webpack: function () {
              return [4972];
            },
            render: function (e, t) {
              const n = e.default;
              return r.createElement(
                d.z,
                { value: { plugin: { name: "native", id: "default" } } },
                r.createElement(n, t)
              );
            },
          });
        const o = l[e + "-" + t],
          f = {},
          p = [],
          m = [],
          g = (0, c.Z)(o);
        return (
          Object.entries(g).forEach(function (e) {
            const t = e[0],
              n = e[1],
              r = u[n];
            r && ((f[t] = r[0]), p.push(r[1]), m.push(r[2]));
          }),
          i().Map({
            loading: s,
            loader: f,
            modules: p,
            webpack: function () {
              return m;
            },
            render: function (t, n) {
              const i = JSON.parse(JSON.stringify(o));
              Object.entries(t).forEach(function (t) {
                const n = t[0],
                  r = t[1],
                  a = r.default;
                if (!a)
                  throw new Error(
                    "The page component at " +
                      e +
                      " doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component."
                  );
                (typeof a !== "object" && typeof a !== "function") ||
                  Object.keys(r)
                    .filter(function (e) {
                      return e !== "default";
                    })
                    .forEach(function (e) {
                      a[e] = r[e];
                    });
                let o = i,
                  l = n.split(".");
                l.slice(0, -1).forEach(function (e) {
                  o = o[e];
                }),
                  (o[l[l.length - 1]] = a);
              });
              const l = i.__comp;
              delete i.__comp;
              const u = i.__context;
              return (
                delete i.__context,
                r.createElement(
                  d.z,
                  { value: u },
                  r.createElement(l, (0, a.Z)({}, i, n))
                )
              );
            },
          })
        );
      }
      var p = [
        {
          path: "/nestjs-typegoose/docs",
          component: f("/nestjs-typegoose/docs", "258"),
          routes: [
            {
              path: "/nestjs-typegoose/docs/async-configuration",
              component: f("/nestjs-typegoose/docs/async-configuration", "eb5"),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/discriminators",
              component: f("/nestjs-typegoose/docs/discriminators", "df5"),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/faq",
              component: f("/nestjs-typegoose/docs/faq", "cc5"),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/install",
              component: f("/nestjs-typegoose/docs/install", "f37"),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/multiple-connections",
              component: f(
                "/nestjs-typegoose/docs/multiple-connections",
                "f80"
              ),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/schema-options",
              component: f("/nestjs-typegoose/docs/schema-options", "9c7"),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/testing",
              component: f("/nestjs-typegoose/docs/testing", "17e"),
              exact: !0,
              sidebar: "someSidebar",
            },
            {
              path: "/nestjs-typegoose/docs/usage",
              component: f("/nestjs-typegoose/docs/usage", "e44"),
              exact: !0,
              sidebar: "someSidebar",
            },
          ],
        },
        {
          path: "/nestjs-typegoose/",
          component: f("/nestjs-typegoose/", "fcd"),
          exact: !0,
        },
        { path: "*", component: f("*") },
      ];
    },
    8934: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return a;
        },
        t: function () {
          return o;
        },
      });
      var r = n(7294),
        a = r.createContext(!1);
      function o(e) {
        const t = e.children,
          n = (0, r.useState)(!1),
          o = n[0],
          i = n[1];
        return (
          (0, r.useEffect)(function () {
            i(!0);
          }, []),
          r.createElement(a.Provider, { value: o }, t)
        );
      }
    },
    9383: function (e, t, n) {
      "use strict";
      const r = n(7294),
        a = n(3935),
        o = n(3727),
        i = n(405),
        l = n(412),
        u = [n(2497), n(3310), n(8320), n(2295)],
        s = n(723),
        c = n(6550),
        d = n(6063);
      function f(e) {
        const t = e.children;
        return r.createElement(r.Fragment, null, t);
      }
      const p = n(7462),
        m = n(5742),
        g = n(2263),
        h = n(4996),
        v = n(6668),
        b = n(1944),
        y = n(4711),
        w = n(9727),
        k = n(3320),
        E = n(197);
      function S() {
        const e = (0, g.Z)().i18n,
          t = e.defaultLocale,
          n = e.localeConfigs,
          a = (0, y.l)();
        return r.createElement(
          m.Z,
          null,
          Object.entries(n).map(function (e) {
            const t = e[0],
              n = e[1].htmlLang;
            return r.createElement("link", {
              key: t,
              rel: "alternate",
              href: a.createUrl({ locale: t, fullyQualified: !0 }),
              hrefLang: n,
            });
          }),
          r.createElement("link", {
            rel: "alternate",
            href: a.createUrl({ locale: t, fullyQualified: !0 }),
            hrefLang: "x-default",
          })
        );
      }
      function x(e) {
        const t = e.permalink,
          n = (0, g.Z)().siteConfig.url,
          a = (function () {
            const e = (0, g.Z)().siteConfig.url,
              t = (0, c.TH)().pathname;
            return e + (0, h.Z)(t);
          })(),
          o = t ? "" + n + t : a;
        return r.createElement(
          m.Z,
          null,
          r.createElement("meta", { property: "og:url", content: o }),
          r.createElement("link", { rel: "canonical", href: o })
        );
      }
      function C() {
        const e = (0, g.Z)().i18n.currentLocale,
          t = (0, v.L)(),
          n = t.metadata,
          a = t.image;
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            m.Z,
            null,
            r.createElement("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            r.createElement("body", { className: w.h })
          ),
          a && r.createElement(b.d, { image: a }),
          r.createElement(x, null),
          r.createElement(S, null),
          r.createElement(E.Z, { tag: k.HX, locale: e }),
          r.createElement(
            m.Z,
            null,
            n.map(function (e, t) {
              return r.createElement("meta", (0, p.Z)({ key: t }, e));
            })
          )
        );
      }
      const T = new Map();
      function _(e) {
        if (T.has(e.pathname))
          return Object.assign({}, e, { pathname: T.get(e.pathname) });
        if (
          (0, d.f)(s.Z, e.pathname).some(function (e) {
            return !0 === e.route.exact;
          })
        )
          return T.set(e.pathname, e.pathname), e;
        const t = e.pathname.trim().replace(/(?:\/index)?\.html$/, "") || "/";
        return T.set(e.pathname, t), Object.assign({}, e, { pathname: t });
      }
      const A = n(8934),
        L = n(8940),
        N = n(4578);
      function R(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        const a = u.map(function (t) {
          let r,
            a,
            o =
              (r = (a = t.default) == null ? void 0 : a[e]) != null ? r : t[e];
          return o == null ? void 0 : o.apply(void 0, n);
        });
        return function () {
          return a.forEach(function (e) {
            return e == null ? void 0 : e();
          });
        };
      }
      const P = function (e) {
        const t = e.children,
          n = e.location,
          a = e.previousLocation;
        return (
          (0, r.useLayoutEffect)(
            function () {
              a !== n &&
                (a &&
                  (function (e) {
                    const t = e.hash;
                    if (t) {
                      const n = decodeURIComponent(t.substring(1)),
                        r = document.getElementById(n);
                      r == null || r.scrollIntoView();
                    } else window.scrollTo(0, 0);
                  })(n),
                R("onRouteDidUpdate", { previousLocation: a, location: n }));
            },
            [a, n]
          ),
          t
        );
      };
      function O(e) {
        const t = Array.from(new Set([e, decodeURI(e)]))
          .map(function (e) {
            return (0, d.f)(s.Z, e);
          })
          .flat();
        return Promise.all(
          t.map(function (e) {
            return e.route.component.preload == null
              ? void 0
              : e.route.component.preload();
          })
        );
      }
      const D = (function (e) {
          function t(t) {
            let n;
            return (
              ((n = e.call(this, t) || this).previousLocation = void 0),
              (n.routeUpdateCleanupCb = void 0),
              (n.previousLocation = null),
              (n.routeUpdateCleanupCb = l.Z.canUseDOM
                ? R("onRouteUpdate", {
                    previousLocation: null,
                    location: n.props.location,
                  })
                : function () {}),
              (n.state = { nextRouteHasLoaded: !0 }),
              n
            );
          }
          (0, N.Z)(t, e);
          const n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e, t) {
              const n = this;
              if (e.location === this.props.location)
                return t.nextRouteHasLoaded;
              const r = e.location;
              return (
                (this.previousLocation = this.props.location),
                this.setState({ nextRouteHasLoaded: !1 }),
                (this.routeUpdateCleanupCb = R("onRouteUpdate", {
                  previousLocation: this.previousLocation,
                  location: r,
                })),
                O(r.pathname)
                  .then(function () {
                    n.routeUpdateCleanupCb(),
                      n.setState({ nextRouteHasLoaded: !0 });
                  })
                  .catch(function (e) {
                    console.warn(e), window.location.reload();
                  }),
                !1
              );
            }),
            (n.render = function () {
              const e = this.props,
                t = e.children,
                n = e.location;
              return r.createElement(
                P,
                { previousLocation: this.previousLocation, location: n },
                r.createElement(c.AW, {
                  location: n,
                  render: function () {
                    return t;
                  },
                })
              );
            }),
            t
          );
        })(r.Component),
        I = "docusaurus-base-url-issue-banner-container",
        M = "docusaurus-base-url-issue-banner-suggestion-container",
        F = "__DOCUSAURUS_INSERT_BASEURL_BANNER";
      function j(e) {
        return (
          "\nwindow['" +
          F +
          "'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['" +
          F +
          "'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('" +
          I +
          "');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = " +
          JSON.stringify(
            (function (e) {
              return (
                '\n<div id="docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseurl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">' +
                e +
                "</span> " +
                (e === "/" ? " (default value)" : "") +
                '</p>\n   <p>We suggest trying baseUrl = <span id="' +
                M +
                '" style="font-weight: bold; color: green;"></span></p>\n</div>\n'
              );
            })(e)
          ).replace(/</g, "\\<") +
          ";\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('" +
          M +
          "');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n"
        );
      }
      function B() {
        const e = (0, g.Z)().siteConfig.baseUrl;
        return (
          (0, r.useLayoutEffect)(function () {
            window[F] = !1;
          }, []),
          r.createElement(
            r.Fragment,
            null,
            !l.Z.canUseDOM &&
              r.createElement(m.Z, null, r.createElement("script", null, j(e))),
            r.createElement("div", { id: I })
          )
        );
      }
      function z() {
        const e = (0, g.Z)().siteConfig,
          t = e.baseUrl,
          n = e.baseUrlIssueBanner,
          a = (0, c.TH)().pathname;
        return n && a === t ? r.createElement(B, null) : null;
      }
      function U() {
        const e = (0, g.Z)(),
          t = e.siteConfig,
          n = t.favicon,
          a = t.title,
          o = t.noIndex,
          i = e.i18n,
          l = i.currentLocale,
          u = i.localeConfigs,
          s = (0, h.Z)(n),
          c = u[l],
          d = c.htmlLang,
          f = c.direction;
        return r.createElement(
          m.Z,
          null,
          r.createElement("html", { lang: d, dir: f }),
          r.createElement("title", null, a),
          r.createElement("meta", { property: "og:title", content: a }),
          r.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          o &&
            r.createElement("meta", {
              name: "robots",
              content: "noindex, nofollow",
            }),
          n && r.createElement("link", { rel: "icon", href: s })
        );
      }
      const $ = n(4763);
      function q() {
        const e = (0, d.H)(s.Z),
          t = (0, c.TH)();
        return r.createElement(
          $.Z,
          null,
          r.createElement(
            L.M,
            null,
            r.createElement(
              A.t,
              null,
              r.createElement(
                f,
                null,
                r.createElement(U, null),
                r.createElement(C, null),
                r.createElement(z, null),
                r.createElement(D, { location: _(t) }, e)
              )
            )
          )
        );
      }
      const H = n(6887);
      const Z = (function (e) {
        try {
          return document.createElement("link").relList.supports(e);
        } catch (t) {
          return !1;
        }
      })("prefetch")
        ? function (e) {
            return new Promise(function (t, n) {
              let r, a;
              if (typeof document !== "undefined") {
                const o = document.createElement("link");
                o.setAttribute("rel", "prefetch"),
                  o.setAttribute("href", e),
                  (o.onload = function () {
                    return t();
                  }),
                  (o.onerror = function () {
                    return n();
                  });
                const i =
                  (r = document.getElementsByTagName("head")[0]) != null
                    ? r
                    : (a = document.getElementsByName("script")[0]) == null
                    ? void 0
                    : a.parentNode;
                i == null || i.appendChild(o);
              } else n();
            });
          }
        : function (e) {
            return new Promise(function (t, n) {
              const r = new XMLHttpRequest();
              r.open("GET", e, !0),
                (r.withCredentials = !0),
                (r.onload = function () {
                  r.status === 200 ? t() : n();
                }),
                r.send(null);
            });
          };
      const G = n(9670),
        V = new Set(),
        W = new Set(),
        Y = function () {
          let e, t;
          return (
            ((e = navigator.connection) == null
              ? void 0
              : e.effectiveType.includes("2g")) ||
            ((t = navigator.connection) == null ? void 0 : t.saveData)
          );
        },
        K = {
          prefetch: function (e) {
            if (
              !(function (e) {
                return !Y() && !W.has(e) && !V.has(e);
              })(e)
            )
              return !1;
            V.add(e);
            const t = (0, d.f)(s.Z, e).flatMap(function (e) {
              return (
                (t = e.route.path),
                Object.entries(H)
                  .filter(function (e) {
                    return e[0].replace(/-[^-]+$/, "") === t;
                  })
                  .flatMap(function (e) {
                    const t = e[1];
                    return Object.values((0, G.Z)(t));
                  })
              );
              let t;
            });
            return Promise.all(
              t.map(function (e) {
                const t = n.gca(e);
                return t && !t.includes("undefined")
                  ? Z(t).catch(function () {})
                  : Promise.resolve();
              })
            );
          },
          preload: function (e) {
            return (
              !!(function (e) {
                return !Y() && !W.has(e);
              })(e) && (W.add(e), O(e))
            );
          },
        },
        Q = Object.freeze(K);
      if (l.Z.canUseDOM) {
        window.docusaurus = Q;
        const X = a.hydrate;
        O(window.location.pathname).then(function () {
          X(
            r.createElement(
              i.B6,
              null,
              r.createElement(o.VK, null, r.createElement(q, null))
            ),
            document.getElementById("__docusaurus")
          );
        });
      }
    },
    8940: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return c;
        },
        M: function () {
          return d;
        },
      });
      var r = n(7294),
        a = n(6809),
        o = JSON.parse(
          '{"docusaurus-plugin-content-docs":{"default":{"path":"/nestjs-typegoose/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/nestjs-typegoose/docs","mainDocId":"install","docs":[{"id":"async-configuration","path":"/nestjs-typegoose/docs/async-configuration","sidebar":"someSidebar"},{"id":"discriminators","path":"/nestjs-typegoose/docs/discriminators","sidebar":"someSidebar"},{"id":"faq","path":"/nestjs-typegoose/docs/faq","sidebar":"someSidebar"},{"id":"install","path":"/nestjs-typegoose/docs/install","sidebar":"someSidebar"},{"id":"multiple-connections","path":"/nestjs-typegoose/docs/multiple-connections","sidebar":"someSidebar"},{"id":"schema-options","path":"/nestjs-typegoose/docs/schema-options","sidebar":"someSidebar"},{"id":"testing","path":"/nestjs-typegoose/docs/testing","sidebar":"someSidebar"},{"id":"usage","path":"/nestjs-typegoose/docs/usage","sidebar":"someSidebar"}],"draftIds":[],"sidebars":{"someSidebar":{"link":{"path":"/nestjs-typegoose/docs/install","label":"install"}}}}],"breadcrumbs":true}}}'
        ),
        i = JSON.parse(
          '{"defaultLocale":"en","locales":["en"],"path":"i18n","currentLocale":"en","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"}}}'
        ),
        l = n(7529),
        u = JSON.parse(
          '{"docusaurusVersion":"2.1.0","siteVersion":"0.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.1.0"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.1.0"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.1.0"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.1.0"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.1.0"}}}'
        ),
        s = {
          siteConfig: a.default,
          siteMetadata: u,
          globalData: o,
          i18n: i,
          codeTranslations: l,
        },
        c = r.createContext(s);
      function d(e) {
        const t = e.children;
        return r.createElement(c.Provider, { value: s }, t);
      }
    },
    4763: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      const r = n(4578),
        a = n(7294),
        o = n(412),
        i = n(5742),
        l = n(215);
      function u(e) {
        const t = e.error,
          n = e.tryAgain;
        return a.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "50vh",
              width: "100%",
              fontSize: "20px",
            },
          },
          a.createElement("h1", null, "This page crashed."),
          a.createElement("p", null, t.message),
          a.createElement("button", { type: "button", onClick: n }, "Try again")
        );
      }
      function s(e) {
        const t = e.error,
          n = e.tryAgain;
        return a.createElement(
          d,
          {
            fallback: function () {
              return a.createElement(u, { error: t, tryAgain: n });
            },
          },
          a.createElement(
            i.Z,
            null,
            a.createElement("title", null, "Page Error")
          ),
          a.createElement(
            l.Z,
            null,
            a.createElement(u, { error: t, tryAgain: n })
          )
        );
      }
      var c = function (e) {
          return a.createElement(s, e);
        },
        d = (function (e) {
          function t(t) {
            let n;
            return ((n = e.call(this, t) || this).state = { error: null }), n;
          }
          (0, r.Z)(t, e);
          const n = t.prototype;
          return (
            (n.componentDidCatch = function (e) {
              o.Z.canUseDOM && this.setState({ error: e });
            }),
            (n.render = function () {
              const e = this,
                t = this.props.children,
                n = this.state.error;
              if (n) {
                let r,
                  a = {
                    error: n,
                    tryAgain: function () {
                      return e.setState({ error: null });
                    },
                  };
                return ((r = this.props.fallback) != null ? r : c)(a);
              }
              return t != null ? t : null;
            }),
            t
          );
        })(a.Component);
    },
    412: function (e, t) {
      "use strict";
      const n =
          typeof window !== "undefined" &&
          "document" in window &&
          "createElement" in window.document,
        r = {
          canUseDOM: n,
          canUseEventListeners:
            n && ("addEventListener" in window || "attachEvent" in window),
          canUseIntersectionObserver: n && "IntersectionObserver" in window,
          canUseViewport: n && "screen" in window,
        };
      t.Z = r;
    },
    5742: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const r = n(7294),
        a = n(405);
      function o(e) {
        return r.createElement(a.ql, e);
      }
    },
    9960: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return g;
        },
      });
      const r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(3727),
        l = n(8780),
        u = n(2263),
        s = n(3919),
        c = n(412),
        d = o.createContext({ collectLink: function () {} });
      const f = n(4996),
        p = [
          "isNavLink",
          "to",
          "href",
          "activeClassName",
          "isActive",
          "data-noBrokenLinkCheck",
          "autoAddBaseUrl",
        ];
      function m(e, t) {
        let n,
          m,
          g = e.isNavLink,
          h = e.to,
          v = e.href,
          b = e.activeClassName,
          y = e.isActive,
          w = e["data-noBrokenLinkCheck"],
          k = e.autoAddBaseUrl,
          E = void 0 === k || k,
          S = (0, a.Z)(e, p),
          x = (0, u.Z)().siteConfig,
          C = x.trailingSlash,
          T = x.baseUrl,
          _ = (0, f.C)().withBaseUrl,
          A = (0, o.useContext)(d),
          L = (0, o.useRef)(null);
        (0, o.useImperativeHandle)(t, function () {
          return L.current;
        });
        const N = h || v;
        let R,
          P = (0, s.Z)(N),
          O = N == null ? void 0 : N.replace("pathname://", ""),
          D =
            void 0 !== O
              ? ((R = O),
                E &&
                (function (e) {
                  return e.startsWith("/");
                })(R)
                  ? _(R)
                  : R)
              : void 0;
        D &&
          P &&
          (D = (0, l.applyTrailingSlash)(D, { trailingSlash: C, baseUrl: T }));
        const I = (0, o.useRef)(!1),
          M = g ? i.OL : i.rU,
          F = c.Z.canUseIntersectionObserver,
          j = (0, o.useRef)();
        (0, o.useEffect)(
          function () {
            return (
              !F && P && D != null && window.docusaurus.prefetch(D),
              function () {
                F && j.current && j.current.disconnect();
              }
            );
          },
          [j, D, F, P]
        );
        const B =
            (n = (m = D) == null ? void 0 : m.startsWith("#")) != null && n,
          z = !D || !P || B;
        return (
          z || w || A.collectLink(D),
          z
            ? o.createElement(
                "a",
                (0, r.Z)(
                  { ref: L, href: D },
                  N && !P && { target: "_blank", rel: "noopener noreferrer" },
                  S
                )
              )
            : o.createElement(
                M,
                (0, r.Z)(
                  {},
                  S,
                  {
                    onMouseEnter: function () {
                      I.current ||
                        D == null ||
                        (window.docusaurus.preload(D), (I.current = !0));
                    },
                    innerRef: function (e) {
                      (L.current = e),
                        F &&
                          e &&
                          P &&
                          ((j.current = new window.IntersectionObserver(
                            function (t) {
                              t.forEach(function (t) {
                                e === t.target &&
                                  (t.isIntersecting ||
                                    t.intersectionRatio > 0) &&
                                  (j.current.unobserve(e),
                                  j.current.disconnect(),
                                  D != null && window.docusaurus.prefetch(D));
                              });
                            }
                          )),
                          j.current.observe(e));
                    },
                    to: D,
                  },
                  g && { isActive: y, activeClassName: b }
                )
              )
        );
      }
      var g = o.forwardRef(m);
    },
    5999: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return u;
        },
        I: function () {
          return l;
        },
      });
      const r = n(7294);
      function a(e, t) {
        const n = e.split(/(\{\w+\})/).map(function (e, n) {
          if (n % 2 == 1) {
            const r = t == null ? void 0 : t[e.slice(1, -1)];
            if (void 0 !== r) return r;
          }
          return e;
        });
        return n.some(function (e) {
          return (0, r.isValidElement)(e);
        })
          ? n
              .map(function (e, t) {
                return (0, r.isValidElement)(e)
                  ? r.cloneElement(e, { key: t })
                  : e;
              })
              .filter(function (e) {
                return e !== "";
              })
          : n.join("");
      }
      const o = n(7529);
      function i(e) {
        let t,
          n,
          r = e.id,
          a = e.message;
        if (void 0 === r && void 0 === a)
          throw new Error(
            "Docusaurus translation declarations must have at least a translation id or a default translation message"
          );
        return (t = (n = o[r != null ? r : a]) != null ? n : a) != null ? t : r;
      }
      function l(e, t) {
        return a(i({ message: e.message, id: e.id }), t);
      }
      function u(e) {
        const t = e.children,
          n = e.id,
          o = e.values;
        if (t && typeof t !== "string")
          throw (
            (console.warn("Illegal <Translate> children", t),
            new Error(
              "The Docusaurus <Translate> component only accept simple string values"
            ))
          );
        const l = i({ message: t, id: n });
        return r.createElement(r.Fragment, null, a(l, o));
      }
    },
    9935: function (e, t, n) {
      "use strict";
      n.d(t, {
        m: function () {
          return r;
        },
      });
      var r = "default";
    },
    3919: function (e, t, n) {
      "use strict";
      function r(e) {
        return /^(?:\w*:|\/\/)/.test(e);
      }
      function a(e) {
        return void 0 !== e && !r(e);
      }
      n.d(t, {
        Z: function () {
          return a;
        },
        b: function () {
          return r;
        },
      });
    },
    4996: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return o;
        },
        Z: function () {
          return i;
        },
      });
      const r = n(2263),
        a = n(3919);
      function o() {
        const e = (0, r.Z)().siteConfig,
          t = e.baseUrl,
          n = e.url;
        return {
          withBaseUrl: function (e, r) {
            return (function (e, t, n, r) {
              const o = void 0 === r ? {} : r,
                i = o.forcePrependBaseUrl,
                l = void 0 !== i && i,
                u = o.absolute,
                s = void 0 !== u && u;
              if (!n || n.startsWith("#") || (0, a.b)(n)) return n;
              if (l) return t + n.replace(/^\//, "");
              if (n === t.replace(/\/$/, "")) return t;
              const c = n.startsWith(t) ? n : t + n.replace(/^\//, "");
              return s ? e + c : c;
            })(n, t, e, r);
          },
        };
      }
      function i(e, t) {
        return void 0 === t && (t = {}), (0, o().withBaseUrl)(e, t);
      }
    },
    2263: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const r = n(7294),
        a = n(8940);
      function o() {
        return (0, r.useContext)(a._);
      }
    },
    2389: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const r = n(7294),
        a = n(8934);
      function o() {
        return (0, r.useContext)(a._);
      }
    },
    9670: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return r;
        },
      });
      function r(e) {
        const t = {};
        return (
          (function e(n, r) {
            Object.entries(n).forEach(function (n) {
              let a,
                o = n[0],
                i = n[1],
                l = r ? r + "." + o : o;
              typeof (a = i) === "object" && a && Object.keys(a).length > 0
                ? e(i, l)
                : (t[l] = i);
            });
          })(e),
          t
        );
      }
    },
    226: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return a;
        },
        z: function () {
          return o;
        },
      });
      var r = n(7294),
        a = r.createContext(null);
      function o(e) {
        const t = e.children,
          n = e.value,
          o = r.useContext(a),
          i = (0, r.useMemo)(
            function () {
              return (function (e) {
                const t = e.parent,
                  n = e.value;
                if (!t) {
                  if (!n)
                    throw new Error(
                      "Unexpected: no Docusaurus route context found"
                    );
                  if (!("plugin" in n))
                    throw new Error(
                      "Unexpected: Docusaurus topmost route context has no `plugin` attribute"
                    );
                  return n;
                }
                const r = Object.assign(
                  {},
                  t.data,
                  n == null ? void 0 : n.data
                );
                return { plugin: t.plugin, data: r };
              })({ parent: o, value: n });
            },
            [o, n]
          );
        return r.createElement(a.Provider, { value: i }, t);
      }
    },
    143: function (e, t, n) {
      "use strict";
      n.d(t, {
        Iw: function () {
          return g;
        },
        gA: function () {
          return f;
        },
        _r: function () {
          return c;
        },
        Jo: function () {
          return h;
        },
        zh: function () {
          return d;
        },
        yW: function () {
          return m;
        },
        gB: function () {
          return p;
        },
      });
      const r = n(6550),
        a = n(2263),
        o = n(9935);
      function i(e, t) {
        void 0 === t && (t = {});
        const n = (0, a.Z)().globalData[e];
        if (!n && t.failfast)
          throw new Error(
            'Docusaurus plugin global data not found for "' + e + '" plugin.'
          );
        return n;
      }
      const l = function (e) {
        return e.versions.find(function (e) {
          return e.isLast;
        });
      };
      function u(e, t) {
        let n,
          a,
          o = (function (e, t) {
            const n = l(e);
            return []
              .concat(
                e.versions.filter(function (e) {
                  return e !== n;
                }),
                [n]
              )
              .find(function (e) {
                return !!(0, r.LX)(t, { path: e.path, exact: !1, strict: !1 });
              });
          })(e, t),
          i =
            o == null
              ? void 0
              : o.docs.find(function (e) {
                  return !!(0,
                  r.LX)(t, { path: e.path, exact: !0, strict: !1 });
                });
        return {
          activeVersion: o,
          activeDoc: i,
          alternateDocVersions: i
            ? ((n = i.id),
              (a = {}),
              e.versions.forEach(function (e) {
                e.docs.forEach(function (t) {
                  t.id === n && (a[e.name] = t);
                });
              }),
              a)
            : {},
        };
      }
      var s = {},
        c = function () {
          let e;
          return (e = i("docusaurus-plugin-content-docs")) != null ? e : s;
        },
        d = function (e) {
          return (function (e, t, n) {
            void 0 === t && (t = o.m), void 0 === n && (n = {});
            const r = i(e),
              a = r == null ? void 0 : r[t];
            if (!a && n.failfast)
              throw new Error(
                'Docusaurus plugin global data not found for "' +
                  e +
                  '" plugin with id "' +
                  t +
                  '".'
              );
            return a;
          })("docusaurus-plugin-content-docs", e, { failfast: !0 });
        };
      function f(e) {
        return (
          void 0 === e && (e = {}),
          (function (e, t, n) {
            void 0 === n && (n = {});
            const a = Object.entries(e)
                .sort(function (e, t) {
                  return t[1].path.localeCompare(e[1].path);
                })
                .find(function (e) {
                  const n = e[1];
                  return !!(0,
                  r.LX)(t, { path: n.path, exact: !1, strict: !1 });
                }),
              o = a ? { pluginId: a[0], pluginData: a[1] } : void 0;
            if (!o && n.failfast)
              throw new Error(
                "Can't find active docs plugin for \"" +
                  t +
                  '" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ' +
                  Object.values(e)
                    .map(function (e) {
                      return e.path;
                    })
                    .join(", ")
              );
            return o;
          })(c(), (0, r.TH)().pathname, e)
        );
      }
      function p(e) {
        return d(e).versions;
      }
      function m(e) {
        const t = d(e);
        return l(t);
      }
      function g(e) {
        return u(d(e), (0, r.TH)().pathname);
      }
      function h(e) {
        return (function (e, t) {
          const n = l(e);
          return {
            latestDocSuggestion: u(e, t).alternateDocVersions[n.name],
            latestVersionSuggestion: n,
          };
        })(d(e), (0, r.TH)().pathname);
      }
    },
    8320: function (e, t, n) {
      "use strict";
      n.r(t);
      const r = n(4865),
        a = n.n(r);
      a().configure({ showSpinner: !1 });
      const o = {
        onRouteUpdate: function (e) {
          const t = e.location,
            n = e.previousLocation;
          if (n && t.pathname !== n.pathname) {
            const r = window.setTimeout(function () {
              a().start();
            }, 200);
            return function () {
              return window.clearTimeout(r);
            };
          }
        },
        onRouteDidUpdate: function () {
          a().done();
        },
      };
      t.default = o;
    },
    3310: function (e, t, n) {
      "use strict";
      n.r(t);
      let r,
        a,
        o = n(7410),
        i = n(6809);
      (r = o.Z),
        (a = i.default.themeConfig.prism.additionalLanguages),
        (globalThis.Prism = r),
        a.forEach(function (e) {
          n(6726)("./prism-" + e);
        }),
        delete globalThis.Prism;
    },
    9471: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const r = n(7294),
        a = "iconExternalLink_nPIU";
      function o(e) {
        const t = e.width,
          n = void 0 === t ? 13.5 : t,
          o = e.height,
          i = void 0 === o ? 13.5 : o;
        return r.createElement(
          "svg",
          {
            width: n,
            height: i,
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: a,
          },
          r.createElement("path", {
            fill: "currentColor",
            d: "M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z",
          })
        );
      }
    },
    215: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Ct;
        },
      });
      const r = n(7294),
        a = n(6010),
        o = n(4763),
        i = n(1944),
        l = n(5281),
        u = n(9727),
        s = n(5999),
        c = n(6550),
        d = n(5936);
      function f(e) {
        e.setAttribute("tabindex", "-1"),
          e.focus(),
          e.removeAttribute("tabindex");
      }
      const p = "skipToContent_fXgn";
      function m() {
        const e = (function () {
            const e = (0, r.useRef)(null),
              t = (0, c.k6)().action,
              n = (0, r.useCallback)(function (e) {
                let t;
                e.preventDefault();
                const n =
                  (t = document.querySelector("main:first-of-type")) != null
                    ? t
                    : document.querySelector("." + l.k.wrapper.main);
                n && f(n);
              }, []);
            return (
              (0, d.S)(function (n) {
                const r = n.location;
                e.current && !r.hash && t === "PUSH" && f(e.current);
              }),
              { containerRef: e, handleSkip: n }
            );
          })(),
          t = e.containerRef,
          n = e.handleSkip;
        return r.createElement(
          "div",
          {
            ref: t,
            role: "region",
            "aria-label": (0, s.I)({ id: "theme.common.skipToMainContent" }),
          },
          r.createElement(
            "a",
            { href: "#", className: p, onClick: n },
            r.createElement(
              s.Z,
              {
                id: "theme.common.skipToMainContent",
                description:
                  "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation",
              },
              "Skip to main content"
            )
          )
        );
      }
      const g = n(6668),
        h = n(9689),
        v = n(7462),
        b = n(3366),
        y = ["width", "height", "color", "strokeWidth", "className"];
      function w(e) {
        const t = e.width,
          n = void 0 === t ? 21 : t,
          a = e.height,
          o = void 0 === a ? 21 : a,
          i = e.color,
          l = void 0 === i ? "currentColor" : i,
          u = e.strokeWidth,
          s = void 0 === u ? 1.2 : u,
          c = (e.className, (0, b.Z)(e, y));
        return r.createElement(
          "svg",
          (0, v.Z)({ viewBox: "0 0 15 15", width: n, height: o }, c),
          r.createElement(
            "g",
            { stroke: l, strokeWidth: s },
            r.createElement("path", {
              d: "M.75.75l13.5 13.5M14.25.75L.75 14.25",
            })
          )
        );
      }
      const k = "closeButton_CVFx";
      function E(e) {
        return r.createElement(
          "button",
          (0, v.Z)(
            {
              type: "button",
              "aria-label": (0, s.I)({
                id: "theme.AnnouncementBar.closeButtonAriaLabel",
                message: "Close",
                description:
                  "The ARIA label for close button of announcement bar",
              }),
            },
            e,
            { className: (0, a.Z)("clean-btn close", k, e.className) }
          ),
          r.createElement(w, { width: 14, height: 14, strokeWidth: 3.1 })
        );
      }
      const S = "content_knG7";
      function x(e) {
        const t = (0, g.L)().announcementBar.content;
        return r.createElement(
          "div",
          (0, v.Z)({}, e, {
            className: (0, a.Z)(S, e.className),
            dangerouslySetInnerHTML: { __html: t },
          })
        );
      }
      const C = "announcementBar_mb4j",
        T = "announcementBarPlaceholder_vyr4",
        _ = "announcementBarClose_gvF7",
        A = "announcementBarContent_xLdY";
      function L() {
        const e = (0, g.L)().announcementBar,
          t = (0, h.nT)(),
          n = t.isActive,
          a = t.close;
        if (!n) return null;
        const o = e.backgroundColor,
          i = e.textColor,
          l = e.isCloseable;
        return r.createElement(
          "div",
          {
            className: C,
            style: { backgroundColor: o, color: i },
            role: "banner",
          },
          l && r.createElement("div", { className: T }),
          r.createElement(x, { className: A }),
          l && r.createElement(E, { onClick: a, className: _ })
        );
      }
      const N = n(2961),
        R = n(2466);
      const P = n(9688),
        O = n(3102),
        D = r.createContext(null);
      function I(e) {
        let t,
          n,
          a,
          o,
          i,
          l,
          u,
          s = e.children,
          c =
            ((t = (0, N.e)()),
            (n = (0, O.HY)()),
            (a = (0, r.useState)(!1)),
            (o = a[0]),
            (i = a[1]),
            (l = n.component !== null),
            (u = (0, P.D9)(l)),
            (0, r.useEffect)(
              function () {
                l && !u && i(!0);
              },
              [l, u]
            ),
            (0, r.useEffect)(
              function () {
                l ? t.shown || i(!0) : i(!1);
              },
              [t.shown, l]
            ),
            (0, r.useMemo)(
              function () {
                return [o, i];
              },
              [o]
            ));
        return r.createElement(D.Provider, { value: c }, s);
      }
      function M(e) {
        if (e.component) {
          const t = e.component;
          return r.createElement(t, e.props);
        }
      }
      function F() {
        const e = (0, r.useContext)(D);
        if (!e) throw new P.i6("NavbarSecondaryMenuDisplayProvider");
        const t = e[0],
          n = e[1],
          a = (0, r.useCallback)(
            function () {
              return n(!1);
            },
            [n]
          ),
          o = (0, O.HY)();
        return (0, r.useMemo)(
          function () {
            return { shown: t, hide: a, content: M(o) };
          },
          [a, o, t]
        );
      }
      function j(e) {
        const t = e.header,
          n = e.primaryMenu,
          o = e.secondaryMenu,
          i = F().shown;
        return r.createElement(
          "div",
          { className: "navbar-sidebar" },
          t,
          r.createElement(
            "div",
            {
              className: (0, a.Z)("navbar-sidebar__items", {
                "navbar-sidebar__items--show-secondary": i,
              }),
            },
            r.createElement(
              "div",
              { className: "navbar-sidebar__item menu" },
              n
            ),
            r.createElement(
              "div",
              { className: "navbar-sidebar__item menu" },
              o
            )
          )
        );
      }
      const B = n(2949),
        z = n(2389);
      function U(e) {
        return r.createElement(
          "svg",
          (0, v.Z)({ viewBox: "0 0 24 24", width: 24, height: 24 }, e),
          r.createElement("path", {
            fill: "currentColor",
            d: "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z",
          })
        );
      }
      function $(e) {
        return r.createElement(
          "svg",
          (0, v.Z)({ viewBox: "0 0 24 24", width: 24, height: 24 }, e),
          r.createElement("path", {
            fill: "currentColor",
            d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z",
          })
        );
      }
      const q = {
        toggle: "toggle_vylO",
        toggleButton: "toggleButton_gllP",
        darkToggleIcon: "darkToggleIcon_wfgR",
        lightToggleIcon: "lightToggleIcon_pyhR",
        toggleButtonDisabled: "toggleButtonDisabled_aARS",
      };
      function H(e) {
        const t = e.className,
          n = e.value,
          o = e.onChange,
          i = (0, z.Z)(),
          l = (0, s.I)(
            {
              message: "Switch between dark and light mode (currently {mode})",
              id: "theme.colorToggle.ariaLabel",
              description: "The ARIA label for the navbar color mode toggle",
            },
            {
              mode:
                n === "dark"
                  ? (0, s.I)({
                      message: "dark mode",
                      id: "theme.colorToggle.ariaLabel.mode.dark",
                      description: "The name for the dark color mode",
                    })
                  : (0, s.I)({
                      message: "light mode",
                      id: "theme.colorToggle.ariaLabel.mode.light",
                      description: "The name for the light color mode",
                    }),
            }
          );
        return r.createElement(
          "div",
          { className: (0, a.Z)(q.toggle, t) },
          r.createElement(
            "button",
            {
              className: (0, a.Z)(
                "clean-btn",
                q.toggleButton,
                !i && q.toggleButtonDisabled
              ),
              type: "button",
              onClick: function () {
                return o(n === "dark" ? "light" : "dark");
              },
              disabled: !i,
              title: l,
              "aria-label": l,
            },
            r.createElement(U, {
              className: (0, a.Z)(q.toggleIcon, q.lightToggleIcon),
            }),
            r.createElement($, {
              className: (0, a.Z)(q.toggleIcon, q.darkToggleIcon),
            })
          )
        );
      }
      const Z = r.memo(H);
      function G(e) {
        const t = e.className,
          n = (0, g.L)().colorMode.disableSwitch,
          a = (0, B.I)(),
          o = a.colorMode,
          i = a.setColorMode;
        return n
          ? null
          : r.createElement(Z, { className: t, value: o, onChange: i });
      }
      const V = n(1327);
      function W() {
        return r.createElement(V.Z, {
          className: "navbar__brand",
          imageClassName: "navbar__logo",
          titleClassName: "navbar__title text--truncate",
        });
      }
      function Y() {
        const e = (0, N.e)();
        return r.createElement(
          "button",
          {
            type: "button",
            className: "clean-btn navbar-sidebar__close",
            onClick: function () {
              return e.toggle();
            },
          },
          r.createElement(w, { color: "var(--ifm-color-emphasis-600)" })
        );
      }
      function K() {
        return r.createElement(
          "div",
          { className: "navbar-sidebar__brand" },
          r.createElement(W, null),
          r.createElement(G, { className: "margin-right--md" }),
          r.createElement(Y, null)
        );
      }
      const Q = n(9960),
        X = n(4996),
        J = n(3919);
      function ee(e, t) {
        return void 0 !== e && void 0 !== t && new RegExp(e, "gi").test(t);
      }
      const te = n(9471),
        ne = [
          "activeBasePath",
          "activeBaseRegex",
          "to",
          "href",
          "label",
          "html",
          "isDropdownLink",
          "prependBaseUrlToHref",
        ];
      function re(e) {
        const t = e.activeBasePath,
          n = e.activeBaseRegex,
          a = e.to,
          o = e.href,
          i = e.label,
          l = e.html,
          u = e.isDropdownLink,
          s = e.prependBaseUrlToHref,
          c = (0, b.Z)(e, ne),
          d = (0, X.Z)(a),
          f = (0, X.Z)(t),
          p = (0, X.Z)(o, { forcePrependBaseUrl: !0 }),
          m = i && o && !(0, J.Z)(o),
          g = l
            ? { dangerouslySetInnerHTML: { __html: l } }
            : {
                children: r.createElement(
                  r.Fragment,
                  null,
                  i,
                  m && r.createElement(te.Z, u && { width: 12, height: 12 })
                ),
              };
        return o
          ? r.createElement(Q.Z, (0, v.Z)({ href: s ? p : o }, c, g))
          : r.createElement(
              Q.Z,
              (0, v.Z)(
                { to: d, isNavLink: !0 },
                (t || n) && {
                  isActive: function (e, t) {
                    return n ? ee(n, t.pathname) : t.pathname.startsWith(f);
                  },
                },
                c,
                g
              )
            );
      }
      const ae = ["className", "isDropdownItem"],
        oe = ["className", "isDropdownItem"],
        ie = ["mobile", "position"];
      function le(e) {
        const t = e.className,
          n = e.isDropdownItem,
          o = void 0 !== n && n,
          i = (0, b.Z)(e, ae),
          l = r.createElement(
            re,
            (0, v.Z)(
              {
                className: (0, a.Z)(
                  o ? "dropdown__link" : "navbar__item navbar__link",
                  t
                ),
                isDropdownLink: o,
              },
              i
            )
          );
        return o ? r.createElement("li", null, l) : l;
      }
      function ue(e) {
        const t = e.className,
          n = (e.isDropdownItem, (0, b.Z)(e, oe));
        return r.createElement(
          "li",
          { className: "menu__list-item" },
          r.createElement(
            re,
            (0, v.Z)({ className: (0, a.Z)("menu__link", t) }, n)
          )
        );
      }
      function se(e) {
        let t,
          n = e.mobile,
          a = void 0 !== n && n,
          o = (e.position, (0, b.Z)(e, ie)),
          i = a ? ue : le;
        return r.createElement(
          i,
          (0, v.Z)({}, o, {
            activeClassName:
              (t = o.activeClassName) != null
                ? t
                : a
                ? "menu__link--active"
                : "navbar__link--active",
          })
        );
      }
      const ce = n(6043),
        de = n(8596),
        fe = n(2263);
      const pe = ["items", "position", "className", "onClick"],
        me = ["items", "className", "position", "onClick"],
        ge = ["mobile"];
      function he(e, t) {
        return e.some(function (e) {
          return (function (e, t) {
            return (
              !!(0, de.Mg)(e.to, t) ||
              !!ee(e.activeBaseRegex, t) ||
              !(!e.activeBasePath || !t.startsWith(e.activeBasePath))
            );
          })(e, t);
        });
      }
      function ve(e) {
        let t,
          n = e.items,
          o = e.position,
          i = e.className,
          l = (e.onClick, (0, b.Z)(e, pe)),
          u = (0, r.useRef)(null),
          s = (0, r.useState)(!1),
          c = s[0],
          d = s[1];
        return (
          (0, r.useEffect)(
            function () {
              const e = function (e) {
                u.current && !u.current.contains(e.target) && d(!1);
              };
              return (
                document.addEventListener("mousedown", e),
                document.addEventListener("touchstart", e),
                function () {
                  document.removeEventListener("mousedown", e),
                    document.removeEventListener("touchstart", e);
                }
              );
            },
            [u]
          ),
          r.createElement(
            "div",
            {
              ref: u,
              className: (0, a.Z)(
                "navbar__item",
                "dropdown",
                "dropdown--hoverable",
                { "dropdown--right": o === "right", "dropdown--show": c }
              ),
            },
            r.createElement(
              re,
              (0, v.Z)(
                {
                  "aria-haspopup": "true",
                  "aria-expanded": c,
                  role: "button",
                  href: l.to ? void 0 : "#",
                  className: (0, a.Z)("navbar__link", i),
                },
                l,
                {
                  onClick: l.to
                    ? void 0
                    : function (e) {
                        return e.preventDefault();
                      },
                  onKeyDown: function (e) {
                    e.key === "Enter" && (e.preventDefault(), d(!c));
                  },
                }
              ),
              (t = l.children) != null ? t : l.label
            ),
            r.createElement(
              "ul",
              { className: "dropdown__menu" },
              n.map(function (e, t) {
                return r.createElement(
                  je,
                  (0, v.Z)(
                    {
                      isDropdownItem: !0,
                      onKeyDown: function (e) {
                        if (t === n.length - 1 && e.key === "Tab") {
                          e.preventDefault(), d(!1);
                          const r = u.current.nextElementSibling;
                          if (r)
                            (r instanceof HTMLAnchorElement
                              ? r
                              : r.querySelector("a")
                            ).focus();
                        }
                      },
                      activeClassName: "dropdown__link--active",
                    },
                    e,
                    { key: t }
                  )
                );
              })
            )
          )
        );
      }
      function be(e) {
        let t,
          n,
          o = e.items,
          i = e.className,
          l = (e.position, e.onClick),
          u = (0, b.Z)(e, me),
          s =
            ((n = (0, fe.Z)().siteConfig.baseUrl),
            (0, c.TH)().pathname.replace(n, "/")),
          d = he(o, s),
          f = (0, ce.u)({
            initialState: function () {
              return !d;
            },
          }),
          p = f.collapsed,
          m = f.toggleCollapsed,
          g = f.setCollapsed;
        return (
          (0, r.useEffect)(
            function () {
              d && g(!d);
            },
            [s, d, g]
          ),
          r.createElement(
            "li",
            {
              className: (0, a.Z)("menu__list-item", {
                "menu__list-item--collapsed": p,
              }),
            },
            r.createElement(
              re,
              (0, v.Z)(
                {
                  role: "button",
                  className: (0, a.Z)(
                    "menu__link menu__link--sublist menu__link--sublist-caret",
                    i
                  ),
                },
                u,
                {
                  onClick: function (e) {
                    e.preventDefault(), m();
                  },
                }
              ),
              (t = u.children) != null ? t : u.label
            ),
            r.createElement(
              ce.z,
              { lazy: !0, as: "ul", className: "menu__list", collapsed: p },
              o.map(function (e, t) {
                return r.createElement(
                  je,
                  (0, v.Z)(
                    {
                      mobile: !0,
                      isDropdownItem: !0,
                      onClick: l,
                      activeClassName: "menu__link--active",
                    },
                    e,
                    { key: t }
                  )
                );
              })
            )
          )
        );
      }
      function ye(e) {
        const t = e.mobile,
          n = void 0 !== t && t,
          a = (0, b.Z)(e, ge),
          o = n ? be : ve;
        return r.createElement(o, a);
      }
      const we = n(4711),
        ke = ["width", "height"];
      function Ee(e) {
        const t = e.width,
          n = void 0 === t ? 20 : t,
          a = e.height,
          o = void 0 === a ? 20 : a,
          i = (0, b.Z)(e, ke);
        return r.createElement(
          "svg",
          (0, v.Z)(
            { viewBox: "0 0 24 24", width: n, height: o, "aria-hidden": !0 },
            i
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z",
          })
        );
      }
      const Se = "iconLanguage_nlXk",
        xe = ["mobile", "dropdownItemsBefore", "dropdownItemsAfter"];
      const Ce = function () {
          return null;
        },
        Te = "searchBox_ZlJk";
      function _e(e) {
        const t = e.children,
          n = e.className;
        return r.createElement("div", { className: (0, a.Z)(n, Te) }, t);
      }
      const Ae = n(143),
        Le = n(8425),
        Ne = ["docId", "label", "docsPluginId"];
      const Re = ["sidebarId", "label", "docsPluginId"];
      const Pe = ["label", "to", "docsPluginId"];
      const Oe = n(373),
        De = [
          "mobile",
          "docsPluginId",
          "dropdownActiveClassDisabled",
          "dropdownItemsBefore",
          "dropdownItemsAfter",
        ],
        Ie = function (e) {
          return e.docs.find(function (t) {
            return t.id === e.mainDocId;
          });
        };
      const Me = {
          default: se,
          localeDropdown: function (e) {
            const t = e.mobile,
              n = e.dropdownItemsBefore,
              a = e.dropdownItemsAfter,
              o = (0, b.Z)(e, xe),
              i = (0, fe.Z)().i18n,
              l = i.currentLocale,
              u = i.locales,
              c = i.localeConfigs,
              d = (0, we.l)(),
              f = u.map(function (e) {
                const n =
                  "pathname://" +
                  d.createUrl({ locale: e, fullyQualified: !1 });
                return {
                  label: c[e].label,
                  lang: c[e].htmlLang,
                  to: n,
                  target: "_self",
                  autoAddBaseUrl: !1,
                  className:
                    e === l
                      ? t
                        ? "menu__link--active"
                        : "dropdown__link--active"
                      : "",
                };
              }),
              p = [].concat(n, f, a),
              m = t
                ? (0, s.I)({
                    message: "Languages",
                    id: "theme.navbar.mobileLanguageDropdown.label",
                    description:
                      "The label for the mobile language switcher dropdown",
                  })
                : c[l].label;
            return r.createElement(
              ye,
              (0, v.Z)({}, o, {
                mobile: t,
                label: r.createElement(
                  r.Fragment,
                  null,
                  r.createElement(Ee, { className: Se }),
                  m
                ),
                items: p,
              })
            );
          },
          search: function (e) {
            const t = e.mobile,
              n = e.className;
            return t
              ? null
              : r.createElement(
                  _e,
                  { className: n },
                  r.createElement(Ce, null)
                );
          },
          dropdown: ye,
          html: function (e) {
            const t = e.value,
              n = e.className,
              o = e.mobile,
              i = void 0 !== o && o,
              l = e.isDropdownItem,
              u = void 0 !== l && l,
              s = u ? "li" : "div";
            return r.createElement(s, {
              className: (0, a.Z)(
                { navbar__item: !i && !u, "menu__list-item": i },
                n
              ),
              dangerouslySetInnerHTML: { __html: t },
            });
          },
          doc: function (e) {
            const t = e.docId,
              n = e.label,
              a = e.docsPluginId,
              o = (0, b.Z)(e, Ne),
              i = (0, Ae.Iw)(a).activeDoc,
              l = (0, Le.vY)(t, a);
            return l === null
              ? null
              : r.createElement(
                  se,
                  (0, v.Z)({ exact: !0 }, o, {
                    isActive: function () {
                      return (
                        (i == null ? void 0 : i.path) === l.path ||
                        (!(i == null || !i.sidebar) && i.sidebar === l.sidebar)
                      );
                    },
                    label: n != null ? n : l.id,
                    to: l.path,
                  })
                );
          },
          docSidebar: function (e) {
            const t = e.sidebarId,
              n = e.label,
              a = e.docsPluginId,
              o = (0, b.Z)(e, Re),
              i = (0, Ae.Iw)(a).activeDoc,
              l = (0, Le.oz)(t, a).link;
            if (!l)
              throw new Error(
                'DocSidebarNavbarItem: Sidebar with ID "' +
                  t +
                  "\" doesn't have anything to be linked to."
              );
            return r.createElement(
              se,
              (0, v.Z)({ exact: !0 }, o, {
                isActive: function () {
                  return (i == null ? void 0 : i.sidebar) === t;
                },
                label: n != null ? n : l.label,
                to: l.path,
              })
            );
          },
          docsVersion: function (e) {
            const t = e.label,
              n = e.to,
              a = e.docsPluginId,
              o = (0, b.Z)(e, Pe),
              i = (0, Le.lO)(a)[0],
              l = t != null ? t : i.label,
              u =
                n != null
                  ? n
                  : (function (e) {
                      return e.docs.find(function (t) {
                        return t.id === e.mainDocId;
                      });
                    })(i).path;
            return r.createElement(se, (0, v.Z)({}, o, { label: l, to: u }));
          },
          docsVersionDropdown: function (e) {
            const t = e.mobile,
              n = e.docsPluginId,
              a = e.dropdownActiveClassDisabled,
              o = e.dropdownItemsBefore,
              i = e.dropdownItemsAfter,
              l = (0, b.Z)(e, De),
              u = (0, Ae.Iw)(n),
              c = (0, Ae.gB)(n),
              d = (0, Oe.J)(n).savePreferredVersionName,
              f = c.map(function (e) {
                let t,
                  n = (t = u.alternateDocVersions[e.name]) != null ? t : Ie(e);
                return {
                  label: e.label,
                  to: n.path,
                  isActive: function () {
                    return e === u.activeVersion;
                  },
                  onClick: function () {
                    return d(e.name);
                  },
                };
              }),
              p = [].concat(o, f, i),
              m = (0, Le.lO)(n)[0],
              g =
                t && p.length > 1
                  ? (0, s.I)({
                      id: "theme.navbar.mobileVersionsDropdown.label",
                      message: "Versions",
                      description:
                        "The label for the navbar versions dropdown on mobile view",
                    })
                  : m.label,
              h = t && p.length > 1 ? void 0 : Ie(m).path;
            return p.length <= 1
              ? r.createElement(
                  se,
                  (0, v.Z)({}, l, {
                    mobile: t,
                    label: g,
                    to: h,
                    isActive: a
                      ? function () {
                          return !1;
                        }
                      : void 0,
                  })
                )
              : r.createElement(
                  ye,
                  (0, v.Z)({}, l, {
                    mobile: t,
                    label: g,
                    to: h,
                    items: p,
                    isActive: a
                      ? function () {
                          return !1;
                        }
                      : void 0,
                  })
                );
          },
        },
        Fe = ["type"];
      function je(e) {
        const t = e.type,
          n = (0, b.Z)(e, Fe),
          a = (function (e, t) {
            return e && e !== "default"
              ? e
              : "items" in t
              ? "dropdown"
              : "default";
          })(t, n),
          o = Me[a];
        if (!o)
          throw new Error(
            'No NavbarItem component found for type "' + t + '".'
          );
        return r.createElement(o, n);
      }
      function Be() {
        const e = (0, N.e)(),
          t = (0, g.L)().navbar.items;
        return r.createElement(
          "ul",
          { className: "menu__list" },
          t.map(function (t, n) {
            return r.createElement(
              je,
              (0, v.Z)({ mobile: !0 }, t, {
                onClick: function () {
                  return e.toggle();
                },
                key: n,
              })
            );
          })
        );
      }
      function ze(e) {
        return r.createElement(
          "button",
          (0, v.Z)({}, e, {
            type: "button",
            className: "clean-btn navbar-sidebar__back",
          }),
          r.createElement(
            s.Z,
            {
              id: "theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",
              description:
                "The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",
            },
            "\u2190 Back to main menu"
          )
        );
      }
      function Ue() {
        const e = (0, g.L)().navbar.items.length === 0,
          t = F();
        return r.createElement(
          r.Fragment,
          null,
          !e &&
            r.createElement(ze, {
              onClick: function () {
                return t.hide();
              },
            }),
          t.content
        );
      }
      function $e() {
        let e,
          t = (0, N.e)();
        return (
          void 0 === (e = t.shown) && (e = !0),
          (0, r.useEffect)(
            function () {
              return (
                (document.body.style.overflow = e ? "hidden" : "visible"),
                function () {
                  document.body.style.overflow = "visible";
                }
              );
            },
            [e]
          ),
          t.shouldRender
            ? r.createElement(j, {
                header: r.createElement(K, null),
                primaryMenu: r.createElement(Be, null),
                secondaryMenu: r.createElement(Ue, null),
              })
            : null
        );
      }
      const qe = "navbarHideable_m1mJ",
        He = "navbarHidden_jGov";
      function Ze(e) {
        return r.createElement(
          "div",
          (0, v.Z)({ role: "presentation" }, e, {
            className: (0, a.Z)("navbar-sidebar__backdrop", e.className),
          })
        );
      }
      function Ge(e) {
        const t = e.children,
          n = (0, g.L)().navbar,
          o = n.hideOnScroll,
          i = n.style,
          l = (0, N.e)(),
          u = (function (e) {
            const t = (0, r.useState)(e),
              n = t[0],
              a = t[1],
              o = (0, r.useRef)(!1),
              i = (0, r.useRef)(0),
              l = (0, r.useCallback)(function (e) {
                e !== null && (i.current = e.getBoundingClientRect().height);
              }, []);
            return (
              (0, R.RF)(function (t, n) {
                const r = t.scrollY;
                if (e)
                  if (r < i.current) a(!0);
                  else if (o.current) o.current = !1;
                  else {
                    const l = n == null ? void 0 : n.scrollY,
                      u = document.documentElement.scrollHeight - i.current,
                      s = window.innerHeight;
                    l && r >= l ? a(!1) : r + s < u && a(!0);
                  }
              }),
              (0, d.S)(function (t) {
                if (e)
                  return t.location.hash
                    ? ((o.current = !0), void a(!1))
                    : void a(!0);
              }),
              { navbarRef: l, isNavbarVisible: n }
            );
          })(o),
          s = u.navbarRef,
          c = u.isNavbarVisible;
        return r.createElement(
          "nav",
          {
            ref: s,
            className: (0, a.Z)(
              "navbar",
              "navbar--fixed-top",
              o && [qe, !c && He],
              {
                "navbar--dark": i === "dark",
                "navbar--primary": i === "primary",
                "navbar-sidebar--show": l.shown,
              }
            ),
          },
          t,
          r.createElement(Ze, { onClick: l.toggle }),
          r.createElement($e, null)
        );
      }
      const Ve = ["width", "height", "className"];
      function We(e) {
        const t = e.width,
          n = void 0 === t ? 30 : t,
          a = e.height,
          o = void 0 === a ? 30 : a,
          i = e.className,
          l = (0, b.Z)(e, Ve);
        return r.createElement(
          "svg",
          (0, v.Z)(
            {
              className: i,
              width: n,
              height: o,
              viewBox: "0 0 30 30",
              "aria-hidden": "true",
            },
            l
          ),
          r.createElement("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "2",
            d: "M4 7h22M4 15h22M4 23h22",
          })
        );
      }
      function Ye() {
        const e = (0, N.e)();
        return r.createElement(
          "button",
          {
            onClick: e.toggle,
            onKeyDown: e.toggle,
            "aria-label": "Navigation bar toggle",
            className: "navbar__toggle clean-btn",
            type: "button",
            tabIndex: 0,
          },
          r.createElement(We, null)
        );
      }
      const Ke = "colorModeToggle_DEke";
      function Qe(e) {
        const t = e.items;
        return r.createElement(
          r.Fragment,
          null,
          t.map(function (e, t) {
            return r.createElement(je, (0, v.Z)({}, e, { key: t }));
          })
        );
      }
      function Xe(e) {
        const t = e.left,
          n = e.right;
        return r.createElement(
          "div",
          { className: "navbar__inner" },
          r.createElement("div", { className: "navbar__items" }, t),
          r.createElement(
            "div",
            { className: "navbar__items navbar__items--right" },
            n
          )
        );
      }
      function Je() {
        const e = (0, N.e)(),
          t = (0, g.L)().navbar.items,
          n = (function (e) {
            function t(e) {
              let t;
              return ((t = e.position) != null ? t : "right") === "left";
            }
            return [
              e.filter(t),
              e.filter(function (e) {
                return !t(e);
              }),
            ];
          })(t),
          a = n[0],
          o = n[1],
          i = t.find(function (e) {
            return e.type === "search";
          });
        return r.createElement(Xe, {
          left: r.createElement(
            r.Fragment,
            null,
            !e.disabled && r.createElement(Ye, null),
            r.createElement(W, null),
            r.createElement(Qe, { items: a })
          ),
          right: r.createElement(
            r.Fragment,
            null,
            r.createElement(Qe, { items: o }),
            r.createElement(G, { className: Ke }),
            !i && r.createElement(_e, null, r.createElement(Ce, null))
          ),
        });
      }
      function et() {
        return r.createElement(Ge, null, r.createElement(Je, null));
      }
      const tt = ["to", "href", "label", "prependBaseUrlToHref"];
      function nt(e) {
        const t = e.item,
          n = t.to,
          a = t.href,
          o = t.label,
          i = t.prependBaseUrlToHref,
          l = (0, b.Z)(t, tt),
          u = (0, X.Z)(n),
          s = (0, X.Z)(a, { forcePrependBaseUrl: !0 });
        return r.createElement(
          Q.Z,
          (0, v.Z)(
            { className: "footer__link-item" },
            a ? { href: i ? s : a } : { to: u },
            l
          ),
          o,
          a && !(0, J.Z)(a) && r.createElement(te.Z, null)
        );
      }
      function rt(e) {
        let t,
          n = e.item;
        return n.html
          ? r.createElement("li", {
              className: "footer__item",
              dangerouslySetInnerHTML: { __html: n.html },
            })
          : r.createElement(
              "li",
              {
                key: (t = n.href) != null ? t : n.to,
                className: "footer__item",
              },
              r.createElement(nt, { item: n })
            );
      }
      function at(e) {
        const t = e.column;
        return r.createElement(
          "div",
          { className: "col footer__col" },
          r.createElement("div", { className: "footer__title" }, t.title),
          r.createElement(
            "ul",
            { className: "footer__items clean-list" },
            t.items.map(function (e, t) {
              return r.createElement(rt, { key: t, item: e });
            })
          )
        );
      }
      function ot(e) {
        const t = e.columns;
        return r.createElement(
          "div",
          { className: "row footer__links" },
          t.map(function (e, t) {
            return r.createElement(at, { key: t, column: e });
          })
        );
      }
      function it() {
        return r.createElement(
          "span",
          { className: "footer__link-separator" },
          "\xb7"
        );
      }
      function lt(e) {
        const t = e.item;
        return t.html
          ? r.createElement("span", {
              className: "footer__link-item",
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : r.createElement(nt, { item: t });
      }
      function ut(e) {
        const t = e.links;
        return r.createElement(
          "div",
          { className: "footer__links text--center" },
          r.createElement(
            "div",
            { className: "footer__links" },
            t.map(function (e, n) {
              return r.createElement(
                r.Fragment,
                { key: n },
                r.createElement(lt, { item: e }),
                t.length !== n + 1 && r.createElement(it, null)
              );
            })
          )
        );
      }
      function st(e) {
        const t = e.links;
        return (function (e) {
          return "title" in e[0];
        })(t)
          ? r.createElement(ot, { columns: t })
          : r.createElement(ut, { links: t });
      }
      const ct = n(941),
        dt = "footerLogoLink_BH7S";
      function ft(e) {
        let t,
          n = e.logo,
          o = (0, X.C)().withBaseUrl,
          i = { light: o(n.src), dark: o((t = n.srcDark) != null ? t : n.src) };
        return r.createElement(ct.Z, {
          className: (0, a.Z)("footer__logo", n.className),
          alt: n.alt,
          sources: i,
          width: n.width,
          height: n.height,
          style: n.style,
        });
      }
      function pt(e) {
        const t = e.logo;
        return t.href
          ? r.createElement(
              Q.Z,
              { href: t.href, className: dt, target: t.target },
              r.createElement(ft, { logo: t })
            )
          : r.createElement(ft, { logo: t });
      }
      function mt(e) {
        const t = e.copyright;
        return r.createElement("div", {
          className: "footer__copyright",
          dangerouslySetInnerHTML: { __html: t },
        });
      }
      function gt(e) {
        const t = e.style,
          n = e.links,
          o = e.logo,
          i = e.copyright;
        return r.createElement(
          "footer",
          { className: (0, a.Z)("footer", { "footer--dark": t === "dark" }) },
          r.createElement(
            "div",
            { className: "container container-fluid" },
            n,
            (o || i) &&
              r.createElement(
                "div",
                { className: "footer__bottom text--center" },
                o &&
                  r.createElement("div", { className: "margin-bottom--sm" }, o),
                i
              )
          )
        );
      }
      function ht() {
        const e = (0, g.L)().footer;
        if (!e) return null;
        const t = e.copyright,
          n = e.links,
          a = e.logo,
          o = e.style;
        return r.createElement(gt, {
          style: o,
          links: n && n.length > 0 && r.createElement(st, { links: n }),
          logo: a && r.createElement(pt, { logo: a }),
          copyright: t && r.createElement(mt, { copyright: t }),
        });
      }
      const vt = r.memo(ht),
        bt = n(12),
        yt = "docusaurus.tab.",
        wt = r.createContext(void 0);
      const kt = (0, P.Qc)([
        B.S,
        h.pl,
        function (e) {
          const t = e.children,
            n = (function () {
              const e = (0, r.useState)({}),
                t = e[0],
                n = e[1],
                a = (0, r.useCallback)(function (e, t) {
                  (0, bt.W)("docusaurus.tab." + e).set(t);
                }, []);
              (0, r.useEffect)(function () {
                try {
                  const e = {};
                  (0, bt._)().forEach(function (t) {
                    if (t.startsWith(yt)) {
                      const n = t.substring(yt.length);
                      e[n] = (0, bt.W)(t).get();
                    }
                  }),
                    n(e);
                } catch (t) {
                  console.error(t);
                }
              }, []);
              const o = (0, r.useCallback)(
                function (e, t) {
                  n(function (n) {
                    let r;
                    return Object.assign({}, n, (((r = {})[e] = t), r));
                  }),
                    a(e, t);
                },
                [a]
              );
              return (0, r.useMemo)(
                function () {
                  return { tabGroupChoices: t, setTabGroupChoices: o };
                },
                [t, o]
              );
            })();
          return r.createElement(wt.Provider, { value: n }, t);
        },
        R.OC,
        Oe.L5,
        i.VC,
        function (e) {
          const t = e.children;
          return r.createElement(
            O.n2,
            null,
            r.createElement(N.M, null, r.createElement(I, null, t))
          );
        },
      ]);
      function Et(e) {
        const t = e.children;
        return r.createElement(kt, null, t);
      }
      function St(e) {
        const t = e.error,
          n = e.tryAgain;
        return r.createElement(
          "main",
          { className: "container margin-vert--xl" },
          r.createElement(
            "div",
            { className: "row" },
            r.createElement(
              "div",
              { className: "col col--6 col--offset-3" },
              r.createElement(
                "h1",
                { className: "hero__title" },
                r.createElement(
                  s.Z,
                  {
                    id: "theme.ErrorPageContent.title",
                    description:
                      "The title of the fallback page when the page crashed",
                  },
                  "This page crashed."
                )
              ),
              r.createElement("p", null, t.message),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "button",
                  { type: "button", onClick: n },
                  r.createElement(
                    s.Z,
                    {
                      id: "theme.ErrorPageContent.tryAgain",
                      description:
                        "The label of the button to try again when the page crashed",
                    },
                    "Try again"
                  )
                )
              )
            )
          )
        );
      }
      const xt = "mainWrapper_z2l0";
      function Ct(e) {
        const t = e.children,
          n = e.noFooter,
          s = e.wrapperClassName,
          c = e.title,
          d = e.description;
        return (
          (0, u.t)(),
          r.createElement(
            Et,
            null,
            r.createElement(i.d, { title: c, description: d }),
            r.createElement(m, null),
            r.createElement(L, null),
            r.createElement(et, null),
            r.createElement(
              "div",
              { className: (0, a.Z)(l.k.wrapper.main, xt, s) },
              r.createElement(
                o.Z,
                {
                  fallback: function (e) {
                    return r.createElement(St, e);
                  },
                },
                t
              )
            ),
            !n && r.createElement(vt, null)
          )
        );
      }
    },
    1327: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      const r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(9960),
        l = n(4996),
        u = n(2263),
        s = n(6668),
        c = n(941),
        d = ["imageClassName", "titleClassName"];
      function f(e) {
        const t = e.logo,
          n = e.alt,
          r = e.imageClassName,
          a = { light: (0, l.Z)(t.src), dark: (0, l.Z)(t.srcDark || t.src) },
          i = o.createElement(c.Z, {
            className: t.className,
            sources: a,
            height: t.height,
            width: t.width,
            alt: n,
            style: t.style,
          });
        return r ? o.createElement("div", { className: r }, i) : i;
      }
      function p(e) {
        let t,
          n = (0, u.Z)().siteConfig.title,
          c = (0, s.L)().navbar,
          p = c.title,
          m = c.logo,
          g = e.imageClassName,
          h = e.titleClassName,
          v = (0, a.Z)(e, d),
          b = (0, l.Z)((m == null ? void 0 : m.href) || "/"),
          y = p ? "" : n,
          w = (t = m == null ? void 0 : m.alt) != null ? t : y;
        return o.createElement(
          i.Z,
          (0, r.Z)(
            { to: b },
            v,
            (m == null ? void 0 : m.target) && { target: m.target }
          ),
          m && o.createElement(f, { logo: m, alt: w, imageClassName: g }),
          p != null && o.createElement("b", { className: h }, p)
        );
      }
    },
    197: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      const r = n(7294),
        a = n(5742);
      function o(e) {
        const t = e.locale,
          n = e.version,
          o = e.tag,
          i = t;
        return r.createElement(
          a.Z,
          null,
          t &&
            r.createElement("meta", { name: "docusaurus_locale", content: t }),
          n &&
            r.createElement("meta", { name: "docusaurus_version", content: n }),
          o && r.createElement("meta", { name: "docusaurus_tag", content: o }),
          i &&
            r.createElement("meta", { name: "docsearch:language", content: i }),
          n &&
            r.createElement("meta", { name: "docsearch:version", content: n }),
          o &&
            r.createElement("meta", {
              name: "docsearch:docusaurus_tag",
              content: o,
            })
        );
      }
    },
    941: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      const r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(6010),
        l = n(2389),
        u = n(2949),
        s = {
          themedImage: "themedImage_ToTc",
          "themedImage--light": "themedImage--light_HNdA",
          "themedImage--dark": "themedImage--dark_i4oU",
        },
        c = ["sources", "className", "alt"];
      function d(e) {
        const t = (0, l.Z)(),
          n = (0, u.I)().colorMode,
          d = e.sources,
          f = e.className,
          p = e.alt,
          m = (0, a.Z)(e, c),
          g = t ? (n === "dark" ? ["dark"] : ["light"]) : ["light", "dark"];
        return o.createElement(
          o.Fragment,
          null,
          g.map(function (e) {
            return o.createElement(
              "img",
              (0, r.Z)(
                {
                  key: e,
                  src: d[e],
                  alt: p,
                  className: (0, i.Z)(s.themedImage, s["themedImage--" + e], f),
                },
                m
              )
            );
          })
        );
      }
    },
    6043: function (e, t, n) {
      "use strict";
      n.d(t, {
        u: function () {
          return s;
        },
        z: function () {
          return v;
        },
      });
      const r = n(7462),
        a = n(3366),
        o = n(7294),
        i = n(412),
        l = ["collapsed"],
        u = ["lazy"];
      function s(e) {
        const t = e.initialState,
          n = (0, o.useState)(t != null && t),
          r = n[0],
          a = n[1],
          i = (0, o.useCallback)(function () {
            a(function (e) {
              return !e;
            });
          }, []);
        return { collapsed: r, setCollapsed: a, toggleCollapsed: i };
      }
      const c = { display: "none", overflow: "hidden", height: "0px" },
        d = { display: "block", overflow: "visible", height: "auto" };
      function f(e, t) {
        const n = t ? c : d;
        (e.style.display = n.display),
          (e.style.overflow = n.overflow),
          (e.style.height = n.height);
      }
      function p(e) {
        const t = e.collapsibleRef,
          n = e.collapsed,
          r = e.animation,
          a = (0, o.useRef)(!1);
        (0, o.useEffect)(
          function () {
            let e,
              o = t.current;
            function i() {
              let e,
                t,
                n = o.scrollHeight,
                a =
                  (e = r == null ? void 0 : r.duration) != null
                    ? e
                    : (function (e) {
                        const t = e / 36;
                        return Math.round(
                          10 * (4 + 15 * Math.pow(t, 0.25) + t / 5)
                        );
                      })(n);
              return {
                transition:
                  "height " +
                  a +
                  "ms " +
                  ((t = r == null ? void 0 : r.easing) != null
                    ? t
                    : "ease-in-out"),
                height: n + "px",
              };
            }
            function l() {
              const e = i();
              (o.style.transition = e.transition), (o.style.height = e.height);
            }
            if (!a.current) return f(o, n), void (a.current = !0);
            return (
              (o.style.willChange = "height"),
              (e = requestAnimationFrame(function () {
                n
                  ? (l(),
                    requestAnimationFrame(function () {
                      (o.style.height = c.height),
                        (o.style.overflow = c.overflow);
                    }))
                  : ((o.style.display = "block"),
                    requestAnimationFrame(function () {
                      l();
                    }));
              })),
              function () {
                return cancelAnimationFrame(e);
              }
            );
          },
          [t, n, r]
        );
      }
      function m(e) {
        if (!i.Z.canUseDOM) return e ? c : d;
      }
      function g(e) {
        const t = e.as,
          n = void 0 === t ? "div" : t,
          r = e.collapsed,
          a = e.children,
          i = e.animation,
          l = e.onCollapseTransitionEnd,
          u = e.className,
          s = e.disableSSRStyle,
          c = (0, o.useRef)(null);
        return (
          p({ collapsibleRef: c, collapsed: r, animation: i }),
          o.createElement(
            n,
            {
              ref: c,
              style: s ? void 0 : m(r),
              onTransitionEnd: function (e) {
                e.propertyName === "height" &&
                  (f(c.current, r), l == null || l(r));
              },
              className: u,
            },
            a
          )
        );
      }
      function h(e) {
        const t = e.collapsed,
          n = (0, a.Z)(e, l),
          i = (0, o.useState)(!t),
          u = i[0],
          s = i[1],
          c = (0, o.useState)(t),
          d = c[0],
          f = c[1];
        return (
          (0, o.useLayoutEffect)(
            function () {
              t || s(!0);
            },
            [t]
          ),
          (0, o.useLayoutEffect)(
            function () {
              u && f(t);
            },
            [u, t]
          ),
          u ? o.createElement(g, (0, r.Z)({}, n, { collapsed: d })) : null
        );
      }
      function v(e) {
        const t = e.lazy,
          n = (0, a.Z)(e, u),
          r = t ? h : g;
        return o.createElement(r, n);
      }
    },
    9689: function (e, t, n) {
      "use strict";
      n.d(t, {
        nT: function () {
          return m;
        },
        pl: function () {
          return p;
        },
      });
      const r = n(7294),
        a = n(2389),
        o = n(12),
        i = n(9688),
        l = n(6668),
        u = (0, o.W)("docusaurus.announcement.dismiss"),
        s = (0, o.W)("docusaurus.announcement.id"),
        c = function () {
          return u.get() === "true";
        },
        d = function (e) {
          return u.set(String(e));
        },
        f = r.createContext(null);
      function p(e) {
        const t = e.children,
          n = (function () {
            const e = (0, l.L)().announcementBar,
              t = (0, a.Z)(),
              n = (0, r.useState)(function () {
                return !!t && c();
              }),
              o = n[0],
              i = n[1];
            (0, r.useEffect)(function () {
              i(c());
            }, []);
            const u = (0, r.useCallback)(function () {
              d(!0), i(!0);
            }, []);
            return (
              (0, r.useEffect)(
                function () {
                  if (e) {
                    let t = e.id,
                      n = s.get();
                    n === "annoucement-bar" && (n = "announcement-bar");
                    const r = t !== n;
                    s.set(t), r && d(!1), (!r && c()) || i(!1);
                  }
                },
                [e]
              ),
              (0, r.useMemo)(
                function () {
                  return { isActive: !!e && !o, close: u };
                },
                [e, o, u]
              )
            );
          })();
        return r.createElement(f.Provider, { value: n }, t);
      }
      function m() {
        const e = (0, r.useContext)(f);
        if (!e) throw new i.i6("AnnouncementBarProvider");
        return e;
      }
    },
    2949: function (e, t, n) {
      "use strict";
      n.d(t, {
        I: function () {
          return h;
        },
        S: function () {
          return g;
        },
      });
      const r = n(7294),
        a = n(412),
        o = n(9688),
        i = n(12),
        l = n(6668),
        u = r.createContext(void 0),
        s = "theme",
        c = (0, i.W)(s),
        d = "light",
        f = "dark",
        p = function (e) {
          return e === f ? f : d;
        };
      function m() {
        const e = (0, l.L)().colorMode,
          t = e.defaultMode,
          n = e.disableSwitch,
          o = e.respectPrefersColorScheme,
          i = (0, r.useState)(
            (function (e) {
              return a.Z.canUseDOM
                ? p(document.documentElement.getAttribute("data-theme"))
                : p(e);
            })(t)
          ),
          u = i[0],
          m = i[1];
        (0, r.useEffect)(
          function () {
            n && c.del();
          },
          [n]
        );
        const g = (0, r.useCallback)(
          function (e, n) {
            void 0 === n && (n = {});
            const r = n.persist,
              a = void 0 === r || r;
            e
              ? (m(e),
                a &&
                  (function (e) {
                    c.set(p(e));
                  })(e))
              : (m(
                  o
                    ? window.matchMedia("(prefers-color-scheme: dark)").matches
                      ? f
                      : d
                    : t
                ),
                c.del());
          },
          [o, t]
        );
        (0, r.useEffect)(
          function () {
            document.documentElement.setAttribute("data-theme", p(u));
          },
          [u]
        ),
          (0, r.useEffect)(
            function () {
              if (!n) {
                const e = function (e) {
                  if (e.key === s) {
                    const t = c.get();
                    t !== null && g(p(t));
                  }
                };
                return (
                  window.addEventListener("storage", e),
                  function () {
                    return window.removeEventListener("storage", e);
                  }
                );
              }
            },
            [n, g]
          );
        const h = (0, r.useRef)(!1);
        return (
          (0, r.useEffect)(
            function () {
              if (!n || o) {
                const e = window.matchMedia("(prefers-color-scheme: dark)"),
                  t = function () {
                    window.matchMedia("print").matches || h.current
                      ? (h.current = window.matchMedia("print").matches)
                      : g(null);
                  };
                return (
                  e.addListener(t),
                  function () {
                    return e.removeListener(t);
                  }
                );
              }
            },
            [g, n, o]
          ),
          (0, r.useMemo)(
            function () {
              return {
                colorMode: u,
                setColorMode: g,
                get isDarkTheme() {
                  return u === f;
                },
                setLightTheme: function () {
                  g(d);
                },
                setDarkTheme: function () {
                  g(f);
                },
              };
            },
            [u, g]
          )
        );
      }
      function g(e) {
        const t = e.children,
          n = m();
        return r.createElement(u.Provider, { value: n }, t);
      }
      function h() {
        const e = (0, r.useContext)(u);
        if (e == null)
          throw new o.i6(
            "ColorModeProvider",
            "Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode."
          );
        return e;
      }
    },
    373: function (e, t, n) {
      "use strict";
      n.d(t, {
        J: function () {
          return y;
        },
        L5: function () {
          return v;
        },
      });
      const r = n(7294),
        a = n(143),
        o = n(9935),
        i = n(6668),
        l = n(8425),
        u = n(9688),
        s = n(12),
        c = function (e) {
          return "docs-preferred-version-" + e;
        },
        d = function (e, t, n) {
          (0, s.W)(c(e), { persistence: t }).set(n);
        },
        f = function (e, t) {
          return (0, s.W)(c(e), { persistence: t }).get();
        },
        p = function (e, t) {
          (0, s.W)(c(e), { persistence: t }).del();
        };
      const m = r.createContext(null);
      function g() {
        const e = (0, a._r)(),
          t = (0, i.L)().docs.versionPersistence,
          n = (0, r.useMemo)(
            function () {
              return Object.keys(e);
            },
            [e]
          ),
          o = (0, r.useState)(function () {
            return (function (e) {
              return Object.fromEntries(
                e.map(function (e) {
                  return [e, { preferredVersionName: null }];
                })
              );
            })(n);
          }),
          l = o[0],
          u = o[1];
        return (
          (0, r.useEffect)(
            function () {
              u(
                (function (e) {
                  const t = e.pluginIds,
                    n = e.versionPersistence,
                    r = e.allDocsData;
                  return Object.fromEntries(
                    t.map(function (e) {
                      return [
                        e,
                        ((t = e),
                        (a = f(t, n)),
                        r[t].versions.some(function (e) {
                          return e.name === a;
                        })
                          ? { preferredVersionName: a }
                          : (p(t, n), { preferredVersionName: null })),
                      ];
                      let t, a;
                    })
                  );
                })({ allDocsData: e, versionPersistence: t, pluginIds: n })
              );
            },
            [e, t, n]
          ),
          [
            l,
            (0, r.useMemo)(
              function () {
                return {
                  savePreferredVersion: function (e, n) {
                    d(e, t, n),
                      u(function (t) {
                        let r;
                        return Object.assign(
                          {},
                          t,
                          (((r = {})[e] = { preferredVersionName: n }), r)
                        );
                      });
                  },
                };
              },
              [t]
            ),
          ]
        );
      }
      function h(e) {
        const t = e.children,
          n = g();
        return r.createElement(m.Provider, { value: n }, t);
      }
      function v(e) {
        const t = e.children;
        return l.cE
          ? r.createElement(h, null, t)
          : r.createElement(r.Fragment, null, t);
      }
      function b() {
        const e = (0, r.useContext)(m);
        if (!e) throw new u.i6("DocsPreferredVersionContextProvider");
        return e;
      }
      function y(e) {
        let t;
        void 0 === e && (e = o.m);
        const n = (0, a.zh)(e),
          i = b(),
          l = i[0],
          u = i[1],
          s = l[e].preferredVersionName;
        return {
          preferredVersion:
            (t = n.versions.find(function (e) {
              return e.name === s;
            })) != null
              ? t
              : null,
          savePreferredVersionName: (0, r.useCallback)(
            function (t) {
              u.savePreferredVersion(e, t);
            },
            [u, e]
          ),
        };
      }
    },
    1116: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return u;
        },
        b: function () {
          return l;
        },
      });
      const r = n(7294),
        a = n(9688),
        o = Symbol("EmptyContext"),
        i = r.createContext(o);
      function l(e) {
        const t = e.children,
          n = e.name,
          a = e.items,
          o = (0, r.useMemo)(
            function () {
              return n && a ? { name: n, items: a } : null;
            },
            [n, a]
          );
        return r.createElement(i.Provider, { value: o }, t);
      }
      function u() {
        const e = (0, r.useContext)(i);
        if (e === o) throw new a.i6("DocsSidebarProvider");
        return e;
      }
    },
    2961: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return f;
        },
        e: function () {
          return p;
        },
      });
      const r = n(7294),
        a = n(3102),
        o = n(7524),
        i = n(6550),
        l = n(9688);
      function u(e) {
        !(function (e) {
          const t = (0, i.k6)(),
            n = (0, l.zX)(e);
          (0, r.useEffect)(
            function () {
              return t.block(function (e, t) {
                return n(e, t);
              });
            },
            [t, n]
          );
        })(function (t, n) {
          if (n === "POP") return e(t, n);
        });
      }
      const s = n(6668),
        c = r.createContext(void 0);
      function d() {
        let e,
          t =
            ((e = (0, a.HY)()),
            (0, s.L)().navbar.items.length === 0 && !e.component),
          n = (0, o.i)(),
          i = !t && n === "mobile",
          l = (0, r.useState)(!1),
          c = l[0],
          d = l[1];
        u(function () {
          if (c) return d(!1), !1;
        });
        const f = (0, r.useCallback)(function () {
          d(function (e) {
            return !e;
          });
        }, []);
        return (
          (0, r.useEffect)(
            function () {
              n === "desktop" && d(!1);
            },
            [n]
          ),
          (0, r.useMemo)(
            function () {
              return { disabled: t, shouldRender: i, toggle: f, shown: c };
            },
            [t, i, f, c]
          )
        );
      }
      function f(e) {
        const t = e.children,
          n = d();
        return r.createElement(c.Provider, { value: n }, t);
      }
      function p() {
        const e = r.useContext(c);
        if (void 0 === e) throw new l.i6("NavbarMobileSidebarProvider");
        return e;
      }
    },
    3102: function (e, t, n) {
      "use strict";
      n.d(t, {
        HY: function () {
          return l;
        },
        Zo: function () {
          return u;
        },
        n2: function () {
          return i;
        },
      });
      const r = n(7294),
        a = n(9688),
        o = r.createContext(null);
      function i(e) {
        const t = e.children,
          n = (0, r.useState)({ component: null, props: null });
        return r.createElement(o.Provider, { value: n }, t);
      }
      function l() {
        const e = (0, r.useContext)(o);
        if (!e) throw new a.i6("NavbarSecondaryMenuContentProvider");
        return e[0];
      }
      function u(e) {
        const t = e.component,
          n = e.props,
          i = (0, r.useContext)(o);
        if (!i) throw new a.i6("NavbarSecondaryMenuContentProvider");
        const l = i[1],
          u = (0, a.Ql)(n);
        return (
          (0, r.useEffect)(
            function () {
              l({ component: t, props: u });
            },
            [l, t, u]
          ),
          (0, r.useEffect)(
            function () {
              return function () {
                return l({ component: null, props: null });
              };
            },
            [l]
          ),
          null
        );
      }
    },
    9727: function (e, t, n) {
      "use strict";
      n.d(t, {
        h: function () {
          return a;
        },
        t: function () {
          return o;
        },
      });
      var r = n(7294),
        a = "navigation-with-keyboard";
      function o() {
        (0, r.useEffect)(function () {
          function e(e) {
            e.type === "keydown" &&
              e.key === "Tab" &&
              document.body.classList.add(a),
              e.type === "mousedown" && document.body.classList.remove(a);
          }
          return (
            document.addEventListener("keydown", e),
            document.addEventListener("mousedown", e),
            function () {
              document.body.classList.remove(a),
                document.removeEventListener("keydown", e),
                document.removeEventListener("mousedown", e);
            }
          );
        }, []);
      }
    },
    7524: function (e, t, n) {
      "use strict";
      n.d(t, {
        i: function () {
          return s;
        },
      });
      const r = n(7294),
        a = n(412),
        o = "desktop",
        i = "mobile",
        l = "ssr";
      function u() {
        return a.Z.canUseDOM ? (window.innerWidth > 996 ? o : i) : l;
      }
      function s() {
        const e = (0, r.useState)(function () {
            return u();
          }),
          t = e[0],
          n = e[1];
        return (
          (0, r.useEffect)(function () {
            function e() {
              n(u());
            }
            return (
              window.addEventListener("resize", e),
              function () {
                window.removeEventListener("resize", e),
                  clearTimeout(undefined);
              }
            );
          }, []),
          t
        );
      }
    },
    5281: function (e, t, n) {
      "use strict";
      n.d(t, {
        k: function () {
          return r;
        },
      });
      var r = {
        page: {
          blogListPage: "blog-list-page",
          blogPostPage: "blog-post-page",
          blogTagsListPage: "blog-tags-list-page",
          blogTagPostListPage: "blog-tags-post-list-page",
          docsDocPage: "docs-doc-page",
          docsTagsListPage: "docs-tags-list-page",
          docsTagDocListPage: "docs-tags-doc-list-page",
          mdxPage: "mdx-page",
        },
        wrapper: {
          main: "main-wrapper",
          blogPages: "blog-wrapper",
          docsPages: "docs-wrapper",
          mdxPages: "mdx-wrapper",
        },
        common: {
          editThisPage: "theme-edit-this-page",
          lastUpdated: "theme-last-updated",
          backToTopButton: "theme-back-to-top-button",
          codeBlock: "theme-code-block",
          admonition: "theme-admonition",
          admonitionType: function (e) {
            return "theme-admonition-" + e;
          },
        },
        layout: {},
        docs: {
          docVersionBanner: "theme-doc-version-banner",
          docVersionBadge: "theme-doc-version-badge",
          docBreadcrumbs: "theme-doc-breadcrumbs",
          docMarkdown: "theme-doc-markdown",
          docTocMobile: "theme-doc-toc-mobile",
          docTocDesktop: "theme-doc-toc-desktop",
          docFooter: "theme-doc-footer",
          docFooterTagsRow: "theme-doc-footer-tags-row",
          docFooterEditMetaRow: "theme-doc-footer-edit-meta-row",
          docSidebarContainer: "theme-doc-sidebar-container",
          docSidebarMenu: "theme-doc-sidebar-menu",
          docSidebarItemCategory: "theme-doc-sidebar-item-category",
          docSidebarItemLink: "theme-doc-sidebar-item-link",
          docSidebarItemCategoryLevel: function (e) {
            return "theme-doc-sidebar-item-category-level-" + e;
          },
          docSidebarItemLinkLevel: function (e) {
            return "theme-doc-sidebar-item-link-level-" + e;
          },
        },
        blog: {},
      };
    },
    8425: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      function a(e, t) {
        let n =
          (typeof Symbol !== "undefined" && e[Symbol.iterator]) ||
          e["@@iterator"];
        if (n) return (n = n.call(e)).next.bind(n);
        if (
          Array.isArray(e) ||
          (n = (function (e, t) {
            if (e) {
              if (typeof e === "string") return r(e, t);
              let n = Object.prototype.toString.call(e).slice(8, -1);
              return (
                n === "Object" && e.constructor && (n = e.constructor.name),
                n === "Map" || n === "Set"
                  ? Array.from(e)
                  : n === "Arguments" ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? r(e, t)
                  : void 0
              );
            }
          })(e)) ||
          (t && e && typeof e.length === "number")
        ) {
          n && (e = n);
          let a = 0;
          return function () {
            return a >= e.length ? { done: !0 } : { done: !1, value: e[a++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      n.d(t, {
        Wl: function () {
          return m;
        },
        _F: function () {
          return h;
        },
        cE: function () {
          return p;
        },
        hI: function () {
          return E;
        },
        lO: function () {
          return y;
        },
        vY: function () {
          return k;
        },
        oz: function () {
          return w;
        },
        s1: function () {
          return b;
        },
      });
      const o = n(7294),
        i = n(6550),
        l = n(6063),
        u = n(143),
        s = n(373),
        c = n(1116);
      function d(e) {
        return Array.from(new Set(e));
      }
      var f = n(8596),
        p = !!u._r;
      function m(e) {
        if (e.href) return e.href;
        for (var t, n = a(e.items); !(t = n()).done; ) {
          const r = t.value;
          if (r.type === "link") return r.href;
          if (r.type === "category") {
            const o = m(r);
            if (o) return o;
          }
        }
      }
      const g = function (e, t) {
        return void 0 !== e && (0, f.Mg)(e, t);
      };
      function h(e, t) {
        return e.type === "link"
          ? g(e.href, t)
          : e.type === "category" &&
              (g(e.href, t) ||
                (function (e, t) {
                  return e.some(function (e) {
                    return h(e, t);
                  });
                })(e.items, t));
      }
      function v(e) {
        const t = e.sidebarItems,
          n = e.pathname,
          r = e.onlyCategories,
          o = void 0 !== r && r,
          i = [];
        return (
          (function e(t) {
            for (var r, l = a(t); !(r = l()).done; ) {
              const u = r.value;
              if (
                (u.type === "category" &&
                  ((0, f.Mg)(u.href, n) || e(u.items))) ||
                (u.type === "link" && (0, f.Mg)(u.href, n))
              )
                return (o && u.type !== "category") || i.unshift(u), !0;
            }
            return !1;
          })(t),
          i
        );
      }
      function b() {
        let e,
          t = (0, c.V)(),
          n = (0, i.TH)().pathname;
        return !1 !==
          ((e = (0, u.gA)()) == null ? void 0 : e.pluginData.breadcrumbs) && t
          ? v({ sidebarItems: t.items, pathname: n })
          : null;
      }
      function y(e) {
        const t = (0, u.Iw)(e).activeVersion,
          n = (0, s.J)(e).preferredVersion,
          r = (0, u.yW)(e);
        return (0, o.useMemo)(
          function () {
            return d([t, n, r].filter(Boolean));
          },
          [t, n, r]
        );
      }
      function w(e, t) {
        const n = y(t);
        return (0, o.useMemo)(
          function () {
            const t = n.flatMap(function (e) {
                return e.sidebars ? Object.entries(e.sidebars) : [];
              }),
              r = t.find(function (t) {
                return t[0] === e;
              });
            if (!r)
              throw new Error(
                "Can't find any sidebar with id \"" +
                  e +
                  '" in version' +
                  (n.length > 1 ? "s" : "") +
                  " " +
                  n
                    .map(function (e) {
                      return e.name;
                    })
                    .join(", ") +
                  '".\n  Available sidebar ids are:\n  - ' +
                  Object.keys(t).join("\n- ")
              );
            return r[1];
          },
          [e, n]
        );
      }
      function k(e, t) {
        const n = y(t);
        return (0, o.useMemo)(
          function () {
            const t = n.flatMap(function (e) {
                return e.docs;
              }),
              r = t.find(function (t) {
                return t.id === e;
              });
            if (!r) {
              if (
                n
                  .flatMap(function (e) {
                    return e.draftIds;
                  })
                  .includes(e)
              )
                return null;
              throw new Error(
                "DocNavbarItem: couldn't find any doc with id \"" +
                  e +
                  '" in version' +
                  (n.length > 1 ? "s" : "") +
                  " " +
                  n
                    .map(function (e) {
                      return e.name;
                    })
                    .join(", ") +
                  '".\nAvailable doc ids are:\n- ' +
                  d(
                    t.map(function (e) {
                      return e.id;
                    })
                  ).join("\n- ")
              );
            }
            return r;
          },
          [e, n]
        );
      }
      function E(e) {
        const t = e.route,
          n = e.versionMetadata,
          r = (0, i.TH)(),
          a = t.routes,
          o = a.find(function (e) {
            return (0, i.LX)(r.pathname, e);
          });
        if (!o) return null;
        const u = o.sidebar,
          s = u ? n.docsSidebars[u] : void 0;
        return { docElement: (0, l.H)(a), sidebarName: u, sidebarItems: s };
      }
    },
    1944: function (e, t, n) {
      "use strict";
      n.d(t, {
        FG: function () {
          return f;
        },
        d: function () {
          return c;
        },
        VC: function () {
          return p;
        },
      });
      const r = n(7294),
        a = n(6010),
        o = n(5742),
        i = n(226);
      function l() {
        const e = r.useContext(i._);
        if (!e)
          throw new Error("Unexpected: no Docusaurus route context found");
        return e;
      }
      const u = n(4996),
        s = n(2263);
      function c(e) {
        const t = e.title,
          n = e.description,
          a = e.keywords,
          i = e.image,
          l = e.children,
          c = (function (e) {
            const t = (0, s.Z)().siteConfig,
              n = t.title,
              r = t.titleDelimiter;
            return e != null && e.trim().length
              ? e.trim() + " " + r + " " + n
              : n;
          })(t),
          d = (0, u.C)().withBaseUrl,
          f = i ? d(i, { absolute: !0 }) : void 0;
        return r.createElement(
          o.Z,
          null,
          t && r.createElement("title", null, c),
          t && r.createElement("meta", { property: "og:title", content: c }),
          n && r.createElement("meta", { name: "description", content: n }),
          n &&
            r.createElement("meta", { property: "og:description", content: n }),
          a &&
            r.createElement("meta", {
              name: "keywords",
              content: Array.isArray(a) ? a.join(",") : a,
            }),
          f && r.createElement("meta", { property: "og:image", content: f }),
          f && r.createElement("meta", { name: "twitter:image", content: f }),
          l
        );
      }
      const d = r.createContext(void 0);
      function f(e) {
        const t = e.className,
          n = e.children,
          i = r.useContext(d),
          l = (0, a.Z)(i, t);
        return r.createElement(
          d.Provider,
          { value: l },
          r.createElement(o.Z, null, r.createElement("html", { className: l })),
          n
        );
      }
      function p(e) {
        const t = e.children,
          n = l(),
          o =
            "plugin-" +
            n.plugin.name.replace(
              /docusaurus-(?:plugin|theme)-(?:content-)?/gi,
              ""
            ),
          i = "plugin-id-" + n.plugin.id;
        return r.createElement(f, { className: (0, a.Z)(o, i) }, t);
      }
    },
    9688: function (e, t, n) {
      "use strict";
      n.d(t, {
        i6: function () {
          return m;
        },
        Qc: function () {
          return h;
        },
        zX: function () {
          return f;
        },
        D9: function () {
          return p;
        },
        Ql: function () {
          return g;
        },
      });
      const r = n(6528),
        a = n(4578);
      function o(e) {
        return (
          (o = Object.setPrototypeOf
            ? Object.getPrototypeOf.bind()
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          o(e)
        );
      }
      const i = n(9611);
      function l() {
        if (typeof Reflect === "undefined" || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if (typeof Proxy === "function") return !0;
        try {
          return (
            Boolean.prototype.valueOf.call(
              Reflect.construct(Boolean, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      function u(e, t, n) {
        return (
          (u = l()
            ? Reflect.construct.bind()
            : function (e, t, n) {
                const r = [null];
                r.push.apply(r, t);
                const a = new (Function.bind.apply(e, r))();
                return n && (0, i.Z)(a, n.prototype), a;
              }),
          u.apply(null, arguments)
        );
      }
      function s(e) {
        const t = typeof Map === "function" ? new Map() : void 0;
        return (
          (s = function (e) {
            if (
              e === null ||
              ((n = e),
              Function.toString.call(n).indexOf("[native code]") === -1)
            )
              return e;
            let n;
            if (typeof e !== "function")
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return u(e, arguments, o(this).constructor);
            }
            return (
              (r.prototype = Object.create(e.prototype, {
                constructor: {
                  value: r,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              })),
              (0, i.Z)(r, e)
            );
          }),
          s(e)
        );
      }
      const c = n(7294),
        d = n(412).Z.canUseDOM ? c.useLayoutEffect : c.useEffect;
      function f(e) {
        const t = (0, c.useRef)(e);
        return (
          d(
            function () {
              t.current = e;
            },
            [e]
          ),
          (0, c.useCallback)(function () {
            return t.current.apply(t, arguments);
          }, [])
        );
      }
      function p(e) {
        const t = (0, c.useRef)();
        return (
          d(function () {
            t.current = e;
          }),
          t.current
        );
      }
      var m = (function (e) {
        function t(t, n) {
          let a, o, i, l, u;
          return (
            ((u = e.call(this) || this).name = "ReactContextError"),
            (u.message =
              "Hook " +
              ((a =
                (o = u.stack) == null ||
                (i = o.split("\n")[1]) == null ||
                (l = i.match((0, r.Z)(/at (?:\w+\.)?(\w+)/, { name: 1 }))) ==
                  null
                  ? void 0
                  : l.groups.name) != null
                ? a
                : "") +
              " is called outside the <" +
              t +
              ">. " +
              (n != null ? n : "")),
            u
          );
        }
        return (0, a.Z)(t, e), t;
      })(s(Error));
      function g(e) {
        const t = Object.entries(e);
        return (
          t.sort(function (e, t) {
            return e[0].localeCompare(t[0]);
          }),
          (0, c.useMemo)(function () {
            return e;
          }, t.flat())
        );
      }
      function h(e) {
        return function (t) {
          const n = t.children;
          return c.createElement(
            c.Fragment,
            null,
            e.reduceRight(function (e, t) {
              return c.createElement(t, null, e);
            }, n)
          );
        };
      }
    },
    8596: function (e, t, n) {
      "use strict";
      n.d(t, {
        Mg: function () {
          return i;
        },
        Ns: function () {
          return l;
        },
      });
      const r = n(7294),
        a = n(723),
        o = n(2263);
      function i(e, t) {
        const n = function (e) {
          let t;
          return (t = !e || e.endsWith("/") ? e : e + "/") == null
            ? void 0
            : t.toLowerCase();
        };
        return n(e) === n(t);
      }
      function l() {
        const e = (0, o.Z)().siteConfig.baseUrl;
        return (0, r.useMemo)(
          function () {
            return (function (e) {
              const t = e.baseUrl;
              function n(e) {
                return e.path === t && !0 === e.exact;
              }
              function r(e) {
                return e.path === t && !e.exact;
              }
              return (function e(t) {
                if (t.length !== 0)
                  return (
                    t.find(n) ||
                    e(
                      t.filter(r).flatMap(function (e) {
                        let t;
                        return (t = e.routes) != null ? t : [];
                      })
                    )
                  );
              })(e.routes);
            })({ routes: a.Z, baseUrl: e });
          },
          [e]
        );
      }
    },
    2466: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ct: function () {
          return f;
        },
        OC: function () {
          return u;
        },
        RF: function () {
          return d;
        },
      });
      const r = n(7294),
        a = n(412),
        o = n(2389),
        i = n(9688);
      const l = r.createContext(void 0);
      function u(e) {
        let t,
          n = e.children,
          a =
            ((t = (0, r.useRef)(!0)),
            (0, r.useMemo)(function () {
              return {
                scrollEventsEnabledRef: t,
                enableScrollEvents: function () {
                  t.current = !0;
                },
                disableScrollEvents: function () {
                  t.current = !1;
                },
              };
            }, []));
        return r.createElement(l.Provider, { value: a }, n);
      }
      function s() {
        const e = (0, r.useContext)(l);
        if (e == null) throw new i.i6("ScrollControllerProvider");
        return e;
      }
      const c = function () {
        return a.Z.canUseDOM
          ? { scrollX: window.pageXOffset, scrollY: window.pageYOffset }
          : null;
      };
      function d(e, t) {
        void 0 === t && (t = []);
        const n = s().scrollEventsEnabledRef,
          a = (0, r.useRef)(c()),
          o = (0, i.zX)(e);
        (0, r.useEffect)(function () {
          const e = function () {
              if (n.current) {
                const e = c();
                o(e, a.current), (a.current = e);
              }
            },
            t = { passive: !0 };
          return (
            e(),
            window.addEventListener("scroll", e, t),
            function () {
              return window.removeEventListener("scroll", e, t);
            }
          );
        }, [o, n].concat(t));
      }
      function f() {
        const e = (0, r.useRef)(null),
          t =
            (0, o.Z)() &&
            getComputedStyle(document.documentElement).scrollBehavior ===
              "smooth";
        return {
          startScroll: function (n) {
            e.current = t
              ? (function (e) {
                  return (
                    window.scrollTo({ top: e, behavior: "smooth" }),
                    function () {}
                  );
                })(n)
              : (function (e) {
                  let t = null,
                    n = document.documentElement.scrollTop > e;
                  return (
                    (function r() {
                      const a = document.documentElement.scrollTop;
                      ((n && a > e) || (!n && a < e)) &&
                        ((t = requestAnimationFrame(r)),
                        window.scrollTo(0, Math.floor(0.85 * (a - e)) + e));
                    })(),
                    function () {
                      return t && cancelAnimationFrame(t);
                    }
                  );
                })(n);
          },
          cancelScroll: function () {
            return e.current == null ? void 0 : e.current();
          },
        };
      }
    },
    3320: function (e, t, n) {
      "use strict";
      n.d(t, {
        HX: function () {
          return r;
        },
        os: function () {
          return a;
        },
      });
      n(2263);
      var r = "default";
      function a(e, t) {
        return "docs-" + e + "-" + t;
      }
    },
    12: function (e, t, n) {
      "use strict";
      n.d(t, {
        W: function () {
          return l;
        },
        _: function () {
          return u;
        },
      });
      const r = "localStorage";
      function a(e) {
        if ((void 0 === e && (e = r), typeof window === "undefined"))
          throw new Error(
            "Browser storage is not available on Node.js/Docusaurus SSR process."
          );
        if (e === "none") return null;
        try {
          return window[e];
        } catch (n) {
          return (
            (t = n),
            o ||
              (console.warn(
                "Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",
                t
              ),
              (o = !0)),
            null
          );
        }
        let t;
      }
      var o = !1;
      const i = {
        get: function () {
          return null;
        },
        set: function () {},
        del: function () {},
      };
      function l(e, t) {
        if (typeof window === "undefined")
          return (function (e) {
            function t() {
              throw new Error(
                'Illegal storage API usage for storage key "' +
                  e +
                  '".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.'
              );
            }
            return { get: t, set: t, del: t };
          })(e);
        const n = a(t == null ? void 0 : t.persistence);
        return n === null
          ? i
          : {
              get: function () {
                try {
                  return n.getItem(e);
                } catch (t) {
                  return (
                    console.error(
                      "Docusaurus storage error, can't get key=" + e,
                      t
                    ),
                    null
                  );
                }
              },
              set: function (t) {
                try {
                  n.setItem(e, t);
                } catch (r) {
                  console.error(
                    "Docusaurus storage error, can't set " + e + "=" + t,
                    r
                  );
                }
              },
              del: function () {
                try {
                  n.removeItem(e);
                } catch (t) {
                  console.error(
                    "Docusaurus storage error, can't delete key=" + e,
                    t
                  );
                }
              },
            };
      }
      function u(e) {
        void 0 === e && (e = r);
        const t = a(e);
        if (!t) return [];
        for (var n = [], o = 0; o < t.length; o += 1) {
          const i = t.key(o);
          i !== null && n.push(i);
        }
        return n;
      }
    },
    4711: function (e, t, n) {
      "use strict";
      n.d(t, {
        l: function () {
          return o;
        },
      });
      const r = n(2263),
        a = n(6550);
      function o() {
        const e = (0, r.Z)(),
          t = e.siteConfig,
          n = t.baseUrl,
          o = t.url,
          i = e.i18n,
          l = i.defaultLocale,
          u = i.currentLocale,
          s = (0, a.TH)().pathname,
          c = u === l ? n : n.replace("/" + u + "/", "/"),
          d = s.replace(n, "");
        return {
          createUrl: function (e) {
            const t = e.locale;
            return (
              "" +
              (e.fullyQualified ? o : "") +
              (function (e) {
                return e === l ? "" + c : "" + c + e + "/";
              })(t) +
              d
            );
          },
        };
      }
    },
    5936: function (e, t, n) {
      "use strict";
      n.d(t, {
        S: function () {
          return i;
        },
      });
      const r = n(7294),
        a = n(6550),
        o = n(9688);
      function i(e) {
        const t = (0, a.TH)(),
          n = (0, o.D9)(t),
          i = (0, o.zX)(e);
        (0, r.useEffect)(
          function () {
            n && t !== n && i({ location: t, previousLocation: n });
          },
          [i, t, n]
        );
      }
    },
    6668: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
      });
      const r = n(2263);
      function a() {
        return (0, r.Z)().siteConfig.themeConfig;
      }
    },
    8802: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          const n = t.trailingSlash,
            r = t.baseUrl;
          if (e.startsWith("#")) return e;
          if (void 0 === n) return e;
          let a,
            o = e.split(/[#?]/)[0],
            i =
              o === "/" || o === r
                ? o
                : ((a = o),
                  n
                    ? (function (e) {
                        return e.endsWith("/") ? e : e + "/";
                      })(a)
                    : (function (e) {
                        return e.endsWith("/") ? e.slice(0, -1) : e;
                      })(a));
          return e.replace(o, i);
        });
    },
    8780: function (e, t, n) {
      "use strict";
      const r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.applyTrailingSlash = t.blogPostContainerID = void 0),
        (t.blogPostContainerID = "post-content");
      const a = n(8802);
      Object.defineProperty(t, "applyTrailingSlash", {
        enumerable: !0,
        get: function () {
          return r(a).default;
        },
      });
    },
    6010: function (e, t, n) {
      "use strict";
      function r(e) {
        let t,
          n,
          a = "";
        if (typeof e === "string" || typeof e === "number") a += e;
        else if (typeof e === "object")
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = r(e[t])) && (a && (a += " "), (a += n));
          else for (t in e) e[t] && (a && (a += " "), (a += t));
        return a;
      }
      t.Z = function () {
        for (var e, t, n = 0, a = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = r(e)) && (a && (a += " "), (a += t));
        return a;
      };
    },
    8461: function (e, t, n) {
      "use strict";
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      function a(e) {
        return e.charAt(0) === "/";
      }
      function o(e, t) {
        for (let n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      n.d(t, {
        lX: function () {
          return w;
        },
        q_: function () {
          return T;
        },
        ob: function () {
          return p;
        },
        PP: function () {
          return A;
        },
        Ep: function () {
          return f;
        },
      });
      const i = function (e, t) {
          void 0 === t && (t = "");
          let n,
            r = (e && e.split("/")) || [],
            i = (t && t.split("/")) || [],
            l = e && a(e),
            u = t && a(t),
            s = l || u;
          if (
            (e && a(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))),
            !i.length)
          )
            return "/";
          if (i.length) {
            const c = i[i.length - 1];
            n = c === "." || c === ".." || c === "";
          } else n = !1;
          for (var d = 0, f = i.length; f >= 0; f--) {
            const p = i[f];
            p === "."
              ? o(i, f)
              : p === ".."
              ? (o(i, f), d++)
              : d && (o(i, f), d--);
          }
          if (!s) for (; d--; d) i.unshift("..");
          !s || i[0] === "" || (i[0] && a(i[0])) || i.unshift("");
          let m = i.join("/");
          return n && m.substr(-1) !== "/" && (m += "/"), m;
        },
        l = n(2177);
      function u(e) {
        return e.charAt(0) === "/" ? e : "/" + e;
      }
      function s(e) {
        return e.charAt(0) === "/" ? e.substr(1) : e;
      }
      function c(e, t) {
        return (function (e, t) {
          return (
            e.toLowerCase().indexOf(t.toLowerCase()) === 0 &&
            "/?#".indexOf(e.charAt(t.length)) !== -1
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function d(e) {
        return e.charAt(e.length - 1) === "/" ? e.slice(0, -1) : e;
      }
      function f(e) {
        let t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || "/";
        return (
          n && n !== "?" && (a += n.charAt(0) === "?" ? n : "?" + n),
          r && r !== "#" && (a += r.charAt(0) === "#" ? r : "#" + r),
          a
        );
      }
      function p(e, t, n, a) {
        let o;
        typeof e === "string"
          ? ((o = (function (e) {
              let t = e || "/",
                n = "",
                r = "",
                a = t.indexOf("#");
              a !== -1 && ((r = t.substr(a)), (t = t.substr(0, a)));
              const o = t.indexOf("?");
              return (
                o !== -1 && ((n = t.substr(o)), (t = t.substr(0, o))),
                {
                  pathname: t,
                  search: n === "?" ? "" : n,
                  hash: r === "#" ? "" : r,
                }
              );
            })(e)),
            (o.state = t))
          : (void 0 === (o = r({}, e)).pathname && (o.pathname = ""),
            o.search
              ? o.search.charAt(0) !== "?" && (o.search = "?" + o.search)
              : (o.search = ""),
            o.hash
              ? o.hash.charAt(0) !== "#" && (o.hash = "#" + o.hash)
              : (o.hash = ""),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (o.key = n),
          a
            ? o.pathname
              ? o.pathname.charAt(0) !== "/" &&
                (o.pathname = i(o.pathname, a.pathname))
              : (o.pathname = a.pathname)
            : o.pathname || (o.pathname = "/"),
          o
        );
      }
      function m() {
        let e = null;
        let t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (e != null) {
              const o = typeof e === "function" ? e(t, n) : e;
              typeof o === "string"
                ? typeof r === "function"
                  ? r(o, a)
                  : a(!0)
                : a(!1 !== o);
            } else a(!0);
          },
          appendListener: function (e) {
            let n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      const g = !(
        typeof window === "undefined" ||
        !window.document ||
        !window.document.createElement
      );
      function h(e, t) {
        t(window.confirm(e));
      }
      const v = "popstate",
        b = "hashchange";
      function y() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function w(e) {
        void 0 === e && (e = {}), g || (0, l.Z)(!1);
        let t,
          n = window.history,
          a =
            (((t = window.navigator.userAgent).indexOf("Android 2.") === -1 &&
              t.indexOf("Android 4.0") === -1) ||
              t.indexOf("Mobile Safari") === -1 ||
              t.indexOf("Chrome") !== -1 ||
              t.indexOf("Windows Phone") !== -1) &&
            window.history &&
            "pushState" in window.history,
          o = !(window.navigator.userAgent.indexOf("Trident") === -1),
          i = e,
          s = i.forceRefresh,
          w = void 0 !== s && s,
          k = i.getUserConfirmation,
          E = void 0 === k ? h : k,
          S = i.keyLength,
          x = void 0 === S ? 6 : S,
          C = e.basename ? d(u(e.basename)) : "";
        function T(e) {
          let t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            o = a.pathname + a.search + a.hash;
          return C && (o = c(o, C)), p(o, r, n);
        }
        function _() {
          return Math.random().toString(36).substr(2, x);
        }
        const A = m();
        function L(e) {
          r(U, e),
            (U.length = n.length),
            A.notifyListeners(U.location, U.action);
        }
        function N(e) {
          (function (e) {
            return (
              void 0 === e.state && navigator.userAgent.indexOf("CriOS") === -1
            );
          })(e) || O(T(e.state));
        }
        function R() {
          O(T(y()));
        }
        let P = !1;
        function O(e) {
          if (P) (P = !1), L();
          else {
            A.confirmTransitionTo(e, "POP", E, function (t) {
              t
                ? L({ action: "POP", location: e })
                : (function (e) {
                    let t = U.location,
                      n = I.indexOf(t.key);
                    n === -1 && (n = 0);
                    let r = I.indexOf(e.key);
                    r === -1 && (r = 0);
                    const a = n - r;
                    a && ((P = !0), F(a));
                  })(e);
            });
          }
        }
        var D = T(y()),
          I = [D.key];
        function M(e) {
          return C + f(e);
        }
        function F(e) {
          n.go(e);
        }
        let j = 0;
        function B(e) {
          (j += e) === 1 && e === 1
            ? (window.addEventListener(v, N),
              o && window.addEventListener(b, R))
            : j === 0 &&
              (window.removeEventListener(v, N),
              o && window.removeEventListener(b, R));
        }
        let z = !1;
        var U = {
          length: n.length,
          action: "POP",
          location: D,
          createHref: M,
          push: function (e, t) {
            const r = "PUSH",
              o = p(e, t, _(), U.location);
            A.confirmTransitionTo(o, r, E, function (e) {
              if (e) {
                const t = M(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.pushState({ key: i, state: l }, null, t), w))
                    window.location.href = t;
                  else {
                    const u = I.indexOf(U.location.key),
                      s = I.slice(0, u + 1);
                    s.push(o.key), (I = s), L({ action: r, location: o });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            const r = "REPLACE",
              o = p(e, t, _(), U.location);
            A.confirmTransitionTo(o, r, E, function (e) {
              if (e) {
                const t = M(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.replaceState({ key: i, state: l }, null, t), w))
                    window.location.replace(t);
                  else {
                    const u = I.indexOf(U.location.key);
                    u !== -1 && (I[u] = o.key), L({ action: r, location: o });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: F,
          goBack: function () {
            F(-1);
          },
          goForward: function () {
            F(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            const t = A.setPrompt(e);
            return (
              z || (B(1), (z = !0)),
              function () {
                return z && ((z = !1), B(-1)), t();
              }
            );
          },
          listen: function (e) {
            const t = A.appendListener(e);
            return (
              B(1),
              function () {
                B(-1), t();
              }
            );
          },
        };
        return U;
      }
      const k = "hashchange",
        E = {
          hashbang: {
            encodePath: function (e) {
              return e.charAt(0) === "!" ? e : "!/" + s(e);
            },
            decodePath: function (e) {
              return e.charAt(0) === "!" ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: s, decodePath: u },
          slash: { encodePath: u, decodePath: u },
        };
      function S(e) {
        const t = e.indexOf("#");
        return t === -1 ? e : e.slice(0, t);
      }
      function x() {
        const e = window.location.href,
          t = e.indexOf("#");
        return t === -1 ? "" : e.substring(t + 1);
      }
      function C(e) {
        window.location.replace(S(window.location.href) + "#" + e);
      }
      function T(e) {
        void 0 === e && (e = {}), g || (0, l.Z)(!1);
        const t = window.history,
          n = (window.navigator.userAgent.indexOf("Firefox"), e),
          a = n.getUserConfirmation,
          o = void 0 === a ? h : a,
          i = n.hashType,
          s = void 0 === i ? "slash" : i,
          v = e.basename ? d(u(e.basename)) : "",
          b = E[s],
          y = b.encodePath,
          w = b.decodePath;
        function T() {
          let e = w(x());
          return v && (e = c(e, v)), p(e);
        }
        const _ = m();
        function A(e) {
          r(z, e),
            (z.length = t.length),
            _.notifyListeners(z.location, z.action);
        }
        let L = !1,
          N = null;
        function R() {
          let e,
            t,
            n = x(),
            r = y(n);
          if (n !== r) C(r);
          else {
            const a = T(),
              i = z.location;
            if (
              !L &&
              ((t = a),
              (e = i).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (N === f(a)) return;
            (N = null),
              (function (e) {
                if (L) (L = !1), A();
                else {
                  const t = "POP";
                  _.confirmTransitionTo(e, t, o, function (n) {
                    n
                      ? A({ action: t, location: e })
                      : (function (e) {
                          let t = z.location,
                            n = I.lastIndexOf(f(t));
                          n === -1 && (n = 0);
                          let r = I.lastIndexOf(f(e));
                          r === -1 && (r = 0);
                          const a = n - r;
                          a && ((L = !0), M(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        const P = x(),
          O = y(P);
        P !== O && C(O);
        var D = T(),
          I = [f(D)];
        function M(e) {
          t.go(e);
        }
        let F = 0;
        function j(e) {
          (F += e) === 1 && e === 1
            ? window.addEventListener(k, R)
            : F === 0 && window.removeEventListener(k, R);
        }
        let B = !1;
        var z = {
          length: t.length,
          action: "POP",
          location: D,
          createHref: function (e) {
            let t = document.querySelector("base"),
              n = "";
            return (
              t && t.getAttribute("href") && (n = S(window.location.href)),
              n + "#" + y(v + f(e))
            );
          },
          push: function (e, t) {
            const n = "PUSH",
              r = p(e, void 0, void 0, z.location);
            _.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                const t = f(r),
                  a = y(v + t);
                if (x() !== a) {
                  (N = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  const o = I.lastIndexOf(f(z.location)),
                    i = I.slice(0, o + 1);
                  i.push(t), (I = i), A({ action: n, location: r });
                } else A();
              }
            });
          },
          replace: function (e, t) {
            const n = "REPLACE",
              r = p(e, void 0, void 0, z.location);
            _.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                const t = f(r),
                  a = y(v + t);
                x() !== a && ((N = t), C(a));
                const o = I.indexOf(f(z.location));
                o !== -1 && (I[o] = t), A({ action: n, location: r });
              }
            });
          },
          go: M,
          goBack: function () {
            M(-1);
          },
          goForward: function () {
            M(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            const t = _.setPrompt(e);
            return (
              B || (j(1), (B = !0)),
              function () {
                return B && ((B = !1), j(-1)), t();
              }
            );
          },
          listen: function (e) {
            const t = _.appendListener(e);
            return (
              j(1),
              function () {
                j(-1), t();
              }
            );
          },
        };
        return z;
      }
      function _(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function A(e) {
        void 0 === e && (e = {});
        const t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          o = void 0 === a ? ["/"] : a,
          i = t.initialIndex,
          l = void 0 === i ? 0 : i,
          u = t.keyLength,
          s = void 0 === u ? 6 : u,
          c = m();
        function d(e) {
          r(w, e),
            (w.length = w.entries.length),
            c.notifyListeners(w.location, w.action);
        }
        function g() {
          return Math.random().toString(36).substr(2, s);
        }
        const h = _(l, 0, o.length - 1),
          v = o.map(function (e) {
            return p(e, void 0, typeof e === "string" ? g() : e.key || g());
          }),
          b = f;
        function y(e) {
          const t = _(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
          });
        }
        var w = {
          length: v.length,
          action: "POP",
          location: v[h],
          index: h,
          entries: v,
          createHref: b,
          push: function (e, t) {
            const r = "PUSH",
              a = p(e, t, g(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                const t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  d({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            const r = "REPLACE",
              a = p(e, t, g(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((w.entries[w.index] = a), d({ action: r, location: a }));
            });
          },
          go: y,
          goBack: function () {
            y(-1);
          },
          goForward: function () {
            y(1);
          },
          canGo: function (e) {
            const t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return w;
      }
    },
    8679: function (e, t, n) {
      "use strict";
      const r = n(9864),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function u(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = i);
      const s = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if (typeof n !== "string") {
          if (m) {
            const a = p(n);
            a && a !== m && e(t, a, r);
          }
          let i = c(n);
          d && (i = i.concat(d(n)));
          for (let l = u(t), g = u(n), h = 0; h < i.length; ++h) {
            const v = i[h];
            if (!(o[v] || (r && r[v]) || (g && g[v]) || (l && l[v]))) {
              const b = f(n, v);
              try {
                s(t, v, b);
              } catch (y) {}
            }
          }
        }
        return t;
      };
    },
    1143: function (e) {
      "use strict";
      e.exports = function (e, t, n, r, a, o, i, l) {
        if (!e) {
          let u;
          if (void 0 === t)
            u = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            let s = [n, r, a, o, i, l],
              c = 0;
            (u = new Error(
              t.replace(/%s/g, function () {
                return s[c++];
              })
            )).name = "Invariant Violation";
          }
          throw ((u.framesToPop = 1), u);
        }
      };
    },
    5826: function (e) {
      e.exports =
        Array.isArray ||
        function (e) {
          return Object.prototype.toString.call(e) == "[object Array]";
        };
    },
    2497: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    2295: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    4865: function (e, t, n) {
      let r, a;
      (r = function () {
        let e,
          t,
          n = { version: "0.2.0" },
          r = (n.settings = {
            minimum: 0.08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
        function a(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function o(e) {
          return 100 * (-1 + e);
        }
        function i(e, t, n) {
          let a;
          return (
            ((a =
              r.positionUsing === "translate3d"
                ? { transform: "translate3d(" + o(e) + "%,0,0)" }
                : r.positionUsing === "translate"
                ? { transform: "translate(" + o(e) + "%,0)" }
                : { "margin-left": o(e) + "%" }).transition =
              "all " + t + "ms " + n),
            a
          );
        }
        (n.configure = function (e) {
          let t, n;
          for (t in e)
            void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
          return this;
        }),
          (n.status = null),
          (n.set = function (e) {
            const t = n.isStarted();
            (e = a(e, r.minimum, 1)), (n.status = e === 1 ? null : e);
            const o = n.render(!t),
              s = o.querySelector(r.barSelector),
              c = r.speed,
              d = r.easing;
            return (
              o.offsetWidth,
              l(function (t) {
                r.positionUsing === "" &&
                  (r.positionUsing = n.getPositioningCSS()),
                  u(s, i(e, c, d)),
                  e === 1
                    ? (u(o, { transition: "none", opacity: 1 }),
                      o.offsetWidth,
                      setTimeout(function () {
                        u(o, {
                          transition: "all " + c + "ms linear",
                          opacity: 0,
                        }),
                          setTimeout(function () {
                            n.remove(), t();
                          }, c);
                      }, c))
                    : setTimeout(t, c);
              }),
              this
            );
          }),
          (n.isStarted = function () {
            return typeof n.status === "number";
          }),
          (n.start = function () {
            n.status || n.set(0);
            const e = function () {
              setTimeout(function () {
                n.status && (n.trickle(), e());
              }, r.trickleSpeed);
            };
            return r.trickle && e(), this;
          }),
          (n.done = function (e) {
            return e || n.status
              ? n.inc(0.3 + 0.5 * Math.random()).set(1)
              : this;
          }),
          (n.inc = function (e) {
            let t = n.status;
            return t
              ? (typeof e !== "number" &&
                  (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                (t = a(t + e, 0, 0.994)),
                n.set(t))
              : n.start();
          }),
          (n.trickle = function () {
            return n.inc(Math.random() * r.trickleRate);
          }),
          (e = 0),
          (t = 0),
          (n.promise = function (r) {
            return r && r.state() !== "resolved"
              ? (t === 0 && n.start(),
                e++,
                t++,
                r.always(function () {
                  --t == 0 ? ((e = 0), n.done()) : n.set((e - t) / e);
                }),
                this)
              : this;
          }),
          (n.render = function (e) {
            if (n.isRendered()) return document.getElementById("nprogress");
            c(document.documentElement, "nprogress-busy");
            const t = document.createElement("div");
            (t.id = "nprogress"), (t.innerHTML = r.template);
            let a,
              i = t.querySelector(r.barSelector),
              l = e ? "-100" : o(n.status || 0),
              s = document.querySelector(r.parent);
            return (
              u(i, {
                transition: "all 0 linear",
                transform: "translate3d(" + l + "%,0,0)",
              }),
              r.showSpinner ||
                ((a = t.querySelector(r.spinnerSelector)) && p(a)),
              s != document.body && c(s, "nprogress-custom-parent"),
              s.appendChild(t),
              t
            );
          }),
          (n.remove = function () {
            d(document.documentElement, "nprogress-busy"),
              d(document.querySelector(r.parent), "nprogress-custom-parent");
            const e = document.getElementById("nprogress");
            e && p(e);
          }),
          (n.isRendered = function () {
            return !!document.getElementById("nprogress");
          }),
          (n.getPositioningCSS = function () {
            const e = document.body.style,
              t =
                "WebkitTransform" in e
                  ? "Webkit"
                  : "MozTransform" in e
                  ? "Moz"
                  : "msTransform" in e
                  ? "ms"
                  : "OTransform" in e
                  ? "O"
                  : "";
            return t + "Perspective" in e
              ? "translate3d"
              : t + "Transform" in e
              ? "translate"
              : "margin";
          });
        var l = (function () {
            const e = [];
            function t() {
              const n = e.shift();
              n && n(t);
            }
            return function (n) {
              e.push(n), e.length == 1 && t();
            };
          })(),
          u = (function () {
            const e = ["Webkit", "O", "Moz", "ms"],
              t = {};
            function n(e) {
              return e
                .replace(/^-ms-/, "ms-")
                .replace(/-([\da-z])/gi, function (e, t) {
                  return t.toUpperCase();
                });
            }
            function r(t) {
              const n = document.body.style;
              if (t in n) return t;
              for (
                var r, a = e.length, o = t.charAt(0).toUpperCase() + t.slice(1);
                a--;

              )
                if ((r = e[a] + o) in n) return r;
              return t;
            }
            function a(e) {
              return (e = n(e)), t[e] || (t[e] = r(e));
            }
            function o(e, t, n) {
              (t = a(t)), (e.style[t] = n);
            }
            return function (e, t) {
              let n,
                r,
                a = arguments;
              if (a.length == 2)
                for (n in t)
                  void 0 !== (r = t[n]) && t.hasOwnProperty(n) && o(e, n, r);
              else o(e, a[1], a[2]);
            };
          })();
        function s(e, t) {
          return (typeof e === "string" ? e : f(e)).indexOf(" " + t + " ") >= 0;
        }
        function c(e, t) {
          const n = f(e),
            r = n + t;
          s(n, t) || (e.className = r.substring(1));
        }
        function d(e, t) {
          let n,
            r = f(e);
          s(e, t) &&
            ((n = r.replace(" " + t + " ", " ")),
            (e.className = n.substring(1, n.length - 1)));
        }
        function f(e) {
          return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
        }
        function p(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        return n;
      }),
        void 0 === (a = typeof r === "function" ? r.call(t, n, t, e) : r) ||
          (e.exports = a);
    },
    7410: function (e, t) {
      "use strict";
      const n = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            n = {},
            r = {
              util: {
                encode: function e(t) {
                  return t instanceof a
                    ? new a(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  let a, o;
                  switch (((n = n || {}), r.util.type(t))) {
                    case "Object":
                      if (((o = r.util.objId(t)), n[o])) return n[o];
                      for (const i in ((a = {}), (n[o] = a), t))
                        t.hasOwnProperty(i) && (a[i] = e(t[i], n));
                      return a;
                    case "Array":
                      return (
                        (o = r.util.objId(t)),
                        n[o]
                          ? n[o]
                          : ((a = []),
                            (n[o] = a),
                            t.forEach(function (t, r) {
                              a[r] = e(t, n);
                            }),
                            a)
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (t) {
                  for (; t; ) {
                    const n = e.exec(t.className);
                    if (n) return n[1].toLowerCase();
                    t = t.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (t, n) {
                  (t.className = t.className.replace(RegExp(e, "gi"), "")),
                    t.classList.add("language-" + n);
                },
                isActive: function (e, t, n) {
                  for (let r = "no-" + t; e; ) {
                    const a = e.classList;
                    if (a.contains(t)) return !0;
                    if (a.contains(r)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: n,
                plaintext: n,
                text: n,
                txt: n,
                extend: function (e, t) {
                  const n = r.util.clone(r.languages[e]);
                  for (const a in t) n[a] = t[a];
                  return n;
                },
                insertBefore: function (e, t, n, a) {
                  const o = (a = a || r.languages)[e],
                    i = {};
                  for (const l in o)
                    if (o.hasOwnProperty(l)) {
                      if (l == t)
                        for (const u in n) n.hasOwnProperty(u) && (i[u] = n[u]);
                      n.hasOwnProperty(l) || (i[l] = o[l]);
                    }
                  const s = a[e];
                  return (
                    (a[e] = i),
                    r.languages.DFS(r.languages, function (t, n) {
                      n === s && t != e && (this[t] = i);
                    }),
                    i
                  );
                },
                DFS: function e(t, n, a, o) {
                  o = o || {};
                  const i = r.util.objId;
                  for (const l in t)
                    if (t.hasOwnProperty(l)) {
                      n.call(t, l, t[l], a || l);
                      const u = t[l],
                        s = r.util.type(u);
                      s !== "Object" || o[i(u)]
                        ? s !== "Array" ||
                          o[i(u)] ||
                          ((o[i(u)] = !0), e(u, n, l, o))
                        : ((o[i(u)] = !0), e(u, n, null, o));
                    }
                },
              },
              plugins: {},
              highlight: function (e, t, n) {
                const o = { code: e, grammar: t, language: n };
                return (
                  r.hooks.run("before-tokenize", o),
                  (o.tokens = r.tokenize(o.code, o.grammar)),
                  r.hooks.run("after-tokenize", o),
                  a.stringify(r.util.encode(o.tokens), o.language)
                );
              },
              tokenize: function (e, t) {
                const n = t.rest;
                if (n) {
                  for (const r in n) t[r] = n[r];
                  delete t.rest;
                }
                const a = new l();
                return (
                  u(a, a.head, e),
                  i(e, a, t, a.head, 0),
                  (function (e) {
                    let t = [],
                      n = e.head.next;
                    for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                    return t;
                  })(a)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  const n = r.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  const n = r.hooks.all[e];
                  if (n && n.length) for (var a, o = 0; (a = n[o++]); ) a(t);
                },
              },
              Token: a,
            };
          function a(e, t, n, r) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (r || "").length);
          }
          function o(e, t, n, r) {
            e.lastIndex = t;
            const a = e.exec(n);
            if (a && r && a[1]) {
              const o = a[1].length;
              (a.index += o), (a[0] = a[0].slice(o));
            }
            return a;
          }
          function i(e, t, n, l, c, d) {
            for (const f in n)
              if (n.hasOwnProperty(f) && n[f]) {
                let p = n[f];
                p = Array.isArray(p) ? p : [p];
                for (let m = 0; m < p.length; ++m) {
                  if (d && d.cause == f + "," + m) return;
                  const g = p[m],
                    h = g.inside,
                    v = !!g.lookbehind,
                    b = !!g.greedy,
                    y = g.alias;
                  if (b && !g.pattern.global) {
                    const w = g.pattern.toString().match(/[imsuy]*$/)[0];
                    g.pattern = RegExp(g.pattern.source, w + "g");
                  }
                  for (
                    let k = g.pattern || g, E = l.next, S = c;
                    E !== t.tail && !(d && S >= d.reach);
                    S += E.value.length, E = E.next
                  ) {
                    let x = E.value;
                    if (t.length > e.length) return;
                    if (!(x instanceof a)) {
                      var C,
                        T = 1;
                      if (b) {
                        if (!(C = o(k, S, e, v)) || C.index >= e.length) break;
                        var _ = C.index,
                          A = C.index + C[0].length,
                          L = S;
                        for (L += E.value.length; _ >= L; )
                          L += (E = E.next).value.length;
                        if (((S = L -= E.value.length), E.value instanceof a))
                          continue;
                        for (
                          let N = E;
                          N !== t.tail &&
                          (L < A || typeof N.value === "string");
                          N = N.next
                        )
                          T++, (L += N.value.length);
                        T--, (x = e.slice(S, L)), (C.index -= S);
                      } else if (!(C = o(k, 0, x, v))) continue;
                      _ = C.index;
                      const R = C[0],
                        P = x.slice(0, _),
                        O = x.slice(_ + R.length),
                        D = S + x.length;
                      d && D > d.reach && (d.reach = D);
                      let I = E.prev;
                      if (
                        (P && ((I = u(t, I, P)), (S += P.length)),
                        s(t, I, T),
                        (E = u(t, I, new a(f, h ? r.tokenize(R, h) : R, y, R))),
                        O && u(t, E, O),
                        T > 1)
                      ) {
                        const M = { cause: f + "," + m, reach: D };
                        i(e, t, n, E.prev, S, M),
                          d && M.reach > d.reach && (d.reach = M.reach);
                      }
                    }
                  }
                }
              }
          }
          function l() {
            const e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function u(e, t, n) {
            const r = t.next,
              a = { value: n, prev: t, next: r };
            return (t.next = a), (r.prev = a), e.length++, a;
          }
          function s(e, t, n) {
            for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
            (t.next = r), (r.prev = t), (e.length -= a);
          }
          return (
            (a.stringify = function e(t, n) {
              if (typeof t === "string") return t;
              if (Array.isArray(t)) {
                let a = "";
                return (
                  t.forEach(function (t) {
                    a += e(t, n);
                  }),
                  a
                );
              }
              const o = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: "span",
                  classes: ["token", t.type],
                  attributes: {},
                  language: n,
                },
                i = t.alias;
              i &&
                (Array.isArray(i)
                  ? Array.prototype.push.apply(o.classes, i)
                  : o.classes.push(i)),
                r.hooks.run("wrap", o);
              let l = "";
              for (const u in o.attributes)
                l +=
                  " " +
                  u +
                  '="' +
                  (o.attributes[u] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                o.tag +
                ' class="' +
                o.classes.join(" ") +
                '"' +
                l +
                ">" +
                o.content +
                "</" +
                o.tag +
                ">"
              );
            }),
            r
          );
        })(),
        r = n;
      (n.default = n),
        (r.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (r.languages.markup.tag.inside["attr-value"].inside.entity =
          r.languages.markup.entity),
        (r.languages.markup.doctype.inside["internal-subset"].inside =
          r.languages.markup),
        r.hooks.add("wrap", function (e) {
          e.type === "entity" &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(r.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            const n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: r.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            const a = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            a["language-" + t] = { pattern: /[\s\S]+/, inside: r.languages[t] };
            const o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: a,
            }),
              r.languages.insertBefore("markup", "cdata", o);
          },
        }),
        Object.defineProperty(r.languages.markup.tag, "addAttribute", {
          value: function (e, t) {
            r.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  "(?:" +
                  e +
                  ")" +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                "i"
              ),
              lookbehind: !0,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, "language-" + t],
                      inside: r.languages[t],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (r.languages.html = r.languages.markup),
        (r.languages.mathml = r.languages.markup),
        (r.languages.svg = r.languages.markup),
        (r.languages.xml = r.languages.extend("markup", {})),
        (r.languages.ssml = r.languages.xml),
        (r.languages.atom = r.languages.xml),
        (r.languages.rss = r.languages.xml),
        (function (e) {
          const t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: r.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            let a = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              o = r.variable[1].inside,
              i = 0;
            i < a.length;
            i++
          )
            o[a[i]] = e.languages.bash[a[i]];
          e.languages.shell = e.languages.bash;
        })(r),
        (r.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (r.languages.c = r.languages.extend("clike", {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        r.languages.insertBefore("c", "string", {
          char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0,
          },
        }),
        r.languages.insertBefore("c", "string", {
          macro: {
            pattern:
              /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                r.languages.c.string,
              ],
              char: r.languages.c.char,
              comment: r.languages.c.comment,
              "macro-name": [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword",
              },
              "directive-hash": /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: r.languages.c },
            },
          },
        }),
        r.languages.insertBefore("c", "function", {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete r.languages.c.boolean,
        (function (e) {
          const t =
              /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
              /<keyword>/g,
              function () {
                return t.source;
              }
            );
          (e.languages.cpp = e.languages.extend("c", {
            "class-name": [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    }
                  )
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/,
          })),
            e.languages.insertBefore("cpp", "string", {
              module: {
                pattern: RegExp(
                  /(\b(?:import|module)\s+)/.source +
                    "(?:" +
                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                    "|" +
                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                      /<mod-name>/g,
                      function () {
                        return n;
                      }
                    ) +
                    ")"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  string: /^[<"][\s\S]+/,
                  operator: /:/,
                  punctuation: /\./,
                },
              },
              "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0,
              },
            }),
            e.languages.insertBefore("cpp", "keyword", {
              "generic-function": {
                pattern:
                  /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                  function: /^\w+/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp,
                  },
                },
              },
            }),
            e.languages.insertBefore("cpp", "operator", {
              "double-colon": { pattern: /::/, alias: "punctuation" },
            }),
            e.languages.insertBefore("cpp", "class-name", {
              "base-clause": {
                pattern:
                  /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend("cpp", {}),
              },
            }),
            e.languages.insertBefore(
              "inside",
              "double-colon",
              { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp["base-clause"]
            );
        })(r),
        (function (e) {
          const t =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          const n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            n.tag.addAttribute("style", "css"));
        })(r),
        (function (e) {
          let t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              "selector-function-argument"
            ].inside = t),
            e.languages.insertBefore("css", "property", {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          const r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            a = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: a,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: a,
          });
        })(r),
        (r.languages.javascript = r.languages.extend("clike", {
          "class-name": [
            r.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                /NaN|Infinity/.source +
                "|" +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                "|" +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                "|" +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                "|" +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (r.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        r.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: r.languages.regex,
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/,
            },
          },
          "function-variable": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: r.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: r.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: r.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: r.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        r.languages.insertBefore("javascript", "string", {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation",
                  },
                  rest: r.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "string-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
        }),
        r.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
          },
        }),
        r.languages.markup &&
          (r.languages.markup.tag.addInlined("script", "javascript"),
          r.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            "javascript"
          )),
        (r.languages.js = r.languages.javascript),
        (function (e) {
          const t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment",
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: "language-javascript",
                    inside: e.languages.javascript,
                  },
                },
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(r),
        (function (e) {
          const t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              "(?:" +
              n.source +
              "(?:[ \t]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ \t]+" +
              n.source +
              ")?)",
            a =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function i(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            const n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + a + "|" + o + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: i(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: i(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: i(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: i(o), lookbehind: !0, greedy: !0 },
            number: {
              pattern: i(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(r),
        (function (e) {
          const t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          const r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              }
            ),
            o =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + o + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (n) {
                  t !== n &&
                    (e.languages.markdown[t].inside.content.inside[n] =
                      e.languages.markdown[n]);
                }
              );
            }),
            e.hooks.add("after-tokenize", function (e) {
              (e.language !== "markdown" && e.language !== "md") ||
                (function e(t) {
                  if (t && typeof t !== "string")
                    for (let n = 0, r = t.length; n < r; n++) {
                      const a = t[n];
                      if (a.type === "code") {
                        const o = a.content[1],
                          i = a.content[3];
                        if (
                          o &&
                          i &&
                          o.type === "code-language" &&
                          i.type === "code-block" &&
                          typeof o.content === "string"
                        ) {
                          let l = o.content
                              .replace(/\b#/g, "sharp")
                              .replace(/\b\+\+/g, "pp"),
                            u =
                              "language-" +
                              (l = (/[a-z][\w-]*/i.exec(l) || [
                                "",
                              ])[0].toLowerCase());
                          i.alias
                            ? typeof i.alias === "string"
                              ? (i.alias = [i.alias, u])
                              : i.alias.push(u)
                            : (i.alias = [u]);
                        }
                      } else e(a.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if (t.type === "code-block") {
                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                  const o = t.classes[r],
                    s = /language-(.+)/.exec(o);
                  if (s) {
                    n = s[1];
                    break;
                  }
                }
                let c,
                  d = e.languages[n];
                if (d)
                  t.content = e.highlight(
                    ((c = t.content),
                    c
                      .replace(i, "")
                      .replace(
                        /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                        function (e, t) {
                          let n;
                          if ((t = t.toLowerCase())[0] === "#")
                            return (
                              (n =
                                t[1] === "x"
                                  ? parseInt(t.slice(2), 16)
                                  : Number(t.slice(1))),
                              u(n)
                            );
                          const r = l[t];
                          return r || e;
                        }
                      )),
                    d,
                    n
                  );
                else if (n && n !== "none" && e.plugins.autoloader) {
                  const f =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = f),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      const t = document.getElementById(f);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            });
          var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
            l = { amp: "&", lt: "<", gt: ">", quot: '"' },
            u = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(r),
        (r.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: r.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        r.hooks.add("after-tokenize", function (e) {
          if (e.language === "graphql")
            for (
              var t = e.tokens.filter(function (e) {
                  return (
                    typeof e !== "string" &&
                    e.type !== "comment" &&
                    e.type !== "scalar"
                  );
                }),
                n = 0;
              n < t.length;

            ) {
              const r = t[n++];
              if (r.type === "keyword" && r.content === "mutation") {
                const a = [];
                if (
                  d(["definition-mutation", "punctuation"]) &&
                  c(1).content === "("
                ) {
                  n += 2;
                  const o = f(/^\($/, /^\)$/);
                  if (o === -1) continue;
                  for (; n < o; n++) {
                    const i = c(0);
                    i.type === "variable" &&
                      (p(i, "variable-input"), a.push(i.content));
                  }
                  n = o + 1;
                }
                if (
                  d(["punctuation", "property-query"]) &&
                  c(0).content === "{" &&
                  (n++, p(c(0), "property-mutation"), a.length > 0)
                ) {
                  const l = f(/^\{$/, /^\}$/);
                  if (l === -1) continue;
                  for (let u = n; u < l; u++) {
                    const s = t[u];
                    s.type === "variable" &&
                      a.indexOf(s.content) >= 0 &&
                      p(s, "variable-input");
                  }
                }
              }
            }
          function c(e) {
            return t[n + e];
          }
          function d(e, t) {
            t = t || 0;
            for (let n = 0; n < e.length; n++) {
              const r = c(n + t);
              if (!r || r.type !== e[n]) return !1;
            }
            return !0;
          }
          function f(e, r) {
            for (let a = 1, o = n; o < t.length; o++) {
              const i = t[o],
                l = i.content;
              if (i.type === "punctuation" && typeof l === "string")
                if (e.test(l)) a++;
                else if (r.test(l) && --a === 0) return o;
            }
            return -1;
          }
          function p(e, t) {
            let n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []),
              n.push(t);
          }
        }),
        (r.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          const t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside["interpolation-punctuation"],
            o = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + r + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function l(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function u(t, n, r) {
            const a = { code: t, grammar: n, language: r };
            return (
              e.hooks.run("before-tokenize", a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              a.tokens
            );
          }
          function s(t) {
            const n = {};
            n["interpolation-punctuation"] = a;
            const o = e.tokenize(t, n);
            if (o.length === 3) {
              const i = [1, 1];
              i.push.apply(i, u(o[1], e.languages.javascript, "javascript")),
                o.splice.apply(o, i);
            }
            return new e.Token("interpolation", o, r.alias, t);
          }
          function c(t, n, r) {
            let a = e.tokenize(t, {
                interpolation: { pattern: RegExp(o), lookbehind: !0 },
              }),
              i = 0,
              c = {},
              d = u(
                a
                  .map(function (e) {
                    if (typeof e === "string") return e;
                    for (
                      var n, a = e.content;
                      t.indexOf((n = l(i++, r))) !== -1;

                    );
                    return (c[n] = a), n;
                  })
                  .join(""),
                n,
                r
              ),
              f = Object.keys(c);
            return (
              (i = 0),
              (function e(t) {
                for (let n = 0; n < t.length; n++) {
                  if (i >= f.length) return;
                  const r = t[n];
                  if (typeof r === "string" || typeof r.content === "string") {
                    const a = f[i],
                      o = typeof r === "string" ? r : r.content,
                      l = o.indexOf(a);
                    if (l !== -1) {
                      ++i;
                      const u = o.substring(0, l),
                        d = s(c[a]),
                        p = o.substring(l + a.length),
                        m = [];
                      if ((u && m.push(u), m.push(d), p)) {
                        const g = [p];
                        e(g), m.push.apply(m, g);
                      }
                      typeof r === "string"
                        ? (t.splice.apply(t, [n, 1].concat(m)),
                          (n += m.length - 1))
                        : (r.content = m);
                    }
                  } else {
                    const h = r.content;
                    Array.isArray(h) ? e(h) : e([h]);
                  }
                }
              })(d),
              new e.Token(r, d, "language-" + r, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:markdown|md)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            i("sql", /\bsql/.source),
            t,
          ].filter(Boolean);
          const d = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          function f(e) {
            return typeof e === "string"
              ? e
              : Array.isArray(e)
              ? e.map(f).join("")
              : f(e.content);
          }
          e.hooks.add("after-tokenize", function (t) {
            t.language in d &&
              (function t(n) {
                for (let r = 0, a = n.length; r < a; r++) {
                  const o = n[r];
                  if (typeof o !== "string") {
                    const i = o.content;
                    if (Array.isArray(i))
                      if (o.type === "template-string") {
                        const l = i[1];
                        if (
                          i.length === 3 &&
                          typeof l !== "string" &&
                          l.type === "embedded-code"
                        ) {
                          const u = f(l),
                            s = l.alias,
                            d = Array.isArray(s) ? s[0] : s,
                            p = e.languages[d];
                          if (!p) continue;
                          i[1] = c(u, p, d);
                        }
                      } else t(i);
                    else typeof i !== "string" && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(r),
        (function (e) {
          (e.languages.typescript = e.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript["literal-property"];
          const t = e.languages.extend("typescript", {});
          delete t["class-name"],
            (e.languages.typescript["class-name"].inside = t),
            e.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(r),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t
            );
          }
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            let n = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            let a = n[r],
              o = e.languages.javascript[a];
            e.util.type(o) === "RegExp" &&
              (o = e.languages.javascript[a] = { pattern: o });
            const i = o.inside || {};
            (o.inside = i), (i["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(r),
        (function (e) {
          let t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function o(e, t) {
            return (
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return a;
                })),
              RegExp(e, t)
            );
          }
          (a = o(a).source),
            (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = o(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: o(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: o(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          const i = function (e) {
              return e
                ? typeof e === "string"
                  ? e
                  : typeof e.content === "string"
                  ? e.content
                  : e.content.map(i).join("")
                : "";
            },
            l = function (t) {
              for (let n = [], r = 0; r < t.length; r++) {
                let a = t[r],
                  o = !1;
                if (
                  (typeof a !== "string" &&
                    (a.type === "tag" &&
                    a.content[0] &&
                    a.content[0].type === "tag"
                      ? a.content[0].content[0].content === "</"
                        ? n.length > 0 &&
                          n[n.length - 1].tagName ===
                            i(a.content[0].content[1]) &&
                          n.pop()
                        : a.content[a.content.length - 1].content === "/>" ||
                          n.push({
                            tagName: i(a.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : n.length > 0 &&
                        a.type === "punctuation" &&
                        a.content === "{"
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        a.type === "punctuation" &&
                        a.content === "}"
                      ? n[n.length - 1].openedBraces--
                      : (o = !0)),
                  (o || typeof a === "string") &&
                    n.length > 0 &&
                    n[n.length - 1].openedBraces === 0)
                ) {
                  let u = i(a);
                  r < t.length - 1 &&
                    (typeof t[r + 1] === "string" ||
                      t[r + 1].type === "plain-text") &&
                    ((u += i(t[r + 1])), t.splice(r + 1, 1)),
                    r > 0 &&
                      (typeof t[r - 1] === "string" ||
                        t[r - 1].type === "plain-text") &&
                      ((u = i(t[r - 1]) + u), t.splice(r - 1, 1), r--),
                    (t[r] = new e.Token("plain-text", u, null, u));
                }
                a.content && typeof a.content !== "string" && l(a.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            (e.language !== "jsx" && e.language !== "tsx") || l(e.tokens);
          });
        })(r),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          const t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            const r = t[n],
              a = [];
            /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]),
              n === "diff" && a.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: a,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(r),
        (r.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/ },
          },
          coord: /^@@.*@@$/m,
          "commit-sha1": /^commit \w{40}$/m,
        }),
        (r.languages.go = r.languages.extend("clike", {
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        r.languages.insertBefore("go", "string", {
          char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
        }),
        delete r.languages.go["class-name"],
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, o) {
                if (n.language === r) {
                  const i = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if (typeof o === "function" && !o(e)) return e;
                    for (
                      var a, l = i.length;
                      n.code.indexOf((a = t(r, l))) !== -1;

                    )
                      ++l;
                    return (i[l] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  let a = 0,
                    o = Object.keys(n.tokenStack);
                  !(function i(l) {
                    for (let u = 0; u < l.length && !(a >= o.length); u++) {
                      const s = l[u];
                      if (
                        typeof s === "string" ||
                        (s.content && typeof s.content === "string")
                      ) {
                        const c = o[a],
                          d = n.tokenStack[c],
                          f = typeof s === "string" ? s : s.content,
                          p = t(r, c),
                          m = f.indexOf(p);
                        if (m > -1) {
                          ++a;
                          const g = f.substring(0, m),
                            h = new e.Token(
                              r,
                              e.tokenize(d, n.grammar),
                              "language-" + r,
                              d
                            ),
                            v = f.substring(m + p.length),
                            b = [];
                          g && b.push.apply(b, i([g])),
                            b.push(h),
                            v && b.push.apply(b, i([v])),
                            typeof s === "string"
                              ? l.splice.apply(l, [u, 1].concat(b))
                              : (s.content = b);
                        }
                      } else s.content && i(s.content);
                    }
                    return l;
                  })(n.tokens);
                }
              },
            },
          });
        })(r),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:false|true)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
              lookbehind: !0,
              alias: "keyword",
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add("before-tokenize", function (t) {
              e.languages["markup-templating"].buildPlaceholders(
                t,
                "handlebars",
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(
                t,
                "handlebars"
              );
            }),
            (e.languages.hbs = e.languages.handlebars);
        })(r),
        (r.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (r.languages.webmanifest = r.languages.json),
        (r.languages.less = r.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        r.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (r.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "builtin-target": {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: "builtin",
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: "symbol",
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (r.languages.objectivec = r.languages.extend("c", {
          string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete r.languages.objectivec["class-name"],
        (r.languages.objc = r.languages.objectivec),
        (r.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: {
            pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
            greedy: !0,
          },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: "property" },
          label: { pattern: /\B~\w+/, alias: "property" },
          "type-variable": { pattern: /\B'\w+/, alias: "function" },
          variant: { pattern: /`\w+/, alias: "symbol" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          "operator-like-punctuation": {
            pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
            alias: "punctuation",
          },
          operator:
            /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (r.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (r.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = r.languages.python),
        (r.languages.py = r.languages.python),
        (r.languages.reason = r.languages.extend("clike", {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        r.languages.insertBefore("reason", "class-name", {
          char: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0,
          },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete r.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
              greedy: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: { atrule: /(?:@[\w-]+|[+=])/ },
              },
            }),
            delete e.languages.sass.atrule;
          const t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
              { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern:
                  /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            });
        })(r),
        (r.languages.scss = r.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        r.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        r.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        r.languages.insertBefore("scss", "function", {
          "module-modifier": {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: "keyword",
          },
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (r.languages.scss.atrule.inside.rest = r.languages.scss),
        (function (e) {
          const t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern:
                  /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:false|true)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
              rest: r,
            },
          }),
            (r.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              "atrule-declaration": {
                pattern: /(^[ \t]*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              "property-declaration": {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(r),
        (function (e) {
          const t = e.util.clone(e.languages.typescript);
          (e.languages.tsx = e.languages.extend("jsx", t)),
            delete e.languages.tsx.parameter,
            delete e.languages.tsx["literal-property"];
          const n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
            n.pattern.flags
          )),
            (n.lookbehind = !0);
        })(r),
        (r.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (t.Z = r);
    },
    9901: function (e) {
      e.exports &&
        (e.exports = {
          core: {
            meta: { path: "components/prism-core.js", option: "mandatory" },
            core: "Core",
          },
          themes: {
            meta: {
              path: "themes/{id}.css",
              link: "index.html?theme={id}",
              exclusive: !0,
            },
            prism: { title: "Default", option: "default" },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": { title: "Okaidia", owner: "ocodia" },
            "prism-twilight": { title: "Twilight", owner: "remybach" },
            "prism-coy": { title: "Coy", owner: "tshedor" },
            "prism-solarizedlight": {
              title: "Solarized Light",
              owner: "hectormatos2011 ",
            },
            "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" },
          },
          languages: {
            meta: {
              path: "components/prism-{id}",
              noCSS: !0,
              examplesPath: "examples/prism-{id}",
              addCheckAll: !0,
            },
            markup: {
              title: "Markup",
              alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"],
              aliasTitles: {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                atom: "Atom",
                rss: "RSS",
              },
              option: "default",
            },
            css: { title: "CSS", option: "default", modify: "markup" },
            clike: { title: "C-like", option: "default" },
            javascript: {
              title: "JavaScript",
              require: "clike",
              modify: "markup",
              optional: "regex",
              alias: "js",
              option: "default",
            },
            abap: { title: "ABAP", owner: "dellagustin" },
            abnf: { title: "ABNF", owner: "RunDevelopment" },
            actionscript: {
              title: "ActionScript",
              require: "javascript",
              modify: "markup",
              owner: "Golmote",
            },
            ada: { title: "Ada", owner: "Lucretia" },
            agda: { title: "Agda", owner: "xy-ren" },
            al: { title: "AL", owner: "RunDevelopment" },
            antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" },
            apacheconf: { title: "Apache Configuration", owner: "GuiTeK" },
            apex: {
              title: "Apex",
              require: ["clike", "sql"],
              owner: "RunDevelopment",
            },
            apl: { title: "APL", owner: "ngn" },
            applescript: { title: "AppleScript", owner: "Golmote" },
            aql: { title: "AQL", owner: "RunDevelopment" },
            arduino: {
              title: "Arduino",
              require: "cpp",
              alias: "ino",
              owner: "dkern",
            },
            arff: { title: "ARFF", owner: "Golmote" },
            armasm: {
              title: "ARM Assembly",
              alias: "arm-asm",
              owner: "RunDevelopment",
            },
            arturo: {
              title: "Arturo",
              alias: "art",
              optional: [
                "bash",
                "css",
                "javascript",
                "markup",
                "markdown",
                "sql",
              ],
              owner: "drkameleon",
            },
            asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" },
            aspnet: {
              title: "ASP.NET (C#)",
              require: ["markup", "csharp"],
              owner: "nauzilus",
            },
            asm6502: { title: "6502 Assembly", owner: "kzurawel" },
            asmatmel: { title: "Atmel AVR Assembly", owner: "cerkit" },
            autohotkey: { title: "AutoHotkey", owner: "aviaryan" },
            autoit: { title: "AutoIt", owner: "Golmote" },
            avisynth: { title: "AviSynth", alias: "avs", owner: "Zinfidel" },
            "avro-idl": {
              title: "Avro IDL",
              alias: "avdl",
              owner: "RunDevelopment",
            },
            awk: {
              title: "AWK",
              alias: "gawk",
              aliasTitles: { gawk: "GAWK" },
              owner: "RunDevelopment",
            },
            bash: {
              title: "Bash",
              alias: ["sh", "shell"],
              aliasTitles: { sh: "Shell", shell: "Shell" },
              owner: "zeitgeist87",
            },
            basic: { title: "BASIC", owner: "Golmote" },
            batch: { title: "Batch", owner: "Golmote" },
            bbcode: {
              title: "BBcode",
              alias: "shortcode",
              aliasTitles: { shortcode: "Shortcode" },
              owner: "RunDevelopment",
            },
            bbj: { title: "BBj", owner: "hyyan" },
            bicep: { title: "Bicep", owner: "johnnyreilly" },
            birb: { title: "Birb", require: "clike", owner: "Calamity210" },
            bison: { title: "Bison", require: "c", owner: "Golmote" },
            bnf: {
              title: "BNF",
              alias: "rbnf",
              aliasTitles: { rbnf: "RBNF" },
              owner: "RunDevelopment",
            },
            bqn: { title: "BQN", owner: "yewscion" },
            brainfuck: { title: "Brainfuck", owner: "Golmote" },
            brightscript: { title: "BrightScript", owner: "RunDevelopment" },
            bro: { title: "Bro", owner: "wayward710" },
            bsl: {
              title: "BSL (1C:Enterprise)",
              alias: "oscript",
              aliasTitles: { oscript: "OneScript" },
              owner: "Diversus23",
            },
            c: { title: "C", require: "clike", owner: "zeitgeist87" },
            csharp: {
              title: "C#",
              require: "clike",
              alias: ["cs", "dotnet"],
              owner: "mvalipour",
            },
            cpp: { title: "C++", require: "c", owner: "zeitgeist87" },
            cfscript: {
              title: "CFScript",
              require: "clike",
              alias: "cfc",
              owner: "mjclemente",
            },
            chaiscript: {
              title: "ChaiScript",
              require: ["clike", "cpp"],
              owner: "RunDevelopment",
            },
            cil: { title: "CIL", owner: "sbrl" },
            cilkc: {
              title: "Cilk/C",
              require: "c",
              alias: "cilk-c",
              owner: "OpenCilk",
            },
            cilkcpp: {
              title: "Cilk/C++",
              require: "cpp",
              alias: ["cilk-cpp", "cilk"],
              owner: "OpenCilk",
            },
            clojure: { title: "Clojure", owner: "troglotit" },
            cmake: { title: "CMake", owner: "mjrogozinski" },
            cobol: { title: "COBOL", owner: "RunDevelopment" },
            coffeescript: {
              title: "CoffeeScript",
              require: "javascript",
              alias: "coffee",
              owner: "R-osey",
            },
            concurnas: {
              title: "Concurnas",
              alias: "conc",
              owner: "jasontatton",
            },
            csp: { title: "Content-Security-Policy", owner: "ScottHelme" },
            cooklang: { title: "Cooklang", owner: "ahue" },
            coq: { title: "Coq", owner: "RunDevelopment" },
            crystal: {
              title: "Crystal",
              require: "ruby",
              owner: "MakeNowJust",
            },
            "css-extras": {
              title: "CSS Extras",
              require: "css",
              modify: "css",
              owner: "milesj",
            },
            csv: { title: "CSV", owner: "RunDevelopment" },
            cue: { title: "CUE", owner: "RunDevelopment" },
            cypher: { title: "Cypher", owner: "RunDevelopment" },
            d: { title: "D", require: "clike", owner: "Golmote" },
            dart: { title: "Dart", require: "clike", owner: "Golmote" },
            dataweave: { title: "DataWeave", owner: "machaval" },
            dax: { title: "DAX", owner: "peterbud" },
            dhall: { title: "Dhall", owner: "RunDevelopment" },
            diff: { title: "Diff", owner: "uranusjr" },
            django: {
              title: "Django/Jinja2",
              require: "markup-templating",
              alias: "jinja2",
              owner: "romanvm",
            },
            "dns-zone-file": {
              title: "DNS zone file",
              owner: "RunDevelopment",
              alias: "dns-zone",
            },
            docker: {
              title: "Docker",
              alias: "dockerfile",
              owner: "JustinBeckwith",
            },
            dot: {
              title: "DOT (Graphviz)",
              alias: "gv",
              optional: "markup",
              owner: "RunDevelopment",
            },
            ebnf: { title: "EBNF", owner: "RunDevelopment" },
            editorconfig: { title: "EditorConfig", owner: "osipxd" },
            eiffel: { title: "Eiffel", owner: "Conaclos" },
            ejs: {
              title: "EJS",
              require: ["javascript", "markup-templating"],
              owner: "RunDevelopment",
              alias: "eta",
              aliasTitles: { eta: "Eta" },
            },
            elixir: { title: "Elixir", owner: "Golmote" },
            elm: { title: "Elm", owner: "zwilias" },
            etlua: {
              title: "Embedded Lua templating",
              require: ["lua", "markup-templating"],
              owner: "RunDevelopment",
            },
            erb: {
              title: "ERB",
              require: ["ruby", "markup-templating"],
              owner: "Golmote",
            },
            erlang: { title: "Erlang", owner: "Golmote" },
            "excel-formula": {
              title: "Excel Formula",
              alias: ["xlsx", "xls"],
              owner: "RunDevelopment",
            },
            fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" },
            factor: { title: "Factor", owner: "catb0t" },
            false: { title: "False", owner: "edukisto" },
            "firestore-security-rules": {
              title: "Firestore security rules",
              require: "clike",
              owner: "RunDevelopment",
            },
            flow: { title: "Flow", require: "javascript", owner: "Golmote" },
            fortran: { title: "Fortran", owner: "Golmote" },
            ftl: {
              title: "FreeMarker Template Language",
              require: "markup-templating",
              owner: "RunDevelopment",
            },
            gml: {
              title: "GameMaker Language",
              alias: "gamemakerlanguage",
              require: "clike",
              owner: "LiarOnce",
            },
            gap: { title: "GAP (CAS)", owner: "RunDevelopment" },
            gcode: { title: "G-code", owner: "RunDevelopment" },
            gdscript: { title: "GDScript", owner: "RunDevelopment" },
            gedcom: { title: "GEDCOM", owner: "Golmote" },
            gettext: { title: "gettext", alias: "po", owner: "RunDevelopment" },
            gherkin: { title: "Gherkin", owner: "hason" },
            git: { title: "Git", owner: "lgiraudel" },
            glsl: { title: "GLSL", require: "c", owner: "Golmote" },
            gn: { title: "GN", alias: "gni", owner: "RunDevelopment" },
            "linker-script": {
              title: "GNU Linker Script",
              alias: "ld",
              owner: "RunDevelopment",
            },
            go: { title: "Go", require: "clike", owner: "arnehormann" },
            "go-module": {
              title: "Go module",
              alias: "go-mod",
              owner: "RunDevelopment",
            },
            gradle: {
              title: "Gradle",
              require: "clike",
              owner: "zeabdelkhalek-badido18",
            },
            graphql: {
              title: "GraphQL",
              optional: "markdown",
              owner: "Golmote",
            },
            groovy: { title: "Groovy", require: "clike", owner: "robfletcher" },
            haml: {
              title: "Haml",
              require: "ruby",
              optional: [
                "css",
                "css-extras",
                "coffeescript",
                "erb",
                "javascript",
                "less",
                "markdown",
                "scss",
                "textile",
              ],
              owner: "Golmote",
            },
            handlebars: {
              title: "Handlebars",
              require: "markup-templating",
              alias: ["hbs", "mustache"],
              aliasTitles: { mustache: "Mustache" },
              owner: "Golmote",
            },
            haskell: { title: "Haskell", alias: "hs", owner: "bholst" },
            haxe: {
              title: "Haxe",
              require: "clike",
              optional: "regex",
              owner: "Golmote",
            },
            hcl: { title: "HCL", owner: "outsideris" },
            hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" },
            hoon: { title: "Hoon", owner: "matildepark" },
            http: {
              title: "HTTP",
              optional: [
                "csp",
                "css",
                "hpkp",
                "hsts",
                "javascript",
                "json",
                "markup",
                "uri",
              ],
              owner: "danielgtaylor",
            },
            hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" },
            hsts: {
              title: "HTTP Strict-Transport-Security",
              owner: "ScottHelme",
            },
            ichigojam: { title: "IchigoJam", owner: "BlueCocoa" },
            icon: { title: "Icon", owner: "Golmote" },
            "icu-message-format": {
              title: "ICU Message Format",
              owner: "RunDevelopment",
            },
            idris: {
              title: "Idris",
              alias: "idr",
              owner: "KeenS",
              require: "haskell",
            },
            ignore: {
              title: ".ignore",
              owner: "osipxd",
              alias: ["gitignore", "hgignore", "npmignore"],
              aliasTitles: {
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
              },
            },
            inform7: { title: "Inform 7", owner: "Golmote" },
            ini: { title: "Ini", owner: "aviaryan" },
            io: { title: "Io", owner: "AlesTsurko" },
            j: { title: "J", owner: "Golmote" },
            java: { title: "Java", require: "clike", owner: "sherblot" },
            javadoc: {
              title: "JavaDoc",
              require: ["markup", "java", "javadoclike"],
              modify: "java",
              optional: "scala",
              owner: "RunDevelopment",
            },
            javadoclike: {
              title: "JavaDoc-like",
              modify: ["java", "javascript", "php"],
              owner: "RunDevelopment",
            },
            javastacktrace: {
              title: "Java stack trace",
              owner: "RunDevelopment",
            },
            jexl: { title: "Jexl", owner: "czosel" },
            jolie: { title: "Jolie", require: "clike", owner: "thesave" },
            jq: { title: "JQ", owner: "RunDevelopment" },
            jsdoc: {
              title: "JSDoc",
              require: ["javascript", "javadoclike", "typescript"],
              modify: "javascript",
              optional: ["actionscript", "coffeescript"],
              owner: "RunDevelopment",
            },
            "js-extras": {
              title: "JS Extras",
              require: "javascript",
              modify: "javascript",
              optional: [
                "actionscript",
                "coffeescript",
                "flow",
                "n4js",
                "typescript",
              ],
              owner: "RunDevelopment",
            },
            json: {
              title: "JSON",
              alias: "webmanifest",
              aliasTitles: { webmanifest: "Web App Manifest" },
              owner: "CupOfTea696",
            },
            json5: { title: "JSON5", require: "json", owner: "RunDevelopment" },
            jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" },
            jsstacktrace: { title: "JS stack trace", owner: "sbrl" },
            "js-templates": {
              title: "JS Templates",
              require: "javascript",
              modify: "javascript",
              optional: [
                "css",
                "css-extras",
                "graphql",
                "markdown",
                "markup",
                "sql",
              ],
              owner: "RunDevelopment",
            },
            julia: { title: "Julia", owner: "cdagnino" },
            keepalived: { title: "Keepalived Configure", owner: "dev-itsheng" },
            keyman: { title: "Keyman", owner: "mcdurdin" },
            kotlin: {
              title: "Kotlin",
              alias: ["kt", "kts"],
              aliasTitles: { kts: "Kotlin Script" },
              require: "clike",
              owner: "Golmote",
            },
            kumir: {
              title: "KuMir (\u041a\u0443\u041c\u0438\u0440)",
              alias: "kum",
              owner: "edukisto",
            },
            kusto: { title: "Kusto", owner: "RunDevelopment" },
            latex: {
              title: "LaTeX",
              alias: ["tex", "context"],
              aliasTitles: { tex: "TeX", context: "ConTeXt" },
              owner: "japborst",
            },
            latte: {
              title: "Latte",
              require: ["clike", "markup-templating", "php"],
              owner: "nette",
            },
            less: {
              title: "Less",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            lilypond: {
              title: "LilyPond",
              require: "scheme",
              alias: "ly",
              owner: "RunDevelopment",
            },
            liquid: {
              title: "Liquid",
              require: "markup-templating",
              owner: "cinhtau",
            },
            lisp: {
              title: "Lisp",
              alias: ["emacs", "elisp", "emacs-lisp"],
              owner: "JuanCaicedo",
            },
            livescript: { title: "LiveScript", owner: "Golmote" },
            llvm: { title: "LLVM IR", owner: "porglezomp" },
            log: {
              title: "Log file",
              optional: "javastacktrace",
              owner: "RunDevelopment",
            },
            lolcode: { title: "LOLCODE", owner: "Golmote" },
            lua: { title: "Lua", owner: "Golmote" },
            magma: { title: "Magma (CAS)", owner: "RunDevelopment" },
            makefile: { title: "Makefile", owner: "Golmote" },
            markdown: {
              title: "Markdown",
              require: "markup",
              optional: "yaml",
              alias: "md",
              owner: "Golmote",
            },
            "markup-templating": {
              title: "Markup templating",
              require: "markup",
              owner: "Golmote",
            },
            mata: { title: "Mata", owner: "RunDevelopment" },
            matlab: { title: "MATLAB", owner: "Golmote" },
            maxscript: { title: "MAXScript", owner: "RunDevelopment" },
            mel: { title: "MEL", owner: "Golmote" },
            mermaid: { title: "Mermaid", owner: "RunDevelopment" },
            metafont: { title: "METAFONT", owner: "LaeriExNihilo" },
            mizar: { title: "Mizar", owner: "Golmote" },
            mongodb: {
              title: "MongoDB",
              owner: "airs0urce",
              require: "javascript",
            },
            monkey: { title: "Monkey", owner: "Golmote" },
            moonscript: {
              title: "MoonScript",
              alias: "moon",
              owner: "RunDevelopment",
            },
            n1ql: { title: "N1QL", owner: "TMWilds" },
            n4js: {
              title: "N4JS",
              require: "javascript",
              optional: "jsdoc",
              alias: "n4jsd",
              owner: "bsmith-n4",
            },
            "nand2tetris-hdl": {
              title: "Nand To Tetris HDL",
              owner: "stephanmax",
            },
            naniscript: {
              title: "Naninovel Script",
              owner: "Elringus",
              alias: "nani",
            },
            nasm: { title: "NASM", owner: "rbmj" },
            neon: { title: "NEON", owner: "nette" },
            nevod: { title: "Nevod", owner: "nezaboodka" },
            nginx: { title: "nginx", owner: "volado" },
            nim: { title: "Nim", owner: "Golmote" },
            nix: { title: "Nix", owner: "Golmote" },
            nsis: { title: "NSIS", owner: "idleberg" },
            objectivec: {
              title: "Objective-C",
              require: "c",
              alias: "objc",
              owner: "uranusjr",
            },
            ocaml: { title: "OCaml", owner: "Golmote" },
            odin: { title: "Odin", owner: "edukisto" },
            opencl: {
              title: "OpenCL",
              require: "c",
              modify: ["c", "cpp"],
              owner: "Milania1",
            },
            openqasm: {
              title: "OpenQasm",
              alias: "qasm",
              owner: "RunDevelopment",
            },
            oz: { title: "Oz", owner: "Golmote" },
            parigp: { title: "PARI/GP", owner: "Golmote" },
            parser: { title: "Parser", require: "markup", owner: "Golmote" },
            pascal: {
              title: "Pascal",
              alias: "objectpascal",
              aliasTitles: { objectpascal: "Object Pascal" },
              owner: "Golmote",
            },
            pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" },
            psl: { title: "PATROL Scripting Language", owner: "bertysentry" },
            pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" },
            peoplecode: {
              title: "PeopleCode",
              alias: "pcode",
              owner: "RunDevelopment",
            },
            perl: { title: "Perl", owner: "Golmote" },
            php: {
              title: "PHP",
              require: "markup-templating",
              owner: "milesj",
            },
            phpdoc: {
              title: "PHPDoc",
              require: ["php", "javadoclike"],
              modify: "php",
              owner: "RunDevelopment",
            },
            "php-extras": {
              title: "PHP Extras",
              require: "php",
              modify: "php",
              owner: "milesj",
            },
            "plant-uml": {
              title: "PlantUML",
              alias: "plantuml",
              owner: "RunDevelopment",
            },
            plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" },
            powerquery: {
              title: "PowerQuery",
              alias: ["pq", "mscript"],
              owner: "peterbud",
            },
            powershell: { title: "PowerShell", owner: "nauzilus" },
            processing: {
              title: "Processing",
              require: "clike",
              owner: "Golmote",
            },
            prolog: { title: "Prolog", owner: "Golmote" },
            promql: { title: "PromQL", owner: "arendjr" },
            properties: { title: ".properties", owner: "Golmote" },
            protobuf: {
              title: "Protocol Buffers",
              require: "clike",
              owner: "just-boris",
            },
            pug: {
              title: "Pug",
              require: ["markup", "javascript"],
              optional: [
                "coffeescript",
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                "scss",
                "stylus",
                "twig",
              ],
              owner: "Golmote",
            },
            puppet: { title: "Puppet", owner: "Golmote" },
            pure: {
              title: "Pure",
              optional: ["c", "cpp", "fortran"],
              owner: "Golmote",
            },
            purebasic: {
              title: "PureBasic",
              require: "clike",
              alias: "pbfasm",
              owner: "HeX0R101",
            },
            purescript: {
              title: "PureScript",
              require: "haskell",
              alias: "purs",
              owner: "sriharshachilakapati",
            },
            python: { title: "Python", alias: "py", owner: "multipetros" },
            qsharp: {
              title: "Q#",
              require: "clike",
              alias: "qs",
              owner: "fedonman",
            },
            q: { title: "Q (kdb+ database)", owner: "Golmote" },
            qml: {
              title: "QML",
              require: "javascript",
              owner: "RunDevelopment",
            },
            qore: { title: "Qore", require: "clike", owner: "temnroegg" },
            r: { title: "R", owner: "Golmote" },
            racket: {
              title: "Racket",
              require: "scheme",
              alias: "rkt",
              owner: "RunDevelopment",
            },
            cshtml: {
              title: "Razor C#",
              alias: "razor",
              require: ["markup", "csharp"],
              optional: ["css", "css-extras", "javascript", "js-extras"],
              owner: "RunDevelopment",
            },
            jsx: {
              title: "React JSX",
              require: ["markup", "javascript"],
              optional: ["jsdoc", "js-extras", "js-templates"],
              owner: "vkbansal",
            },
            tsx: { title: "React TSX", require: ["jsx", "typescript"] },
            reason: { title: "Reason", require: "clike", owner: "Golmote" },
            regex: { title: "Regex", owner: "RunDevelopment" },
            rego: { title: "Rego", owner: "JordanSh" },
            renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" },
            rescript: { title: "ReScript", alias: "res", owner: "vmarcosp" },
            rest: { title: "reST (reStructuredText)", owner: "Golmote" },
            rip: { title: "Rip", owner: "ravinggenius" },
            roboconf: { title: "Roboconf", owner: "Golmote" },
            robotframework: {
              title: "Robot Framework",
              alias: "robot",
              owner: "RunDevelopment",
            },
            ruby: {
              title: "Ruby",
              require: "clike",
              alias: "rb",
              owner: "samflores",
            },
            rust: { title: "Rust", owner: "Golmote" },
            sas: {
              title: "SAS",
              optional: ["groovy", "lua", "sql"],
              owner: "Golmote",
            },
            sass: {
              title: "Sass (Sass)",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            scss: {
              title: "Sass (SCSS)",
              require: "css",
              optional: "css-extras",
              owner: "MoOx",
            },
            scala: { title: "Scala", require: "java", owner: "jozic" },
            scheme: { title: "Scheme", owner: "bacchus123" },
            "shell-session": {
              title: "Shell session",
              require: "bash",
              alias: ["sh-session", "shellsession"],
              owner: "RunDevelopment",
            },
            smali: { title: "Smali", owner: "RunDevelopment" },
            smalltalk: { title: "Smalltalk", owner: "Golmote" },
            smarty: {
              title: "Smarty",
              require: "markup-templating",
              optional: "php",
              owner: "Golmote",
            },
            sml: {
              title: "SML",
              alias: "smlnj",
              aliasTitles: { smlnj: "SML/NJ" },
              owner: "RunDevelopment",
            },
            solidity: {
              title: "Solidity (Ethereum)",
              alias: "sol",
              require: "clike",
              owner: "glachaud",
            },
            "solution-file": {
              title: "Solution file",
              alias: "sln",
              owner: "RunDevelopment",
            },
            soy: {
              title: "Soy (Closure Template)",
              require: "markup-templating",
              owner: "Golmote",
            },
            sparql: {
              title: "SPARQL",
              require: "turtle",
              owner: "Triply-Dev",
              alias: "rq",
            },
            "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" },
            sqf: {
              title: "SQF: Status Quo Function (Arma 3)",
              require: "clike",
              owner: "RunDevelopment",
            },
            sql: { title: "SQL", owner: "multipetros" },
            squirrel: {
              title: "Squirrel",
              require: "clike",
              owner: "RunDevelopment",
            },
            stan: { title: "Stan", owner: "RunDevelopment" },
            stata: {
              title: "Stata Ado",
              require: ["mata", "java", "python"],
              owner: "RunDevelopment",
            },
            iecst: {
              title: "Structured Text (IEC 61131-3)",
              owner: "serhioromano",
            },
            stylus: { title: "Stylus", owner: "vkbansal" },
            supercollider: {
              title: "SuperCollider",
              alias: "sclang",
              owner: "RunDevelopment",
            },
            swift: { title: "Swift", owner: "chrischares" },
            systemd: {
              title: "Systemd configuration file",
              owner: "RunDevelopment",
            },
            "t4-templating": {
              title: "T4 templating",
              owner: "RunDevelopment",
            },
            "t4-cs": {
              title: "T4 Text Templates (C#)",
              require: ["t4-templating", "csharp"],
              alias: "t4",
              owner: "RunDevelopment",
            },
            "t4-vb": {
              title: "T4 Text Templates (VB)",
              require: ["t4-templating", "vbnet"],
              owner: "RunDevelopment",
            },
            tap: { title: "TAP", owner: "isaacs", require: "yaml" },
            tcl: { title: "Tcl", owner: "PeterChaplin" },
            tt2: {
              title: "Template Toolkit 2",
              require: ["clike", "markup-templating"],
              owner: "gflohr",
            },
            textile: {
              title: "Textile",
              require: "markup",
              optional: "css",
              owner: "Golmote",
            },
            toml: { title: "TOML", owner: "RunDevelopment" },
            tremor: {
              title: "Tremor",
              alias: ["trickle", "troy"],
              owner: "darach",
              aliasTitles: { trickle: "trickle", troy: "troy" },
            },
            turtle: {
              title: "Turtle",
              alias: "trig",
              aliasTitles: { trig: "TriG" },
              owner: "jakubklimek",
            },
            twig: {
              title: "Twig",
              require: "markup-templating",
              owner: "brandonkelly",
            },
            typescript: {
              title: "TypeScript",
              require: "javascript",
              optional: "js-templates",
              alias: "ts",
              owner: "vkbansal",
            },
            typoscript: {
              title: "TypoScript",
              alias: "tsconfig",
              aliasTitles: { tsconfig: "TSConfig" },
              owner: "dkern",
            },
            unrealscript: {
              title: "UnrealScript",
              alias: ["uscript", "uc"],
              owner: "RunDevelopment",
            },
            uorazor: { title: "UO Razor Script", owner: "jaseowns" },
            uri: {
              title: "URI",
              alias: "url",
              aliasTitles: { url: "URL" },
              owner: "RunDevelopment",
            },
            v: { title: "V", require: "clike", owner: "taggon" },
            vala: {
              title: "Vala",
              require: "clike",
              optional: "regex",
              owner: "TemplarVolk",
            },
            vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" },
            velocity: {
              title: "Velocity",
              require: "markup",
              owner: "Golmote",
            },
            verilog: { title: "Verilog", owner: "a-rey" },
            vhdl: { title: "VHDL", owner: "a-rey" },
            vim: { title: "vim", owner: "westonganger" },
            "visual-basic": {
              title: "Visual Basic",
              alias: ["vb", "vba"],
              aliasTitles: { vba: "VBA" },
              owner: "Golmote",
            },
            warpscript: { title: "WarpScript", owner: "RunDevelopment" },
            wasm: { title: "WebAssembly", owner: "Golmote" },
            "web-idl": {
              title: "Web IDL",
              alias: "webidl",
              owner: "RunDevelopment",
            },
            wgsl: { title: "WGSL", owner: "Dr4gonthree" },
            wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" },
            wolfram: {
              title: "Wolfram language",
              alias: ["mathematica", "nb", "wl"],
              aliasTitles: {
                mathematica: "Mathematica",
                nb: "Mathematica Notebook",
              },
              owner: "msollami",
            },
            wren: { title: "Wren", owner: "clsource" },
            xeora: {
              title: "Xeora",
              require: "markup",
              alias: "xeoracube",
              aliasTitles: { xeoracube: "XeoraCube" },
              owner: "freakmaxi",
            },
            "xml-doc": {
              title: "XML doc (.net)",
              require: "markup",
              modify: ["csharp", "fsharp", "vbnet"],
              owner: "RunDevelopment",
            },
            xojo: { title: "Xojo (REALbasic)", owner: "Golmote" },
            xquery: { title: "XQuery", require: "markup", owner: "Golmote" },
            yaml: { title: "YAML", alias: "yml", owner: "hason" },
            yang: { title: "YANG", owner: "RunDevelopment" },
            zig: { title: "Zig", owner: "RunDevelopment" },
          },
          plugins: {
            meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" },
            "line-highlight": {
              title: "Line Highlight",
              description: "Highlights specific lines and/or line ranges.",
            },
            "line-numbers": {
              title: "Line Numbers",
              description: "Line number at the beginning of code lines.",
              owner: "kuba-kubula",
            },
            "show-invisibles": {
              title: "Show Invisibles",
              description:
                "Show hidden characters such as tabs and line breaks.",
              optional: ["autolinker", "data-uri-highlight"],
            },
            autolinker: {
              title: "Autolinker",
              description:
                "Converts URLs and emails in code to clickable links. Parses Markdown links in comments.",
            },
            wpd: {
              title: "WebPlatform Docs",
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            "custom-class": {
              title: "Custom Class",
              description:
                "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
              owner: "dvkndn",
              noCSS: !0,
            },
            "file-highlight": {
              title: "File Highlight",
              description:
                "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
              noCSS: !0,
            },
            "show-language": {
              title: "Show Language",
              description:
                "Display the highlighted language in code blocks (inline code does not show the label).",
              owner: "nauzilus",
              noCSS: !0,
              require: "toolbar",
            },
            "jsonp-highlight": {
              title: "JSONP Highlight",
              description:
                "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
              noCSS: !0,
              owner: "nauzilus",
            },
            "highlight-keywords": {
              title: "Highlight Keywords",
              description:
                "Adds special CSS classes for each keyword for fine-grained highlighting.",
              owner: "vkbansal",
              noCSS: !0,
            },
            "remove-initial-line-feed": {
              title: "Remove initial line feed",
              description: "Removes the initial line feed in code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "inline-color": {
              title: "Inline color",
              description:
                "Adds a small inline preview for colors in style sheets.",
              require: "css-extras",
              owner: "RunDevelopment",
            },
            previewers: {
              title: "Previewers",
              description:
                "Previewers for angles, colors, gradients, easing and time.",
              require: "css-extras",
              owner: "Golmote",
            },
            autoloader: {
              title: "Autoloader",
              description:
                "Automatically loads the needed languages to highlight the code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "keep-markup": {
              title: "Keep Markup",
              description:
                "Prevents custom markup from being dropped out during highlighting.",
              owner: "Golmote",
              optional: "normalize-whitespace",
              noCSS: !0,
            },
            "command-line": {
              title: "Command Line",
              description:
                "Display a command line with a prompt and, optionally, the output/response from the commands.",
              owner: "chriswells0",
            },
            "unescaped-markup": {
              title: "Unescaped Markup",
              description: "Write markup without having to escape anything.",
            },
            "normalize-whitespace": {
              title: "Normalize Whitespace",
              description:
                "Supports multiple operations to normalize whitespace in code blocks.",
              owner: "zeitgeist87",
              optional: "unescaped-markup",
              noCSS: !0,
            },
            "data-uri-highlight": {
              title: "Data-URI Highlight",
              description: "Highlights data-URI contents.",
              owner: "Golmote",
              noCSS: !0,
            },
            toolbar: {
              title: "Toolbar",
              description:
                "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
              owner: "mAAdhaTTah",
            },
            "copy-to-clipboard": {
              title: "Copy to Clipboard Button",
              description:
                "Add a button that copies the code block to the clipboard when clicked.",
              owner: "mAAdhaTTah",
              require: "toolbar",
              noCSS: !0,
            },
            "download-button": {
              title: "Download Button",
              description:
                "A button in the toolbar of a code block adding a convenient way to download a code file.",
              owner: "Golmote",
              require: "toolbar",
              noCSS: !0,
            },
            "match-braces": {
              title: "Match braces",
              description: "Highlights matching braces.",
              owner: "RunDevelopment",
            },
            "diff-highlight": {
              title: "Diff Highlight",
              description: "Highlights the code inside diff blocks.",
              owner: "RunDevelopment",
              require: "diff",
            },
            "filter-highlight-all": {
              title: "Filter highlightAll",
              description:
                "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
              owner: "RunDevelopment",
              noCSS: !0,
            },
            treeview: {
              title: "Treeview",
              description:
                "A language with special styles to highlight file system tree structures.",
              owner: "Golmote",
            },
          },
        });
    },
    2885: function (e, t, n) {
      const r = n(9901),
        a = n(9642),
        o = new Set();
      function i(e) {
        void 0 === e
          ? (e = Object.keys(r.languages).filter((e) => e != "meta"))
          : Array.isArray(e) || (e = [e]);
        const t = [...o, ...Object.keys(Prism.languages)];
        a(r, e, t).load((e) => {
          if (!(e in r.languages))
            return void (
              i.silent || console.warn("Language does not exist: " + e)
            );
          const t = "./prism-" + e;
          delete n.c[n(6500).resolve(t)],
            delete Prism.languages[e],
            n(6500)(t),
            o.add(e);
        });
      }
      (i.silent = !1), (e.exports = i);
    },
    6726: function (e, t, n) {
      const r = { "./": 2885 };
      function a(e) {
        const t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 6726);
    },
    6500: function (e, t, n) {
      const r = { "./": 2885 };
      function a(e) {
        const t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          const t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 6500);
    },
    9642: function (e) {
      "use strict";
      const t = (function () {
        const e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : e != null && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          const n = {},
            r = [];
          function a(r, o) {
            if (!(r in n)) {
              o.push(r);
              const i = o.indexOf(r);
              if (i < o.length - 1)
                throw new Error(
                  "Circular dependency: " + o.slice(i).join(" -> ")
                );
              const l = {},
                u = e[r];
              if (u) {
                function s(t) {
                  if (!(t in e))
                    throw new Error(
                      r + " depends on an unknown component " + t
                    );
                  if (!(t in l))
                    for (const i in (a(t, o), (l[t] = !0), n[t])) l[i] = !0;
                }
                t(u.require, s), t(u.optional, s), t(u.modify, s);
              }
              (n[r] = l), o.pop();
            }
          }
          return function (e) {
            let t = n[e];
            return t || (a(e, r), (t = n[e])), t;
          };
        }
        function a(e) {
          for (const t in e) return !0;
          return !1;
        }
        return function (o, i, l) {
          const u = (function (e) {
              const t = {};
              for (const n in e) {
                const r = e[n];
                for (const a in r)
                  if (a != "meta") {
                    const o = r[a];
                    t[a] = typeof o === "string" ? { title: o } : o;
                  }
              }
              return t;
            })(o),
            s = (function (e) {
              let n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var a in ((n = {}), e)) {
                    const o = e[a];
                    t(o && o.alias, function (t) {
                      if (t in n)
                        throw new Error(
                          t + " cannot be alias for both " + a + " and " + n[t]
                        );
                      if (t in e)
                        throw new Error(
                          t +
                            " cannot be alias of " +
                            a +
                            " because it is a component."
                        );
                      n[t] = a;
                    });
                  }
                return n[r] || r;
              };
            })(u);
          (i = i.map(s)), (l = (l || []).map(s));
          const c = n(i),
            d = n(l);
          i.forEach(function e(n) {
            const r = u[n];
            t(r && r.require, function (t) {
              t in d || ((c[t] = !0), e(t));
            });
          });
          for (var f, p = r(u), m = c; a(m); ) {
            for (const g in ((f = {}), m)) {
              const h = u[g];
              t(h && h.modify, function (e) {
                e in d && (f[e] = !0);
              });
            }
            for (const v in d)
              if (!(v in c))
                for (const b in p(v))
                  if (b in c) {
                    f[v] = !0;
                    break;
                  }
            for (const y in (m = f)) c[y] = !0;
          }
          var w = {
            getIds: function () {
              const e = [];
              return (
                w.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, a) {
                const o = a ? a.series : void 0,
                  i = a ? a.parallel : e,
                  l = {},
                  u = {};
                function s(e) {
                  if (e in l) return l[e];
                  u[e] = !0;
                  let a,
                    c = [];
                  for (const d in t(e)) d in n && c.push(d);
                  if (c.length === 0) a = r(e);
                  else {
                    const f = i(
                      c.map(function (e) {
                        const t = s(e);
                        return delete u[e], t;
                      })
                    );
                    o
                      ? (a = o(f, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (l[e] = a);
                }
                for (const c in n) s(c);
                const d = [];
                for (const f in u) d.push(l[f]);
                return i(d);
              })(p, c, t, n);
            },
          };
          return w;
        };
      })();
      e.exports = t;
    },
    2703: function (e, t, n) {
      "use strict";
      const r = n(414);
      function a() {}
      function o() {}
      (o.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, o, i) {
            if (i !== r) {
              const l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          const n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    5697: function (e, t, n) {
      e.exports = n(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    4448: function (e, t, n) {
      "use strict";
      const r = n(7294),
        a = n(3840);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      const i = new Set(),
        l = {};
      function u(e, t) {
        s(e, t), s(e + "Capture", t);
      }
      function s(e, t) {
        for (l[e] = t, e = 0; e < t.length; e++) i.add(t[e]);
      }
      const c = !(
          typeof window === "undefined" ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        d = Object.prototype.hasOwnProperty,
        f =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = {},
        m = {};
      function g(e, t, n, r, a, o, i) {
        (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = i);
      }
      const h = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          h[e] = new g(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          const t = e[0];
          h[t] = new g(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            h[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          h[e] = new g(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            h[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          h[e] = new g(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          h[e] = new g(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          h[e] = new g(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          h[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      const v = /[\-:]([a-z])/g;
      function b(e) {
        return e[1].toUpperCase();
      }
      function y(e, t, n, r) {
        let a = h.hasOwnProperty(t) ? h[t] : null;
        (a !== null
          ? a.type !== 0
          : r ||
            !(t.length > 2) ||
            (t[0] !== "o" && t[0] !== "O") ||
            (t[1] !== "n" && t[1] !== "N")) &&
          ((function (e, t, n, r) {
            if (
              t == null ||
              (function (e, t, n, r) {
                if (n !== null && n.type === 0) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (n !== null
                        ? !n.acceptsBooleans
                        : (e = e.toLowerCase().slice(0, 5)) !== "data-" &&
                          e !== "aria-")
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (n !== null)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || t < 1;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || a === null
            ? (function (e) {
                return (
                  !!d.call(m, e) ||
                  (!d.call(p, e) &&
                    (f.test(e) ? (m[e] = !0) : ((p[e] = !0), !1)))
                );
              })(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = n === null ? a.type !== 3 && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              n === null
                ? e.removeAttribute(t)
                : ((n =
                    (a = a.type) === 3 || (a === 4 && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          const t = e.replace(v, b);
          h[t] = new g(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            const t = e.replace(v, b);
            h[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          const t = e.replace(v, b);
          h[t] = new g(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          h[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (h.xlinkHref = new g(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          h[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      const w = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        k = Symbol.for("react.element"),
        E = Symbol.for("react.portal"),
        S = Symbol.for("react.fragment"),
        x = Symbol.for("react.strict_mode"),
        C = Symbol.for("react.profiler"),
        T = Symbol.for("react.provider"),
        _ = Symbol.for("react.context"),
        A = Symbol.for("react.forward_ref"),
        L = Symbol.for("react.suspense"),
        N = Symbol.for("react.suspense_list"),
        R = Symbol.for("react.memo"),
        P = Symbol.for("react.lazy");
      Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
      const O = Symbol.for("react.offscreen");
      Symbol.for("react.legacy_hidden"),
        Symbol.for("react.cache"),
        Symbol.for("react.tracing_marker");
      const D = Symbol.iterator;
      function I(e) {
        return e === null || typeof e !== "object"
          ? null
          : typeof (e = (D && e[D]) || e["@@iterator"]) === "function"
          ? e
          : null;
      }
      let M,
        F = Object.assign;
      function j(e) {
        if (void 0 === M)
          try {
            throw Error();
          } catch (n) {
            const t = n.stack.trim().match(/\n( *(at )?)/);
            M = (t && t[1]) || "";
          }
        return "\n" + M + e;
      }
      let B = !1;
      function z(e, t) {
        if (!e || B) return "";
        B = !0;
        const n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              typeof Reflect === "object" && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (s) {
                var r = s;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (s) {
                r = s;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (s) {
              r = s;
            }
            e();
          }
        } catch (s) {
          if (s && r && typeof s.stack === "string") {
            for (
              var a = s.stack.split("\n"),
                o = r.stack.split("\n"),
                i = a.length - 1,
                l = o.length - 1;
              i >= 1 && l >= 0 && a[i] !== o[l];

            )
              l--;
            for (; i >= 1 && l >= 0; i--, l--)
              if (a[i] !== o[l]) {
                if (i !== 1 || l !== 1)
                  do {
                    if ((i--, --l < 0 || a[i] !== o[l])) {
                      let u = "\n" + a[i].replace(" at new ", " at ");
                      return (
                        e.displayName &&
                          u.includes("<anonymous>") &&
                          (u = u.replace("<anonymous>", e.displayName)),
                        u
                      );
                    }
                  } while (i >= 1 && l >= 0);
                break;
              }
          }
        } finally {
          (B = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? j(e) : "";
      }
      function U(e) {
        switch (e.tag) {
          case 5:
            return j(e.type);
          case 16:
            return j("Lazy");
          case 13:
            return j("Suspense");
          case 19:
            return j("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = z(e.type, !1));
          case 11:
            return (e = z(e.type.render, !1));
          case 1:
            return (e = z(e.type, !0));
          default:
            return "";
        }
      }
      function $(e) {
        if (e == null) return null;
        if (typeof e === "function") return e.displayName || e.name || null;
        if (typeof e === "string") return e;
        switch (e) {
          case S:
            return "Fragment";
          case E:
            return "Portal";
          case C:
            return "Profiler";
          case x:
            return "StrictMode";
          case L:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if (typeof e === "object")
          switch (e.$$typeof) {
            case _:
              return (e.displayName || "Context") + ".Consumer";
            case T:
              return (e._context.displayName || "Context") + ".Provider";
            case A:
              var t = e.render;
              return (
                (e = e.displayName) ||
                  (e =
                    (e = t.displayName || t.name || "") !== ""
                      ? "ForwardRef(" + e + ")"
                      : "ForwardRef"),
                e
              );
            case R:
              return (t = e.displayName || null) !== null
                ? t
                : $(e.type) || "Memo";
            case P:
              (t = e._payload), (e = e._init);
              try {
                return $(e(t));
              } catch (n) {}
          }
        return null;
      }
      function q(e) {
        const t = e.type;
        switch (e.tag) {
          case 24:
            return "Cache";
          case 9:
            return (t.displayName || "Context") + ".Consumer";
          case 10:
            return (t._context.displayName || "Context") + ".Provider";
          case 18:
            return "DehydratedFragment";
          case 11:
            return (
              (e = (e = t.render).displayName || e.name || ""),
              t.displayName ||
                (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
          case 7:
            return "Fragment";
          case 5:
            return t;
          case 4:
            return "Portal";
          case 3:
            return "Root";
          case 6:
            return "Text";
          case 16:
            return $(t);
          case 8:
            return t === x ? "StrictMode" : "Mode";
          case 22:
            return "Offscreen";
          case 12:
            return "Profiler";
          case 21:
            return "Scope";
          case 13:
            return "Suspense";
          case 19:
            return "SuspenseList";
          case 25:
            return "TracingMarker";
          case 1:
          case 0:
          case 17:
          case 2:
          case 14:
          case 15:
            if (typeof t === "function") return t.displayName || t.name || null;
            if (typeof t === "string") return t;
        }
        return null;
      }
      function H(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "string":
          case "undefined":
          case "object":
            return e;
          default:
            return "";
        }
      }
      function Z(e) {
        const t = e.type;
        return (
          (e = e.nodeName) &&
          e.toLowerCase() === "input" &&
          (t === "checkbox" || t === "radio")
        );
      }
      function G(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            let t = Z(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              typeof n.get === "function" &&
              typeof n.set === "function"
            ) {
              const a = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function V(e) {
        if (!e) return !1;
        const t = e._valueTracker;
        if (!t) return !0;
        let n = t.getValue(),
          r = "";
        return (
          e && (r = Z(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function W(e) {
        if (
          void 0 ===
          (e = e || (typeof document !== "undefined" ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Y(e, t) {
        const n = t.checked;
        return F({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: n != null ? n : e._wrapperState.initialChecked,
        });
      }
      function K(e, t) {
        let n = t.defaultValue == null ? "" : t.defaultValue,
          r = t.checked != null ? t.checked : t.defaultChecked;
        (n = H(t.value != null ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              t.type === "checkbox" || t.type === "radio"
                ? t.checked != null
                : t.value != null,
          });
      }
      function Q(e, t) {
        (t = t.checked) != null && y(e, "checked", t, !1);
      }
      function X(e, t) {
        Q(e, t);
        const n = H(t.value),
          r = t.type;
        if (n != null)
          r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if (r === "submit" || r === "reset")
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ee(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ee(e, t.type, H(t.defaultValue)),
          t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function J(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          const r = t.type;
          if (
            !(
              (r !== "submit" && r !== "reset") ||
              (void 0 !== t.value && t.value !== null)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        (n = e.name) !== "" && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          n !== "" && (e.name = n);
      }
      function ee(e, t, n) {
        (t === "number" && W(e.ownerDocument) === e) ||
          (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      const te = Array.isArray;
      function ne(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + H(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            t !== null || e[a].disabled || (t = e[a]);
          }
          t !== null && (t.selected = !0);
        }
      }
      function re(e, t) {
        if (t.dangerouslySetInnerHTML != null) throw Error(o(91));
        return F({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function ae(e, t) {
        let n = t.value;
        if (n == null) {
          if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(o(92));
            if (te(n)) {
              if (n.length > 1) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          t == null && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: H(n) };
      }
      function oe(e, t) {
        let n = H(t.value),
          r = H(t.defaultValue);
        n != null &&
          ((n = "" + n) !== e.value && (e.value = n),
          t.defaultValue == null &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          r != null && (e.defaultValue = "" + r);
      }
      function ie(e) {
        const t = e.textContent;
        t === e._wrapperState.initialValue &&
          t !== "" &&
          t !== null &&
          (e.value = t);
      }
      function le(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function ue(e, t) {
        return e == null || e === "http://www.w3.org/1999/xhtml"
          ? le(t)
          : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      let se,
        ce,
        de =
          ((ce = function (e, t) {
            if (
              e.namespaceURI !== "http://www.w3.org/2000/svg" ||
              "innerHTML" in e
            )
              e.innerHTML = t;
            else {
              for (
                (se = se || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = se.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          typeof MSApp !== "undefined" && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ce(e, t);
                });
              }
            : ce);
      function fe(e, t) {
        if (t) {
          const n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      const pe = {
          animationIterationCount: !0,
          aspectRatio: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        me = ["Webkit", "ms", "Moz", "O"];
      function ge(e, t, n) {
        return t == null || typeof t === "boolean" || t === ""
          ? ""
          : n ||
            typeof t !== "number" ||
            t === 0 ||
            (pe.hasOwnProperty(e) && pe[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function he(e, t) {
        for (let n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            const r = n.indexOf("--") === 0,
              a = ge(n, t[n], r);
            n === "float" && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(pe).forEach(function (e) {
        me.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (pe[t] = pe[e]);
        });
      });
      const ve = F(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function be(e, t) {
        if (t) {
          if (
            ve[e] &&
            (t.children != null || t.dangerouslySetInnerHTML != null)
          )
            throw Error(o(137, e));
          if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(o(60));
            if (
              typeof t.dangerouslySetInnerHTML !== "object" ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (t.style != null && typeof t.style !== "object")
            throw Error(o(62));
        }
      }
      function ye(e, t) {
        if (e.indexOf("-") === -1) return typeof t.is === "string";
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      let we = null;
      function ke(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          e.nodeType === 3 ? e.parentNode : e
        );
      }
      let Ee = null,
        Se = null,
        xe = null;
      function Ce(e) {
        if ((e = ya(e))) {
          if (typeof Ee !== "function") throw Error(o(280));
          let t = e.stateNode;
          t && ((t = ka(t)), Ee(e.stateNode, e.type, t));
        }
      }
      function Te(e) {
        Se ? (xe ? xe.push(e) : (xe = [e])) : (Se = e);
      }
      function _e() {
        if (Se) {
          let e = Se,
            t = xe;
          if (((xe = Se = null), Ce(e), t))
            for (e = 0; e < t.length; e++) Ce(t[e]);
        }
      }
      function Ae(e, t) {
        return e(t);
      }
      function Le() {}
      let Ne = !1;
      function Re(e, t, n) {
        if (Ne) return e(t, n);
        Ne = !0;
        try {
          return Ae(e, t, n);
        } finally {
          (Ne = !1), (Se !== null || xe !== null) && (Le(), _e());
        }
      }
      function Pe(e, t) {
        let n = e.stateNode;
        if (n === null) return null;
        let r = ka(n);
        if (r === null) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                (e = e.type) === "button" ||
                e === "input" ||
                e === "select" ||
                e === "textarea"
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && typeof n !== "function") throw Error(o(231, t, typeof n));
        return n;
      }
      let Oe = !1;
      if (c)
        try {
          const De = {};
          Object.defineProperty(De, "passive", {
            get: function () {
              Oe = !0;
            },
          }),
            window.addEventListener("test", De, De),
            window.removeEventListener("test", De, De);
        } catch (ce) {
          Oe = !1;
        }
      function Ie(e, t, n, r, a, o, i, l, u) {
        const s = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, s);
        } catch (c) {
          this.onError(c);
        }
      }
      let Me = !1,
        Fe = null,
        je = !1,
        Be = null,
        ze = {
          onError: function (e) {
            (Me = !0), (Fe = e);
          },
        };
      function Ue(e, t, n, r, a, o, i, l, u) {
        (Me = !1), (Fe = null), Ie.apply(ze, arguments);
      }
      function $e(e) {
        let t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            (4098 & (t = e).flags) != 0 && (n = t.return), (e = t.return);
          } while (e);
        }
        return t.tag === 3 ? n : null;
      }
      function qe(e) {
        if (e.tag === 13) {
          let t = e.memoizedState;
          if (
            (t === null && (e = e.alternate) !== null && (t = e.memoizedState),
            t !== null)
          )
            return t.dehydrated;
        }
        return null;
      }
      function He(e) {
        if ($e(e) !== e) throw Error(o(188));
      }
      function Ze(e) {
        return (e = (function (e) {
          let t = e.alternate;
          if (!t) {
            if ((t = $e(e)) === null) throw Error(o(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            const a = n.return;
            if (a === null) break;
            let i = a.alternate;
            if (i === null) {
              if ((r = a.return) !== null) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === i.child) {
              for (i = a.child; i; ) {
                if (i === n) return He(a), e;
                if (i === r) return He(a), t;
                i = i.sibling;
              }
              throw Error(o(188));
            }
            if (n.return !== r.return) (n = a), (r = i);
            else {
              for (var l = !1, u = a.child; u; ) {
                if (u === n) {
                  (l = !0), (n = a), (r = i);
                  break;
                }
                if (u === r) {
                  (l = !0), (r = a), (n = i);
                  break;
                }
                u = u.sibling;
              }
              if (!l) {
                for (u = i.child; u; ) {
                  if (u === n) {
                    (l = !0), (n = i), (r = a);
                    break;
                  }
                  if (u === r) {
                    (l = !0), (r = i), (n = a);
                    break;
                  }
                  u = u.sibling;
                }
                if (!l) throw Error(o(189));
              }
            }
            if (n.alternate !== r) throw Error(o(190));
          }
          if (n.tag !== 3) throw Error(o(188));
          return n.stateNode.current === n ? e : t;
        })(e)) !== null
          ? Ge(e)
          : null;
      }
      function Ge(e) {
        if (e.tag === 5 || e.tag === 6) return e;
        for (e = e.child; e !== null; ) {
          const t = Ge(e);
          if (t !== null) return t;
          e = e.sibling;
        }
        return null;
      }
      let Ve = a.unstable_scheduleCallback,
        We = a.unstable_cancelCallback,
        Ye = a.unstable_shouldYield,
        Ke = a.unstable_requestPaint,
        Qe = a.unstable_now,
        Xe = a.unstable_getCurrentPriorityLevel,
        Je = a.unstable_ImmediatePriority,
        et = a.unstable_UserBlockingPriority,
        tt = a.unstable_NormalPriority,
        nt = a.unstable_LowPriority,
        rt = a.unstable_IdlePriority,
        at = null,
        ot = null;
      var it = Math.clz32
          ? Math.clz32
          : function (e) {
              return (e >>>= 0) === 0 ? 32 : (31 - ((lt(e) / ut) | 0)) | 0;
            },
        lt = Math.log,
        ut = Math.LN2;
      let st = 64,
        ct = 4194304;
      function dt(e) {
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return 4194240 & e;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            return 130023424 & e;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 1073741824;
          default:
            return e;
        }
      }
      function ft(e, t) {
        let n = e.pendingLanes;
        if (n === 0) return 0;
        let r = 0,
          a = e.suspendedLanes,
          o = e.pingedLanes,
          i = 268435455 & n;
        if (i !== 0) {
          const l = i & ~a;
          l !== 0 ? (r = dt(l)) : (o &= i) !== 0 && (r = dt(o));
        } else (i = n & ~a) !== 0 ? (r = dt(i)) : o !== 0 && (r = dt(o));
        if (r === 0) return 0;
        if (
          t !== 0 &&
          t !== r &&
          (t & a) == 0 &&
          ((a = r & -r) >= (o = t & -t) || (a === 16 && (4194240 & o) != 0))
        )
          return t;
        if (((4 & r) != 0 && (r |= 16 & n), (t = e.entangledLanes) !== 0))
          for (e = e.entanglements, t &= r; t > 0; )
            (a = 1 << (n = 31 - it(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function pt(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
            return t + 250;
          case 8:
          case 16:
          case 32:
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          default:
            return -1;
        }
      }
      function mt(e) {
        return (e = -1073741825 & e.pendingLanes) !== 0
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function gt() {
        const e = st;
        return (4194240 & (st <<= 1)) == 0 && (st = 64), e;
      }
      function ht(e) {
        for (var t = [], n = 0; n < 31; n++) t.push(e);
        return t;
      }
      function vt(e, t, n) {
        (e.pendingLanes |= t),
          t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
          ((e = e.eventTimes)[(t = 31 - it(t))] = n);
      }
      function bt(e, t) {
        let n = (e.entangledLanes |= t);
        for (e = e.entanglements; n; ) {
          const r = 31 - it(n),
            a = 1 << r;
          (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
        }
      }
      let yt = 0;
      function wt(e) {
        return (e &= -e) > 1
          ? e > 4
            ? (268435455 & e) != 0
              ? 16
              : 536870912
            : 4
          : 1;
      }
      let kt,
        Et,
        St,
        xt,
        Ct,
        Tt = !1,
        _t = [],
        At = null,
        Lt = null,
        Nt = null,
        Rt = new Map(),
        Pt = new Map(),
        Ot = [],
        Dt =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function It(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            At = null;
            break;
          case "dragenter":
          case "dragleave":
            Lt = null;
            break;
          case "mouseover":
          case "mouseout":
            Nt = null;
            break;
          case "pointerover":
          case "pointerout":
            Rt.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            Pt.delete(t.pointerId);
        }
      }
      function Mt(e, t, n, r, a, o) {
        return e === null || e.nativeEvent !== o
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: o,
              targetContainers: [a],
            }),
            t !== null && (t = ya(t)) !== null && Et(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            a !== null && t.indexOf(a) === -1 && t.push(a),
            e);
      }
      function Ft(e) {
        let t = ba(e.target);
        if (t !== null) {
          const n = $e(t);
          if (n !== null)
            if ((t = n.tag) === 13) {
              if ((t = qe(n)) !== null)
                return (
                  (e.blockedOn = t),
                  void Ct(e.priority, function () {
                    St(n);
                  })
                );
            } else if (
              t === 3 &&
              n.stateNode.current.memoizedState.isDehydrated
            )
              return void (e.blockedOn =
                n.tag === 3 ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function jt(e) {
        if (e.blockedOn !== null) return !1;
        for (let t = e.targetContainers; t.length > 0; ) {
          let n = Yt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (n !== null)
            return (t = ya(n)) !== null && Et(t), (e.blockedOn = n), !1;
          const r = new (n = e.nativeEvent).constructor(n.type, n);
          (we = r), n.target.dispatchEvent(r), (we = null), t.shift();
        }
        return !0;
      }
      function Bt(e, t, n) {
        jt(e) && n.delete(t);
      }
      function zt() {
        (Tt = !1),
          At !== null && jt(At) && (At = null),
          Lt !== null && jt(Lt) && (Lt = null),
          Nt !== null && jt(Nt) && (Nt = null),
          Rt.forEach(Bt),
          Pt.forEach(Bt);
      }
      function Ut(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          Tt ||
            ((Tt = !0),
            a.unstable_scheduleCallback(a.unstable_NormalPriority, zt)));
      }
      function $t(e) {
        function t(t) {
          return Ut(t, e);
        }
        if (_t.length > 0) {
          Ut(_t[0], e);
          for (var n = 1; n < _t.length; n++) {
            var r = _t[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          At !== null && Ut(At, e),
            Lt !== null && Ut(Lt, e),
            Nt !== null && Ut(Nt, e),
            Rt.forEach(t),
            Pt.forEach(t),
            n = 0;
          n < Ot.length;
          n++
        )
          (r = Ot[n]).blockedOn === e && (r.blockedOn = null);
        for (; Ot.length > 0 && (n = Ot[0]).blockedOn === null; )
          Ft(n), n.blockedOn === null && Ot.shift();
      }
      let qt = w.ReactCurrentBatchConfig,
        Ht = !0;
      function Zt(e, t, n, r) {
        const a = yt,
          o = qt.transition;
        qt.transition = null;
        try {
          (yt = 1), Vt(e, t, n, r);
        } finally {
          (yt = a), (qt.transition = o);
        }
      }
      function Gt(e, t, n, r) {
        const a = yt,
          o = qt.transition;
        qt.transition = null;
        try {
          (yt = 4), Vt(e, t, n, r);
        } finally {
          (yt = a), (qt.transition = o);
        }
      }
      function Vt(e, t, n, r) {
        if (Ht) {
          let a = Yt(e, t, n, r);
          if (a === null) Hr(e, t, r, Wt, n), It(e, r);
          else if (
            (function (e, t, n, r, a) {
              switch (t) {
                case "focusin":
                  return (At = Mt(At, e, t, n, r, a)), !0;
                case "dragenter":
                  return (Lt = Mt(Lt, e, t, n, r, a)), !0;
                case "mouseover":
                  return (Nt = Mt(Nt, e, t, n, r, a)), !0;
                case "pointerover":
                  var o = a.pointerId;
                  return Rt.set(o, Mt(Rt.get(o) || null, e, t, n, r, a)), !0;
                case "gotpointercapture":
                  return (
                    (o = a.pointerId),
                    Pt.set(o, Mt(Pt.get(o) || null, e, t, n, r, a)),
                    !0
                  );
              }
              return !1;
            })(a, e, t, n, r)
          )
            r.stopPropagation();
          else if ((It(e, r), 4 & t && Dt.indexOf(e) > -1)) {
            for (; a !== null; ) {
              let o = ya(a);
              if (
                (o !== null && kt(o),
                (o = Yt(e, t, n, r)) === null && Hr(e, t, r, Wt, n),
                o === a)
              )
                break;
              a = o;
            }
            a !== null && r.stopPropagation();
          } else Hr(e, t, r, null, n);
        }
      }
      var Wt = null;
      function Yt(e, t, n, r) {
        if (((Wt = null), (e = ba((e = ke(r)))) !== null))
          if ((t = $e(e)) === null) e = null;
          else if ((n = t.tag) === 13) {
            if ((e = qe(t)) !== null) return e;
            e = null;
          } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
              return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
          } else t !== e && (e = null);
        return (Wt = e), null;
      }
      function Kt(e) {
        switch (e) {
          case "cancel":
          case "click":
          case "close":
          case "contextmenu":
          case "copy":
          case "cut":
          case "auxclick":
          case "dblclick":
          case "dragend":
          case "dragstart":
          case "drop":
          case "focusin":
          case "focusout":
          case "input":
          case "invalid":
          case "keydown":
          case "keypress":
          case "keyup":
          case "mousedown":
          case "mouseup":
          case "paste":
          case "pause":
          case "play":
          case "pointercancel":
          case "pointerdown":
          case "pointerup":
          case "ratechange":
          case "reset":
          case "resize":
          case "seeked":
          case "submit":
          case "touchcancel":
          case "touchend":
          case "touchstart":
          case "volumechange":
          case "change":
          case "selectionchange":
          case "textInput":
          case "compositionstart":
          case "compositionend":
          case "compositionupdate":
          case "beforeblur":
          case "afterblur":
          case "beforeinput":
          case "blur":
          case "fullscreenchange":
          case "focus":
          case "hashchange":
          case "popstate":
          case "select":
          case "selectstart":
            return 1;
          case "drag":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "mousemove":
          case "mouseout":
          case "mouseover":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "scroll":
          case "toggle":
          case "touchmove":
          case "wheel":
          case "mouseenter":
          case "mouseleave":
          case "pointerenter":
          case "pointerleave":
            return 4;
          case "message":
            switch (Xe()) {
              case Je:
                return 1;
              case et:
                return 4;
              case tt:
              case nt:
                return 16;
              case rt:
                return 536870912;
              default:
                return 16;
            }
          default:
            return 16;
        }
      }
      let Qt = null,
        Xt = null,
        Jt = null;
      function en() {
        if (Jt) return Jt;
        let e,
          t,
          n = Xt,
          r = n.length,
          a = "value" in Qt ? Qt.value : Qt.textContent,
          o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        const i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return (Jt = a.slice(e, t > 1 ? 1 - t : void 0));
      }
      function tn(e) {
        const t = e.keyCode;
        return (
          "charCode" in e
            ? (e = e.charCode) === 0 && t === 13 && (e = 13)
            : (e = t),
          e === 10 && (e = 13),
          e >= 32 || e === 13 ? e : 0
        );
      }
      function nn() {
        return !0;
      }
      function rn() {
        return !1;
      }
      function an(e) {
        function t(t, n, r, a, o) {
          for (const i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
          return (
            (this.isDefaultPrevented = (
              a.defaultPrevented != null
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? nn
              : rn),
            (this.isPropagationStopped = rn),
            this
          );
        }
        return (
          F(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              const e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : typeof e.returnValue !== "unknown" && (e.returnValue = !1),
                (this.isDefaultPrevented = nn));
            },
            stopPropagation: function () {
              const e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : typeof e.cancelBubble !== "unknown" &&
                    (e.cancelBubble = !0),
                (this.isPropagationStopped = nn));
            },
            persist: function () {},
            isPersistent: nn,
          }),
          t
        );
      }
      let on,
        ln,
        un,
        sn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        cn = an(sn),
        dn = F({}, sn, { view: 0, detail: 0 }),
        fn = an(dn),
        pn = F({}, dn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: Cn,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== un &&
                  (un && e.type === "mousemove"
                    ? ((on = e.screenX - un.screenX),
                      (ln = e.screenY - un.screenY))
                    : (ln = on = 0),
                  (un = e)),
                on);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : ln;
          },
        }),
        mn = an(pn),
        gn = an(F({}, pn, { dataTransfer: 0 })),
        hn = an(F({}, dn, { relatedTarget: 0 })),
        vn = an(
          F({}, sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        bn = F({}, sn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        yn = an(bn),
        wn = an(F({}, sn, { data: 0 })),
        kn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        En = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Sn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function xn(e) {
        const t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Sn[e]) && !!t[e];
      }
      function Cn() {
        return xn;
      }
      let Tn = F({}, dn, {
          key: function (e) {
            if (e.key) {
              const t = kn[e.key] || e.key;
              if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
              ? (e = tn(e)) === 13
                ? "Enter"
                : String.fromCharCode(e)
              : e.type === "keydown" || e.type === "keyup"
              ? En[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: Cn,
          charCode: function (e) {
            return e.type === "keypress" ? tn(e) : 0;
          },
          keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
          },
          which: function (e) {
            return e.type === "keypress"
              ? tn(e)
              : e.type === "keydown" || e.type === "keyup"
              ? e.keyCode
              : 0;
          },
        }),
        _n = an(Tn),
        An = an(
          F({}, pn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Ln = an(
          F({}, dn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Cn,
          })
        ),
        Nn = an(
          F({}, sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Rn = F({}, pn, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        Pn = an(Rn),
        On = [9, 13, 27, 32],
        Dn = c && "CompositionEvent" in window,
        In = null;
      c && "documentMode" in document && (In = document.documentMode);
      let Mn = c && "TextEvent" in window && !In,
        Fn = c && (!Dn || (In && In > 8 && In <= 11)),
        jn = String.fromCharCode(32),
        Bn = !1;
      function zn(e, t) {
        switch (e) {
          case "keyup":
            return On.indexOf(t.keyCode) !== -1;
          case "keydown":
            return t.keyCode !== 229;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function Un(e) {
        return typeof (e = e.detail) === "object" && "data" in e
          ? e.data
          : null;
      }
      let $n = !1;
      const qn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Hn(e) {
        const t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === "input" ? !!qn[e.type] : t === "textarea";
      }
      function Zn(e, t, n, r) {
        Te(r),
          (t = Gr(t, "onChange")).length > 0 &&
            ((n = new cn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      let Gn = null,
        Vn = null;
      function Wn(e) {
        jr(e, 0);
      }
      function Yn(e) {
        if (V(wa(e))) return e;
      }
      function Kn(e, t) {
        if (e === "change") return t;
      }
      let Qn = !1;
      if (c) {
        let Xn;
        if (c) {
          let Jn = "oninput" in document;
          if (!Jn) {
            const er = document.createElement("div");
            er.setAttribute("oninput", "return;"),
              (Jn = typeof er.oninput === "function");
          }
          Xn = Jn;
        } else Xn = !1;
        Qn = Xn && (!document.documentMode || document.documentMode > 9);
      }
      function tr() {
        Gn && (Gn.detachEvent("onpropertychange", nr), (Vn = Gn = null));
      }
      function nr(e) {
        if (e.propertyName === "value" && Yn(Vn)) {
          const t = [];
          Zn(t, Vn, e, ke(e)), Re(Wn, t);
        }
      }
      function rr(e, t, n) {
        e === "focusin"
          ? (tr(), (Vn = n), (Gn = t).attachEvent("onpropertychange", nr))
          : e === "focusout" && tr();
      }
      function ar(e) {
        if (e === "selectionchange" || e === "keyup" || e === "keydown")
          return Yn(Vn);
      }
      function or(e, t) {
        if (e === "click") return Yn(t);
      }
      function ir(e, t) {
        if (e === "input" || e === "change") return Yn(t);
      }
      const lr =
        typeof Object.is === "function"
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (e !== 0 || 1 / e == 1 / t)) || (e != e && t != t)
              );
            };
      function ur(e, t) {
        if (lr(e, t)) return !0;
        if (
          typeof e !== "object" ||
          e === null ||
          typeof t !== "object" ||
          t === null
        )
          return !1;
        let n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          const a = n[r];
          if (!d.call(t, a) || !lr(e[a], t[a])) return !1;
        }
        return !0;
      }
      function sr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function cr(e, t) {
        let n,
          r = sr(e);
        for (e = 0; r; ) {
          if (r.nodeType === 3) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = sr(r);
        }
      }
      function dr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || e.nodeType !== 3) &&
              (t && t.nodeType === 3
                ? dr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function fr() {
        for (var e = window, t = W(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = typeof t.contentWindow.location.href === "string";
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = W((e = t.contentWindow).document);
        }
        return t;
      }
      function pr(e) {
        const t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          ((t === "input" &&
            (e.type === "text" ||
              e.type === "search" ||
              e.type === "tel" ||
              e.type === "url" ||
              e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
        );
      }
      function mr(e) {
        let t = fr(),
          n = e.focusedElem,
          r = e.selectionRange;
        if (
          t !== n &&
          n &&
          n.ownerDocument &&
          dr(n.ownerDocument.documentElement, n)
        ) {
          if (r !== null && pr(n))
            if (
              ((t = r.start),
              void 0 === (e = r.end) && (e = t),
              "selectionStart" in n)
            )
              (n.selectionStart = t),
                (n.selectionEnd = Math.min(e, n.value.length));
            else if (
              (e =
                ((t = n.ownerDocument || document) && t.defaultView) || window)
                .getSelection
            ) {
              e = e.getSelection();
              let a = n.textContent.length,
                o = Math.min(r.start, a);
              (r = void 0 === r.end ? o : Math.min(r.end, a)),
                !e.extend && o > r && ((a = r), (r = o), (o = a)),
                (a = cr(n, o));
              const i = cr(n, r);
              a &&
                i &&
                (e.rangeCount !== 1 ||
                  e.anchorNode !== a.node ||
                  e.anchorOffset !== a.offset ||
                  e.focusNode !== i.node ||
                  e.focusOffset !== i.offset) &&
                ((t = t.createRange()).setStart(a.node, a.offset),
                e.removeAllRanges(),
                o > r
                  ? (e.addRange(t), e.extend(i.node, i.offset))
                  : (t.setEnd(i.node, i.offset), e.addRange(t)));
            }
          for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
              t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
          for (
            typeof n.focus === "function" && n.focus(), n = 0;
            n < t.length;
            n++
          )
            ((e = t[n]).element.scrollLeft = e.left),
              (e.element.scrollTop = e.top);
        }
      }
      let gr = c && "documentMode" in document && document.documentMode <= 11,
        hr = null,
        vr = null,
        br = null,
        yr = !1;
      function wr(e, t, n) {
        let r =
          n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        yr ||
          hr == null ||
          hr !== W(r) ||
          ("selectionStart" in (r = hr) && pr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (br && ur(br, r)) ||
            ((br = r),
            (r = Gr(vr, "onSelect")).length > 0 &&
              ((t = new cn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = hr))));
      }
      function kr(e, t) {
        const n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      let Er = {
          animationend: kr("Animation", "AnimationEnd"),
          animationiteration: kr("Animation", "AnimationIteration"),
          animationstart: kr("Animation", "AnimationStart"),
          transitionend: kr("Transition", "TransitionEnd"),
        },
        Sr = {},
        xr = {};
      function Cr(e) {
        if (Sr[e]) return Sr[e];
        if (!Er[e]) return e;
        let t,
          n = Er[e];
        for (t in n) if (n.hasOwnProperty(t) && t in xr) return (Sr[e] = n[t]);
        return e;
      }
      c &&
        ((xr = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete Er.animationend.animation,
          delete Er.animationiteration.animation,
          delete Er.animationstart.animation),
        "TransitionEvent" in window || delete Er.transitionend.transition);
      const Tr = Cr("animationend"),
        _r = Cr("animationiteration"),
        Ar = Cr("animationstart"),
        Lr = Cr("transitionend"),
        Nr = new Map(),
        Rr =
          "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
          );
      function Pr(e, t) {
        Nr.set(e, t), u(t, [e]);
      }
      for (let Or = 0; Or < Rr.length; Or++) {
        const Dr = Rr[Or];
        Pr(Dr.toLowerCase(), "on" + (Dr[0].toUpperCase() + Dr.slice(1)));
      }
      Pr(Tr, "onAnimationEnd"),
        Pr(_r, "onAnimationIteration"),
        Pr(Ar, "onAnimationStart"),
        Pr("dblclick", "onDoubleClick"),
        Pr("focusin", "onFocus"),
        Pr("focusout", "onBlur"),
        Pr(Lr, "onTransitionEnd"),
        s("onMouseEnter", ["mouseout", "mouseover"]),
        s("onMouseLeave", ["mouseout", "mouseover"]),
        s("onPointerEnter", ["pointerout", "pointerover"]),
        s("onPointerLeave", ["pointerout", "pointerover"]),
        u(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        u(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        u("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        u(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        u(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      const Ir =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Mr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Ir)
        );
      function Fr(e, t, n) {
        const r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, i, l, u, s) {
            if ((Ue.apply(this, arguments), Me)) {
              if (!Me) throw Error(o(198));
              const c = Fe;
              (Me = !1), (Fe = null), je || ((je = !0), (Be = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function jr(e, t) {
        t = (4 & t) != 0;
        for (let n = 0; n < e.length; n++) {
          let r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            let o = void 0;
            if (t)
              for (var i = r.length - 1; i >= 0; i--) {
                var l = r[i],
                  u = l.instance,
                  s = l.currentTarget;
                if (((l = l.listener), u !== o && a.isPropagationStopped()))
                  break e;
                Fr(a, l, s), (o = u);
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((u = (l = r[i]).instance),
                  (s = l.currentTarget),
                  (l = l.listener),
                  u !== o && a.isPropagationStopped())
                )
                  break e;
                Fr(a, l, s), (o = u);
              }
          }
        }
        if (je) throw ((e = Be), (je = !1), (Be = null), e);
      }
      function Br(e, t) {
        let n = t[ga];
        void 0 === n && (n = t[ga] = new Set());
        const r = e + "__bubble";
        n.has(r) || (qr(t, e, 2, !1), n.add(r));
      }
      function zr(e, t, n) {
        let r = 0;
        t && (r |= 4), qr(n, e, r, t);
      }
      const Ur = "_reactListening" + Math.random().toString(36).slice(2);
      function $r(e) {
        if (!e[Ur]) {
          (e[Ur] = !0),
            i.forEach(function (t) {
              t !== "selectionchange" &&
                (Mr.has(t) || zr(t, !1, e), zr(t, !0, e));
            });
          const t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[Ur] || ((t[Ur] = !0), zr("selectionchange", !1, t));
        }
      }
      function qr(e, t, n, r) {
        switch (Kt(t)) {
          case 1:
            var a = Zt;
            break;
          case 4:
            a = Gt;
            break;
          default:
            a = Vt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !Oe ||
            (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Hr(e, t, n, r, a) {
        let o = r;
        if ((1 & t) == 0 && (2 & t) == 0 && r !== null)
          e: for (;;) {
            if (r === null) return;
            let i = r.tag;
            if (i === 3 || i === 4) {
              let l = r.stateNode.containerInfo;
              if (l === a || (l.nodeType === 8 && l.parentNode === a)) break;
              if (i === 4)
                for (i = r.return; i !== null; ) {
                  var u = i.tag;
                  if (
                    (u === 3 || u === 4) &&
                    ((u = i.stateNode.containerInfo) === a ||
                      (u.nodeType === 8 && u.parentNode === a))
                  )
                    return;
                  i = i.return;
                }
              for (; l !== null; ) {
                if ((i = ba(l)) === null) return;
                if ((u = i.tag) === 5 || u === 6) {
                  r = o = i;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        Re(function () {
          let r = o,
            a = ke(n),
            i = [];
          e: {
            var l = Nr.get(e);
            if (void 0 !== l) {
              var u = cn,
                s = e;
              switch (e) {
                case "keypress":
                  if (tn(n) === 0) break e;
                case "keydown":
                case "keyup":
                  u = _n;
                  break;
                case "focusin":
                  (s = "focus"), (u = hn);
                  break;
                case "focusout":
                  (s = "blur"), (u = hn);
                  break;
                case "beforeblur":
                case "afterblur":
                  u = hn;
                  break;
                case "click":
                  if (n.button === 2) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  u = mn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  u = gn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  u = Ln;
                  break;
                case Tr:
                case _r:
                case Ar:
                  u = vn;
                  break;
                case Lr:
                  u = Nn;
                  break;
                case "scroll":
                  u = fn;
                  break;
                case "wheel":
                  u = Pn;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  u = yn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  u = An;
              }
              var c = (4 & t) != 0,
                d = !c && e === "scroll",
                f = c ? (l !== null ? l + "Capture" : null) : l;
              c = [];
              for (var p, m = r; m !== null; ) {
                var g = (p = m).stateNode;
                if (
                  (p.tag === 5 &&
                    g !== null &&
                    ((p = g),
                    f !== null &&
                      (g = Pe(m, f)) != null &&
                      c.push(Zr(m, g, p))),
                  d)
                )
                  break;
                m = m.return;
              }
              c.length > 0 &&
                ((l = new u(l, s, null, n, a)),
                i.push({ event: l, listeners: c }));
            }
          }
          if ((7 & t) == 0) {
            if (
              ((u = e === "mouseout" || e === "pointerout"),
              (!(l = e === "mouseover" || e === "pointerover") ||
                n === we ||
                !(s = n.relatedTarget || n.fromElement) ||
                (!ba(s) && !s[ma])) &&
                (u || l) &&
                ((l =
                  a.window === a
                    ? a
                    : (l = a.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                u
                  ? ((u = r),
                    (s = (s = n.relatedTarget || n.toElement)
                      ? ba(s)
                      : null) !== null &&
                      (s !== (d = $e(s)) || (s.tag !== 5 && s.tag !== 6)) &&
                      (s = null))
                  : ((u = null), (s = r)),
                u !== s))
            ) {
              if (
                ((c = mn),
                (g = "onMouseLeave"),
                (f = "onMouseEnter"),
                (m = "mouse"),
                (e !== "pointerout" && e !== "pointerover") ||
                  ((c = An),
                  (g = "onPointerLeave"),
                  (f = "onPointerEnter"),
                  (m = "pointer")),
                (d = u == null ? l : wa(u)),
                (p = s == null ? l : wa(s)),
                ((l = new c(g, m + "leave", u, n, a)).target = d),
                (l.relatedTarget = p),
                (g = null),
                ba(a) === r &&
                  (((c = new c(f, m + "enter", s, n, a)).target = p),
                  (c.relatedTarget = d),
                  (g = c)),
                (d = g),
                u && s)
              )
                e: {
                  for (f = s, m = 0, p = c = u; p; p = Vr(p)) m++;
                  for (p = 0, g = f; g; g = Vr(g)) p++;
                  for (; m - p > 0; ) (c = Vr(c)), m--;
                  for (; p - m > 0; ) (f = Vr(f)), p--;
                  for (; m--; ) {
                    if (c === f || (f !== null && c === f.alternate)) break e;
                    (c = Vr(c)), (f = Vr(f));
                  }
                  c = null;
                }
              else c = null;
              u !== null && Wr(i, l, u, c, !1),
                s !== null && d !== null && Wr(i, d, s, c, !0);
            }
            if (
              (u =
                (l = r ? wa(r) : window).nodeName &&
                l.nodeName.toLowerCase()) === "select" ||
              (u === "input" && l.type === "file")
            )
              var h = Kn;
            else if (Hn(l))
              if (Qn) h = ir;
              else {
                h = ar;
                var v = rr;
              }
            else
              (u = l.nodeName) &&
                u.toLowerCase() === "input" &&
                (l.type === "checkbox" || l.type === "radio") &&
                (h = or);
            switch (
              (h && (h = h(e, r))
                ? Zn(i, h, n, a)
                : (v && v(e, l, r),
                  e === "focusout" &&
                    (v = l._wrapperState) &&
                    v.controlled &&
                    l.type === "number" &&
                    ee(l, "number", l.value)),
              (v = r ? wa(r) : window),
              e)
            ) {
              case "focusin":
                (Hn(v) || v.contentEditable === "true") &&
                  ((hr = v), (vr = r), (br = null));
                break;
              case "focusout":
                br = vr = hr = null;
                break;
              case "mousedown":
                yr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (yr = !1), wr(i, n, a);
                break;
              case "selectionchange":
                if (gr) break;
              case "keydown":
              case "keyup":
                wr(i, n, a);
            }
            let b;
            if (Dn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var y = "onCompositionStart";
                    break e;
                  case "compositionend":
                    y = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    y = "onCompositionUpdate";
                    break e;
                }
                y = void 0;
              }
            else
              $n
                ? zn(e, n) && (y = "onCompositionEnd")
                : e === "keydown" &&
                  n.keyCode === 229 &&
                  (y = "onCompositionStart");
            y &&
              (Fn &&
                n.locale !== "ko" &&
                ($n || y !== "onCompositionStart"
                  ? y === "onCompositionEnd" && $n && (b = en())
                  : ((Xt = "value" in (Qt = a) ? Qt.value : Qt.textContent),
                    ($n = !0))),
              (v = Gr(r, y)).length > 0 &&
                ((y = new wn(y, e, null, n, a)),
                i.push({ event: y, listeners: v }),
                b ? (y.data = b) : (b = Un(n)) !== null && (y.data = b))),
              (b = Mn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return Un(t);
                      case "keypress":
                        return t.which !== 32 ? null : ((Bn = !0), jn);
                      case "textInput":
                        return (e = t.data) === jn && Bn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if ($n)
                      return e === "compositionend" || (!Dn && zn(e, t))
                        ? ((e = en()), (Jt = Xt = Qt = null), ($n = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && t.char.length > 1) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Fn && t.locale !== "ko" ? null : t.data;
                    }
                  })(e, n)) &&
                (r = Gr(r, "onBeforeInput")).length > 0 &&
                ((a = new wn("onBeforeInput", "beforeinput", null, n, a)),
                i.push({ event: a, listeners: r }),
                (a.data = b));
          }
          jr(i, t);
        });
      }
      function Zr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Gr(e, t) {
        for (var n = t + "Capture", r = []; e !== null; ) {
          let a = e,
            o = a.stateNode;
          a.tag === 5 &&
            o !== null &&
            ((a = o),
            (o = Pe(e, n)) != null && r.unshift(Zr(e, o, a)),
            (o = Pe(e, t)) != null && r.push(Zr(e, o, a))),
            (e = e.return);
        }
        return r;
      }
      function Vr(e) {
        if (e === null) return null;
        do {
          e = e.return;
        } while (e && e.tag !== 5);
        return e || null;
      }
      function Wr(e, t, n, r, a) {
        for (var o = t._reactName, i = []; n !== null && n !== r; ) {
          let l = n,
            u = l.alternate,
            s = l.stateNode;
          if (u !== null && u === r) break;
          l.tag === 5 &&
            s !== null &&
            ((l = s),
            a
              ? (u = Pe(n, o)) != null && i.unshift(Zr(n, u, l))
              : a || ((u = Pe(n, o)) != null && i.push(Zr(n, u, l)))),
            (n = n.return);
        }
        i.length !== 0 && e.push({ event: t, listeners: i });
      }
      const Yr = /\r\n?/g,
        Kr = /\u0000|\uFFFD/g;
      function Qr(e) {
        return (typeof e === "string" ? e : "" + e)
          .replace(Yr, "\n")
          .replace(Kr, "");
      }
      function Xr(e, t, n) {
        if (((t = Qr(t)), Qr(e) !== t && n)) throw Error(o(425));
      }
      function Jr() {}
      let ea = null,
        ta = null;
      function na(e, t) {
        return (
          e === "textarea" ||
          e === "noscript" ||
          typeof t.children === "string" ||
          typeof t.children === "number" ||
          (typeof t.dangerouslySetInnerHTML === "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
        );
      }
      const ra = typeof setTimeout === "function" ? setTimeout : void 0,
        aa = typeof clearTimeout === "function" ? clearTimeout : void 0,
        oa = typeof Promise === "function" ? Promise : void 0,
        ia =
          typeof queueMicrotask === "function"
            ? queueMicrotask
            : void 0 !== oa
            ? function (e) {
                return oa.resolve(null).then(e).catch(la);
              }
            : ra;
      function la(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function ua(e, t) {
        let n = t,
          r = 0;
        do {
          const a = n.nextSibling;
          if ((e.removeChild(n), a && a.nodeType === 8))
            if ((n = a.data) === "/$") {
              if (r === 0) return e.removeChild(a), void $t(t);
              r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
          n = a;
        } while (n);
        $t(t);
      }
      function sa(e) {
        for (; e != null; e = e.nextSibling) {
          let t = e.nodeType;
          if (t === 1 || t === 3) break;
          if (t === 8) {
            if ((t = e.data) === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null;
          }
        }
        return e;
      }
      function ca(e) {
        e = e.previousSibling;
        for (let t = 0; e; ) {
          if (e.nodeType === 8) {
            const n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
              if (t === 0) return e;
              t--;
            } else n === "/$" && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var da = Math.random().toString(36).slice(2),
        fa = "__reactFiber$" + da,
        pa = "__reactProps$" + da,
        ma = "__reactContainer$" + da,
        ga = "__reactEvents$" + da,
        ha = "__reactListeners$" + da,
        va = "__reactHandles$" + da;
      function ba(e) {
        let t = e[fa];
        if (t) return t;
        for (let n = e.parentNode; n; ) {
          if ((t = n[ma] || n[fa])) {
            if (
              ((n = t.alternate),
              t.child !== null || (n !== null && n.child !== null))
            )
              for (e = ca(e); e !== null; ) {
                if ((n = e[fa])) return n;
                e = ca(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ya(e) {
        return !(e = e[fa] || e[ma]) ||
          (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
          ? null
          : e;
      }
      function wa(e) {
        if (e.tag === 5 || e.tag === 6) return e.stateNode;
        throw Error(o(33));
      }
      function ka(e) {
        return e[pa] || null;
      }
      let Ea = [],
        Sa = -1;
      function xa(e) {
        return { current: e };
      }
      function Ca(e) {
        Sa < 0 || ((e.current = Ea[Sa]), (Ea[Sa] = null), Sa--);
      }
      function Ta(e, t) {
        Sa++, (Ea[Sa] = e.current), (e.current = t);
      }
      let _a = {},
        Aa = xa(_a),
        La = xa(!1),
        Na = _a;
      function Ra(e, t) {
        const n = e.type.contextTypes;
        if (!n) return _a;
        const r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        let a,
          o = {};
        for (a in n) o[a] = t[a];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function Pa(e) {
        return (e = e.childContextTypes) != null;
      }
      function Oa() {
        Ca(La), Ca(Aa);
      }
      function Da(e, t, n) {
        if (Aa.current !== _a) throw Error(o(168));
        Ta(Aa, t), Ta(La, n);
      }
      function Ia(e, t, n) {
        let r = e.stateNode;
        if (
          ((t = t.childContextTypes), typeof r.getChildContext !== "function")
        )
          return n;
        for (const a in (r = r.getChildContext()))
          if (!(a in t)) throw Error(o(108, q(e) || "Unknown", a));
        return F({}, n, r);
      }
      function Ma(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            _a),
          (Na = Aa.current),
          Ta(Aa, e),
          Ta(La, La.current),
          !0
        );
      }
      function Fa(e, t, n) {
        const r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = Ia(e, t, Na)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            Ca(La),
            Ca(Aa),
            Ta(Aa, e))
          : Ca(La),
          Ta(La, n);
      }
      let ja = null,
        Ba = !1,
        za = !1;
      function Ua(e) {
        ja === null ? (ja = [e]) : ja.push(e);
      }
      function $a() {
        if (!za && ja !== null) {
          za = !0;
          let e = 0,
            t = yt;
          try {
            const n = ja;
            for (yt = 1; e < n.length; e++) {
              let r = n[e];
              do {
                r = r(!0);
              } while (r !== null);
            }
            (ja = null), (Ba = !1);
          } catch (a) {
            throw (ja !== null && (ja = ja.slice(e + 1)), Ve(Je, $a), a);
          } finally {
            (yt = t), (za = !1);
          }
        }
        return null;
      }
      let qa = [],
        Ha = 0,
        Za = null,
        Ga = 0,
        Va = [],
        Wa = 0,
        Ya = null,
        Ka = 1,
        Qa = "";
      function Xa(e, t) {
        (qa[Ha++] = Ga), (qa[Ha++] = Za), (Za = e), (Ga = t);
      }
      function Ja(e, t, n) {
        (Va[Wa++] = Ka), (Va[Wa++] = Qa), (Va[Wa++] = Ya), (Ya = e);
        let r = Ka;
        e = Qa;
        let a = 32 - it(r) - 1;
        (r &= ~(1 << a)), (n += 1);
        let o = 32 - it(t) + a;
        if (o > 30) {
          const i = a - (a % 5);
          (o = (r & ((1 << i) - 1)).toString(32)),
            (r >>= i),
            (a -= i),
            (Ka = (1 << (32 - it(t) + a)) | (n << a) | r),
            (Qa = o + e);
        } else (Ka = (1 << o) | (n << a) | r), (Qa = e);
      }
      function eo(e) {
        e.return !== null && (Xa(e, 1), Ja(e, 1, 0));
      }
      function to(e) {
        for (; e === Za; )
          (Za = qa[--Ha]), (qa[Ha] = null), (Ga = qa[--Ha]), (qa[Ha] = null);
        for (; e === Ya; )
          (Ya = Va[--Wa]),
            (Va[Wa] = null),
            (Qa = Va[--Wa]),
            (Va[Wa] = null),
            (Ka = Va[--Wa]),
            (Va[Wa] = null);
      }
      let no = null,
        ro = null,
        ao = !1,
        oo = null;
      function io(e, t) {
        const n = Rs(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (t = e.deletions) === null
            ? ((e.deletions = [n]), (e.flags |= 16))
            : t.push(n);
      }
      function lo(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              (t =
                t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) !== null &&
              ((e.stateNode = t), (no = e), (ro = sa(t.firstChild)), !0)
            );
          case 6:
            return (
              (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t) !==
                null && ((e.stateNode = t), (no = e), (ro = null), !0)
            );
          case 13:
            return (
              (t = t.nodeType !== 8 ? null : t) !== null &&
              ((n = Ya !== null ? { id: Ka, overflow: Qa } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              ((n = Rs(18, null, null, 0)).stateNode = t),
              (n.return = e),
              (e.child = n),
              (no = e),
              (ro = null),
              !0)
            );
          default:
            return !1;
        }
      }
      function uo(e) {
        return (1 & e.mode) != 0 && (128 & e.flags) == 0;
      }
      function so(e) {
        if (ao) {
          let t = ro;
          if (t) {
            const n = t;
            if (!lo(e, t)) {
              if (uo(e)) throw Error(o(418));
              t = sa(n.nextSibling);
              const r = no;
              t && lo(e, t)
                ? io(r, n)
                : ((e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e));
            }
          } else {
            if (uo(e)) throw Error(o(418));
            (e.flags = (-4097 & e.flags) | 2), (ao = !1), (no = e);
          }
        }
      }
      function co(e) {
        for (
          e = e.return;
          e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

        )
          e = e.return;
        no = e;
      }
      function fo(e) {
        if (e !== no) return !1;
        if (!ao) return co(e), (ao = !0), !1;
        let t;
        if (
          ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            (t =
              (t = e.type) !== "head" &&
              t !== "body" &&
              !na(e.type, e.memoizedProps)),
          t && (t = ro))
        ) {
          if (uo(e)) throw (po(), Error(o(418)));
          for (; t; ) io(e, t), (t = sa(t.nextSibling));
        }
        if ((co(e), e.tag === 13)) {
          if (!(e = (e = e.memoizedState) !== null ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (e.nodeType === 8) {
                const n = e.data;
                if (n === "/$") {
                  if (t === 0) {
                    ro = sa(e.nextSibling);
                    break e;
                  }
                  t--;
                } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
              }
              e = e.nextSibling;
            }
            ro = null;
          }
        } else ro = no ? sa(e.stateNode.nextSibling) : null;
        return !0;
      }
      function po() {
        for (let e = ro; e; ) e = sa(e.nextSibling);
      }
      function mo() {
        (ro = no = null), (ao = !1);
      }
      function go(e) {
        oo === null ? (oo = [e]) : oo.push(e);
      }
      const ho = w.ReactCurrentBatchConfig;
      function vo(e, t) {
        if (e && e.defaultProps) {
          for (const n in ((t = F({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      let bo = xa(null),
        yo = null,
        wo = null,
        ko = null;
      function Eo() {
        ko = wo = yo = null;
      }
      function So(e) {
        const t = bo.current;
        Ca(bo), (e._currentValue = t);
      }
      function xo(e, t, n) {
        for (; e !== null; ) {
          const r = e.alternate;
          if (
            ((e.childLanes & t) !== t
              ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
              : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function Co(e, t) {
        (yo = e),
          (ko = wo = null),
          (e = e.dependencies) !== null &&
            e.firstContext !== null &&
            ((e.lanes & t) != 0 && (wl = !0), (e.firstContext = null));
      }
      function To(e) {
        const t = e._currentValue;
        if (ko !== e)
          if (
            ((e = { context: e, memoizedValue: t, next: null }), wo === null)
          ) {
            if (yo === null) throw Error(o(308));
            (wo = e), (yo.dependencies = { lanes: 0, firstContext: e });
          } else wo = wo.next = e;
        return t;
      }
      let _o = null;
      function Ao(e) {
        _o === null ? (_o = [e]) : _o.push(e);
      }
      function Lo(e, t, n, r) {
        const a = t.interleaved;
        return (
          a === null
            ? ((n.next = n), Ao(t))
            : ((n.next = a.next), (a.next = n)),
          (t.interleaved = n),
          No(e, r)
        );
      }
      function No(e, t) {
        e.lanes |= t;
        let n = e.alternate;
        for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
          (e.childLanes |= t),
            (n = e.alternate) !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return n.tag === 3 ? n.stateNode : null;
      }
      let Ro = !1;
      function Po(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, interleaved: null, lanes: 0 },
          effects: null,
        };
      }
      function Oo(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function Do(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function Io(e, t, n) {
        let r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), (2 & Au) != 0)) {
          var a = r.pending;
          return (
            a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
            (r.pending = t),
            No(e, n)
          );
        }
        return (
          (a = r.interleaved) === null
            ? ((t.next = t), Ao(r))
            : ((t.next = a.next), (a.next = t)),
          (r.interleaved = t),
          No(e, n)
        );
      }
      function Mo(e, t, n) {
        if (
          (t = t.updateQueue) !== null &&
          ((t = t.shared), (4194240 & n) != 0)
        ) {
          let r = t.lanes;
          (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
        }
      }
      function Fo(e, t) {
        let n = e.updateQueue,
          r = e.alternate;
        if (r !== null && n === (r = r.updateQueue)) {
          let a = null,
            o = null;
          if ((n = n.firstBaseUpdate) !== null) {
            do {
              const i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              o === null ? (a = o = i) : (o = o.next = i), (n = n.next);
            } while (n !== null);
            o === null ? (a = o = t) : (o = o.next = t);
          } else a = o = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: o,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        (e = n.lastBaseUpdate) === null
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function jo(e, t, n, r) {
        let a = e.updateQueue;
        Ro = !1;
        let o = a.firstBaseUpdate,
          i = a.lastBaseUpdate,
          l = a.shared.pending;
        if (l !== null) {
          a.shared.pending = null;
          var u = l,
            s = u.next;
          (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
          var c = e.alternate;
          c !== null &&
            (l = (c = c.updateQueue).lastBaseUpdate) !== i &&
            (l === null ? (c.firstBaseUpdate = s) : (l.next = s),
            (c.lastBaseUpdate = u));
        }
        if (o !== null) {
          let d = a.baseState;
          for (i = 0, c = s = u = null, l = o; ; ) {
            let f = l.lane,
              p = l.eventTime;
            if ((r & f) === f) {
              c !== null &&
                (c = c.next =
                  {
                    eventTime: p,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null,
                  });
              e: {
                let m = e,
                  g = l;
                switch (((f = t), (p = n), g.tag)) {
                  case 1:
                    if (typeof (m = g.payload) === "function") {
                      d = m.call(p, d, f);
                      break e;
                    }
                    d = m;
                    break e;
                  case 3:
                    m.flags = (-65537 & m.flags) | 128;
                  case 0:
                    if (
                      (f =
                        typeof (m = g.payload) === "function"
                          ? m.call(p, d, f)
                          : m) == null
                    )
                      break e;
                    d = F({}, d, f);
                    break e;
                  case 2:
                    Ro = !0;
                }
              }
              l.callback !== null &&
                l.lane !== 0 &&
                ((e.flags |= 64),
                (f = a.effects) === null ? (a.effects = [l]) : f.push(l));
            } else
              (p = {
                eventTime: p,
                lane: f,
                tag: l.tag,
                payload: l.payload,
                callback: l.callback,
                next: null,
              }),
                c === null ? ((s = c = p), (u = d)) : (c = c.next = p),
                (i |= f);
            if ((l = l.next) === null) {
              if ((l = a.shared.pending) === null) break;
              (l = (f = l).next),
                (f.next = null),
                (a.lastBaseUpdate = f),
                (a.shared.pending = null);
            }
          }
          if (
            (c === null && (u = d),
            (a.baseState = u),
            (a.firstBaseUpdate = s),
            (a.lastBaseUpdate = c),
            (t = a.shared.interleaved) !== null)
          ) {
            a = t;
            do {
              (i |= a.lane), (a = a.next);
            } while (a !== t);
          } else o === null && (a.shared.lanes = 0);
          (Mu |= i), (e.lanes = i), (e.memoizedState = d);
        }
      }
      function Bo(e, t, n) {
        if (((e = t.effects), (t.effects = null), e !== null))
          for (t = 0; t < e.length; t++) {
            let r = e[t],
              a = r.callback;
            if (a !== null) {
              if (((r.callback = null), (r = n), typeof a !== "function"))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      const zo = new r.Component().refs;
      function Uo(e, t, n, r) {
        (n = (n = n(r, (t = e.memoizedState))) == null ? t : F({}, t, n)),
          (e.memoizedState = n),
          e.lanes === 0 && (e.updateQueue.baseState = n);
      }
      const $o = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && $e(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          const r = es(),
            a = ts(e),
            o = Do(r, a);
          (o.payload = t),
            n != null && (o.callback = n),
            (t = Io(e, o, a)) !== null && (ns(t, e, a, r), Mo(t, e, a));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          const r = es(),
            a = ts(e),
            o = Do(r, a);
          (o.tag = 1),
            (o.payload = t),
            n != null && (o.callback = n),
            (t = Io(e, o, a)) !== null && (ns(t, e, a, r), Mo(t, e, a));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          const n = es(),
            r = ts(e),
            a = Do(n, r);
          (a.tag = 2),
            t != null && (a.callback = t),
            (t = Io(e, a, r)) !== null && (ns(t, e, r, n), Mo(t, e, r));
        },
      };
      function qo(e, t, n, r, a, o, i) {
        return typeof (e = e.stateNode).shouldComponentUpdate === "function"
          ? e.shouldComponentUpdate(r, o, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !ur(n, r) ||
              !ur(a, o);
      }
      function Ho(e, t, n) {
        let r = !1,
          a = _a,
          o = t.contextType;
        return (
          typeof o === "object" && o !== null
            ? (o = To(o))
            : ((a = Pa(t) ? Na : Aa.current),
              (o = (r = (r = t.contextTypes) != null) ? Ra(e, a) : _a)),
          (t = new t(n, o)),
          (e.memoizedState =
            t.state !== null && void 0 !== t.state ? t.state : null),
          (t.updater = $o),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              a),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function Zo(e, t, n, r) {
        (e = t.state),
          typeof t.componentWillReceiveProps === "function" &&
            t.componentWillReceiveProps(n, r),
          typeof t.UNSAFE_componentWillReceiveProps === "function" &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && $o.enqueueReplaceState(t, t.state, null);
      }
      function Go(e, t, n, r) {
        const a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = zo), Po(e);
        let o = t.contextType;
        typeof o === "object" && o !== null
          ? (a.context = To(o))
          : ((o = Pa(t) ? Na : Aa.current), (a.context = Ra(e, o))),
          (a.state = e.memoizedState),
          typeof (o = t.getDerivedStateFromProps) === "function" &&
            (Uo(e, t, o, n), (a.state = e.memoizedState)),
          typeof t.getDerivedStateFromProps === "function" ||
            typeof a.getSnapshotBeforeUpdate === "function" ||
            (typeof a.UNSAFE_componentWillMount !== "function" &&
              typeof a.componentWillMount !== "function") ||
            ((t = a.state),
            typeof a.componentWillMount === "function" &&
              a.componentWillMount(),
            typeof a.UNSAFE_componentWillMount === "function" &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && $o.enqueueReplaceState(a, a.state, null),
            jo(e, n, a, r),
            (a.state = e.memoizedState)),
          typeof a.componentDidMount === "function" && (e.flags |= 4194308);
      }
      function Vo(e, t, n) {
        if (
          (e = n.ref) !== null &&
          typeof e !== "function" &&
          typeof e !== "object"
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (n.tag !== 1) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            const a = r,
              i = "" + e;
            return t !== null &&
              t.ref !== null &&
              typeof t.ref === "function" &&
              t.ref._stringRef === i
              ? t.ref
              : ((t = function (e) {
                  let t = a.refs;
                  t === zo && (t = a.refs = {}),
                    e === null ? delete t[i] : (t[i] = e);
                }),
                (t._stringRef = i),
                t);
          }
          if (typeof e !== "string") throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function Wo(e, t) {
        throw (
          ((e = Object.prototype.toString.call(t)),
          Error(
            o(
              31,
              e === "[object Object]"
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e
            )
          ))
        );
      }
      function Yo(e) {
        return (0, e._init)(e._payload);
      }
      function Ko(e) {
        function t(t, n) {
          if (e) {
            const r = t.deletions;
            r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; r !== null; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); t !== null; )
            t.key !== null ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = Os(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? (r = t.alternate) !== null
                ? (r = r.index) < n
                  ? ((t.flags |= 2), n)
                  : r
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n)
          );
        }
        function l(t) {
          return e && t.alternate === null && (t.flags |= 2), t;
        }
        function u(e, t, n, r) {
          return t === null || t.tag !== 6
            ? (((t = Fs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function s(e, t, n, r) {
          const o = n.type;
          return o === S
            ? d(e, t, n.props.children, r, n.key)
            : t !== null &&
              (t.elementType === o ||
                (typeof o === "object" &&
                  o !== null &&
                  o.$$typeof === P &&
                  Yo(o) === t.type))
            ? (((r = a(t, n.props)).ref = Vo(e, t, n)), (r.return = e), r)
            : (((r = Ds(n.type, n.key, n.props, null, e.mode, r)).ref = Vo(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return t === null ||
            t.tag !== 4 ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = js(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, o) {
          return t === null || t.tag !== 7
            ? (((t = Is(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if ((typeof t === "string" && t !== "") || typeof t === "number")
            return ((t = Fs("" + t, e.mode, n)).return = e), t;
          if (typeof t === "object" && t !== null) {
            switch (t.$$typeof) {
              case k:
                return (
                  ((n = Ds(t.type, t.key, t.props, null, e.mode, n)).ref = Vo(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case E:
                return ((t = js(t, e.mode, n)).return = e), t;
              case P:
                return f(e, (0, t._init)(t._payload), n);
            }
            if (te(t) || I(t))
              return ((t = Is(t, e.mode, n, null)).return = e), t;
            Wo(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          let a = t !== null ? t.key : null;
          if ((typeof n === "string" && n !== "") || typeof n === "number")
            return a !== null ? null : u(e, t, "" + n, r);
          if (typeof n === "object" && n !== null) {
            switch (n.$$typeof) {
              case k:
                return n.key === a ? s(e, t, n, r) : null;
              case E:
                return n.key === a ? c(e, t, n, r) : null;
              case P:
                return p(e, t, (a = n._init)(n._payload), r);
            }
            if (te(n) || I(n)) return a !== null ? null : d(e, t, n, r, null);
            Wo(e, n);
          }
          return null;
        }
        function m(e, t, n, r, a) {
          if ((typeof r === "string" && r !== "") || typeof r === "number")
            return u(t, (e = e.get(n) || null), "" + r, a);
          if (typeof r === "object" && r !== null) {
            switch (r.$$typeof) {
              case k:
                return s(
                  t,
                  (e = e.get(r.key === null ? n : r.key) || null),
                  r,
                  a
                );
              case E:
                return c(
                  t,
                  (e = e.get(r.key === null ? n : r.key) || null),
                  r,
                  a
                );
              case P:
                return m(e, t, n, (0, r._init)(r._payload), a);
            }
            if (te(r) || I(r)) return d(t, (e = e.get(n) || null), r, a, null);
            Wo(t, r);
          }
          return null;
        }
        function g(a, o, l, u) {
          for (
            var s = null, c = null, d = o, g = (o = 0), h = null;
            d !== null && g < l.length;
            g++
          ) {
            d.index > g ? ((h = d), (d = null)) : (h = d.sibling);
            const v = p(a, d, l[g], u);
            if (v === null) {
              d === null && (d = h);
              break;
            }
            e && d && v.alternate === null && t(a, d),
              (o = i(v, o, g)),
              c === null ? (s = v) : (c.sibling = v),
              (c = v),
              (d = h);
          }
          if (g === l.length) return n(a, d), ao && Xa(a, g), s;
          if (d === null) {
            for (; g < l.length; g++)
              (d = f(a, l[g], u)) !== null &&
                ((o = i(d, o, g)),
                c === null ? (s = d) : (c.sibling = d),
                (c = d));
            return ao && Xa(a, g), s;
          }
          for (d = r(a, d); g < l.length; g++)
            (h = m(d, a, g, l[g], u)) !== null &&
              (e &&
                h.alternate !== null &&
                d.delete(h.key === null ? g : h.key),
              (o = i(h, o, g)),
              c === null ? (s = h) : (c.sibling = h),
              (c = h));
          return (
            e &&
              d.forEach(function (e) {
                return t(a, e);
              }),
            ao && Xa(a, g),
            s
          );
        }
        function h(a, l, u, s) {
          let c = I(u);
          if (typeof c !== "function") throw Error(o(150));
          if ((u = c.call(u)) == null) throw Error(o(151));
          for (
            var d = (c = null), g = l, h = (l = 0), v = null, b = u.next();
            g !== null && !b.done;
            h++, b = u.next()
          ) {
            g.index > h ? ((v = g), (g = null)) : (v = g.sibling);
            const y = p(a, g, b.value, s);
            if (y === null) {
              g === null && (g = v);
              break;
            }
            e && g && y.alternate === null && t(a, g),
              (l = i(y, l, h)),
              d === null ? (c = y) : (d.sibling = y),
              (d = y),
              (g = v);
          }
          if (b.done) return n(a, g), ao && Xa(a, h), c;
          if (g === null) {
            for (; !b.done; h++, b = u.next())
              (b = f(a, b.value, s)) !== null &&
                ((l = i(b, l, h)),
                d === null ? (c = b) : (d.sibling = b),
                (d = b));
            return ao && Xa(a, h), c;
          }
          for (g = r(a, g); !b.done; h++, b = u.next())
            (b = m(g, a, h, b.value, s)) !== null &&
              (e &&
                b.alternate !== null &&
                g.delete(b.key === null ? h : b.key),
              (l = i(b, l, h)),
              d === null ? (c = b) : (d.sibling = b),
              (d = b));
          return (
            e &&
              g.forEach(function (e) {
                return t(a, e);
              }),
            ao && Xa(a, h),
            c
          );
        }
        return function e(r, o, i, u) {
          if (
            (typeof i === "object" &&
              i !== null &&
              i.type === S &&
              i.key === null &&
              (i = i.props.children),
            typeof i === "object" && i !== null)
          ) {
            switch (i.$$typeof) {
              case k:
                e: {
                  for (var s = i.key, c = o; c !== null; ) {
                    if (c.key === s) {
                      if ((s = i.type) === S) {
                        if (c.tag === 7) {
                          n(r, c.sibling),
                            ((o = a(c, i.props.children)).return = r),
                            (r = o);
                          break e;
                        }
                      } else if (
                        c.elementType === s ||
                        (typeof s === "object" &&
                          s !== null &&
                          s.$$typeof === P &&
                          Yo(s) === c.type)
                      ) {
                        n(r, c.sibling),
                          ((o = a(c, i.props)).ref = Vo(r, c, i)),
                          (o.return = r),
                          (r = o);
                        break e;
                      }
                      n(r, c);
                      break;
                    }
                    t(r, c), (c = c.sibling);
                  }
                  i.type === S
                    ? (((o = Is(i.props.children, r.mode, u, i.key)).return =
                        r),
                      (r = o))
                    : (((u = Ds(i.type, i.key, i.props, null, r.mode, u)).ref =
                        Vo(r, o, i)),
                      (u.return = r),
                      (r = u));
                }
                return l(r);
              case E:
                e: {
                  for (c = i.key; o !== null; ) {
                    if (o.key === c) {
                      if (
                        o.tag === 4 &&
                        o.stateNode.containerInfo === i.containerInfo &&
                        o.stateNode.implementation === i.implementation
                      ) {
                        n(r, o.sibling),
                          ((o = a(o, i.children || [])).return = r),
                          (r = o);
                        break e;
                      }
                      n(r, o);
                      break;
                    }
                    t(r, o), (o = o.sibling);
                  }
                  ((o = js(i, r.mode, u)).return = r), (r = o);
                }
                return l(r);
              case P:
                return e(r, o, (c = i._init)(i._payload), u);
            }
            if (te(i)) return g(r, o, i, u);
            if (I(i)) return h(r, o, i, u);
            Wo(r, i);
          }
          return (typeof i === "string" && i !== "") || typeof i === "number"
            ? ((i = "" + i),
              o !== null && o.tag === 6
                ? (n(r, o.sibling), ((o = a(o, i)).return = r), (r = o))
                : (n(r, o), ((o = Fs(i, r.mode, u)).return = r), (r = o)),
              l(r))
            : n(r, o);
        };
      }
      const Qo = Ko(!0),
        Xo = Ko(!1),
        Jo = {},
        ei = xa(Jo),
        ti = xa(Jo),
        ni = xa(Jo);
      function ri(e) {
        if (e === Jo) throw Error(o(174));
        return e;
      }
      function ai(e, t) {
        switch ((Ta(ni, t), Ta(ti, e), Ta(ei, Jo), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ue(null, "");
            break;
          default:
            t = ue(
              (t = (e = e === 8 ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        Ca(ei), Ta(ei, t);
      }
      function oi() {
        Ca(ei), Ca(ti), Ca(ni);
      }
      function ii(e) {
        ri(ni.current);
        const t = ri(ei.current),
          n = ue(t, e.type);
        t !== n && (Ta(ti, e), Ta(ei, n));
      }
      function li(e) {
        ti.current === e && (Ca(ei), Ca(ti));
      }
      const ui = xa(0);
      function si(e) {
        for (let t = e; t !== null; ) {
          if (t.tag === 13) {
            let n = t.memoizedState;
            if (
              n !== null &&
              ((n = n.dehydrated) === null ||
                n.data === "$?" ||
                n.data === "$!")
            )
              return t;
          } else if (t.tag === 19 && void 0 !== t.memoizedProps.revealOrder) {
            if ((128 & t.flags) != 0) return t;
          } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      const ci = [];
      function di() {
        for (let e = 0; e < ci.length; e++)
          ci[e]._workInProgressVersionPrimary = null;
        ci.length = 0;
      }
      let fi = w.ReactCurrentDispatcher,
        pi = w.ReactCurrentBatchConfig,
        mi = 0,
        gi = null,
        hi = null,
        vi = null,
        bi = !1,
        yi = !1,
        wi = 0,
        ki = 0;
      function Ei() {
        throw Error(o(321));
      }
      function Si(e, t) {
        if (t === null) return !1;
        for (let n = 0; n < t.length && n < e.length; n++)
          if (!lr(e[n], t[n])) return !1;
        return !0;
      }
      function xi(e, t, n, r, a, i) {
        if (
          ((mi = i),
          (gi = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (fi.current = e === null || e.memoizedState === null ? ll : ul),
          (e = n(r, a)),
          yi)
        ) {
          i = 0;
          do {
            if (((yi = !1), (wi = 0), i >= 25)) throw Error(o(301));
            (i += 1),
              (vi = hi = null),
              (t.updateQueue = null),
              (fi.current = sl),
              (e = n(r, a));
          } while (yi);
        }
        if (
          ((fi.current = il),
          (t = hi !== null && hi.next !== null),
          (mi = 0),
          (vi = hi = gi = null),
          (bi = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function Ci() {
        const e = wi !== 0;
        return (wi = 0), e;
      }
      function Ti() {
        const e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          vi === null ? (gi.memoizedState = vi = e) : (vi = vi.next = e), vi
        );
      }
      function _i() {
        if (hi === null) {
          var e = gi.alternate;
          e = e !== null ? e.memoizedState : null;
        } else e = hi.next;
        const t = vi === null ? gi.memoizedState : vi.next;
        if (t !== null) (vi = t), (hi = e);
        else {
          if (e === null) throw Error(o(310));
          (e = {
            memoizedState: (hi = e).memoizedState,
            baseState: hi.baseState,
            baseQueue: hi.baseQueue,
            queue: hi.queue,
            next: null,
          }),
            vi === null ? (gi.memoizedState = vi = e) : (vi = vi.next = e);
        }
        return vi;
      }
      function Ai(e, t) {
        return typeof t === "function" ? t(e) : t;
      }
      function Li(e) {
        const t = _i(),
          n = t.queue;
        if (n === null) throw Error(o(311));
        n.lastRenderedReducer = e;
        let r = hi,
          a = r.baseQueue,
          i = n.pending;
        if (i !== null) {
          if (a !== null) {
            var l = a.next;
            (a.next = i.next), (i.next = l);
          }
          (r.baseQueue = a = i), (n.pending = null);
        }
        if (a !== null) {
          (i = a.next), (r = r.baseState);
          let u = (l = null),
            s = null,
            c = i;
          do {
            const d = c.lane;
            if ((mi & d) === d)
              s !== null &&
                (s = s.next =
                  {
                    lane: 0,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                  }),
                (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
              const f = {
                lane: d,
                action: c.action,
                hasEagerState: c.hasEagerState,
                eagerState: c.eagerState,
                next: null,
              };
              s === null ? ((u = s = f), (l = r)) : (s = s.next = f),
                (gi.lanes |= d),
                (Mu |= d);
            }
            c = c.next;
          } while (c !== null && c !== i);
          s === null ? (l = r) : (s.next = u),
            lr(r, t.memoizedState) || (wl = !0),
            (t.memoizedState = r),
            (t.baseState = l),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
        }
        if ((e = n.interleaved) !== null) {
          a = e;
          do {
            (i = a.lane), (gi.lanes |= i), (Mu |= i), (a = a.next);
          } while (a !== e);
        } else a === null && (n.lanes = 0);
        return [t.memoizedState, n.dispatch];
      }
      function Ni(e) {
        const t = _i(),
          n = t.queue;
        if (n === null) throw Error(o(311));
        n.lastRenderedReducer = e;
        let r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (a !== null) {
          n.pending = null;
          let l = (a = a.next);
          do {
            (i = e(i, l.action)), (l = l.next);
          } while (l !== a);
          lr(i, t.memoizedState) || (wl = !0),
            (t.memoizedState = i),
            t.baseQueue === null && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, r];
      }
      function Ri() {}
      function Pi(e, t) {
        let n = gi,
          r = _i(),
          a = t(),
          i = !lr(r.memoizedState, a);
        if (
          (i && ((r.memoizedState = a), (wl = !0)),
          (r = r.queue),
          Hi(Ii.bind(null, n, r, e), [e]),
          r.getSnapshot !== t || i || (vi !== null && 1 & vi.memoizedState.tag))
        ) {
          if (
            ((n.flags |= 2048),
            Bi(9, Di.bind(null, n, r, a, t), void 0, null),
            Lu === null)
          )
            throw Error(o(349));
          (30 & mi) != 0 || Oi(n, t, a);
        }
        return a;
      }
      function Oi(e, t, n) {
        (e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          (t = gi.updateQueue) === null
            ? ((t = { lastEffect: null, stores: null }),
              (gi.updateQueue = t),
              (t.stores = [e]))
            : (n = t.stores) === null
            ? (t.stores = [e])
            : n.push(e);
      }
      function Di(e, t, n, r) {
        (t.value = n), (t.getSnapshot = r), Mi(t) && Fi(e);
      }
      function Ii(e, t, n) {
        return n(function () {
          Mi(t) && Fi(e);
        });
      }
      function Mi(e) {
        const t = e.getSnapshot;
        e = e.value;
        try {
          const n = t();
          return !lr(e, n);
        } catch (r) {
          return !0;
        }
      }
      function Fi(e) {
        const t = No(e, 1);
        t !== null && ns(t, e, 1, -1);
      }
      function ji(e) {
        const t = Ti();
        return (
          typeof e === "function" && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Ai,
            lastRenderedState: e,
          }),
          (t.queue = e),
          (e = e.dispatch = nl.bind(null, gi, e)),
          [t.memoizedState, e]
        );
      }
      function Bi(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          (t = gi.updateQueue) === null
            ? ((t = { lastEffect: null, stores: null }),
              (gi.updateQueue = t),
              (t.lastEffect = e.next = e))
            : (n = t.lastEffect) === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function zi() {
        return _i().memoizedState;
      }
      function Ui(e, t, n, r) {
        const a = Ti();
        (gi.flags |= e),
          (a.memoizedState = Bi(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function $i(e, t, n, r) {
        const a = _i();
        r = void 0 === r ? null : r;
        let o = void 0;
        if (hi !== null) {
          const i = hi.memoizedState;
          if (((o = i.destroy), r !== null && Si(r, i.deps)))
            return void (a.memoizedState = Bi(t, n, o, r));
        }
        (gi.flags |= e), (a.memoizedState = Bi(1 | t, n, o, r));
      }
      function qi(e, t) {
        return Ui(8390656, 8, e, t);
      }
      function Hi(e, t) {
        return $i(2048, 8, e, t);
      }
      function Zi(e, t) {
        return $i(4, 2, e, t);
      }
      function Gi(e, t) {
        return $i(4, 4, e, t);
      }
      function Vi(e, t) {
        return typeof t === "function"
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : t != null
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Wi(e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          $i(4, 4, Vi.bind(null, t, e), n)
        );
      }
      function Yi() {}
      function Ki(e, t) {
        const n = _i();
        t = void 0 === t ? null : t;
        const r = n.memoizedState;
        return r !== null && t !== null && Si(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Qi(e, t) {
        const n = _i();
        t = void 0 === t ? null : t;
        const r = n.memoizedState;
        return r !== null && t !== null && Si(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Xi(e, t, n) {
        return (21 & mi) == 0
          ? (e.baseState && ((e.baseState = !1), (wl = !0)),
            (e.memoizedState = n))
          : (lr(n, t) ||
              ((n = gt()), (gi.lanes |= n), (Mu |= n), (e.baseState = !0)),
            t);
      }
      function Ji(e, t) {
        const n = yt;
        (yt = n !== 0 && n < 4 ? n : 4), e(!0);
        const r = pi.transition;
        pi.transition = {};
        try {
          e(!1), t();
        } finally {
          (yt = n), (pi.transition = r);
        }
      }
      function el() {
        return _i().memoizedState;
      }
      function tl(e, t, n) {
        const r = ts(e);
        if (
          ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          rl(e))
        )
          al(t, n);
        else if ((n = Lo(e, t, n, r)) !== null) {
          ns(n, e, r, es()), ol(n, t, r);
        }
      }
      function nl(e, t, n) {
        let r = ts(e),
          a = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          };
        if (rl(e)) al(t, a);
        else {
          let o = e.alternate;
          if (
            e.lanes === 0 &&
            (o === null || o.lanes === 0) &&
            (o = t.lastRenderedReducer) !== null
          )
            try {
              const i = t.lastRenderedState,
                l = o(i, n);
              if (((a.hasEagerState = !0), (a.eagerState = l), lr(l, i))) {
                const u = t.interleaved;
                return (
                  u === null
                    ? ((a.next = a), Ao(t))
                    : ((a.next = u.next), (u.next = a)),
                  void (t.interleaved = a)
                );
              }
            } catch (s) {}
          (n = Lo(e, t, a, r)) !== null &&
            (ns(n, e, r, (a = es())), ol(n, t, r));
        }
      }
      function rl(e) {
        const t = e.alternate;
        return e === gi || (t !== null && t === gi);
      }
      function al(e, t) {
        yi = bi = !0;
        const n = e.pending;
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t);
      }
      function ol(e, t, n) {
        if ((4194240 & n) != 0) {
          let r = t.lanes;
          (n |= r &= e.pendingLanes), (t.lanes = n), bt(e, n);
        }
      }
      var il = {
          readContext: To,
          useCallback: Ei,
          useContext: Ei,
          useEffect: Ei,
          useImperativeHandle: Ei,
          useInsertionEffect: Ei,
          useLayoutEffect: Ei,
          useMemo: Ei,
          useReducer: Ei,
          useRef: Ei,
          useState: Ei,
          useDebugValue: Ei,
          useDeferredValue: Ei,
          useTransition: Ei,
          useMutableSource: Ei,
          useSyncExternalStore: Ei,
          useId: Ei,
          unstable_isNewReconciler: !1,
        },
        ll = {
          readContext: To,
          useCallback: function (e, t) {
            return (Ti().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: To,
          useEffect: qi,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = n != null ? n.concat([e]) : null),
              Ui(4194308, 4, Vi.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return Ui(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            return Ui(4, 2, e, t);
          },
          useMemo: function (e, t) {
            const n = Ti();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            const r = Ti();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t,
              }),
              (r.queue = e),
              (e = e.dispatch = tl.bind(null, gi, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            return (e = { current: e }), (Ti().memoizedState = e);
          },
          useState: ji,
          useDebugValue: Yi,
          useDeferredValue: function (e) {
            return (Ti().memoizedState = e);
          },
          useTransition: function () {
            let e = ji(!1),
              t = e[0];
            return (e = Ji.bind(null, e[1])), (Ti().memoizedState = e), [t, e];
          },
          useMutableSource: function () {},
          useSyncExternalStore: function (e, t, n) {
            const r = gi,
              a = Ti();
            if (ao) {
              if (void 0 === n) throw Error(o(407));
              n = n();
            } else {
              if (((n = t()), Lu === null)) throw Error(o(349));
              (30 & mi) != 0 || Oi(r, t, n);
            }
            a.memoizedState = n;
            const i = { value: n, getSnapshot: t };
            return (
              (a.queue = i),
              qi(Ii.bind(null, r, i, e), [e]),
              (r.flags |= 2048),
              Bi(9, Di.bind(null, r, i, n, t), void 0, null),
              n
            );
          },
          useId: function () {
            let e = Ti(),
              t = Lu.identifierPrefix;
            if (ao) {
              var n = Qa;
              (t =
                ":" +
                t +
                "R" +
                (n = (Ka & ~(1 << (32 - it(Ka) - 1))).toString(32) + n)),
                (n = wi++) > 0 && (t += "H" + n.toString(32)),
                (t += ":");
            } else t = ":" + t + "r" + (n = ki++).toString(32) + ":";
            return (e.memoizedState = t);
          },
          unstable_isNewReconciler: !1,
        },
        ul = {
          readContext: To,
          useCallback: Ki,
          useContext: To,
          useEffect: Hi,
          useImperativeHandle: Wi,
          useInsertionEffect: Zi,
          useLayoutEffect: Gi,
          useMemo: Qi,
          useReducer: Li,
          useRef: zi,
          useState: function () {
            return Li(Ai);
          },
          useDebugValue: Yi,
          useDeferredValue: function (e) {
            return Xi(_i(), hi.memoizedState, e);
          },
          useTransition: function () {
            return [Li(Ai)[0], _i().memoizedState];
          },
          useMutableSource: Ri,
          useSyncExternalStore: Pi,
          useId: el,
          unstable_isNewReconciler: !1,
        },
        sl = {
          readContext: To,
          useCallback: Ki,
          useContext: To,
          useEffect: Hi,
          useImperativeHandle: Wi,
          useInsertionEffect: Zi,
          useLayoutEffect: Gi,
          useMemo: Qi,
          useReducer: Ni,
          useRef: zi,
          useState: function () {
            return Ni(Ai);
          },
          useDebugValue: Yi,
          useDeferredValue: function (e) {
            const t = _i();
            return hi === null
              ? (t.memoizedState = e)
              : Xi(t, hi.memoizedState, e);
          },
          useTransition: function () {
            return [Ni(Ai)[0], _i().memoizedState];
          },
          useMutableSource: Ri,
          useSyncExternalStore: Pi,
          useId: el,
          unstable_isNewReconciler: !1,
        };
      function cl(e, t) {
        try {
          let n = "",
            r = t;
          do {
            (n += U(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (o) {
          a = "\nError generating stack: " + o.message + "\n" + o.stack;
        }
        return { value: e, source: t, stack: a, digest: null };
      }
      function dl(e, t, n) {
        return {
          value: e,
          source: null,
          stack: n != null ? n : null,
          digest: t != null ? t : null,
        };
      }
      function fl(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      const pl = typeof WeakMap === "function" ? WeakMap : Map;
      function ml(e, t, n) {
        ((n = Do(-1, n)).tag = 3), (n.payload = { element: null });
        const r = t.value;
        return (
          (n.callback = function () {
            Hu || ((Hu = !0), (Zu = r)), fl(0, t);
          }),
          n
        );
      }
      function gl(e, t, n) {
        (n = Do(-1, n)).tag = 3;
        const r = e.type.getDerivedStateFromError;
        if (typeof r === "function") {
          const a = t.value;
          (n.payload = function () {
            return r(a);
          }),
            (n.callback = function () {
              fl(0, t);
            });
        }
        const o = e.stateNode;
        return (
          o !== null &&
            typeof o.componentDidCatch === "function" &&
            (n.callback = function () {
              fl(0, t),
                typeof r !== "function" &&
                  (Gu === null ? (Gu = new Set([this])) : Gu.add(this));
              const e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: e !== null ? e : "",
              });
            }),
          n
        );
      }
      function hl(e, t, n) {
        let r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new pl();
          var a = new Set();
          r.set(t, a);
        } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
        a.has(n) || (a.add(n), (e = Cs.bind(null, e, t, n)), t.then(e, e));
      }
      function vl(e) {
        do {
          var t;
          if (
            ((t = e.tag === 13) &&
              (t = (t = e.memoizedState) === null || t.dehydrated !== null),
            t)
          )
            return e;
          e = e.return;
        } while (e !== null);
        return null;
      }
      function bl(e, t, n, r, a) {
        return (1 & e.mode) == 0
          ? (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                  (n.alternate === null
                    ? (n.tag = 17)
                    : (((t = Do(-1, 1)).tag = 2), Io(n, t, 1))),
                (n.lanes |= 1)),
            e)
          : ((e.flags |= 65536), (e.lanes = a), e);
      }
      var yl = w.ReactCurrentOwner,
        wl = !1;
      function kl(e, t, n, r) {
        t.child = e === null ? Xo(t, null, n, r) : Qo(t, e.child, n, r);
      }
      function El(e, t, n, r, a) {
        n = n.render;
        const o = t.ref;
        return (
          Co(t, a),
          (r = xi(e, t, n, r, o, a)),
          (n = Ci()),
          e === null || wl
            ? (ao && n && eo(t), (t.flags |= 1), kl(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              Hl(e, t, a))
        );
      }
      function Sl(e, t, n, r, a) {
        if (e === null) {
          var o = n.type;
          return typeof o !== "function" ||
            Ps(o) ||
            void 0 !== o.defaultProps ||
            n.compare !== null ||
            void 0 !== n.defaultProps
            ? (((e = Ds(n.type, null, r, t, t.mode, a)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), xl(e, t, o, r, a));
        }
        if (((o = e.child), (e.lanes & a) == 0)) {
          const i = o.memoizedProps;
          if ((n = (n = n.compare) !== null ? n : ur)(i, r) && e.ref === t.ref)
            return Hl(e, t, a);
        }
        return (
          (t.flags |= 1),
          ((e = Os(o, r)).ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function xl(e, t, n, r, a) {
        if (e !== null) {
          const o = e.memoizedProps;
          if (ur(o, r) && e.ref === t.ref) {
            if (((wl = !1), (t.pendingProps = r = o), (e.lanes & a) == 0))
              return (t.lanes = e.lanes), Hl(e, t, a);
            (131072 & e.flags) != 0 && (wl = !0);
          }
        }
        return _l(e, t, n, r, a);
      }
      function Cl(e, t, n) {
        let r = t.pendingProps,
          a = r.children,
          o = e !== null ? e.memoizedState : null;
        if (r.mode === "hidden")
          if ((1 & t.mode) == 0)
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              Ta(Ou, Pu),
              (Pu |= n);
          else {
            if ((1073741824 & n) == 0)
              return (
                (e = o !== null ? o.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = {
                  baseLanes: e,
                  cachePool: null,
                  transitions: null,
                }),
                (t.updateQueue = null),
                Ta(Ou, Pu),
                (Pu |= e),
                null
              );
            (t.memoizedState = {
              baseLanes: 0,
              cachePool: null,
              transitions: null,
            }),
              (r = o !== null ? o.baseLanes : n),
              Ta(Ou, Pu),
              (Pu |= r);
          }
        else
          o !== null
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Ta(Ou, Pu),
            (Pu |= r);
        return kl(e, t, a, n), t.child;
      }
      function Tl(e, t) {
        const n = t.ref;
        ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
          ((t.flags |= 512), (t.flags |= 2097152));
      }
      function _l(e, t, n, r, a) {
        let o = Pa(n) ? Na : Aa.current;
        return (
          (o = Ra(t, o)),
          Co(t, a),
          (n = xi(e, t, n, r, o, a)),
          (r = Ci()),
          e === null || wl
            ? (ao && r && eo(t), (t.flags |= 1), kl(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              Hl(e, t, a))
        );
      }
      function Al(e, t, n, r, a) {
        if (Pa(n)) {
          var o = !0;
          Ma(t);
        } else o = !1;
        if ((Co(t, a), t.stateNode === null))
          ql(e, t), Ho(t, n, r), Go(t, n, r, a), (r = !0);
        else if (e === null) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var u = i.context,
            s = n.contextType;
          typeof s === "object" && s !== null
            ? (s = To(s))
            : (s = Ra(t, (s = Pa(n) ? Na : Aa.current)));
          var c = n.getDerivedStateFromProps,
            d =
              typeof c === "function" ||
              typeof i.getSnapshotBeforeUpdate === "function";
          d ||
            (typeof i.UNSAFE_componentWillReceiveProps !== "function" &&
              typeof i.componentWillReceiveProps !== "function") ||
            ((l !== r || u !== s) && Zo(t, i, r, s)),
            (Ro = !1);
          var f = t.memoizedState;
          (i.state = f),
            jo(t, r, i, a),
            (u = t.memoizedState),
            l !== r || f !== u || La.current || Ro
              ? (typeof c === "function" &&
                  (Uo(t, n, c, r), (u = t.memoizedState)),
                (l = Ro || qo(t, n, l, r, f, u, s))
                  ? (d ||
                      (typeof i.UNSAFE_componentWillMount !== "function" &&
                        typeof i.componentWillMount !== "function") ||
                      (typeof i.componentWillMount === "function" &&
                        i.componentWillMount(),
                      typeof i.UNSAFE_componentWillMount === "function" &&
                        i.UNSAFE_componentWillMount()),
                    typeof i.componentDidMount === "function" &&
                      (t.flags |= 4194308))
                  : (typeof i.componentDidMount === "function" &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = u)),
                (i.props = r),
                (i.state = u),
                (i.context = s),
                (r = l))
              : (typeof i.componentDidMount === "function" &&
                  (t.flags |= 4194308),
                (r = !1));
        } else {
          (i = t.stateNode),
            Oo(e, t),
            (l = t.memoizedProps),
            (s = t.type === t.elementType ? l : vo(t.type, l)),
            (i.props = s),
            (d = t.pendingProps),
            (f = i.context),
            typeof (u = n.contextType) === "object" && u !== null
              ? (u = To(u))
              : (u = Ra(t, (u = Pa(n) ? Na : Aa.current)));
          const p = n.getDerivedStateFromProps;
          (c =
            typeof p === "function" ||
            typeof i.getSnapshotBeforeUpdate === "function") ||
            (typeof i.UNSAFE_componentWillReceiveProps !== "function" &&
              typeof i.componentWillReceiveProps !== "function") ||
            ((l !== d || f !== u) && Zo(t, i, r, u)),
            (Ro = !1),
            (f = t.memoizedState),
            (i.state = f),
            jo(t, r, i, a);
          let m = t.memoizedState;
          l !== d || f !== m || La.current || Ro
            ? (typeof p === "function" &&
                (Uo(t, n, p, r), (m = t.memoizedState)),
              (s = Ro || qo(t, n, s, r, f, m, u) || !1)
                ? (c ||
                    (typeof i.UNSAFE_componentWillUpdate !== "function" &&
                      typeof i.componentWillUpdate !== "function") ||
                    (typeof i.componentWillUpdate === "function" &&
                      i.componentWillUpdate(r, m, u),
                    typeof i.UNSAFE_componentWillUpdate === "function" &&
                      i.UNSAFE_componentWillUpdate(r, m, u)),
                  typeof i.componentDidUpdate === "function" && (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate === "function" &&
                    (t.flags |= 1024))
                : (typeof i.componentDidUpdate !== "function" ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  typeof i.getSnapshotBeforeUpdate !== "function" ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = m)),
              (i.props = r),
              (i.state = m),
              (i.context = u),
              (r = s))
            : (typeof i.componentDidUpdate !== "function" ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate !== "function" ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1));
        }
        return Ll(e, t, n, r, o, a);
      }
      function Ll(e, t, n, r, a, o) {
        Tl(e, t);
        const i = (128 & t.flags) != 0;
        if (!r && !i) return a && Fa(t, n, !1), Hl(e, t, o);
        (r = t.stateNode), (yl.current = t);
        const l =
          i && typeof n.getDerivedStateFromError !== "function"
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          e !== null && i
            ? ((t.child = Qo(t, e.child, null, o)),
              (t.child = Qo(t, null, l, o)))
            : kl(e, t, l, o),
          (t.memoizedState = r.state),
          a && Fa(t, n, !0),
          t.child
        );
      }
      function Nl(e) {
        const t = e.stateNode;
        t.pendingContext
          ? Da(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && Da(0, t.context, !1),
          ai(e, t.containerInfo);
      }
      function Rl(e, t, n, r, a) {
        return mo(), go(a), (t.flags |= 256), kl(e, t, n, r), t.child;
      }
      let Pl,
        Ol,
        Dl,
        Il = { dehydrated: null, treeContext: null, retryLane: 0 };
      function Ml(e) {
        return { baseLanes: e, cachePool: null, transitions: null };
      }
      function Fl(e, t, n) {
        let r,
          a = t.pendingProps,
          i = ui.current,
          l = !1,
          u = (128 & t.flags) != 0;
        if (
          ((r = u) ||
            (r = (e === null || e.memoizedState !== null) && (2 & i) != 0),
          r
            ? ((l = !0), (t.flags &= -129))
            : (e !== null && e.memoizedState === null) || (i |= 1),
          Ta(ui, 1 & i),
          e === null)
        )
          return (
            so(t),
            (e = t.memoizedState) !== null && (e = e.dehydrated) !== null
              ? ((1 & t.mode) == 0
                  ? (t.lanes = 1)
                  : e.data === "$!"
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
                null)
              : ((u = a.children),
                (e = a.fallback),
                l
                  ? ((a = t.mode),
                    (l = t.child),
                    (u = { mode: "hidden", children: u }),
                    (1 & a) == 0 && l !== null
                      ? ((l.childLanes = 0), (l.pendingProps = u))
                      : (l = Ms(u, a, 0, null)),
                    (e = Is(e, a, n, null)),
                    (l.return = t),
                    (e.return = t),
                    (l.sibling = e),
                    (t.child = l),
                    (t.child.memoizedState = Ml(n)),
                    (t.memoizedState = Il),
                    e)
                  : jl(t, u))
          );
        if ((i = e.memoizedState) !== null && (r = i.dehydrated) !== null)
          return (function (e, t, n, r, a, i, l) {
            if (n)
              return 256 & t.flags
                ? ((t.flags &= -257), Bl(e, t, l, (r = dl(Error(o(422))))))
                : t.memoizedState !== null
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((i = r.fallback),
                  (a = t.mode),
                  (r = Ms(
                    { mode: "visible", children: r.children },
                    a,
                    0,
                    null
                  )),
                  ((i = Is(i, a, l, null)).flags |= 2),
                  (r.return = t),
                  (i.return = t),
                  (r.sibling = i),
                  (t.child = r),
                  (1 & t.mode) != 0 && Qo(t, e.child, null, l),
                  (t.child.memoizedState = Ml(l)),
                  (t.memoizedState = Il),
                  i);
            if ((1 & t.mode) == 0) return Bl(e, t, l, null);
            if (a.data === "$!") {
              if ((r = a.nextSibling && a.nextSibling.dataset)) var u = r.dgst;
              return (
                (r = u), Bl(e, t, l, (r = dl((i = Error(o(419))), r, void 0)))
              );
            }
            if (((u = (l & e.childLanes) != 0), wl || u)) {
              if ((r = Lu) !== null) {
                switch (l & -l) {
                  case 4:
                    a = 2;
                    break;
                  case 16:
                    a = 8;
                    break;
                  case 64:
                  case 128:
                  case 256:
                  case 512:
                  case 1024:
                  case 2048:
                  case 4096:
                  case 8192:
                  case 16384:
                  case 32768:
                  case 65536:
                  case 131072:
                  case 262144:
                  case 524288:
                  case 1048576:
                  case 2097152:
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    a = 32;
                    break;
                  case 536870912:
                    a = 268435456;
                    break;
                  default:
                    a = 0;
                }
                (a = (a & (r.suspendedLanes | l)) != 0 ? 0 : a) !== 0 &&
                  a !== i.retryLane &&
                  ((i.retryLane = a), No(e, a), ns(r, e, a, -1));
              }
              return gs(), Bl(e, t, l, (r = dl(Error(o(421)))));
            }
            return a.data === "$?"
              ? ((t.flags |= 128),
                (t.child = e.child),
                (t = _s.bind(null, e)),
                (a._reactRetry = t),
                null)
              : ((e = i.treeContext),
                (ro = sa(a.nextSibling)),
                (no = t),
                (ao = !0),
                (oo = null),
                e !== null &&
                  ((Va[Wa++] = Ka),
                  (Va[Wa++] = Qa),
                  (Va[Wa++] = Ya),
                  (Ka = e.id),
                  (Qa = e.overflow),
                  (Ya = t)),
                ((t = jl(t, r.children)).flags |= 4096),
                t);
          })(e, t, u, a, r, i, n);
        if (l) {
          (l = a.fallback), (u = t.mode), (r = (i = e.child).sibling);
          const s = { mode: "hidden", children: a.children };
          return (
            (1 & u) == 0 && t.child !== i
              ? (((a = t.child).childLanes = 0),
                (a.pendingProps = s),
                (t.deletions = null))
              : ((a = Os(i, s)).subtreeFlags = 14680064 & i.subtreeFlags),
            r !== null ? (l = Os(r, l)) : ((l = Is(l, u, n, null)).flags |= 2),
            (l.return = t),
            (a.return = t),
            (a.sibling = l),
            (t.child = a),
            (a = l),
            (l = t.child),
            (u =
              (u = e.child.memoizedState) === null
                ? Ml(n)
                : {
                    baseLanes: u.baseLanes | n,
                    cachePool: null,
                    transitions: u.transitions,
                  }),
            (l.memoizedState = u),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = Il),
            a
          );
        }
        return (
          (e = (l = e.child).sibling),
          (a = Os(l, { mode: "visible", children: a.children })),
          (1 & t.mode) == 0 && (a.lanes = n),
          (a.return = t),
          (a.sibling = null),
          e !== null &&
            ((n = t.deletions) === null
              ? ((t.deletions = [e]), (t.flags |= 16))
              : n.push(e)),
          (t.child = a),
          (t.memoizedState = null),
          a
        );
      }
      function jl(e, t) {
        return (
          ((t = Ms({ mode: "visible", children: t }, e.mode, 0, null)).return =
            e),
          (e.child = t)
        );
      }
      function Bl(e, t, n, r) {
        return (
          r !== null && go(r),
          Qo(t, e.child, null, n),
          ((e = jl(t, t.pendingProps.children)).flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function zl(e, t, n) {
        e.lanes |= t;
        const r = e.alternate;
        r !== null && (r.lanes |= t), xo(e.return, t, n);
      }
      function Ul(e, t, n, r, a) {
        const o = e.memoizedState;
        o === null
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a));
      }
      function $l(e, t, n) {
        let r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail;
        if ((kl(e, t, r.children, n), (2 & (r = ui.current)) != 0))
          (r = (1 & r) | 2), (t.flags |= 128);
        else {
          if (e !== null && (128 & e.flags) != 0)
            e: for (e = t.child; e !== null; ) {
              if (e.tag === 13) e.memoizedState !== null && zl(e, n, t);
              else if (e.tag === 19) zl(e, n, t);
              else if (e.child !== null) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; e.sibling === null; ) {
                if (e.return === null || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((Ta(ui, r), (1 & t.mode) == 0)) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; n !== null; )
                (e = n.alternate) !== null && si(e) === null && (a = n),
                  (n = n.sibling);
              (n = a) === null
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                Ul(t, !1, a, n, o);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; a !== null; ) {
                if ((e = a.alternate) !== null && si(e) === null) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              Ul(t, !0, n, null, o);
              break;
            case "together":
              Ul(t, !1, null, null, void 0);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function ql(e, t) {
        (1 & t.mode) == 0 &&
          e !== null &&
          ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
      }
      function Hl(e, t, n) {
        if (
          (e !== null && (t.dependencies = e.dependencies),
          (Mu |= t.lanes),
          (n & t.childLanes) == 0)
        )
          return null;
        if (e !== null && t.child !== e.child) throw Error(o(153));
        if (t.child !== null) {
          for (
            n = Os((e = t.child), e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

          )
            (e = e.sibling),
              ((n = n.sibling = Os(e, e.pendingProps)).return = t);
          n.sibling = null;
        }
        return t.child;
      }
      function Zl(e, t) {
        if (!ao)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; t !== null; )
                t.alternate !== null && (n = t), (t = t.sibling);
              n === null ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; n !== null; )
                n.alternate !== null && (r = n), (n = n.sibling);
              r === null
                ? t || e.tail === null
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function Gl(e) {
        let t = e.alternate !== null && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var a = e.child; a !== null; )
            (n |= a.lanes | a.childLanes),
              (r |= 14680064 & a.subtreeFlags),
              (r |= 14680064 & a.flags),
              (a.return = e),
              (a = a.sibling);
        else
          for (a = e.child; a !== null; )
            (n |= a.lanes | a.childLanes),
              (r |= a.subtreeFlags),
              (r |= a.flags),
              (a.return = e),
              (a = a.sibling);
        return (e.subtreeFlags |= r), (e.childLanes = n), t;
      }
      function Vl(e, t, n) {
        let r = t.pendingProps;
        switch ((to(t), t.tag)) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return Gl(t), null;
          case 1:
          case 17:
            return Pa(t.type) && Oa(), Gl(t), null;
          case 3:
            return (
              (r = t.stateNode),
              oi(),
              Ca(La),
              Ca(Aa),
              di(),
              r.pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (e !== null && e.child !== null) ||
                (fo(t)
                  ? (t.flags |= 4)
                  : e === null ||
                    (e.memoizedState.isDehydrated && (256 & t.flags) == 0) ||
                    ((t.flags |= 1024), oo !== null && (is(oo), (oo = null)))),
              Gl(t),
              null
            );
          case 5:
            li(t);
            var a = ri(ni.current);
            if (((n = t.type), e !== null && t.stateNode != null))
              Ol(e, t, n, r),
                e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(o(166));
                return Gl(t), null;
              }
              if (((e = ri(ei.current)), fo(t))) {
                (r = t.stateNode), (n = t.type);
                var i = t.memoizedProps;
                switch (
                  ((r[fa] = t), (r[pa] = i), (e = (1 & t.mode) != 0), n)
                ) {
                  case "dialog":
                    Br("cancel", r), Br("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Br("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (a = 0; a < Ir.length; a++) Br(Ir[a], r);
                    break;
                  case "source":
                    Br("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Br("error", r), Br("load", r);
                    break;
                  case "details":
                    Br("toggle", r);
                    break;
                  case "input":
                    K(r, i), Br("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!i.multiple }),
                      Br("invalid", r);
                    break;
                  case "textarea":
                    ae(r, i), Br("invalid", r);
                }
                for (var u in (be(n, i), (a = null), i))
                  if (i.hasOwnProperty(u)) {
                    var s = i[u];
                    u === "children"
                      ? typeof s === "string"
                        ? r.textContent !== s &&
                          (!0 !== i.suppressHydrationWarning &&
                            Xr(r.textContent, s, e),
                          (a = ["children", s]))
                        : typeof s === "number" &&
                          r.textContent !== "" + s &&
                          (!0 !== i.suppressHydrationWarning &&
                            Xr(r.textContent, s, e),
                          (a = ["children", "" + s]))
                      : l.hasOwnProperty(u) &&
                        s != null &&
                        u === "onScroll" &&
                        Br("scroll", r);
                  }
                switch (n) {
                  case "input":
                    G(r), J(r, i, !0);
                    break;
                  case "textarea":
                    G(r), ie(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    typeof i.onClick === "function" && (r.onclick = Jr);
                }
                (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
              } else {
                (u = a.nodeType === 9 ? a : a.ownerDocument),
                  e === "http://www.w3.org/1999/xhtml" && (e = le(n)),
                  e === "http://www.w3.org/1999/xhtml"
                    ? n === "script"
                      ? (((e = u.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : typeof r.is === "string"
                      ? (e = u.createElement(n, { is: r.is }))
                      : ((e = u.createElement(n)),
                        n === "select" &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, n)),
                  (e[fa] = t),
                  (e[pa] = r),
                  Pl(e, t),
                  (t.stateNode = e);
                e: {
                  switch (((u = ye(n, r)), n)) {
                    case "dialog":
                      Br("cancel", e), Br("close", e), (a = r);
                      break;
                    case "iframe":
                    case "object":
                    case "embed":
                      Br("load", e), (a = r);
                      break;
                    case "video":
                    case "audio":
                      for (a = 0; a < Ir.length; a++) Br(Ir[a], e);
                      a = r;
                      break;
                    case "source":
                      Br("error", e), (a = r);
                      break;
                    case "img":
                    case "image":
                    case "link":
                      Br("error", e), Br("load", e), (a = r);
                      break;
                    case "details":
                      Br("toggle", e), (a = r);
                      break;
                    case "input":
                      K(e, r), (a = Y(e, r)), Br("invalid", e);
                      break;
                    case "option":
                    default:
                      a = r;
                      break;
                    case "select":
                      (e._wrapperState = { wasMultiple: !!r.multiple }),
                        (a = F({}, r, { value: void 0 })),
                        Br("invalid", e);
                      break;
                    case "textarea":
                      ae(e, r), (a = re(e, r)), Br("invalid", e);
                  }
                  for (i in (be(n, a), (s = a)))
                    if (s.hasOwnProperty(i)) {
                      let c = s[i];
                      i === "style"
                        ? he(e, c)
                        : i === "dangerouslySetInnerHTML"
                        ? (c = c ? c.__html : void 0) != null && de(e, c)
                        : i === "children"
                        ? typeof c === "string"
                          ? (n !== "textarea" || c !== "") && fe(e, c)
                          : typeof c === "number" && fe(e, "" + c)
                        : i !== "suppressContentEditableWarning" &&
                          i !== "suppressHydrationWarning" &&
                          i !== "autoFocus" &&
                          (l.hasOwnProperty(i)
                            ? c != null && i === "onScroll" && Br("scroll", e)
                            : c != null && y(e, i, c, u));
                    }
                  switch (n) {
                    case "input":
                      G(e), J(e, r, !1);
                      break;
                    case "textarea":
                      G(e), ie(e);
                      break;
                    case "option":
                      r.value != null &&
                        e.setAttribute("value", "" + H(r.value));
                      break;
                    case "select":
                      (e.multiple = !!r.multiple),
                        (i = r.value) != null
                          ? ne(e, !!r.multiple, i, !1)
                          : r.defaultValue != null &&
                            ne(e, !!r.multiple, r.defaultValue, !0);
                      break;
                    default:
                      typeof a.onClick === "function" && (e.onclick = Jr);
                  }
                  switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      r = !!r.autoFocus;
                      break e;
                    case "img":
                      r = !0;
                      break e;
                    default:
                      r = !1;
                  }
                }
                r && (t.flags |= 4);
              }
              t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return Gl(t), null;
          case 6:
            if (e && t.stateNode != null) Dl(0, t, e.memoizedProps, r);
            else {
              if (typeof r !== "string" && t.stateNode === null)
                throw Error(o(166));
              if (((n = ri(ni.current)), ri(ei.current), fo(t))) {
                if (
                  ((r = t.stateNode),
                  (n = t.memoizedProps),
                  (r[fa] = t),
                  (i = r.nodeValue !== n) && (e = no) !== null)
                )
                  switch (e.tag) {
                    case 3:
                      Xr(r.nodeValue, n, (1 & e.mode) != 0);
                      break;
                    case 5:
                      !0 !== e.memoizedProps.suppressHydrationWarning &&
                        Xr(r.nodeValue, n, (1 & e.mode) != 0);
                  }
                i && (t.flags |= 4);
              } else
                ((r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(
                  r
                ))[fa] = t),
                  (t.stateNode = r);
            }
            return Gl(t), null;
          case 13:
            if (
              (Ca(ui),
              (r = t.memoizedState),
              e === null ||
                (e.memoizedState !== null &&
                  e.memoizedState.dehydrated !== null))
            ) {
              if (
                ao &&
                ro !== null &&
                (1 & t.mode) != 0 &&
                (128 & t.flags) == 0
              )
                po(), mo(), (t.flags |= 98560), (i = !1);
              else if (((i = fo(t)), r !== null && r.dehydrated !== null)) {
                if (e === null) {
                  if (!i) throw Error(o(318));
                  if (
                    !(i = (i = t.memoizedState) !== null ? i.dehydrated : null)
                  )
                    throw Error(o(317));
                  i[fa] = t;
                } else
                  mo(),
                    (128 & t.flags) == 0 && (t.memoizedState = null),
                    (t.flags |= 4);
                Gl(t), (i = !1);
              } else oo !== null && (is(oo), (oo = null)), (i = !0);
              if (!i) return 65536 & t.flags ? t : null;
            }
            return (128 & t.flags) != 0
              ? ((t.lanes = n), t)
              : ((r = r !== null) !==
                  (e !== null && e.memoizedState !== null) &&
                  r &&
                  ((t.child.flags |= 8192),
                  (1 & t.mode) != 0 &&
                    (e === null || (1 & ui.current) != 0
                      ? Du === 0 && (Du = 3)
                      : gs())),
                t.updateQueue !== null && (t.flags |= 4),
                Gl(t),
                null);
          case 4:
            return (
              oi(), e === null && $r(t.stateNode.containerInfo), Gl(t), null
            );
          case 10:
            return So(t.type._context), Gl(t), null;
          case 19:
            if ((Ca(ui), (i = t.memoizedState) === null)) return Gl(t), null;
            if (((r = (128 & t.flags) != 0), (u = i.rendering) === null))
              if (r) Zl(i, !1);
              else {
                if (Du !== 0 || (e !== null && (128 & e.flags) != 0))
                  for (e = t.child; e !== null; ) {
                    if ((u = si(e)) !== null) {
                      for (
                        t.flags |= 128,
                          Zl(i, !1),
                          (r = u.updateQueue) !== null &&
                            ((t.updateQueue = r), (t.flags |= 4)),
                          t.subtreeFlags = 0,
                          r = n,
                          n = t.child;
                        n !== null;

                      )
                        (e = r),
                          ((i = n).flags &= 14680066),
                          (u = i.alternate) === null
                            ? ((i.childLanes = 0),
                              (i.lanes = e),
                              (i.child = null),
                              (i.subtreeFlags = 0),
                              (i.memoizedProps = null),
                              (i.memoizedState = null),
                              (i.updateQueue = null),
                              (i.dependencies = null),
                              (i.stateNode = null))
                            : ((i.childLanes = u.childLanes),
                              (i.lanes = u.lanes),
                              (i.child = u.child),
                              (i.subtreeFlags = 0),
                              (i.deletions = null),
                              (i.memoizedProps = u.memoizedProps),
                              (i.memoizedState = u.memoizedState),
                              (i.updateQueue = u.updateQueue),
                              (i.type = u.type),
                              (e = u.dependencies),
                              (i.dependencies =
                                e === null
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return Ta(ui, (1 & ui.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                i.tail !== null &&
                  Qe() > $u &&
                  ((t.flags |= 128), (r = !0), Zl(i, !1), (t.lanes = 4194304));
              }
            else {
              if (!r)
                if ((e = si(u)) !== null) {
                  if (
                    ((t.flags |= 128),
                    (r = !0),
                    (n = e.updateQueue) !== null &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    Zl(i, !0),
                    i.tail === null &&
                      i.tailMode === "hidden" &&
                      !u.alternate &&
                      !ao)
                  )
                    return Gl(t), null;
                } else
                  2 * Qe() - i.renderingStartTime > $u &&
                    n !== 1073741824 &&
                    ((t.flags |= 128),
                    (r = !0),
                    Zl(i, !1),
                    (t.lanes = 4194304));
              i.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : ((n = i.last) !== null ? (n.sibling = u) : (t.child = u),
                  (i.last = u));
            }
            return i.tail !== null
              ? ((t = i.tail),
                (i.rendering = t),
                (i.tail = t.sibling),
                (i.renderingStartTime = Qe()),
                (t.sibling = null),
                (n = ui.current),
                Ta(ui, r ? (1 & n) | 2 : 1 & n),
                t)
              : (Gl(t), null);
          case 22:
          case 23:
            return (
              ds(),
              (r = t.memoizedState !== null),
              e !== null &&
                (e.memoizedState !== null) !== r &&
                (t.flags |= 8192),
              r && (1 & t.mode) != 0
                ? (1073741824 & Pu) != 0 &&
                  (Gl(t), 6 & t.subtreeFlags && (t.flags |= 8192))
                : Gl(t),
              null
            );
          case 24:
          case 25:
            return null;
        }
        throw Error(o(156, t.tag));
      }
      function Wl(e, t) {
        switch ((to(t), t.tag)) {
          case 1:
            return (
              Pa(t.type) && Oa(),
              65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
            );
          case 3:
            return (
              oi(),
              Ca(La),
              Ca(Aa),
              di(),
              (65536 & (e = t.flags)) != 0 && (128 & e) == 0
                ? ((t.flags = (-65537 & e) | 128), t)
                : null
            );
          case 5:
            return li(t), null;
          case 13:
            if (
              (Ca(ui), (e = t.memoizedState) !== null && e.dehydrated !== null)
            ) {
              if (t.alternate === null) throw Error(o(340));
              mo();
            }
            return 65536 & (e = t.flags)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null;
          case 19:
            return Ca(ui), null;
          case 4:
            return oi(), null;
          case 10:
            return So(t.type._context), null;
          case 22:
          case 23:
            return ds(), null;
          default:
            return null;
        }
      }
      (Pl = function (e, t) {
        for (let n = t.child; n !== null; ) {
          if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
          else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Ol = function (e, t, n, r) {
          let a = e.memoizedProps;
          if (a !== r) {
            (e = t.stateNode), ri(ei.current);
            let o,
              i = null;
            switch (n) {
              case "input":
                (a = Y(e, a)), (r = Y(e, r)), (i = []);
                break;
              case "select":
                (a = F({}, a, { value: void 0 })),
                  (r = F({}, r, { value: void 0 })),
                  (i = []);
                break;
              case "textarea":
                (a = re(e, a)), (r = re(e, r)), (i = []);
                break;
              default:
                typeof a.onClick !== "function" &&
                  typeof r.onClick === "function" &&
                  (e.onclick = Jr);
            }
            for (c in (be(n, r), (n = null), a))
              if (!r.hasOwnProperty(c) && a.hasOwnProperty(c) && a[c] != null)
                if (c === "style") {
                  var u = a[c];
                  for (o in u)
                    u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  c !== "dangerouslySetInnerHTML" &&
                    c !== "children" &&
                    c !== "suppressContentEditableWarning" &&
                    c !== "suppressHydrationWarning" &&
                    c !== "autoFocus" &&
                    (l.hasOwnProperty(c)
                      ? i || (i = [])
                      : (i = i || []).push(c, null));
            for (c in r) {
              let s = r[c];
              if (
                ((u = a != null ? a[c] : void 0),
                r.hasOwnProperty(c) && s !== u && (s != null || u != null))
              )
                if (c === "style")
                  if (u) {
                    for (o in u)
                      !u.hasOwnProperty(o) ||
                        (s && s.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in s)
                      s.hasOwnProperty(o) &&
                        u[o] !== s[o] &&
                        (n || (n = {}), (n[o] = s[o]));
                  } else n || (i || (i = []), i.push(c, n)), (n = s);
                else
                  c === "dangerouslySetInnerHTML"
                    ? ((s = s ? s.__html : void 0),
                      (u = u ? u.__html : void 0),
                      s != null && u !== s && (i = i || []).push(c, s))
                    : c === "children"
                    ? (typeof s !== "string" && typeof s !== "number") ||
                      (i = i || []).push(c, "" + s)
                    : c !== "suppressContentEditableWarning" &&
                      c !== "suppressHydrationWarning" &&
                      (l.hasOwnProperty(c)
                        ? (s != null && c === "onScroll" && Br("scroll", e),
                          i || u === s || (i = []))
                        : (i = i || []).push(c, s));
            }
            n && (i = i || []).push("style", n);
            var c = i;
            (t.updateQueue = c) && (t.flags |= 4);
          }
        }),
        (Dl = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      let Yl = !1,
        Kl = !1,
        Ql = typeof WeakSet === "function" ? WeakSet : Set,
        Xl = null;
      function Jl(e, t) {
        const n = e.ref;
        if (n !== null)
          if (typeof n === "function")
            try {
              n(null);
            } catch (r) {
              xs(e, t, r);
            }
          else n.current = null;
      }
      function eu(e, t, n) {
        try {
          n();
        } catch (r) {
          xs(e, t, r);
        }
      }
      let tu = !1;
      function nu(e, t, n) {
        let r = t.updateQueue;
        if ((r = r !== null ? r.lastEffect : null) !== null) {
          let a = (r = r.next);
          do {
            if ((a.tag & e) === e) {
              const o = a.destroy;
              (a.destroy = void 0), void 0 !== o && eu(t, n, o);
            }
            a = a.next;
          } while (a !== r);
        }
      }
      function ru(e, t) {
        if ((t = (t = t.updateQueue) !== null ? t.lastEffect : null) !== null) {
          let n = (t = t.next);
          do {
            if ((n.tag & e) === e) {
              const r = n.create;
              n.destroy = r();
            }
            n = n.next;
          } while (n !== t);
        }
      }
      function au(e) {
        const t = e.ref;
        if (t !== null) {
          const n = e.stateNode;
          e.tag, (e = n), typeof t === "function" ? t(e) : (t.current = e);
        }
      }
      function ou(e) {
        let t = e.alternate;
        t !== null && ((e.alternate = null), ou(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          e.tag === 5 &&
            (t = e.stateNode) !== null &&
            (delete t[fa],
            delete t[pa],
            delete t[ga],
            delete t[ha],
            delete t[va]),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null);
      }
      function iu(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 4;
      }
      function lu(e) {
        e: for (;;) {
          for (; e.sibling === null; ) {
            if (e.return === null || iu(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

          ) {
            if (2 & e.flags) continue e;
            if (e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
          }
          if (!(2 & e.flags)) return e.stateNode;
        }
      }
      function uu(e, t, n) {
        const r = e.tag;
        if (r === 5 || r === 6)
          (e = e.stateNode),
            t
              ? n.nodeType === 8
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (n.nodeType === 8
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                (n = n._reactRootContainer) != null ||
                  t.onclick !== null ||
                  (t.onclick = Jr));
        else if (r !== 4 && (e = e.child) !== null)
          for (uu(e, t, n), e = e.sibling; e !== null; )
            uu(e, t, n), (e = e.sibling);
      }
      function su(e, t, n) {
        const r = e.tag;
        if (r === 5 || r === 6)
          (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (r !== 4 && (e = e.child) !== null)
          for (su(e, t, n), e = e.sibling; e !== null; )
            su(e, t, n), (e = e.sibling);
      }
      let cu = null,
        du = !1;
      function fu(e, t, n) {
        for (n = n.child; n !== null; ) pu(e, t, n), (n = n.sibling);
      }
      function pu(e, t, n) {
        if (ot && typeof ot.onCommitFiberUnmount === "function")
          try {
            ot.onCommitFiberUnmount(at, n);
          } catch (l) {}
        switch (n.tag) {
          case 5:
            Kl || Jl(n, t);
          case 6:
            var r = cu,
              a = du;
            (cu = null),
              fu(e, t, n),
              (du = a),
              (cu = r) !== null &&
                (du
                  ? ((e = cu),
                    (n = n.stateNode),
                    e.nodeType === 8
                      ? e.parentNode.removeChild(n)
                      : e.removeChild(n))
                  : cu.removeChild(n.stateNode));
            break;
          case 18:
            cu !== null &&
              (du
                ? ((e = cu),
                  (n = n.stateNode),
                  e.nodeType === 8
                    ? ua(e.parentNode, n)
                    : e.nodeType === 1 && ua(e, n),
                  $t(e))
                : ua(cu, n.stateNode));
            break;
          case 4:
            (r = cu),
              (a = du),
              (cu = n.stateNode.containerInfo),
              (du = !0),
              fu(e, t, n),
              (cu = r),
              (du = a);
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            if (
              !Kl &&
              (r = n.updateQueue) !== null &&
              (r = r.lastEffect) !== null
            ) {
              a = r = r.next;
              do {
                let o = a,
                  i = o.destroy;
                (o = o.tag),
                  void 0 !== i && ((2 & o) != 0 || (4 & o) != 0) && eu(n, t, i),
                  (a = a.next);
              } while (a !== r);
            }
            fu(e, t, n);
            break;
          case 1:
            if (
              !Kl &&
              (Jl(n, t),
              typeof (r = n.stateNode).componentWillUnmount === "function")
            )
              try {
                (r.props = n.memoizedProps),
                  (r.state = n.memoizedState),
                  r.componentWillUnmount();
              } catch (l) {
                xs(n, t, l);
              }
            fu(e, t, n);
            break;
          case 21:
            fu(e, t, n);
            break;
          case 22:
            1 & n.mode
              ? ((Kl = (r = Kl) || n.memoizedState !== null),
                fu(e, t, n),
                (Kl = r))
              : fu(e, t, n);
            break;
          default:
            fu(e, t, n);
        }
      }
      function mu(e) {
        const t = e.updateQueue;
        if (t !== null) {
          e.updateQueue = null;
          let n = e.stateNode;
          n === null && (n = e.stateNode = new Ql()),
            t.forEach(function (t) {
              const r = As.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function gu(e, t) {
        const n = t.deletions;
        if (n !== null)
          for (let r = 0; r < n.length; r++) {
            const a = n[r];
            try {
              let i = e,
                l = t,
                u = l;
              e: for (; u !== null; ) {
                switch (u.tag) {
                  case 5:
                    (cu = u.stateNode), (du = !1);
                    break e;
                  case 3:
                  case 4:
                    (cu = u.stateNode.containerInfo), (du = !0);
                    break e;
                }
                u = u.return;
              }
              if (cu === null) throw Error(o(160));
              pu(i, l, a), (cu = null), (du = !1);
              const s = a.alternate;
              s !== null && (s.return = null), (a.return = null);
            } catch (c) {
              xs(a, t, c);
            }
          }
        if (12854 & t.subtreeFlags)
          for (t = t.child; t !== null; ) hu(t, e), (t = t.sibling);
      }
      function hu(e, t) {
        let n = e.alternate,
          r = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if ((gu(t, e), vu(e), 4 & r)) {
              try {
                nu(3, e, e.return), ru(3, e);
              } catch (h) {
                xs(e, e.return, h);
              }
              try {
                nu(5, e, e.return);
              } catch (h) {
                xs(e, e.return, h);
              }
            }
            break;
          case 1:
            gu(t, e), vu(e), 512 & r && n !== null && Jl(n, n.return);
            break;
          case 5:
            if (
              (gu(t, e),
              vu(e),
              512 & r && n !== null && Jl(n, n.return),
              32 & e.flags)
            ) {
              var a = e.stateNode;
              try {
                fe(a, "");
              } catch (h) {
                xs(e, e.return, h);
              }
            }
            if (4 & r && (a = e.stateNode) != null) {
              var i = e.memoizedProps,
                l = n !== null ? n.memoizedProps : i,
                u = e.type,
                s = e.updateQueue;
              if (((e.updateQueue = null), s !== null))
                try {
                  u === "input" &&
                    i.type === "radio" &&
                    i.name != null &&
                    Q(a, i),
                    ye(u, l);
                  var c = ye(u, i);
                  for (l = 0; l < s.length; l += 2) {
                    var d = s[l],
                      f = s[l + 1];
                    d === "style"
                      ? he(a, f)
                      : d === "dangerouslySetInnerHTML"
                      ? de(a, f)
                      : d === "children"
                      ? fe(a, f)
                      : y(a, d, f, c);
                  }
                  switch (u) {
                    case "input":
                      X(a, i);
                      break;
                    case "textarea":
                      oe(a, i);
                      break;
                    case "select":
                      var p = a._wrapperState.wasMultiple;
                      a._wrapperState.wasMultiple = !!i.multiple;
                      var m = i.value;
                      m != null
                        ? ne(a, !!i.multiple, m, !1)
                        : p !== !!i.multiple &&
                          (i.defaultValue != null
                            ? ne(a, !!i.multiple, i.defaultValue, !0)
                            : ne(a, !!i.multiple, i.multiple ? [] : "", !1));
                  }
                  a[pa] = i;
                } catch (h) {
                  xs(e, e.return, h);
                }
            }
            break;
          case 6:
            if ((gu(t, e), vu(e), 4 & r)) {
              if (e.stateNode === null) throw Error(o(162));
              (a = e.stateNode), (i = e.memoizedProps);
              try {
                a.nodeValue = i;
              } catch (h) {
                xs(e, e.return, h);
              }
            }
            break;
          case 3:
            if (
              (gu(t, e),
              vu(e),
              4 & r && n !== null && n.memoizedState.isDehydrated)
            )
              try {
                $t(t.containerInfo);
              } catch (h) {
                xs(e, e.return, h);
              }
            break;
          case 4:
          default:
            gu(t, e), vu(e);
            break;
          case 13:
            gu(t, e),
              vu(e),
              8192 & (a = e.child).flags &&
                ((i = a.memoizedState !== null),
                (a.stateNode.isHidden = i),
                !i ||
                  (a.alternate !== null &&
                    a.alternate.memoizedState !== null) ||
                  (Uu = Qe())),
              4 & r && mu(e);
            break;
          case 22:
            if (
              ((d = n !== null && n.memoizedState !== null),
              1 & e.mode
                ? ((Kl = (c = Kl) || d), gu(t, e), (Kl = c))
                : gu(t, e),
              vu(e),
              8192 & r)
            ) {
              if (
                ((c = e.memoizedState !== null),
                (e.stateNode.isHidden = c) && !d && (1 & e.mode) != 0)
              )
                for (Xl = e, d = e.child; d !== null; ) {
                  for (f = Xl = d; Xl !== null; ) {
                    switch (((m = (p = Xl).child), p.tag)) {
                      case 0:
                      case 11:
                      case 14:
                      case 15:
                        nu(4, p, p.return);
                        break;
                      case 1:
                        Jl(p, p.return);
                        var g = p.stateNode;
                        if (typeof g.componentWillUnmount === "function") {
                          (r = p), (n = p.return);
                          try {
                            (t = r),
                              (g.props = t.memoizedProps),
                              (g.state = t.memoizedState),
                              g.componentWillUnmount();
                          } catch (h) {
                            xs(r, n, h);
                          }
                        }
                        break;
                      case 5:
                        Jl(p, p.return);
                        break;
                      case 22:
                        if (p.memoizedState !== null) {
                          ku(f);
                          continue;
                        }
                    }
                    m !== null ? ((m.return = p), (Xl = m)) : ku(f);
                  }
                  d = d.sibling;
                }
              e: for (d = null, f = e; ; ) {
                if (f.tag === 5) {
                  if (d === null) {
                    d = f;
                    try {
                      (a = f.stateNode),
                        c
                          ? typeof (i = a.style).setProperty === "function"
                            ? i.setProperty("display", "none", "important")
                            : (i.display = "none")
                          : ((u = f.stateNode),
                            (l =
                              (s = f.memoizedProps.style) != null &&
                              s.hasOwnProperty("display")
                                ? s.display
                                : null),
                            (u.style.display = ge("display", l)));
                    } catch (h) {
                      xs(e, e.return, h);
                    }
                  }
                } else if (f.tag === 6) {
                  if (d === null)
                    try {
                      f.stateNode.nodeValue = c ? "" : f.memoizedProps;
                    } catch (h) {
                      xs(e, e.return, h);
                    }
                } else if (
                  ((f.tag !== 22 && f.tag !== 23) ||
                    f.memoizedState === null ||
                    f === e) &&
                  f.child !== null
                ) {
                  (f.child.return = f), (f = f.child);
                  continue;
                }
                if (f === e) break e;
                for (; f.sibling === null; ) {
                  if (f.return === null || f.return === e) break e;
                  d === f && (d = null), (f = f.return);
                }
                d === f && (d = null),
                  (f.sibling.return = f.return),
                  (f = f.sibling);
              }
            }
            break;
          case 19:
            gu(t, e), vu(e), 4 & r && mu(e);
          case 21:
        }
      }
      function vu(e) {
        const t = e.flags;
        if (2 & t) {
          try {
            e: {
              for (let n = e.return; n !== null; ) {
                if (iu(n)) {
                  var r = n;
                  break e;
                }
                n = n.return;
              }
              throw Error(o(160));
            }
            switch (r.tag) {
              case 5:
                var a = r.stateNode;
                32 & r.flags && (fe(a, ""), (r.flags &= -33)), su(e, lu(e), a);
                break;
              case 3:
              case 4:
                var i = r.stateNode.containerInfo;
                uu(e, lu(e), i);
                break;
              default:
                throw Error(o(161));
            }
          } catch (l) {
            xs(e, e.return, l);
          }
          e.flags &= -3;
        }
        4096 & t && (e.flags &= -4097);
      }
      function bu(e, t, n) {
        (Xl = e), yu(e, t, n);
      }
      function yu(e, t, n) {
        for (let r = (1 & e.mode) != 0; Xl !== null; ) {
          let a = Xl,
            o = a.child;
          if (a.tag === 22 && r) {
            let i = a.memoizedState !== null || Yl;
            if (!i) {
              let l = a.alternate,
                u = (l !== null && l.memoizedState !== null) || Kl;
              l = Yl;
              const s = Kl;
              if (((Yl = i), (Kl = u) && !s))
                for (Xl = a; Xl !== null; )
                  (u = (i = Xl).child),
                    i.tag === 22 && i.memoizedState !== null
                      ? Eu(a)
                      : u !== null
                      ? ((u.return = i), (Xl = u))
                      : Eu(a);
              for (; o !== null; ) (Xl = o), yu(o, t, n), (o = o.sibling);
              (Xl = a), (Yl = l), (Kl = s);
            }
            wu(e);
          } else
            (8772 & a.subtreeFlags) != 0 && o !== null
              ? ((o.return = a), (Xl = o))
              : wu(e);
        }
      }
      function wu(e) {
        for (; Xl !== null; ) {
          const t = Xl;
          if ((8772 & t.flags) != 0) {
            var n = t.alternate;
            try {
              if ((8772 & t.flags) != 0)
                switch (t.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Kl || ru(5, t);
                    break;
                  case 1:
                    var r = t.stateNode;
                    if (4 & t.flags && !Kl)
                      if (n === null) r.componentDidMount();
                      else {
                        const a =
                          t.elementType === t.type
                            ? n.memoizedProps
                            : vo(t.type, n.memoizedProps);
                        r.componentDidUpdate(
                          a,
                          n.memoizedState,
                          r.__reactInternalSnapshotBeforeUpdate
                        );
                      }
                    var i = t.updateQueue;
                    i !== null && Bo(t, i, r);
                    break;
                  case 3:
                    var l = t.updateQueue;
                    if (l !== null) {
                      if (((n = null), t.child !== null))
                        switch (t.child.tag) {
                          case 5:
                          case 1:
                            n = t.child.stateNode;
                        }
                      Bo(t, l, n);
                    }
                    break;
                  case 5:
                    var u = t.stateNode;
                    if (n === null && 4 & t.flags) {
                      n = u;
                      const s = t.memoizedProps;
                      switch (t.type) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                          s.autoFocus && n.focus();
                          break;
                        case "img":
                          s.src && (n.src = s.src);
                      }
                    }
                    break;
                  case 6:
                  case 4:
                  case 12:
                  case 19:
                  case 17:
                  case 21:
                  case 22:
                  case 23:
                  case 25:
                    break;
                  case 13:
                    if (t.memoizedState === null) {
                      const c = t.alternate;
                      if (c !== null) {
                        const d = c.memoizedState;
                        if (d !== null) {
                          const f = d.dehydrated;
                          f !== null && $t(f);
                        }
                      }
                    }
                    break;
                  default:
                    throw Error(o(163));
                }
              Kl || (512 & t.flags && au(t));
            } catch (p) {
              xs(t, t.return, p);
            }
          }
          if (t === e) {
            Xl = null;
            break;
          }
          if ((n = t.sibling) !== null) {
            (n.return = t.return), (Xl = n);
            break;
          }
          Xl = t.return;
        }
      }
      function ku(e) {
        for (; Xl !== null; ) {
          const t = Xl;
          if (t === e) {
            Xl = null;
            break;
          }
          const n = t.sibling;
          if (n !== null) {
            (n.return = t.return), (Xl = n);
            break;
          }
          Xl = t.return;
        }
      }
      function Eu(e) {
        for (; Xl !== null; ) {
          const t = Xl;
          try {
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                var n = t.return;
                try {
                  ru(4, t);
                } catch (u) {
                  xs(t, n, u);
                }
                break;
              case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount === "function") {
                  const a = t.return;
                  try {
                    r.componentDidMount();
                  } catch (u) {
                    xs(t, a, u);
                  }
                }
                var o = t.return;
                try {
                  au(t);
                } catch (u) {
                  xs(t, o, u);
                }
                break;
              case 5:
                var i = t.return;
                try {
                  au(t);
                } catch (u) {
                  xs(t, i, u);
                }
            }
          } catch (u) {
            xs(t, t.return, u);
          }
          if (t === e) {
            Xl = null;
            break;
          }
          const l = t.sibling;
          if (l !== null) {
            (l.return = t.return), (Xl = l);
            break;
          }
          Xl = t.return;
        }
      }
      var Su,
        xu = Math.ceil,
        Cu = w.ReactCurrentDispatcher,
        Tu = w.ReactCurrentOwner,
        _u = w.ReactCurrentBatchConfig,
        Au = 0,
        Lu = null,
        Nu = null,
        Ru = 0,
        Pu = 0,
        Ou = xa(0),
        Du = 0,
        Iu = null,
        Mu = 0,
        Fu = 0,
        ju = 0,
        Bu = null,
        zu = null,
        Uu = 0,
        $u = 1 / 0,
        qu = null,
        Hu = !1,
        Zu = null,
        Gu = null,
        Vu = !1,
        Wu = null,
        Yu = 0,
        Ku = 0,
        Qu = null,
        Xu = -1,
        Ju = 0;
      function es() {
        return (6 & Au) != 0 ? Qe() : Xu !== -1 ? Xu : (Xu = Qe());
      }
      function ts(e) {
        return (1 & e.mode) == 0
          ? 1
          : (2 & Au) != 0 && Ru !== 0
          ? Ru & -Ru
          : ho.transition !== null
          ? (Ju === 0 && (Ju = gt()), Ju)
          : (e = yt) !== 0
          ? e
          : (e = void 0 === (e = window.event) ? 16 : Kt(e.type));
      }
      function ns(e, t, n, r) {
        if (Ku > 50) throw ((Ku = 0), (Qu = null), Error(o(185)));
        vt(e, n, r),
          ((2 & Au) != 0 && e === Lu) ||
            (e === Lu && ((2 & Au) == 0 && (Fu |= n), Du === 4 && ls(e, Ru)),
            rs(e, r),
            n === 1 &&
              Au === 0 &&
              (1 & t.mode) == 0 &&
              (($u = Qe() + 500), Ba && $a()));
      }
      function rs(e, t) {
        let n = e.callbackNode;
        !(function (e, t) {
          for (
            let n = e.suspendedLanes,
              r = e.pingedLanes,
              a = e.expirationTimes,
              o = e.pendingLanes;
            o > 0;

          ) {
            const i = 31 - it(o),
              l = 1 << i,
              u = a[i];
            u === -1
              ? ((l & n) != 0 && (l & r) == 0) || (a[i] = pt(l, t))
              : u <= t && (e.expiredLanes |= l),
              (o &= ~l);
          }
        })(e, t);
        const r = ft(e, e === Lu ? Ru : 0);
        if (r === 0)
          n !== null && We(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0);
        else if (((t = r & -r), e.callbackPriority !== t)) {
          if ((n != null && We(n), t === 1))
            e.tag === 0
              ? (function (e) {
                  (Ba = !0), Ua(e);
                })(us.bind(null, e))
              : Ua(us.bind(null, e)),
              ia(function () {
                (6 & Au) == 0 && $a();
              }),
              (n = null);
          else {
            switch (wt(r)) {
              case 1:
                n = Je;
                break;
              case 4:
                n = et;
                break;
              case 16:
              default:
                n = tt;
                break;
              case 536870912:
                n = rt;
            }
            n = Ls(n, as.bind(null, e));
          }
          (e.callbackPriority = t), (e.callbackNode = n);
        }
      }
      function as(e, t) {
        if (((Xu = -1), (Ju = 0), (6 & Au) != 0)) throw Error(o(327));
        let n = e.callbackNode;
        if (Es() && e.callbackNode !== n) return null;
        let r = ft(e, e === Lu ? Ru : 0);
        if (r === 0) return null;
        if ((30 & r) != 0 || (r & e.expiredLanes) != 0 || t) t = hs(e, r);
        else {
          t = r;
          var a = Au;
          Au |= 2;
          var i = ms();
          for (
            (Lu === e && Ru === t) ||
            ((qu = null), ($u = Qe() + 500), fs(e, t));
            ;

          )
            try {
              bs();
              break;
            } catch (u) {
              ps(e, u);
            }
          Eo(),
            (Cu.current = i),
            (Au = a),
            Nu !== null ? (t = 0) : ((Lu = null), (Ru = 0), (t = Du));
        }
        if (t !== 0) {
          if (
            (t === 2 && (a = mt(e)) !== 0 && ((r = a), (t = os(e, a))), t === 1)
          )
            throw ((n = Iu), fs(e, 0), ls(e, r), rs(e, Qe()), n);
          if (t === 6) ls(e, r);
          else {
            if (
              ((a = e.current.alternate),
              (30 & r) == 0 &&
                !(function (e) {
                  for (let t = e; ; ) {
                    if (16384 & t.flags) {
                      var n = t.updateQueue;
                      if (n !== null && (n = n.stores) !== null)
                        for (let r = 0; r < n.length; r++) {
                          let a = n[r],
                            o = a.getSnapshot;
                          a = a.value;
                          try {
                            if (!lr(o(), a)) return !1;
                          } catch (l) {
                            return !1;
                          }
                        }
                    }
                    if (((n = t.child), 16384 & t.subtreeFlags && n !== null))
                      (n.return = t), (t = n);
                    else {
                      if (t === e) break;
                      for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e) return !0;
                        t = t.return;
                      }
                      (t.sibling.return = t.return), (t = t.sibling);
                    }
                  }
                  return !0;
                })(a) &&
                ((t = hs(e, r)) === 2 &&
                  (i = mt(e)) !== 0 &&
                  ((r = i), (t = os(e, i))),
                t === 1))
            )
              throw ((n = Iu), fs(e, 0), ls(e, r), rs(e, Qe()), n);
            switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
              case 0:
              case 1:
                throw Error(o(345));
              case 2:
              case 5:
                ks(e, zu, qu);
                break;
              case 3:
                if (
                  (ls(e, r),
                  (130023424 & r) === r && (t = Uu + 500 - Qe()) > 10)
                ) {
                  if (ft(e, 0) !== 0) break;
                  if (((a = e.suspendedLanes) & r) !== r) {
                    es(), (e.pingedLanes |= e.suspendedLanes & a);
                    break;
                  }
                  e.timeoutHandle = ra(ks.bind(null, e, zu, qu), t);
                  break;
                }
                ks(e, zu, qu);
                break;
              case 4:
                if ((ls(e, r), (4194240 & r) === r)) break;
                for (t = e.eventTimes, a = -1; r > 0; ) {
                  let l = 31 - it(r);
                  (i = 1 << l), (l = t[l]) > a && (a = l), (r &= ~i);
                }
                if (
                  ((r = a),
                  (r =
                    ((r = Qe() - r) < 120
                      ? 120
                      : r < 480
                      ? 480
                      : r < 1080
                      ? 1080
                      : r < 1920
                      ? 1920
                      : r < 3e3
                      ? 3e3
                      : r < 4320
                      ? 4320
                      : 1960 * xu(r / 1960)) - r) > 10)
                ) {
                  e.timeoutHandle = ra(ks.bind(null, e, zu, qu), r);
                  break;
                }
                ks(e, zu, qu);
                break;
              default:
                throw Error(o(329));
            }
          }
        }
        return rs(e, Qe()), e.callbackNode === n ? as.bind(null, e) : null;
      }
      function os(e, t) {
        const n = Bu;
        return (
          e.current.memoizedState.isDehydrated && (fs(e, t).flags |= 256),
          (e = hs(e, t)) !== 2 && ((t = zu), (zu = n), t !== null && is(t)),
          e
        );
      }
      function is(e) {
        zu === null ? (zu = e) : zu.push.apply(zu, e);
      }
      function ls(e, t) {
        for (
          t &= ~ju,
            t &= ~Fu,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          t > 0;

        ) {
          const n = 31 - it(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function us(e) {
        if ((6 & Au) != 0) throw Error(o(327));
        Es();
        let t = ft(e, 0);
        if ((1 & t) == 0) return rs(e, Qe()), null;
        let n = hs(e, t);
        if (e.tag !== 0 && n === 2) {
          const r = mt(e);
          r !== 0 && ((t = r), (n = os(e, r)));
        }
        if (n === 1) throw ((n = Iu), fs(e, 0), ls(e, t), rs(e, Qe()), n);
        if (n === 6) throw Error(o(345));
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          ks(e, zu, qu),
          rs(e, Qe()),
          null
        );
      }
      function ss(e, t) {
        const n = Au;
        Au |= 1;
        try {
          return e(t);
        } finally {
          (Au = n) === 0 && (($u = Qe() + 500), Ba && $a());
        }
      }
      function cs(e) {
        Wu !== null && Wu.tag === 0 && (6 & Au) == 0 && Es();
        const t = Au;
        Au |= 1;
        const n = _u.transition,
          r = yt;
        try {
          if (((_u.transition = null), (yt = 1), e)) return e();
        } finally {
          (yt = r), (_u.transition = n), (6 & (Au = t)) == 0 && $a();
        }
      }
      function ds() {
        (Pu = Ou.current), Ca(Ou);
      }
      function fs(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        let n = e.timeoutHandle;
        if ((n !== -1 && ((e.timeoutHandle = -1), aa(n)), Nu !== null))
          for (n = Nu.return; n !== null; ) {
            var r = n;
            switch ((to(r), r.tag)) {
              case 1:
                (r = r.type.childContextTypes) != null && Oa();
                break;
              case 3:
                oi(), Ca(La), Ca(Aa), di();
                break;
              case 5:
                li(r);
                break;
              case 4:
                oi();
                break;
              case 13:
              case 19:
                Ca(ui);
                break;
              case 10:
                So(r.type._context);
                break;
              case 22:
              case 23:
                ds();
            }
            n = n.return;
          }
        if (
          ((Lu = e),
          (Nu = e = Os(e.current, null)),
          (Ru = Pu = t),
          (Du = 0),
          (Iu = null),
          (ju = Fu = Mu = 0),
          (zu = Bu = null),
          _o !== null)
        ) {
          for (t = 0; t < _o.length; t++)
            if ((r = (n = _o[t]).interleaved) !== null) {
              n.interleaved = null;
              const a = r.next,
                o = n.pending;
              if (o !== null) {
                const i = o.next;
                (o.next = a), (r.next = i);
              }
              n.pending = r;
            }
          _o = null;
        }
        return e;
      }
      function ps(e, t) {
        for (;;) {
          let n = Nu;
          try {
            if ((Eo(), (fi.current = il), bi)) {
              for (let r = gi.memoizedState; r !== null; ) {
                const a = r.queue;
                a !== null && (a.pending = null), (r = r.next);
              }
              bi = !1;
            }
            if (
              ((mi = 0),
              (vi = hi = gi = null),
              (yi = !1),
              (wi = 0),
              (Tu.current = null),
              n === null || n.return === null)
            ) {
              (Du = 1), (Iu = t), (Nu = null);
              break;
            }
            e: {
              let i = e,
                l = n.return,
                u = n,
                s = t;
              if (
                ((t = Ru),
                (u.flags |= 32768),
                s !== null &&
                  typeof s === "object" &&
                  typeof s.then === "function")
              ) {
                const c = s,
                  d = u,
                  f = d.tag;
                if ((1 & d.mode) == 0 && (f === 0 || f === 11 || f === 15)) {
                  const p = d.alternate;
                  p
                    ? ((d.updateQueue = p.updateQueue),
                      (d.memoizedState = p.memoizedState),
                      (d.lanes = p.lanes))
                    : ((d.updateQueue = null), (d.memoizedState = null));
                }
                const m = vl(l);
                if (m !== null) {
                  (m.flags &= -257),
                    bl(m, l, u, 0, t),
                    1 & m.mode && hl(i, c, t),
                    (s = c);
                  const g = (t = m).updateQueue;
                  if (g === null) {
                    const h = new Set();
                    h.add(s), (t.updateQueue = h);
                  } else g.add(s);
                  break e;
                }
                if ((1 & t) == 0) {
                  hl(i, c, t), gs();
                  break e;
                }
                s = Error(o(426));
              } else if (ao && 1 & u.mode) {
                const v = vl(l);
                if (v !== null) {
                  (65536 & v.flags) == 0 && (v.flags |= 256),
                    bl(v, l, u, 0, t),
                    go(cl(s, u));
                  break e;
                }
              }
              (i = s = cl(s, u)),
                Du !== 4 && (Du = 2),
                Bu === null ? (Bu = [i]) : Bu.push(i),
                (i = l);
              do {
                switch (i.tag) {
                  case 3:
                    (i.flags |= 65536),
                      (t &= -t),
                      (i.lanes |= t),
                      Fo(i, ml(0, s, t));
                    break e;
                  case 1:
                    u = s;
                    var b = i.type,
                      y = i.stateNode;
                    if (
                      (128 & i.flags) == 0 &&
                      (typeof b.getDerivedStateFromError === "function" ||
                        (y !== null &&
                          typeof y.componentDidCatch === "function" &&
                          (Gu === null || !Gu.has(y))))
                    ) {
                      (i.flags |= 65536),
                        (t &= -t),
                        (i.lanes |= t),
                        Fo(i, gl(i, u, t));
                      break e;
                    }
                }
                i = i.return;
              } while (i !== null);
            }
            ws(n);
          } catch (w) {
            (t = w), Nu === n && n !== null && (Nu = n = n.return);
            continue;
          }
          break;
        }
      }
      function ms() {
        const e = Cu.current;
        return (Cu.current = il), e === null ? il : e;
      }
      function gs() {
        (Du !== 0 && Du !== 3 && Du !== 2) || (Du = 4),
          Lu === null ||
            ((268435455 & Mu) == 0 && (268435455 & Fu) == 0) ||
            ls(Lu, Ru);
      }
      function hs(e, t) {
        const n = Au;
        Au |= 2;
        const r = ms();
        for ((Lu === e && Ru === t) || ((qu = null), fs(e, t)); ; )
          try {
            vs();
            break;
          } catch (a) {
            ps(e, a);
          }
        if ((Eo(), (Au = n), (Cu.current = r), Nu !== null))
          throw Error(o(261));
        return (Lu = null), (Ru = 0), Du;
      }
      function vs() {
        for (; Nu !== null; ) ys(Nu);
      }
      function bs() {
        for (; Nu !== null && !Ye(); ) ys(Nu);
      }
      function ys(e) {
        const t = Su(e.alternate, e, Pu);
        (e.memoizedProps = e.pendingProps),
          t === null ? ws(e) : (Nu = t),
          (Tu.current = null);
      }
      function ws(e) {
        let t = e;
        do {
          let n = t.alternate;
          if (((e = t.return), (32768 & t.flags) == 0)) {
            if ((n = Vl(n, t, Pu)) !== null) return void (Nu = n);
          } else {
            if ((n = Wl(n, t)) !== null)
              return (n.flags &= 32767), void (Nu = n);
            if (e === null) return (Du = 6), void (Nu = null);
            (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
          }
          if ((t = t.sibling) !== null) return void (Nu = t);
          Nu = t = e;
        } while (t !== null);
        Du === 0 && (Du = 5);
      }
      function ks(e, t, n) {
        const r = yt,
          a = _u.transition;
        try {
          (_u.transition = null),
            (yt = 1),
            (function (e, t, n, r) {
              do {
                Es();
              } while (Wu !== null);
              if ((6 & Au) != 0) throw Error(o(327));
              n = e.finishedWork;
              let a = e.finishedLanes;
              if (n === null) return null;
              if (
                ((e.finishedWork = null),
                (e.finishedLanes = 0),
                n === e.current)
              )
                throw Error(o(177));
              (e.callbackNode = null), (e.callbackPriority = 0);
              let i = n.lanes | n.childLanes;
              if (
                ((function (e, t) {
                  let n = e.pendingLanes & ~t;
                  (e.pendingLanes = t),
                    (e.suspendedLanes = 0),
                    (e.pingedLanes = 0),
                    (e.expiredLanes &= t),
                    (e.mutableReadLanes &= t),
                    (e.entangledLanes &= t),
                    (t = e.entanglements);
                  const r = e.eventTimes;
                  for (e = e.expirationTimes; n > 0; ) {
                    const a = 31 - it(n),
                      o = 1 << a;
                    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~o);
                  }
                })(e, i),
                e === Lu && ((Nu = Lu = null), (Ru = 0)),
                ((2064 & n.subtreeFlags) == 0 && (2064 & n.flags) == 0) ||
                  Vu ||
                  ((Vu = !0),
                  Ls(tt, function () {
                    return Es(), null;
                  })),
                (i = (15990 & n.flags) != 0),
                (15990 & n.subtreeFlags) != 0 || i)
              ) {
                (i = _u.transition), (_u.transition = null);
                const l = yt;
                yt = 1;
                const u = Au;
                (Au |= 4),
                  (Tu.current = null),
                  (function (e, t) {
                    if (((ea = Ht), pr((e = fr())))) {
                      if ("selectionStart" in e)
                        var n = {
                          start: e.selectionStart,
                          end: e.selectionEnd,
                        };
                      else
                        e: {
                          let r =
                            (n =
                              ((n = e.ownerDocument) && n.defaultView) ||
                              window).getSelection && n.getSelection();
                          if (r && r.rangeCount !== 0) {
                            n = r.anchorNode;
                            const a = r.anchorOffset,
                              i = r.focusNode;
                            r = r.focusOffset;
                            try {
                              n.nodeType, i.nodeType;
                            } catch (k) {
                              n = null;
                              break e;
                            }
                            let l = 0,
                              u = -1,
                              s = -1,
                              c = 0,
                              d = 0,
                              f = e,
                              p = null;
                            t: for (;;) {
                              for (
                                var m;
                                f !== n ||
                                  (a !== 0 && f.nodeType !== 3) ||
                                  (u = l + a),
                                  f !== i ||
                                    (r !== 0 && f.nodeType !== 3) ||
                                    (s = l + r),
                                  f.nodeType === 3 && (l += f.nodeValue.length),
                                  (m = f.firstChild) !== null;

                              )
                                (p = f), (f = m);
                              for (;;) {
                                if (f === e) break t;
                                if (
                                  (p === n && ++c === a && (u = l),
                                  p === i && ++d === r && (s = l),
                                  (m = f.nextSibling) !== null)
                                )
                                  break;
                                p = (f = p).parentNode;
                              }
                              f = m;
                            }
                            n =
                              u === -1 || s === -1
                                ? null
                                : { start: u, end: s };
                          } else n = null;
                        }
                      n = n || { start: 0, end: 0 };
                    } else n = null;
                    for (
                      ta = { focusedElem: e, selectionRange: n },
                        Ht = !1,
                        Xl = t;
                      Xl !== null;

                    )
                      if (
                        ((e = (t = Xl).child),
                        (1028 & t.subtreeFlags) != 0 && e !== null)
                      )
                        (e.return = t), (Xl = e);
                      else
                        for (; Xl !== null; ) {
                          t = Xl;
                          try {
                            var g = t.alternate;
                            if ((1024 & t.flags) != 0)
                              switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                  break;
                                case 1:
                                  if (g !== null) {
                                    const h = g.memoizedProps,
                                      v = g.memoizedState,
                                      b = t.stateNode,
                                      y = b.getSnapshotBeforeUpdate(
                                        t.elementType === t.type
                                          ? h
                                          : vo(t.type, h),
                                        v
                                      );
                                    b.__reactInternalSnapshotBeforeUpdate = y;
                                  }
                                  break;
                                case 3:
                                  var w = t.stateNode.containerInfo;
                                  w.nodeType === 1
                                    ? (w.textContent = "")
                                    : w.nodeType === 9 &&
                                      w.documentElement &&
                                      w.removeChild(w.documentElement);
                                  break;
                                default:
                                  throw Error(o(163));
                              }
                          } catch (k) {
                            xs(t, t.return, k);
                          }
                          if ((e = t.sibling) !== null) {
                            (e.return = t.return), (Xl = e);
                            break;
                          }
                          Xl = t.return;
                        }
                    (g = tu), (tu = !1);
                  })(e, n),
                  hu(n, e),
                  mr(ta),
                  (Ht = !!ea),
                  (ta = ea = null),
                  (e.current = n),
                  bu(n, e, a),
                  Ke(),
                  (Au = u),
                  (yt = l),
                  (_u.transition = i);
              } else e.current = n;
              if (
                (Vu && ((Vu = !1), (Wu = e), (Yu = a)),
                (i = e.pendingLanes) === 0 && (Gu = null),
                (function (e) {
                  if (ot && typeof ot.onCommitFiberRoot === "function")
                    try {
                      ot.onCommitFiberRoot(
                        at,
                        e,
                        void 0,
                        (128 & e.current.flags) == 128
                      );
                    } catch (t) {}
                })(n.stateNode),
                rs(e, Qe()),
                t !== null)
              )
                for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                  (a = t[n]),
                    r(a.value, { componentStack: a.stack, digest: a.digest });
              if (Hu) throw ((Hu = !1), (e = Zu), (Zu = null), e);
              (1 & Yu) != 0 && e.tag !== 0 && Es(),
                (1 & (i = e.pendingLanes)) != 0
                  ? e === Qu
                    ? Ku++
                    : ((Ku = 0), (Qu = e))
                  : (Ku = 0),
                $a();
            })(e, t, n, r);
        } finally {
          (_u.transition = a), (yt = r);
        }
        return null;
      }
      function Es() {
        if (Wu !== null) {
          let e = wt(Yu),
            t = _u.transition,
            n = yt;
          try {
            if (((_u.transition = null), (yt = e < 16 ? 16 : e), Wu === null))
              var r = !1;
            else {
              if (((e = Wu), (Wu = null), (Yu = 0), (6 & Au) != 0))
                throw Error(o(331));
              const a = Au;
              for (Au |= 4, Xl = e.current; Xl !== null; ) {
                var i = Xl,
                  l = i.child;
                if ((16 & Xl.flags) != 0) {
                  var u = i.deletions;
                  if (u !== null) {
                    for (let s = 0; s < u.length; s++) {
                      const c = u[s];
                      for (Xl = c; Xl !== null; ) {
                        let d = Xl;
                        switch (d.tag) {
                          case 0:
                          case 11:
                          case 15:
                            nu(8, d, i);
                        }
                        const f = d.child;
                        if (f !== null) (f.return = d), (Xl = f);
                        else
                          for (; Xl !== null; ) {
                            const p = (d = Xl).sibling,
                              m = d.return;
                            if ((ou(d), d === c)) {
                              Xl = null;
                              break;
                            }
                            if (p !== null) {
                              (p.return = m), (Xl = p);
                              break;
                            }
                            Xl = m;
                          }
                      }
                    }
                    const g = i.alternate;
                    if (g !== null) {
                      let h = g.child;
                      if (h !== null) {
                        g.child = null;
                        do {
                          const v = h.sibling;
                          (h.sibling = null), (h = v);
                        } while (h !== null);
                      }
                    }
                    Xl = i;
                  }
                }
                if ((2064 & i.subtreeFlags) != 0 && l !== null)
                  (l.return = i), (Xl = l);
                else
                  e: for (; Xl !== null; ) {
                    if ((2048 & (i = Xl).flags) != 0)
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          nu(9, i, i.return);
                      }
                    const b = i.sibling;
                    if (b !== null) {
                      (b.return = i.return), (Xl = b);
                      break e;
                    }
                    Xl = i.return;
                  }
              }
              const y = e.current;
              for (Xl = y; Xl !== null; ) {
                const w = (l = Xl).child;
                if ((2064 & l.subtreeFlags) != 0 && w !== null)
                  (w.return = l), (Xl = w);
                else
                  e: for (l = y; Xl !== null; ) {
                    if ((2048 & (u = Xl).flags) != 0)
                      try {
                        switch (u.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ru(9, u);
                        }
                      } catch (E) {
                        xs(u, u.return, E);
                      }
                    if (u === l) {
                      Xl = null;
                      break e;
                    }
                    const k = u.sibling;
                    if (k !== null) {
                      (k.return = u.return), (Xl = k);
                      break e;
                    }
                    Xl = u.return;
                  }
              }
              if (
                ((Au = a),
                $a(),
                ot && typeof ot.onPostCommitFiberRoot === "function")
              )
                try {
                  ot.onPostCommitFiberRoot(at, e);
                } catch (E) {}
              r = !0;
            }
            return r;
          } finally {
            (yt = n), (_u.transition = t);
          }
        }
        return !1;
      }
      function Ss(e, t, n) {
        (e = Io(e, (t = ml(0, (t = cl(n, t)), 1)), 1)),
          (t = es()),
          e !== null && (vt(e, 1, t), rs(e, t));
      }
      function xs(e, t, n) {
        if (e.tag === 3) Ss(e, e, n);
        else
          for (; t !== null; ) {
            if (t.tag === 3) {
              Ss(t, e, n);
              break;
            }
            if (t.tag === 1) {
              const r = t.stateNode;
              if (
                typeof t.type.getDerivedStateFromError === "function" ||
                (typeof r.componentDidCatch === "function" &&
                  (Gu === null || !Gu.has(r)))
              ) {
                (t = Io(t, (e = gl(t, (e = cl(n, e)), 1)), 1)),
                  (e = es()),
                  t !== null && (vt(t, 1, e), rs(t, e));
                break;
              }
            }
            t = t.return;
          }
      }
      function Cs(e, t, n) {
        const r = e.pingCache;
        r !== null && r.delete(t),
          (t = es()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Lu === e &&
            (Ru & n) === n &&
            (Du === 4 ||
            (Du === 3 && (130023424 & Ru) === Ru && Qe() - Uu < 500)
              ? fs(e, 0)
              : (ju |= n)),
          rs(e, t);
      }
      function Ts(e, t) {
        t === 0 &&
          ((1 & e.mode) == 0
            ? (t = 1)
            : ((t = ct), (130023424 & (ct <<= 1)) == 0 && (ct = 4194304)));
        const n = es();
        (e = No(e, t)) !== null && (vt(e, t, n), rs(e, n));
      }
      function _s(e) {
        let t = e.memoizedState,
          n = 0;
        t !== null && (n = t.retryLane), Ts(e, n);
      }
      function As(e, t) {
        let n = 0;
        switch (e.tag) {
          case 13:
            var r = e.stateNode,
              a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          default:
            throw Error(o(314));
        }
        r !== null && r.delete(t), Ts(e, n);
      }
      function Ls(e, t) {
        return Ve(e, t);
      }
      function Ns(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Rs(e, t, n, r) {
        return new Ns(e, t, n, r);
      }
      function Ps(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Os(e, t) {
        let n = e.alternate;
        return (
          n === null
            ? (((n = Rs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
          (n.flags = 14680064 & e.flags),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Ds(e, t, n, r, a, i) {
        let l = 2;
        if (((r = e), typeof e === "function")) Ps(e) && (l = 1);
        else if (typeof e === "string") l = 5;
        else
          e: switch (e) {
            case S:
              return Is(n.children, a, i, t);
            case x:
              (l = 8), (a |= 8);
              break;
            case C:
              return (
                ((e = Rs(12, n, t, 2 | a)).elementType = C), (e.lanes = i), e
              );
            case L:
              return ((e = Rs(13, n, t, a)).elementType = L), (e.lanes = i), e;
            case N:
              return ((e = Rs(19, n, t, a)).elementType = N), (e.lanes = i), e;
            case O:
              return Ms(n, a, i, t);
            default:
              if (typeof e === "object" && e !== null)
                switch (e.$$typeof) {
                  case T:
                    l = 10;
                    break e;
                  case _:
                    l = 9;
                    break e;
                  case A:
                    l = 11;
                    break e;
                  case R:
                    l = 14;
                    break e;
                  case P:
                    (l = 16), (r = null);
                    break e;
                }
              throw Error(o(130, e == null ? e : typeof e, ""));
          }
        return (
          ((t = Rs(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t
        );
      }
      function Is(e, t, n, r) {
        return ((e = Rs(7, e, r, t)).lanes = n), e;
      }
      function Ms(e, t, n, r) {
        return (
          ((e = Rs(22, e, r, t)).elementType = O),
          (e.lanes = n),
          (e.stateNode = { isHidden: !1 }),
          e
        );
      }
      function Fs(e, t, n) {
        return ((e = Rs(6, e, null, t)).lanes = n), e;
      }
      function js(e, t, n) {
        return (
          ((t = Rs(4, e.children !== null ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Bs(e, t, n, r, a) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.callbackNode = this.pendingContext = this.context = null),
          (this.callbackPriority = 0),
          (this.eventTimes = ht(0)),
          (this.expirationTimes = ht(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = ht(0)),
          (this.identifierPrefix = r),
          (this.onRecoverableError = a),
          (this.mutableSourceEagerHydrationData = null);
      }
      function zs(e, t, n, r, a, o, i, l, u) {
        return (
          (e = new Bs(e, t, n, l, u)),
          t === 1 ? ((t = 1), !0 === o && (t |= 8)) : (t = 0),
          (o = Rs(3, null, null, t)),
          (e.current = o),
          (o.stateNode = e),
          (o.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
          }),
          Po(o),
          e
        );
      }
      function Us(e, t, n) {
        const r =
          arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: E,
          key: r == null ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function $s(e) {
        if (!e) return _a;
        e: {
          if ($e((e = e._reactInternals)) !== e || e.tag !== 1)
            throw Error(o(170));
          var t = e;
          do {
            switch (t.tag) {
              case 3:
                t = t.stateNode.context;
                break e;
              case 1:
                if (Pa(t.type)) {
                  t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                  break e;
                }
            }
            t = t.return;
          } while (t !== null);
          throw Error(o(171));
        }
        if (e.tag === 1) {
          const n = e.type;
          if (Pa(n)) return Ia(e, n, t);
        }
        return t;
      }
      function qs(e, t, n, r, a, o, i, l, u) {
        return (
          ((e = zs(n, r, !0, e, 0, o, 0, l, u)).context = $s(null)),
          (n = e.current),
          ((o = Do((r = es()), (a = ts(n)))).callback = t != null ? t : null),
          Io(n, o, a),
          (e.current.lanes = a),
          vt(e, a, r),
          rs(e, r),
          e
        );
      }
      function Hs(e, t, n, r) {
        const a = t.current,
          o = es(),
          i = ts(a);
        return (
          (n = $s(n)),
          t.context === null ? (t.context = n) : (t.pendingContext = n),
          ((t = Do(o, i)).payload = { element: e }),
          (r = void 0 === r ? null : r) !== null && (t.callback = r),
          (e = Io(a, t, i)) !== null && (ns(e, a, i, o), Mo(e, a, i)),
          i
        );
      }
      function Zs(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function Gs(e, t) {
        if ((e = e.memoizedState) !== null && e.dehydrated !== null) {
          const n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function Vs(e, t) {
        Gs(e, t), (e = e.alternate) && Gs(e, t);
      }
      Su = function (e, t, n) {
        if (e !== null)
          if (e.memoizedProps !== t.pendingProps || La.current) wl = !0;
          else {
            if ((e.lanes & n) == 0 && (128 & t.flags) == 0)
              return (
                (wl = !1),
                (function (e, t, n) {
                  switch (t.tag) {
                    case 3:
                      Nl(t), mo();
                      break;
                    case 5:
                      ii(t);
                      break;
                    case 1:
                      Pa(t.type) && Ma(t);
                      break;
                    case 4:
                      ai(t, t.stateNode.containerInfo);
                      break;
                    case 10:
                      var r = t.type._context,
                        a = t.memoizedProps.value;
                      Ta(bo, r._currentValue), (r._currentValue = a);
                      break;
                    case 13:
                      if ((r = t.memoizedState) !== null)
                        return r.dehydrated !== null
                          ? (Ta(ui, 1 & ui.current), (t.flags |= 128), null)
                          : (n & t.child.childLanes) != 0
                          ? Fl(e, t, n)
                          : (Ta(ui, 1 & ui.current),
                            (e = Hl(e, t, n)) !== null ? e.sibling : null);
                      Ta(ui, 1 & ui.current);
                      break;
                    case 19:
                      if (
                        ((r = (n & t.childLanes) != 0), (128 & e.flags) != 0)
                      ) {
                        if (r) return $l(e, t, n);
                        t.flags |= 128;
                      }
                      if (
                        ((a = t.memoizedState) !== null &&
                          ((a.rendering = null),
                          (a.tail = null),
                          (a.lastEffect = null)),
                        Ta(ui, ui.current),
                        r)
                      )
                        break;
                      return null;
                    case 22:
                    case 23:
                      return (t.lanes = 0), Cl(e, t, n);
                  }
                  return Hl(e, t, n);
                })(e, t, n)
              );
            wl = (131072 & e.flags) != 0;
          }
        else (wl = !1), ao && (1048576 & t.flags) != 0 && Ja(t, Ga, t.index);
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            var r = t.type;
            ql(e, t), (e = t.pendingProps);
            var a = Ra(t, Aa.current);
            Co(t, n), (a = xi(null, t, r, e, a, n));
            var i = Ci();
            return (
              (t.flags |= 1),
              typeof a === "object" &&
              a !== null &&
              typeof a.render === "function" &&
              void 0 === a.$$typeof
                ? ((t.tag = 1),
                  (t.memoizedState = null),
                  (t.updateQueue = null),
                  Pa(r) ? ((i = !0), Ma(t)) : (i = !1),
                  (t.memoizedState =
                    a.state !== null && void 0 !== a.state ? a.state : null),
                  Po(t),
                  (a.updater = $o),
                  (t.stateNode = a),
                  (a._reactInternals = t),
                  Go(t, r, e, n),
                  (t = Ll(null, t, r, !0, i, n)))
                : ((t.tag = 0),
                  ao && i && eo(t),
                  kl(null, t, a, n),
                  (t = t.child)),
              t
            );
          case 16:
            r = t.elementType;
            e: {
              switch (
                (ql(e, t),
                (e = t.pendingProps),
                (r = (a = r._init)(r._payload)),
                (t.type = r),
                (a = t.tag =
                  (function (e) {
                    if (typeof e === "function") return Ps(e) ? 1 : 0;
                    if (e != null) {
                      if ((e = e.$$typeof) === A) return 11;
                      if (e === R) return 14;
                    }
                    return 2;
                  })(r)),
                (e = vo(r, e)),
                a)
              ) {
                case 0:
                  t = _l(null, t, r, e, n);
                  break e;
                case 1:
                  t = Al(null, t, r, e, n);
                  break e;
                case 11:
                  t = El(null, t, r, e, n);
                  break e;
                case 14:
                  t = Sl(null, t, r, vo(r.type, e), n);
                  break e;
              }
              throw Error(o(306, r, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              _l(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Al(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
            );
          case 3:
            e: {
              if ((Nl(t), e === null)) throw Error(o(387));
              (r = t.pendingProps),
                (a = (i = t.memoizedState).element),
                Oo(e, t),
                jo(t, r, null, n);
              var l = t.memoizedState;
              if (((r = l.element), i.isDehydrated)) {
                if (
                  ((i = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions,
                  }),
                  (t.updateQueue.baseState = i),
                  (t.memoizedState = i),
                  256 & t.flags)
                ) {
                  t = Rl(e, t, r, n, (a = cl(Error(o(423)), t)));
                  break e;
                }
                if (r !== a) {
                  t = Rl(e, t, r, n, (a = cl(Error(o(424)), t)));
                  break e;
                }
                for (
                  ro = sa(t.stateNode.containerInfo.firstChild),
                    no = t,
                    ao = !0,
                    oo = null,
                    n = Xo(t, null, r, n),
                    t.child = n;
                  n;

                )
                  (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
              } else {
                if ((mo(), r === a)) {
                  t = Hl(e, t, n);
                  break e;
                }
                kl(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 5:
            return (
              ii(t),
              e === null && so(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = e !== null ? e.memoizedProps : null),
              (l = a.children),
              na(r, a) ? (l = null) : i !== null && na(r, i) && (t.flags |= 32),
              Tl(e, t),
              kl(e, t, l, n),
              t.child
            );
          case 6:
            return e === null && so(t), null;
          case 13:
            return Fl(e, t, n);
          case 4:
            return (
              ai(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              e === null ? (t.child = Qo(t, null, r, n)) : kl(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              El(e, t, r, (a = t.elementType === r ? a : vo(r, a)), n)
            );
          case 7:
            return kl(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return kl(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              if (
                ((r = t.type._context),
                (a = t.pendingProps),
                (i = t.memoizedProps),
                (l = a.value),
                Ta(bo, r._currentValue),
                (r._currentValue = l),
                i !== null)
              )
                if (lr(i.value, l)) {
                  if (i.children === a.children && !La.current) {
                    t = Hl(e, t, n);
                    break e;
                  }
                } else
                  for ((i = t.child) !== null && (i.return = t); i !== null; ) {
                    let u = i.dependencies;
                    if (u !== null) {
                      l = i.child;
                      for (let s = u.firstContext; s !== null; ) {
                        if (s.context === r) {
                          if (i.tag === 1) {
                            (s = Do(-1, n & -n)).tag = 2;
                            let c = i.updateQueue;
                            if (c !== null) {
                              const d = (c = c.shared).pending;
                              d === null
                                ? (s.next = s)
                                : ((s.next = d.next), (d.next = s)),
                                (c.pending = s);
                            }
                          }
                          (i.lanes |= n),
                            (s = i.alternate) !== null && (s.lanes |= n),
                            xo(i.return, n, t),
                            (u.lanes |= n);
                          break;
                        }
                        s = s.next;
                      }
                    } else if (i.tag === 10)
                      l = i.type === t.type ? null : i.child;
                    else if (i.tag === 18) {
                      if ((l = i.return) === null) throw Error(o(341));
                      (l.lanes |= n),
                        (u = l.alternate) !== null && (u.lanes |= n),
                        xo(l, n, t),
                        (l = i.sibling);
                    } else l = i.child;
                    if (l !== null) l.return = i;
                    else
                      for (l = i; l !== null; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if ((i = l.sibling) !== null) {
                          (i.return = l.return), (l = i);
                          break;
                        }
                        l = l.return;
                      }
                    i = l;
                  }
              kl(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = t.pendingProps.children),
              Co(t, n),
              (r = r((a = To(a)))),
              (t.flags |= 1),
              kl(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (a = vo((r = t.type), t.pendingProps)),
              Sl(e, t, r, (a = vo(r.type, a)), n)
            );
          case 15:
            return xl(e, t, t.type, t.pendingProps, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : vo(r, a)),
              ql(e, t),
              (t.tag = 1),
              Pa(r) ? ((e = !0), Ma(t)) : (e = !1),
              Co(t, n),
              Ho(t, r, a),
              Go(t, r, a, n),
              Ll(null, t, r, !0, e, n)
            );
          case 19:
            return $l(e, t, n);
          case 22:
            return Cl(e, t, n);
        }
        throw Error(o(156, t.tag));
      };
      const Ws =
        typeof reportError === "function"
          ? reportError
          : function (e) {
              console.error(e);
            };
      function Ys(e) {
        this._internalRoot = e;
      }
      function Ks(e) {
        this._internalRoot = e;
      }
      function Qs(e) {
        return !(
          !e ||
          (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
      }
      function Xs(e) {
        return !(
          !e ||
          (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
              e.nodeValue !== " react-mount-point-unstable "))
        );
      }
      function Js() {}
      function ec(e, t, n, r, a) {
        const o = n._reactRootContainer;
        if (o) {
          var i = o;
          if (typeof a === "function") {
            const l = a;
            a = function () {
              const e = Zs(i);
              l.call(e);
            };
          }
          Hs(t, i, e, a);
        } else
          i = (function (e, t, n, r, a) {
            if (a) {
              if (typeof r === "function") {
                const o = r;
                r = function () {
                  const e = Zs(i);
                  o.call(e);
                };
              }
              var i = qs(t, r, e, 0, null, !1, 0, "", Js);
              return (
                (e._reactRootContainer = i),
                (e[ma] = i.current),
                $r(e.nodeType === 8 ? e.parentNode : e),
                cs(),
                i
              );
            }
            for (; (a = e.lastChild); ) e.removeChild(a);
            if (typeof r === "function") {
              const l = r;
              r = function () {
                const e = Zs(u);
                l.call(e);
              };
            }
            var u = zs(e, 0, !1, null, 0, !1, 0, "", Js);
            return (
              (e._reactRootContainer = u),
              (e[ma] = u.current),
              $r(e.nodeType === 8 ? e.parentNode : e),
              cs(function () {
                Hs(t, u, n, r);
              }),
              u
            );
          })(n, t, e, a, r);
        return Zs(i);
      }
      (Ks.prototype.render = Ys.prototype.render =
        function (e) {
          const t = this._internalRoot;
          if (t === null) throw Error(o(409));
          Hs(e, t, null, null);
        }),
        (Ks.prototype.unmount = Ys.prototype.unmount =
          function () {
            const e = this._internalRoot;
            if (e !== null) {
              this._internalRoot = null;
              const t = e.containerInfo;
              cs(function () {
                Hs(null, e, null, null);
              }),
                (t[ma] = null);
            }
          }),
        (Ks.prototype.unstable_scheduleHydration = function (e) {
          if (e) {
            const t = xt();
            e = { blockedOn: null, target: e, priority: t };
            for (
              var n = 0;
              n < Ot.length && t !== 0 && t < Ot[n].priority;
              n++
            );
            Ot.splice(n, 0, e), n === 0 && Ft(e);
          }
        }),
        (kt = function (e) {
          switch (e.tag) {
            case 3:
              var t = e.stateNode;
              if (t.current.memoizedState.isDehydrated) {
                const n = dt(t.pendingLanes);
                n !== 0 &&
                  (bt(t, 1 | n),
                  rs(t, Qe()),
                  (6 & Au) == 0 && (($u = Qe() + 500), $a()));
              }
              break;
            case 13:
              cs(function () {
                const t = No(e, 1);
                if (t !== null) {
                  const n = es();
                  ns(t, e, 1, n);
                }
              }),
                Vs(e, 1);
          }
        }),
        (Et = function (e) {
          if (e.tag === 13) {
            const t = No(e, 134217728);
            if (t !== null) ns(t, e, 134217728, es());
            Vs(e, 134217728);
          }
        }),
        (St = function (e) {
          if (e.tag === 13) {
            const t = ts(e),
              n = No(e, t);
            if (n !== null) ns(n, e, t, es());
            Vs(e, t);
          }
        }),
        (xt = function () {
          return yt;
        }),
        (Ct = function (e, t) {
          const n = yt;
          try {
            return (yt = e), t();
          } finally {
            yt = n;
          }
        }),
        (Ee = function (e, t, n) {
          switch (t) {
            case "input":
              if ((X(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  const r = n[t];
                  if (r !== e && r.form === e.form) {
                    const a = ka(r);
                    if (!a) throw Error(o(90));
                    V(r), X(r, a);
                  }
                }
              }
              break;
            case "textarea":
              oe(e, n);
              break;
            case "select":
              (t = n.value) != null && ne(e, !!n.multiple, t, !1);
          }
        }),
        (Ae = ss),
        (Le = cs);
      const tc = {
          usingClientEntryPoint: !1,
          Events: [ya, wa, ka, Te, _e, ss],
        },
        nc = {
          findFiberByHostInstance: ba,
          bundleType: 0,
          version: "18.2.0",
          rendererPackageName: "react-dom",
        },
        rc = {
          bundleType: nc.bundleType,
          version: nc.version,
          rendererPackageName: nc.rendererPackageName,
          rendererConfig: nc.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setErrorHandler: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: w.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return (e = Ze(e)) === null ? null : e.stateNode;
          },
          findFiberByHostInstance:
            nc.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
          reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
        };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined") {
        const ac = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!ac.isDisabled && ac.supportsFiber)
          try {
            (at = ac.inject(rc)), (ot = ac);
          } catch (ce) {}
      }
      t.hydrate = function (e, t, n) {
        if (!Xs(t)) throw Error(o(200));
        return ec(null, e, t, !0, n);
      };
    },
    3935: function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE === "function"
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(4448));
    },
    9590: function (e) {
      const t = typeof Element !== "undefined",
        n = typeof Map === "function",
        r = typeof Set === "function",
        a = typeof ArrayBuffer === "function" && !!ArrayBuffer.isView;
      function o(e, i) {
        if (e === i) return !0;
        if (e && i && typeof e === "object" && typeof i === "object") {
          if (e.constructor !== i.constructor) return !1;
          let l, u, s, c;
          if (Array.isArray(e)) {
            if ((l = e.length) != i.length) return !1;
            for (u = l; u-- != 0; ) if (!o(e[u], i[u])) return !1;
            return !0;
          }
          if (n && e instanceof Map && i instanceof Map) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(u = c.next()).done; )
              if (!i.has(u.value[0])) return !1;
            for (c = e.entries(); !(u = c.next()).done; )
              if (!o(u.value[1], i.get(u.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && i instanceof Set) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(u = c.next()).done; )
              if (!i.has(u.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
            if ((l = e.length) != i.length) return !1;
            for (u = l; u-- != 0; ) if (e[u] !== i[u]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === i.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === i.toString();
          if ((l = (s = Object.keys(e)).length) !== Object.keys(i).length)
            return !1;
          for (u = l; u-- != 0; )
            if (!Object.prototype.hasOwnProperty.call(i, s[u])) return !1;
          if (t && e instanceof Element) return !1;
          for (u = l; u-- != 0; )
            if (
              ((s[u] !== "_owner" && s[u] !== "__v" && s[u] !== "__o") ||
                !e.$$typeof) &&
              !o(e[s[u]], i[s[u]])
            )
              return !1;
          return !0;
        }
        return e != e && i != i;
      }
      e.exports = function (e, t) {
        try {
          return o(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    405: function (e, t, n) {
      "use strict";
      n.d(t, {
        B6: function () {
          return Z;
        },
        ql: function () {
          return J;
        },
      });
      const r = n(7294),
        a = n(5697),
        o = n.n(a),
        i = n(9590),
        l = n.n(i),
        u = n(1143),
        s = n.n(u),
        c = n(6774),
        d = n.n(c);
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          f.apply(this, arguments)
        );
      }
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          m(e, t);
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function g(e, t) {
        if (e == null) return {};
        let n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          t.indexOf((n = o[r])) >= 0 || (a[n] = e[n]);
        return a;
      }
      var h = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
          FRAGMENT: "Symbol(react.fragment)",
        },
        v = { rel: ["amphtml", "canonical", "alternate"] },
        b = { type: ["application/ld+json"] },
        y = {
          charset: "",
          name: ["robots", "description"],
          property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site",
          ],
        },
        w = Object.keys(h).map(function (e) {
          return h[e];
        }),
        k = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        E = Object.keys(k).reduce(function (e, t) {
          return (e[k[t]] = t), e;
        }, {}),
        S = function (e, t) {
          for (let n = e.length - 1; n >= 0; n -= 1) {
            const r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        x = function (e) {
          let t = S(e, h.TITLE),
            n = S(e, "titleTemplate");
          if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          const r = S(e, "defaultTitle");
          return t || r || void 0;
        },
        C = function (e) {
          return S(e, "onChangeClientState") || function () {};
        },
        T = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return f({}, e, t);
            }, {});
        },
        _ = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[h.BASE];
            })
            .map(function (e) {
              return e[h.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (let r = Object.keys(n), a = 0; a < r.length; a += 1) {
                  const o = r[a].toLowerCase();
                  if (e.indexOf(o) !== -1 && n[o]) return t.concat(n);
                }
              return t;
            }, []);
        },
        A = function (e, t, n) {
          const r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  typeof console.warn === "function" &&
                  console.warn(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      typeof t[e] +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              const a = {};
              n.filter(function (e) {
                for (var n, o = Object.keys(e), i = 0; i < o.length; i += 1) {
                  const l = o[i],
                    u = l.toLowerCase();
                  t.indexOf(u) === -1 ||
                    (n === "rel" && e[n].toLowerCase() === "canonical") ||
                    (u === "rel" && e[u].toLowerCase() === "stylesheet") ||
                    (n = u),
                    t.indexOf(l) === -1 ||
                      (l !== "innerHTML" &&
                        l !== "cssText" &&
                        l !== "itemprop") ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                const s = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][s] && ((a[n][s] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (let o = Object.keys(a), i = 0; i < o.length; i += 1) {
                const l = o[i],
                  u = f({}, r[l], a[l]);
                r[l] = u;
              }
              return e;
            }, [])
            .reverse();
        },
        L = function (e, t) {
          if (Array.isArray(e) && e.length)
            for (let n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          return !1;
        },
        N = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        R = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    (function (e, t) {
                      for (let n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.priority.push(n)
                      : e.default.push(n),
                    e
                  );
                },
                { priority: [], default: [] }
              )
            : { default: e };
        },
        P = function (e, t) {
          let n;
          return f({}, e, (((n = {})[t] = void 0), n));
        },
        O = [h.NOSCRIPT, h.SCRIPT, h.STYLE],
        D = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;")
          );
        },
        I = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            const r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        M = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[k[n] || n] = e[n]), t;
            }, t)
          );
        },
        F = function (e, t) {
          return t.map(function (t, n) {
            let a,
              o = (((a = { key: n })["data-rh"] = !0), a);
            return (
              Object.keys(t).forEach(function (e) {
                const n = k[e] || e;
                n === "innerHTML" || n === "cssText"
                  ? (o.dangerouslySetInnerHTML = {
                      __html: t.innerHTML || t.cssText,
                    })
                  : (o[n] = t[e]);
              }),
              r.createElement(e, o)
            );
          });
        },
        j = function (e, t, n) {
          switch (e) {
            case h.TITLE:
              return {
                toComponent: function () {
                  return (
                    (n = t.titleAttributes),
                    ((a = { key: (e = t.title) })["data-rh"] = !0),
                    (o = M(n, a)),
                    [r.createElement(h.TITLE, o, e)]
                  );
                  let e, n, a, o;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    const a = I(n),
                      o = N(t);
                    return a
                      ? "<" +
                          e +
                          ' data-rh="true" ' +
                          a +
                          ">" +
                          D(o, r) +
                          "</" +
                          e +
                          ">"
                      : "<" + e + ' data-rh="true">' + D(o, r) + "</" + e + ">";
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case "bodyAttributes":
            case "htmlAttributes":
              return {
                toComponent: function () {
                  return M(t);
                },
                toString: function () {
                  return I(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return F(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      const a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === "innerHTML" || e === "cssText");
                          })
                          .reduce(function (e, t) {
                            const a =
                              void 0 === r[t] ? t : t + '="' + D(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        o = r.innerHTML || r.cssText || "",
                        i = O.indexOf(e) === -1;
                      return (
                        t +
                        "<" +
                        e +
                        ' data-rh="true" ' +
                        a +
                        (i ? "/>" : ">" + o + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, n);
                },
              };
          }
        },
        B = function (e) {
          let t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            o = e.noscriptTags,
            i = e.styleTags,
            l = e.title,
            u = void 0 === l ? "" : l,
            s = e.titleAttributes,
            c = e.linkTags,
            d = e.metaTags,
            f = e.scriptTags,
            p = {
              toComponent: function () {},
              toString: function () {
                return "";
              },
            };
          if (e.prioritizeSeoTags) {
            const m = (function (e) {
              const t = e.linkTags,
                n = e.scriptTags,
                r = e.encode,
                a = R(e.metaTags, y),
                o = R(t, v),
                i = R(n, b);
              return {
                priorityMethods: {
                  toComponent: function () {
                    return [].concat(
                      F(h.META, a.priority),
                      F(h.LINK, o.priority),
                      F(h.SCRIPT, i.priority)
                    );
                  },
                  toString: function () {
                    return (
                      j(h.META, a.priority, r) +
                      " " +
                      j(h.LINK, o.priority, r) +
                      " " +
                      j(h.SCRIPT, i.priority, r)
                    );
                  },
                },
                metaTags: a.default,
                linkTags: o.default,
                scriptTags: i.default,
              };
            })(e);
            (p = m.priorityMethods),
              (c = m.linkTags),
              (d = m.metaTags),
              (f = m.scriptTags);
          }
          return {
            priority: p,
            base: j(h.BASE, t, r),
            bodyAttributes: j("bodyAttributes", n, r),
            htmlAttributes: j("htmlAttributes", a, r),
            link: j(h.LINK, c, r),
            meta: j(h.META, d, r),
            noscript: j(h.NOSCRIPT, o, r),
            script: j(h.SCRIPT, f, r),
            style: j(h.STYLE, i, r),
            title: j(h.TITLE, { title: u, titleAttributes: s }, r),
          };
        },
        z = [],
        U = function (e, t) {
          const n = this;
          void 0 === t && (t = typeof document !== "undefined"),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? z : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? z : n.instances).push(e);
                },
                remove: function (e) {
                  const t = (n.canUseDOM ? z : n.instances).indexOf(e);
                  (n.canUseDOM ? z : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = B({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {},
              }));
        },
        $ = r.createContext({}),
        q = o().shape({
          setHelmet: o().func,
          helmetInstances: o().shape({
            get: o().func,
            add: o().func,
            remove: o().func,
          }),
        }),
        H = typeof document !== "undefined",
        Z = (function (e) {
          function t(n) {
            let r;
            return (
              ((r = e.call(this, n) || this).helmetData = new U(
                r.props.context,
                t.canUseDOM
              )),
              r
            );
          }
          return (
            p(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                $.Provider,
                { value: this.helmetData.value },
                this.props.children
              );
            }),
            t
          );
        })(r.Component);
      (Z.canUseDOM = H),
        (Z.propTypes = {
          context: o().shape({ helmet: o().shape() }),
          children: o().node.isRequired,
        }),
        (Z.defaultProps = { context: {} }),
        (Z.displayName = "HelmetProvider");
      let G = function (e, t) {
          let n,
            r = document.head || document.querySelector(h.HEAD),
            a = r.querySelectorAll(e + "[data-rh]"),
            o = [].slice.call(a),
            i = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                const r = document.createElement(e);
                for (const a in t)
                  Object.prototype.hasOwnProperty.call(t, a) &&
                    (a === "innerHTML"
                      ? (r.innerHTML = t.innerHTML)
                      : a === "cssText"
                      ? r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText))
                      : r.setAttribute(a, void 0 === t[a] ? "" : t[a]));
                r.setAttribute("data-rh", "true"),
                  o.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? o.splice(n, 1)
                    : i.push(r);
              }),
            o.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: o, newTags: i }
          );
        },
        V = function (e, t) {
          const n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute("data-rh"),
                a = r ? r.split(",") : [],
                o = [].concat(a),
                i = Object.keys(t),
                l = 0;
              l < i.length;
              l += 1
            ) {
              const u = i[l],
                s = t[u] || "";
              n.getAttribute(u) !== s && n.setAttribute(u, s),
                a.indexOf(u) === -1 && a.push(u);
              const c = o.indexOf(u);
              c !== -1 && o.splice(c, 1);
            }
            for (let d = o.length - 1; d >= 0; d -= 1) n.removeAttribute(o[d]);
            a.length === o.length
              ? n.removeAttribute("data-rh")
              : n.getAttribute("data-rh") !== i.join(",") &&
                n.setAttribute("data-rh", i.join(","));
          }
        },
        W = function (e, t) {
          const n = e.baseTag,
            r = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            i = e.noscriptTags,
            l = e.onChangeClientState,
            u = e.scriptTags,
            s = e.styleTags,
            c = e.title,
            d = e.titleAttributes;
          V(h.BODY, e.bodyAttributes),
            V(h.HTML, r),
            (function (e, t) {
              void 0 !== e && document.title !== e && (document.title = N(e)),
                V(h.TITLE, t);
            })(c, d);
          const f = {
              baseTag: G(h.BASE, n),
              linkTags: G(h.LINK, a),
              metaTags: G(h.META, o),
              noscriptTags: G(h.NOSCRIPT, i),
              scriptTags: G(h.SCRIPT, u),
              styleTags: G(h.STYLE, s),
            },
            p = {},
            m = {};
          Object.keys(f).forEach(function (e) {
            const t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (m[e] = f[e].oldTags);
          }),
            t && t(),
            l(e, p, m);
        },
        Y = null,
        K = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t
            );
          }
          p(t, e);
          const n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !d()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this),
                this.emitChange();
            }),
            (n.emitChange = function () {
              let e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                a = null,
                o =
                  ((e = n.helmetInstances.get().map(function (e) {
                    const t = f({}, e.props);
                    return delete t.context, t;
                  })),
                  {
                    baseTag: _(["href"], e),
                    bodyAttributes: T("bodyAttributes", e),
                    defer: S(e, "defer"),
                    encode: S(e, "encodeSpecialCharacters"),
                    htmlAttributes: T("htmlAttributes", e),
                    linkTags: A(h.LINK, ["rel", "href"], e),
                    metaTags: A(
                      h.META,
                      ["name", "charset", "http-equiv", "property", "itemprop"],
                      e
                    ),
                    noscriptTags: A(h.NOSCRIPT, ["innerHTML"], e),
                    onChangeClientState: C(e),
                    scriptTags: A(h.SCRIPT, ["src", "innerHTML"], e),
                    styleTags: A(h.STYLE, ["cssText"], e),
                    title: x(e),
                    titleAttributes: T("titleAttributes", e),
                    prioritizeSeoTags: L(e, "prioritizeSeoTags"),
                  });
              Z.canUseDOM
                ? ((t = o),
                  Y && cancelAnimationFrame(Y),
                  t.defer
                    ? (Y = requestAnimationFrame(function () {
                        W(t, function () {
                          Y = null;
                        });
                      }))
                    : (W(t), (Y = null)))
                : B && (a = B(o)),
                r(a);
            }),
            (n.init = function () {
              this.rendered ||
                ((this.rendered = !0),
                this.props.context.helmetInstances.add(this),
                this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(r.Component);
      (K.propTypes = { context: q.isRequired }),
        (K.displayName = "HelmetDispatcher");
      var Q = ["children"],
        X = ["children"],
        J = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          p(t, e);
          const n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !l()(P(this.props, "helmetData"), P(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case h.SCRIPT:
                case h.NOSCRIPT:
                  return { innerHTML: t };
                case h.STYLE:
                  return { cssText: t };
                default:
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
              }
            }),
            (n.flattenArrayTypeChildren = function (e) {
              let t,
                n = e.child,
                r = e.arrayTypeChildren;
              return f(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  f(
                    {},
                    e.newChildProps,
                    this.mapNestedChildrenToProps(n, e.nestedChildren)
                  ),
                ])),
                t)
              );
            }),
            (n.mapObjectTypeChildren = function (e) {
              let t,
                n,
                r = e.child,
                a = e.newProps,
                o = e.newChildProps,
                i = e.nestedChildren;
              switch (r.type) {
                case h.TITLE:
                  return f(
                    {},
                    a,
                    (((t = {})[r.type] = i), (t.titleAttributes = f({}, o)), t)
                  );
                case h.BODY:
                  return f({}, a, { bodyAttributes: f({}, o) });
                case h.HTML:
                  return f({}, a, { htmlAttributes: f({}, o) });
                default:
                  return f({}, a, (((n = {})[r.type] = f({}, o)), n));
              }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
              let n = f({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  let r;
                  n = f({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
              return (
                s()(
                  w.some(function (t) {
                    return e.type === t;
                  }),
                  typeof e.type === "function"
                    ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                    : "Only elements types " +
                        w.join(", ") +
                        " are allowed. Helmet does not support rendering <" +
                        e.type +
                        "> elements. Refer to our API for more information."
                ),
                s()(
                  !t ||
                    typeof t === "string" ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return typeof e !== "string";
                      })),
                  "Helmet expects a string as a child of <" +
                    e.type +
                    ">. Did you forget to wrap your children in braces? ( <" +
                    e.type +
                    ">{``}</" +
                    e.type +
                    "> ) Refer to our API for more information."
                ),
                !0
              );
            }),
            (n.mapChildrenToProps = function (e, t) {
              let n = this,
                a = {};
              return (
                r.Children.forEach(e, function (e) {
                  if (e && e.props) {
                    let r = e.props,
                      o = r.children,
                      i = g(r, Q),
                      l = Object.keys(i).reduce(function (e, t) {
                        return (e[E[t] || t] = i[t]), e;
                      }, {}),
                      u = e.type;
                    switch (
                      (typeof u === "symbol"
                        ? (u = u.toString())
                        : n.warnOnInvalidChildren(e, o),
                      u)
                    ) {
                      case h.FRAGMENT:
                        t = n.mapChildrenToProps(o, t);
                        break;
                      case h.LINK:
                      case h.META:
                      case h.NOSCRIPT:
                      case h.SCRIPT:
                      case h.STYLE:
                        a = n.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: a,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                        break;
                      default:
                        t = n.mapObjectTypeChildren({
                          child: e,
                          newProps: t,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(a, t)
              );
            }),
            (n.render = function () {
              let e = this.props,
                t = e.children,
                n = g(e, X),
                a = f({}, n),
                o = n.helmetData;
              return (
                t && (a = this.mapChildrenToProps(t, a)),
                !o || o instanceof U || (o = new U(o.context, o.instances)),
                o
                  ? r.createElement(
                      K,
                      f({}, a, { context: o.value, helmetData: void 0 })
                    )
                  : r.createElement($.Consumer, null, function (e) {
                      return r.createElement(K, f({}, a, { context: e }));
                    })
              );
            }),
            t
          );
        })(r.Component);
      (J.propTypes = {
        base: o().object,
        bodyAttributes: o().object,
        children: o().oneOfType([o().arrayOf(o().node), o().node]),
        defaultTitle: o().string,
        defer: o().bool,
        encodeSpecialCharacters: o().bool,
        htmlAttributes: o().object,
        link: o().arrayOf(o().object),
        meta: o().arrayOf(o().object),
        noscript: o().arrayOf(o().object),
        onChangeClientState: o().func,
        script: o().arrayOf(o().object),
        style: o().arrayOf(o().object),
        title: o().string,
        titleAttributes: o().object,
        titleTemplate: o().string,
        prioritizeSeoTags: o().bool,
        helmetData: o().object,
      }),
        (J.defaultProps = {
          defer: !0,
          encodeSpecialCharacters: !0,
          prioritizeSeoTags: !1,
        }),
        (J.displayName = "Helmet");
    },
    9921: function (e, t) {
      "use strict";
      const n = typeof Symbol === "function" && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        a = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        u = n ? Symbol.for("react.provider") : 60109,
        s = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        h = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        b = n ? Symbol.for("react.fundamental") : 60117,
        y = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if (typeof e === "object" && e !== null) {
          const t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case o:
                case l:
                case i:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case f:
                    case h:
                    case g:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function E(e) {
        return k(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = s),
        (t.ContextProvider = u),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = o),
        (t.Lazy = h),
        (t.Memo = g),
        (t.Portal = a),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return E(e) || k(e) === c;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return k(e) === s;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === u;
        }),
        (t.isElement = function (e) {
          return typeof e === "object" && e !== null && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === f;
        }),
        (t.isFragment = function (e) {
          return k(e) === o;
        }),
        (t.isLazy = function (e) {
          return k(e) === h;
        }),
        (t.isMemo = function (e) {
          return k(e) === g;
        }),
        (t.isPortal = function (e) {
          return k(e) === a;
        }),
        (t.isProfiler = function (e) {
          return k(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === i;
        }),
        (t.isSuspense = function (e) {
          return k(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            typeof e === "string" ||
            typeof e === "function" ||
            e === o ||
            e === d ||
            e === l ||
            e === i ||
            e === p ||
            e === m ||
            (typeof e === "object" &&
              e !== null &&
              (e.$$typeof === h ||
                e.$$typeof === g ||
                e.$$typeof === u ||
                e.$$typeof === s ||
                e.$$typeof === f ||
                e.$$typeof === b ||
                e.$$typeof === y ||
                e.$$typeof === w ||
                e.$$typeof === v))
          );
        }),
        (t.typeOf = k);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    8356: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      const l = n(7294),
        u = n(5697),
        s = [],
        c = [];
      function d(e) {
        const t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function f(e) {
        const t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            const a = d(e[r]);
            a.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = a.loaded), (t.error = a.error)),
              n.push(a.promise),
              a.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function p(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        let n;
      }
      function m(e, t) {
        let d, f;
        if (!t.loading)
          throw new Error("react-loadable requires a `loading` component");
        let m = i(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: p,
              webpack: null,
              modules: null,
            },
            t
          ),
          g = null;
        function h() {
          return g || (g = e(m.loader)), g.promise;
        }
        return (
          s.push(h),
          typeof m.webpack === "function" &&
            c.push(function () {
              if (
                (0, m.webpack)().every(function (e) {
                  return void 0 !== e && void 0 !== n.m[e];
                })
              )
                return h();
            }),
          (f = d =
            (function (t) {
              function n(n) {
                let r;
                return (
                  o(a(a((r = t.call(this, n) || this))), "retry", function () {
                    r.setState({ error: null, loading: !0, timedOut: !1 }),
                      (g = e(m.loader)),
                      r._loadModule();
                  }),
                  h(),
                  (r.state = {
                    error: g.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: g.loading,
                    loaded: g.loaded,
                  }),
                  r
                );
              }
              r(n, t),
                (n.preload = function () {
                  return h();
                });
              const i = n.prototype;
              return (
                (i.UNSAFE_componentWillMount = function () {
                  this._loadModule();
                }),
                (i.componentDidMount = function () {
                  this._mounted = !0;
                }),
                (i._loadModule = function () {
                  const e = this;
                  if (
                    (this.context.loadable &&
                      Array.isArray(m.modules) &&
                      m.modules.forEach(function (t) {
                        e.context.loadable.report(t);
                      }),
                    g.loading)
                  ) {
                    const t = function (t) {
                      e._mounted && e.setState(t);
                    };
                    typeof m.delay === "number" &&
                      (m.delay === 0
                        ? this.setState({ pastDelay: !0 })
                        : (this._delay = setTimeout(function () {
                            t({ pastDelay: !0 });
                          }, m.delay))),
                      typeof m.timeout === "number" &&
                        (this._timeout = setTimeout(function () {
                          t({ timedOut: !0 });
                        }, m.timeout));
                    const n = function () {
                      t({
                        error: g.error,
                        loaded: g.loaded,
                        loading: g.loading,
                      }),
                        e._clearTimeouts();
                    };
                    g.promise
                      .then(function () {
                        return n(), null;
                      })
                      .catch(function (e) {
                        return n(), null;
                      });
                  }
                }),
                (i.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (i._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (i.render = function () {
                  return this.state.loading || this.state.error
                    ? l.createElement(m.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                        retry: this.retry,
                      })
                    : this.state.loaded
                    ? m.render(this.state.loaded, this.props)
                    : null;
                }),
                n
              );
            })(l.Component)),
          o(d, "contextTypes", {
            loadable: u.shape({ report: u.func.isRequired }),
          }),
          f
        );
      }
      function g(e) {
        return m(d, e);
      }
      g.Map = function (e) {
        if (typeof e.render !== "function")
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return m(f, e);
      };
      const h = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        r(t, e);
        const n = t.prototype;
        return (
          (n.getChildContext = function () {
            return { loadable: { report: this.props.report } };
          }),
          (n.render = function () {
            return l.Children.only(this.props.children);
          }),
          t
        );
      })(l.Component);
      function v(e) {
        for (var t = []; e.length; ) {
          const n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return v(e);
        });
      }
      o(h, "propTypes", { report: u.func.isRequired }),
        o(h, "childContextTypes", {
          loadable: u.shape({ report: u.func.isRequired }).isRequired,
        }),
        (g.Capture = h),
        (g.preloadAll = function () {
          return new Promise(function (e, t) {
            v(s).then(e, t);
          });
        }),
        (g.preloadReady = function () {
          return new Promise(function (e, t) {
            v(c).then(e, e);
          });
        }),
        (e.exports = g);
    },
    6063: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return i;
        },
        H: function () {
          return l;
        },
      });
      const r = n(6550);
      function a() {
        return (
          (a =
            Object.assign ||
            function (e) {
              for (let t = 1; t < arguments.length; t++) {
                const n = arguments[t];
                for (const r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          a.apply(this, arguments)
        );
      }
      const o = n(7294);
      function i(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            const a = e.path
              ? (0, r.LX)(t, e)
              : n.length
              ? n[n.length - 1].match
              : r.F0.computeRootMatch(t);
            return (
              a &&
                (n.push({ route: e, match: a }), e.routes && i(e.routes, t, n)),
              a
            );
          }),
          n
        );
      }
      function l(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? o.createElement(
                r.rs,
                n,
                e.map(function (e, n) {
                  return o.createElement(r.AW, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render(a({}, n, {}, t, { route: e }))
                        : o.createElement(
                            e.component,
                            a({}, n, t, { route: e })
                          );
                    },
                  });
                })
              )
            : null
        );
      }
    },
    3727: function (e, t, n) {
      "use strict";
      n.d(t, {
        OL: function () {
          return y;
        },
        VK: function () {
          return c;
        },
        rU: function () {
          return h;
        },
      });
      var r = n(6550),
        a = n(4578),
        o = n(7294),
        i = n(8461),
        l = (n(5697), n(7462)),
        u = n(3366),
        s = n(2177),
        c = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = (0,
              i.lX)(t.props)),
              t
            );
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              return o.createElement(r.F0, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(o.Component);
      o.Component;
      let d = function (e, t) {
          return typeof e === "function" ? e(t) : e;
        },
        f = function (e, t) {
          return typeof e === "string" ? (0, i.ob)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        m = o.forwardRef;
      void 0 === m && (m = p);
      const g = m(function (e, t) {
        const n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          i = (0, u.Z)(e, ["innerRef", "navigate", "onClick"]),
          s = i.target,
          c = (0, l.Z)({}, i, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                e.button !== 0 ||
                (s && s !== "_self") ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (p !== m && t) || n), o.createElement("a", c);
      });
      var h = m(function (e, t) {
          const n = e.component,
            a = void 0 === n ? g : n,
            c = e.replace,
            h = e.to,
            v = e.innerRef,
            b = (0, u.Z)(e, ["component", "replace", "to", "innerRef"]);
          return o.createElement(r.s6.Consumer, null, function (e) {
            e || (0, s.Z)(!1);
            const n = e.history,
              r = f(d(h, e.location), e.location),
              u = r ? n.createHref(r) : "",
              g = (0, l.Z)({}, b, {
                href: u,
                navigate: function () {
                  const t = d(h, e.location),
                    r = (0, i.Ep)(e.location) === (0, i.Ep)(f(t));
                  (c || r ? n.replace : n.push)(t);
                },
              });
            return (
              p !== m ? (g.ref = t || v) : (g.innerRef = v),
              o.createElement(a, g)
            );
          });
        }),
        v = function (e) {
          return e;
        },
        b = o.forwardRef;
      void 0 === b && (b = v);
      var y = b(function (e, t) {
        const n = e["aria-current"],
          a = void 0 === n ? "page" : n,
          i = e.activeClassName,
          c = void 0 === i ? "active" : i,
          p = e.activeStyle,
          m = e.className,
          g = e.exact,
          y = e.isActive,
          w = e.location,
          k = e.sensitive,
          E = e.strict,
          S = e.style,
          x = e.to,
          C = e.innerRef,
          T = (0, u.Z)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return o.createElement(r.s6.Consumer, null, function (e) {
          e || (0, s.Z)(!1);
          let n = w || e.location,
            i = f(d(x, n), n),
            u = i.pathname,
            _ = u && u.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            A = _
              ? (0, r.LX)(n.pathname, {
                  path: _,
                  exact: g,
                  sensitive: k,
                  strict: E,
                })
              : null,
            L = !!(y ? y(A, n) : A),
            N = typeof m === "function" ? m(L) : m,
            R = typeof S === "function" ? S(L) : S;
          L &&
            ((N = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(N, c)),
            (R = (0, l.Z)({}, R, p)));
          const P = (0, l.Z)(
            { "aria-current": (L && a) || null, className: N, style: R, to: i },
            T
          );
          return (
            v !== b ? (P.ref = t || C) : (P.innerRef = C), o.createElement(h, P)
          );
        });
      });
    },
    6550: function (e, t, n) {
      "use strict";
      n.d(t, {
        AW: function () {
          return x;
        },
        F0: function () {
          return w;
        },
        LX: function () {
          return S;
        },
        TH: function () {
          return O;
        },
        k6: function () {
          return P;
        },
        rs: function () {
          return N;
        },
        s6: function () {
          return y;
        },
      });
      const r = n(4578),
        a = n(7294),
        o = n(5697),
        i = n.n(o),
        l = n(8461),
        u = n(2177),
        s = n(7462),
        c = n(9658),
        d = n.n(c),
        f = (n(9864), n(3366)),
        p = (n(8679), 1073741823),
        m =
          typeof globalThis !== "undefined"
            ? globalThis
            : typeof window !== "undefined"
            ? window
            : void 0 !== n.g
            ? n.g
            : {};
      function g(e) {
        let t = [];
        return {
          on: function (e) {
            t.push(e);
          },
          off: function (e) {
            t = t.filter(function (t) {
              return t !== e;
            });
          },
          get: function () {
            return e;
          },
          set: function (n, r) {
            (e = n),
              t.forEach(function (t) {
                return t(e, r);
              });
          },
        };
      }
      var h =
          a.createContext ||
          function (e, t) {
            let n,
              o,
              l =
                "__create-react-context-" +
                (function () {
                  const e = "__global_unique_id__";
                  return (m[e] = (m[e] || 0) + 1);
                })() +
                "__",
              u = (function (e) {
                function n() {
                  for (
                    var t, n = arguments.length, r = new Array(n), a = 0;
                    a < n;
                    a++
                  )
                    r[a] = arguments[a];
                  return (
                    ((t = e.call.apply(e, [this].concat(r)) || this).emitter =
                      g(t.props.value)),
                    t
                  );
                }
                (0, r.Z)(n, e);
                const a = n.prototype;
                return (
                  (a.getChildContext = function () {
                    let e;
                    return ((e = {})[l] = this.emitter), e;
                  }),
                  (a.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      let n,
                        r = this.props.value,
                        a = e.value;
                      (
                        (o = r) === (i = a)
                          ? o !== 0 || 1 / o == 1 / i
                          : o != o && i != i
                      )
                        ? (n = 0)
                        : ((n = typeof t === "function" ? t(r, a) : p),
                          (n |= 0) !== 0 && this.emitter.set(e.value, n));
                    }
                    let o, i;
                  }),
                  (a.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(a.Component);
            u.childContextTypes = (((n = {})[l] = i().object.isRequired), n);
            const s = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(r)) || this).observedBits =
                    void 0),
                  (e.state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    ((0 | e.observedBits) & n) != 0 &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.Z)(n, t);
              const a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  const t = e.observedBits;
                  this.observedBits = t == null ? p : t;
                }),
                (a.componentDidMount = function () {
                  this.context[l] && this.context[l].on(this.onUpdate);
                  const e = this.props.observedBits;
                  this.observedBits = e == null ? p : e;
                }),
                (a.componentWillUnmount = function () {
                  this.context[l] && this.context[l].off(this.onUpdate);
                }),
                (a.getValue = function () {
                  return this.context[l] ? this.context[l].get() : e;
                }),
                (a.render = function () {
                  return ((e = this.props.children),
                  Array.isArray(e) ? e[0] : e)(this.state.value);
                  let e;
                }),
                n
              );
            })(a.Component);
            return (
              (s.contextTypes = (((o = {})[l] = i().object), o)),
              { Provider: u, Consumer: s }
            );
          },
        v = function (e) {
          const t = h();
          return (t.displayName = e), t;
        },
        b = v("Router-History"),
        y = v("Router"),
        w = (function (e) {
          function t(t) {
            let n;
            return (
              ((n = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._pendingLocation = e;
                })),
              n
            );
          }
          (0, r.Z)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: e === "/" };
            });
          const n = t.prototype;
          return (
            (n.componentDidMount = function () {
              const e = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (t) {
                    e._isMounted && e.setState({ location: t });
                  })),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten &&
                (this.unlisten(),
                (this._isMounted = !1),
                (this._pendingLocation = null));
            }),
            (n.render = function () {
              return a.createElement(
                y.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.createElement(b.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            t
          );
        })(a.Component);
      a.Component;
      a.Component;
      let k = {},
        E = 0;
      function S(e, t) {
        void 0 === t && (t = {}),
          (typeof t === "string" || Array.isArray(t)) && (t = { path: t });
        const n = t,
          r = n.path,
          a = n.exact,
          o = void 0 !== a && a,
          i = n.strict,
          l = void 0 !== i && i,
          u = n.sensitive,
          s = void 0 !== u && u;
        return [].concat(r).reduce(function (t, n) {
          if (!n && n !== "") return null;
          if (t) return t;
          const r = (function (e, t) {
              const n = "" + t.end + t.strict + t.sensitive,
                r = k[n] || (k[n] = {});
              if (r[e]) return r[e];
              const a = [],
                o = { regexp: d()(e, a, t), keys: a };
              return E < 1e4 && ((r[e] = o), E++), o;
            })(n, { end: o, strict: l, sensitive: s }),
            a = r.regexp,
            i = r.keys,
            u = a.exec(e);
          if (!u) return null;
          const c = u[0],
            f = u.slice(1),
            p = e === c;
          return o && !p
            ? null
            : {
                path: n,
                url: n === "/" && c === "" ? "/" : c,
                isExact: p,
                params: i.reduce(function (e, t, n) {
                  return (e[t.name] = f[n]), e;
                }, {}),
              };
        }, null);
      }
      var x = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            const e = this;
            return a.createElement(y.Consumer, null, function (t) {
              t || (0, u.Z)(!1);
              let n = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? S(n.pathname, e.props)
                  : t.match,
                o = (0, s.Z)({}, t, { location: n, match: r }),
                i = e.props,
                l = i.children,
                c = i.component,
                d = i.render;
              return (
                Array.isArray(l) &&
                  (function (e) {
                    return a.Children.count(e) === 0;
                  })(l) &&
                  (l = null),
                a.createElement(
                  y.Provider,
                  { value: o },
                  o.match
                    ? l
                      ? typeof l === "function"
                        ? l(o)
                        : l
                      : c
                      ? a.createElement(c, o)
                      : d
                      ? d(o)
                      : null
                    : typeof l === "function"
                    ? l(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(a.Component);
      function C(e) {
        return e.charAt(0) === "/" ? e : "/" + e;
      }
      function T(e, t) {
        if (!e) return t;
        const n = C(e);
        return t.pathname.indexOf(n) !== 0
          ? t
          : (0, s.Z)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function _(e) {
        return typeof e === "string" ? e : (0, l.Ep)(e);
      }
      function A(e) {
        return function () {
          (0, u.Z)(!1);
        };
      }
      function L() {}
      a.Component;
      var N = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            const e = this;
            return a.createElement(y.Consumer, null, function (t) {
              t || (0, u.Z)(!1);
              let n,
                r,
                o = e.props.location || t.location;
              return (
                a.Children.forEach(e.props.children, function (e) {
                  if (r == null && a.isValidElement(e)) {
                    n = e;
                    const i = e.props.path || e.props.from;
                    r = i
                      ? S(o.pathname, (0, s.Z)({}, e.props, { path: i }))
                      : t.match;
                  }
                }),
                r ? a.cloneElement(n, { location: o, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(a.Component);
      const R = a.useContext;
      function P() {
        return R(b);
      }
      function O() {
        return R(y).location;
      }
    },
    9658: function (e, t, n) {
      const r = n(5826);
      (e.exports = p),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return l(o(e, t), t);
        }),
        (e.exports.tokensToFunction = l),
        (e.exports.tokensToRegExp = f);
      const a = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function o(e, t) {
        for (
          var n, r = [], o = 0, i = 0, l = "", c = (t && t.delimiter) || "/";
          (n = a.exec(e)) != null;

        ) {
          const d = n[0],
            f = n[1],
            p = n.index;
          if (((l += e.slice(i, p)), (i = p + d.length), f)) l += f[1];
          else {
            const m = e[i],
              g = n[2],
              h = n[3],
              v = n[4],
              b = n[5],
              y = n[6],
              w = n[7];
            l && (r.push(l), (l = ""));
            const k = g != null && m != null && m !== g,
              E = y === "+" || y === "*",
              S = y === "?" || y === "*",
              x = n[2] || c,
              C = v || b;
            r.push({
              name: h || o++,
              prefix: g || "",
              delimiter: x,
              optional: S,
              repeat: E,
              partial: k,
              asterisk: !!w,
              pattern: C ? s(C) : w ? ".*" : "[^" + u(x) + "]+?",
            });
          }
        }
        return i < e.length && (l += e.substr(i)), l && r.push(l), r;
      }
      function i(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          typeof e[a] === "object" &&
            (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", d(t)));
        return function (t, a) {
          for (
            var o = "",
              l = t || {},
              u = (a || {}).pretty ? i : encodeURIComponent,
              s = 0;
            s < e.length;
            s++
          ) {
            const c = e[s];
            if (typeof c !== "string") {
              var d,
                f = l[c.name];
              if (f == null) {
                if (c.optional) {
                  c.partial && (o += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(f)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(f) +
                      "`"
                  );
                if (f.length === 0) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (let p = 0; p < f.length; p++) {
                  if (((d = u(f[p])), !n[s].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  o += (p === 0 ? c.prefix : c.delimiter) + d;
                }
              } else {
                if (
                  ((d = c.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : u(f)),
                  !n[s].test(d))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      d +
                      '"'
                  );
                o += c.prefix + d;
              }
            } else o += c;
          }
          return o;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function s(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return (e.keys = t), e;
      }
      function d(e) {
        return e && e.sensitive ? "" : "i";
      }
      function f(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var a = (n = n || {}).strict, o = !1 !== n.end, i = "", l = 0;
          l < e.length;
          l++
        ) {
          const s = e[l];
          if (typeof s === "string") i += u(s);
          else {
            let f = u(s.prefix),
              p = "(?:" + s.pattern + ")";
            t.push(s),
              s.repeat && (p += "(?:" + f + p + ")*"),
              (i += p =
                s.optional
                  ? s.partial
                    ? f + "(" + p + ")?"
                    : "(?:" + f + "(" + p + "))?"
                  : f + "(" + p + ")");
          }
        }
        const m = u(n.delimiter || "/"),
          g = i.slice(-m.length) === m;
        return (
          a || (i = (g ? i.slice(0, -m.length) : i) + "(?:" + m + "(?=$))?"),
          (i += o ? "$" : a && g ? "" : "(?=" + m + "|$)"),
          c(new RegExp("^" + i, d(n)), t)
        );
      }
      function p(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                const n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (let r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return c(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++)
                  r.push(p(e[a], t, n).source);
                return c(new RegExp("(?:" + r.join("|") + ")", d(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return f(o(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    2408: function (e, t) {
      "use strict";
      const n = Symbol.for("react.element"),
        r = Symbol.for("react.portal"),
        a = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        i = Symbol.for("react.profiler"),
        l = Symbol.for("react.provider"),
        u = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        c = Symbol.for("react.suspense"),
        d = Symbol.for("react.memo"),
        f = Symbol.for("react.lazy"),
        p = Symbol.iterator;
      const m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = Object.assign,
        h = {};
      function v(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      function b() {}
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      (v.prototype.isReactComponent = {}),
        (v.prototype.setState = function (e, t) {
          if (typeof e !== "object" && typeof e !== "function" && e != null)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (v.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (b.prototype = v.prototype);
      const w = (y.prototype = new b());
      (w.constructor = y), g(w, v.prototype), (w.isPureReactComponent = !0);
      const k = Array.isArray,
        E = Object.prototype.hasOwnProperty,
        S = { current: null },
        x = { key: !0, ref: !0, __self: !0, __source: !0 };
      function C(e, t, r) {
        let a,
          o = {},
          i = null,
          l = null;
        if (t != null)
          for (a in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            E.call(t, a) && !x.hasOwnProperty(a) && (o[a] = t[a]);
        let u = arguments.length - 2;
        if (u === 1) o.children = r;
        else if (u > 1) {
          for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
          o.children = s;
        }
        if (e && e.defaultProps)
          for (a in (u = e.defaultProps)) void 0 === o[a] && (o[a] = u[a]);
        return {
          $$typeof: n,
          type: e,
          key: i,
          ref: l,
          props: o,
          _owner: S.current,
        };
      }
      function T(e) {
        return typeof e === "object" && e !== null && e.$$typeof === n;
      }
      const _ = /\/+/g;
      function A(e, t) {
        return typeof e === "object" && e !== null && e.key != null
          ? (function (e) {
              const t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function L(e, t, a, o, i) {
        let l = typeof e;
        (l !== "undefined" && l !== "boolean") || (e = null);
        let u = !1;
        if (e === null) u = !0;
        else
          switch (l) {
            case "string":
            case "number":
              u = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case n:
                case r:
                  u = !0;
              }
          }
        if (u)
          return (
            (i = i((u = e))),
            (e = o === "" ? "." + A(u, 0) : o),
            k(i)
              ? ((a = ""),
                e != null && (a = e.replace(_, "$&/") + "/"),
                L(i, t, a, "", function (e) {
                  return e;
                }))
              : i != null &&
                (T(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: n,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    a +
                      (!i.key || (u && u.key === i.key)
                        ? ""
                        : ("" + i.key).replace(_, "$&/") + "/") +
                      e
                  )),
                t.push(i)),
            1
          );
        if (((u = 0), (o = o === "" ? "." : o + ":"), k(e)))
          for (var s = 0; s < e.length; s++) {
            var c = o + A((l = e[s]), s);
            u += L(l, t, a, c, i);
          }
        else if (
          ((c = (function (e) {
            return e === null || typeof e !== "object"
              ? null
              : typeof (e = (p && e[p]) || e["@@iterator"]) === "function"
              ? e
              : null;
          })(e)),
          typeof c === "function")
        )
          for (e = c.call(e), s = 0; !(l = e.next()).done; )
            u += L((l = l.value), t, a, (c = o + A(l, s++)), i);
        else if (l === "object")
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                (t === "[object Object]"
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return u;
      }
      function N(e, t, n) {
        if (e == null) return e;
        let r = [],
          a = 0;
        return (
          L(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function R(e) {
        if (e._status === -1) {
          let t = e._result;
          (t = t()).then(
            function (t) {
              (e._status !== 0 && e._status !== -1) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (e._status !== 0 && e._status !== -1) ||
                ((e._status = 2), (e._result = t));
            }
          ),
            e._status === -1 && ((e._status = 0), (e._result = t));
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
      }
      const P = { current: null },
        O = { transition: null },
        D = {
          ReactCurrentDispatcher: P,
          ReactCurrentBatchConfig: O,
          ReactCurrentOwner: S,
        };
      (t.Children = {
        map: N,
        forEach: function (e, t, n) {
          N(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          let t = 0;
          return (
            N(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            N(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!T(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        },
      }),
        (t.Component = v),
        (t.Fragment = a),
        (t.Profiler = i),
        (t.PureComponent = y),
        (t.StrictMode = o),
        (t.Suspense = c),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = D),
        (t.cloneElement = function (e, t, r) {
          if (e == null)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            );
          let a = g({}, e.props),
            o = e.key,
            i = e.ref,
            l = e._owner;
          if (t != null) {
            if (
              (void 0 !== t.ref && ((i = t.ref), (l = S.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (s in t)
              E.call(t, s) &&
                !x.hasOwnProperty(s) &&
                (a[s] = void 0 === t[s] && void 0 !== u ? u[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (s === 1) a.children = r;
          else if (s > 1) {
            u = Array(s);
            for (let c = 0; c < s; c++) u[c] = arguments[c + 2];
            a.children = u;
          }
          return {
            $$typeof: n,
            type: e.type,
            key: o,
            ref: i,
            props: a,
            _owner: l,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: u,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = { $$typeof: l, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          const t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = T),
        (t.lazy = function (e) {
          return {
            $$typeof: f,
            _payload: { _status: -1, _result: e },
            _init: R,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
        }),
        (t.startTransition = function (e) {
          const t = O.transition;
          O.transition = {};
          try {
            e();
          } finally {
            O.transition = t;
          }
        }),
        (t.unstable_act = function () {
          throw Error(
            "act(...) is not supported in production builds of React."
          );
        }),
        (t.useCallback = function (e, t) {
          return P.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return P.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return P.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return P.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return P.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return P.current.useImperativeHandle(e, t, n);
        }),
        (t.useInsertionEffect = function (e, t) {
          return P.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return P.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return P.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return P.current.useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return P.current.useRef(e);
        }),
        (t.useState = function (e) {
          return P.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, n) {
          return P.current.useSyncExternalStore(e, t, n);
        }),
        (t.useTransition = function () {
          return P.current.useTransition();
        }),
        (t.version = "18.2.0");
    },
    7294: function (e, t, n) {
      "use strict";
      e.exports = n(2408);
    },
    53: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = e.length;
        e.push(t);
        e: for (; n > 0; ) {
          const r = (n - 1) >>> 1,
            a = e[r];
          if (!(o(a, t) > 0)) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function r(e) {
        return e.length === 0 ? null : e[0];
      }
      function a(e) {
        if (e.length === 0) return null;
        const t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          e: for (let r = 0, a = e.length, i = a >>> 1; r < i; ) {
            const l = 2 * (r + 1) - 1,
              u = e[l],
              s = l + 1,
              c = e[s];
            if (o(u, n) < 0)
              s < a && o(c, u) < 0
                ? ((e[r] = c), (e[s] = n), (r = s))
                : ((e[r] = u), (e[l] = n), (r = l));
            else {
              if (!(s < a && o(c, n) < 0)) break e;
              (e[r] = c), (e[s] = n), (r = s);
            }
          }
        }
        return t;
      }
      function o(e, t) {
        const n = e.sortIndex - t.sortIndex;
        return n !== 0 ? n : e.id - t.id;
      }
      if (
        typeof performance === "object" &&
        typeof performance.now === "function"
      ) {
        const i = performance;
        t.unstable_now = function () {
          return i.now();
        };
      } else {
        const l = Date,
          u = l.now();
        t.unstable_now = function () {
          return l.now() - u;
        };
      }
      let s = [],
        c = [],
        d = 1,
        f = null,
        p = 3,
        m = !1,
        g = !1,
        h = !1,
        v = typeof setTimeout === "function" ? setTimeout : null,
        b = typeof clearTimeout === "function" ? clearTimeout : null,
        y = typeof setImmediate !== "undefined" ? setImmediate : null;
      function w(e) {
        for (let t = r(c); t !== null; ) {
          if (t.callback === null) a(c);
          else {
            if (!(t.startTime <= e)) break;
            a(c), (t.sortIndex = t.expirationTime), n(s, t);
          }
          t = r(c);
        }
      }
      function k(e) {
        if (((h = !1), w(e), !g))
          if (r(s) !== null) (g = !0), O(E);
          else {
            const t = r(c);
            t !== null && D(k, t.startTime - e);
          }
      }
      function E(e, n) {
        (g = !1), h && ((h = !1), b(T), (T = -1)), (m = !0);
        const o = p;
        try {
          for (
            w(n), f = r(s);
            f !== null && (!(f.expirationTime > n) || (e && !L()));

          ) {
            const i = f.callback;
            if (typeof i === "function") {
              (f.callback = null), (p = f.priorityLevel);
              const l = i(f.expirationTime <= n);
              (n = t.unstable_now()),
                typeof l === "function" ? (f.callback = l) : f === r(s) && a(s),
                w(n);
            } else a(s);
            f = r(s);
          }
          if (f !== null) var u = !0;
          else {
            const d = r(c);
            d !== null && D(k, d.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (f = null), (p = o), (m = !1);
        }
      }
      typeof navigator !== "undefined" &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var S,
        x = !1,
        C = null,
        T = -1,
        _ = 5,
        A = -1;
      function L() {
        return !(t.unstable_now() - A < _);
      }
      function N() {
        if (C !== null) {
          const e = t.unstable_now();
          A = e;
          let n = !0;
          try {
            n = C(!0, e);
          } finally {
            n ? S() : ((x = !1), (C = null));
          }
        } else x = !1;
      }
      if (typeof y === "function")
        S = function () {
          y(N);
        };
      else if (typeof MessageChannel !== "undefined") {
        const R = new MessageChannel(),
          P = R.port2;
        (R.port1.onmessage = N),
          (S = function () {
            P.postMessage(null);
          });
      } else
        S = function () {
          v(N, 0);
        };
      function O(e) {
        (C = e), x || ((x = !0), S());
      }
      function D(e, n) {
        T = v(function () {
          e(t.unstable_now());
        }, n);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          g || m || ((g = !0), O(E));
        }),
        (t.unstable_forceFrameRate = function (e) {
          e < 0 || e > 125
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (_ = e > 0 ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return p;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(s);
        }),
        (t.unstable_next = function (e) {
          switch (p) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = p;
          }
          const n = p;
          p = t;
          try {
            return e();
          } finally {
            p = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          const n = p;
          p = e;
          try {
            return t();
          } finally {
            p = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, a, o) {
          const i = t.unstable_now();
          switch (
            (typeof o === "object" && o !== null
              ? (o = typeof (o = o.delay) === "number" && o > 0 ? i + o : i)
              : (o = i),
            e)
          ) {
            case 1:
              var l = -1;
              break;
            case 2:
              l = 250;
              break;
            case 5:
              l = 1073741823;
              break;
            case 4:
              l = 1e4;
              break;
            default:
              l = 5e3;
          }
          return (
            (e = {
              id: d++,
              callback: a,
              priorityLevel: e,
              startTime: o,
              expirationTime: (l = o + l),
              sortIndex: -1,
            }),
            o > i
              ? ((e.sortIndex = o),
                n(c, e),
                r(s) === null &&
                  e === r(c) &&
                  (h ? (b(T), (T = -1)) : (h = !0), D(k, o - i)))
              : ((e.sortIndex = l), n(s, e), g || m || ((g = !0), O(E))),
            e
          );
        }),
        (t.unstable_shouldYield = L),
        (t.unstable_wrapCallback = function (e) {
          const t = p;
          return function () {
            const n = p;
            p = t;
            try {
              return e.apply(this, arguments);
            } finally {
              p = n;
            }
          };
        });
    },
    3840: function (e, t, n) {
      "use strict";
      e.exports = n(53);
    },
    6774: function (e) {
      e.exports = function (e, t, n, r) {
        let a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if (typeof e !== "object" || !e || typeof t !== "object" || !t)
          return !1;
        const o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (
          let l = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          const s = o[u];
          if (!l(s)) return !1;
          const c = e[s],
            d = t[s];
          if (
            !1 === (a = n ? n.call(r, c, d, s) : void 0) ||
            (void 0 === a && c !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    2177: function (e, t) {
      "use strict";
      const n = "Invariant failed";
      t.Z = function (e, t) {
        if (!e) throw new Error(n);
      };
    },
    6809: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          title: "@m8a/nestjs-typegoose",
          tagline: "Easily plug in Typegoose with NestJS",
          url: "https://m8a-io.github.io",
          baseUrl: "/nestjs-typegoose/",
          favicon: "img/favicon.ico",
          organizationName: "m8a-io",
          projectName: "@m8a/nestjs-typegoose",
          themeConfig: {
            navbar: {
              title: "m8a.io - Nestjs Typegoose",
              items: [
                { to: "docs/install", label: "Docs", position: "left" },
                {
                  href: "https://github.com/m8a-io/m8a",
                  label: "GitHub",
                  position: "right",
                },
              ],
              hideOnScroll: !1,
            },
            footer: {
              style: "dark",
              links: [
                {
                  title: "Docs",
                  items: [
                    { label: "Installation", to: "docs/install" },
                    { label: "Getting Started", to: "docs/usage" },
                  ],
                },
                {
                  title: "Social",
                  items: [
                    {
                      label: "GitHub",
                      href: "https://github.com/m8a-io/m8a/tree/dev/deps/nestjs-typegoose",
                    },
                  ],
                },
              ],
              copyright:
                "Copyright \xa9 2022 m8a.io - Scott Molinari and Kyle Pfromer.",
            },
            colorMode: {
              defaultMode: "light",
              disableSwitch: !1,
              respectPrefersColorScheme: !1,
            },
            docs: {
              versionPersistence: "localStorage",
              sidebar: { hideable: !1, autoCollapseCategories: !1 },
            },
            metadata: [],
            prism: {
              additionalLanguages: [],
              theme: {
                plain: { color: "#bfc7d5", backgroundColor: "#292d3e" },
                styles: [
                  {
                    types: ["comment"],
                    style: { color: "rgb(105, 112, 152)", fontStyle: "italic" },
                  },
                  {
                    types: ["string", "inserted"],
                    style: { color: "rgb(195, 232, 141)" },
                  },
                  { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
                  {
                    types: ["builtin", "char", "constant", "function"],
                    style: { color: "rgb(130, 170, 255)" },
                  },
                  {
                    types: ["punctuation", "selector"],
                    style: { color: "rgb(199, 146, 234)" },
                  },
                  {
                    types: ["variable"],
                    style: { color: "rgb(191, 199, 213)" },
                  },
                  {
                    types: ["class-name", "attr-name"],
                    style: { color: "rgb(255, 203, 107)" },
                  },
                  {
                    types: ["tag", "deleted"],
                    style: { color: "rgb(255, 85, 114)" },
                  },
                  {
                    types: ["operator"],
                    style: { color: "rgb(137, 221, 255)" },
                  },
                  { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
                  { types: ["keyword"], style: { fontStyle: "italic" } },
                  {
                    types: ["doctype"],
                    style: { color: "rgb(199, 146, 234)", fontStyle: "italic" },
                  },
                  {
                    types: ["namespace"],
                    style: { color: "rgb(178, 204, 214)" },
                  },
                  { types: ["url"], style: { color: "rgb(221, 221, 221)" } },
                ],
              },
              magicComments: [
                {
                  className: "theme-code-block-highlighted-line",
                  line: "highlight-next-line",
                  block: { start: "highlight-start", end: "highlight-end" },
                },
              ],
            },
            tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
          },
          presets: [
            [
              "@docusaurus/preset-classic",
              {
                docs: {
                  sidebarPath:
                    "/home/scott/Documents/tmp/m8a-new/deps/nestjs-typegoose/website/sidebars.js",
                  editUrl:
                    "https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website",
                },
                theme: {
                  customCss:
                    "/home/scott/Documents/tmp/m8a-new/deps/nestjs-typegoose/website/src/css/custom.css",
                },
              },
            ],
          ],
          baseUrlIssueBanner: !0,
          i18n: {
            defaultLocale: "en",
            path: "i18n",
            locales: ["en"],
            localeConfigs: {},
          },
          onBrokenLinks: "throw",
          onBrokenMarkdownLinks: "warn",
          onDuplicateRoutes: "warn",
          staticDirectories: ["static"],
          customFields: {},
          plugins: [],
          themes: [],
          scripts: [],
          stylesheets: [],
          clientModules: [],
          titleDelimiter: "|",
          noIndex: !1,
        });
    },
    7462: function (e, t, n) {
      "use strict";
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (let t = 1; t < arguments.length; t++) {
                  const n = arguments[t];
                  for (const r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(this, arguments)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    4578: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      const r = n(9611);
      function a(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (0, r.Z)(e, t);
      }
    },
    3366: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (e == null) return {};
        let n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          (n = o[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    9611: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          r(e, t)
        );
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    6528: function (e, t, n) {
      "use strict";
      function r(e) {
        return (
          (r =
            typeof Symbol === "function" && typeof Symbol.iterator === "symbol"
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e &&
                    typeof Symbol === "function" &&
                    e.constructor === Symbol &&
                    e !== Symbol.prototype
                    ? "symbol"
                    : typeof e;
                }),
          r(e)
        );
      }
      n.d(t, {
        Z: function () {
          return i;
        },
      });
      const a = n(9611);
      function o(e, t) {
        if (typeof t !== "function" && t !== null)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          Object.defineProperty(e, "prototype", { writable: !1 }),
          t && (0, a.Z)(e, t);
      }
      function i() {
        i = function (e, t) {
          return new n(e, void 0, t);
        };
        const e = RegExp.prototype,
          t = new WeakMap();
        function n(e, r, o) {
          const i = new RegExp(e, r);
          return t.set(i, o || t.get(e)), (0, a.Z)(i, n.prototype);
        }
        function l(e, n) {
          const r = t.get(n);
          return Object.keys(r).reduce(function (t, n) {
            const a = r[n];
            if (typeof a === "number") t[n] = e[a];
            else {
              for (var o = 0; void 0 === e[a[o]] && o + 1 < a.length; ) o++;
              t[n] = e[a[o]];
            }
            return t;
          }, Object.create(null));
        }
        return (
          o(n, RegExp),
          (n.prototype.exec = function (t) {
            const n = e.exec.call(this, t);
            return n && (n.groups = l(n, this)), n;
          }),
          (n.prototype[Symbol.replace] = function (n, a) {
            if (typeof a === "string") {
              const o = t.get(this);
              return e[Symbol.replace].call(
                this,
                n,
                a.replace(/\$<([^>]+)>/g, function (e, t) {
                  return "$" + o[t];
                })
              );
            }
            if (typeof a === "function") {
              const i = this;
              return e[Symbol.replace].call(this, n, function () {
                let e = arguments;
                return (
                  r(e[e.length - 1]) != "object" &&
                    (e = [].slice.call(e)).push(l(e, i)),
                  a.apply(this, e)
                );
              });
            }
            return e[Symbol.replace].call(this, n, a);
          }),
          i.apply(this, arguments)
        );
      }
    },
    7529: function (e) {
      "use strict";
      e.exports = {};
    },
    6887: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"/nestjs-typegoose/docs-258":{"__comp":"1be78505","__context":{"plugin":"1f1a89eb"},"versionMetadata":"935f2afb"},"/nestjs-typegoose/docs/async-configuration-eb5":{"__comp":"17896441","content":"16c91d09"},"/nestjs-typegoose/docs/discriminators-df5":{"__comp":"17896441","content":"99f6fac0"},"/nestjs-typegoose/docs/faq-cc5":{"__comp":"17896441","content":"0480b142"},"/nestjs-typegoose/docs/install-f37":{"__comp":"17896441","content":"c4de80f8"},"/nestjs-typegoose/docs/multiple-connections-f80":{"__comp":"17896441","content":"fb7b7bcb"},"/nestjs-typegoose/docs/schema-options-9c7":{"__comp":"17896441","content":"4020c8f9"},"/nestjs-typegoose/docs/testing-17e":{"__comp":"17896441","content":"fbe93038"},"/nestjs-typegoose/docs/usage-e44":{"__comp":"17896441","content":"6476eba6"},"/nestjs-typegoose/-fcd":{"__comp":"c4f5d8e4","__context":{"plugin":"3a4a95f6"},"config":"5e9f5e1a"}}'
      );
    },
  },
  function (e) {
    e.O(0, [532], function () {
      return (t = 9383), e((e.s = t));
      let t;
    });
    e.O();
  },
]);
