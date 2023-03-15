"use strict";
(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [11],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return l;
        },
        kt: function () {
          return d;
        },
      });
      const r = n(7294);
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
      function i(e, t) {
        const n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          let r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function a(e) {
        for (let t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2
            ? i(Object(n), !0).forEach(function (t) {
                o(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : i(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function s(e, t) {
        if (e == null) return {};
        let n,
          r,
          o = (function (e, t) {
            if (e == null) return {};
            let n,
              r,
              o = {},
              i = Object.keys(e);
            for (r = 0; r < i.length; r++)
              (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
            return o;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          const i = Object.getOwnPropertySymbols(e);
          for (r = 0; r < i.length; r++)
            (n = i[r]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (o[n] = e[n]));
        }
        return o;
      }
      var c = r.createContext({}),
        p = function (e) {
          let t = r.useContext(c),
            n = t;
          return e && (n = typeof e === "function" ? e(t) : a(a({}, t), e)), n;
        },
        l = function (e) {
          const t = p(e.components);
          return r.createElement(c.Provider, { value: t }, e.children);
        },
        u = {
          inlineCode: "code",
          wrapper: function (e) {
            const t = e.children;
            return r.createElement(r.Fragment, {}, t);
          },
        },
        m = r.forwardRef(function (e, t) {
          const n = e.components,
            o = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            l = s(e, ["components", "mdxType", "originalType", "parentName"]),
            m = p(n),
            d = o,
            f = m["".concat(c, ".").concat(d)] || m[d] || u[d] || i;
          return n
            ? r.createElement(f, a(a({ ref: t }, l), {}, { components: n }))
            : r.createElement(f, a({ ref: t }, l));
        });
      function d(e, t) {
        const n = arguments,
          o = t && t.mdxType;
        if (typeof e === "string" || o) {
          const i = n.length,
            a = new Array(i);
          a[0] = m;
          const s = {};
          for (const c in t) hasOwnProperty.call(t, c) && (s[c] = t[c]);
          (s.originalType = e),
            (s.mdxType = typeof e === "string" ? e : o),
            (a[1] = s);
          for (let p = 2; p < i; p++) a[p] = n[p];
          return r.createElement.apply(null, a);
        }
        return r.createElement.apply(null, n);
      }
      m.displayName = "MDXCreateElement";
    },
    1505: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return l;
          },
          contentTitle: function () {
            return c;
          },
          default: function () {
            return d;
          },
          frontMatter: function () {
            return s;
          },
          metadata: function () {
            return p;
          },
          toc: function () {
            return u;
          },
        });
      var r = n(7462),
        o = n(3366),
        i = (n(7294), n(3905)),
        a = ["components"],
        s = { id: "discriminators", title: "Mongoose Discriminators" },
        c = void 0,
        p = {
          unversionedId: "discriminators",
          id: "discriminators",
          title: "Mongoose Discriminators",
          description:
            "To add discriminators to a model, you may specify a discriminators array in the long-form options shown below.",
          source: "@site/docs/discriminators.md",
          sourceDirName: ".",
          slug: "/discriminators",
          permalink: "/nestjs-typegoose/docs/discriminators",
          draft: !1,
          editUrl:
            "https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/discriminators.md",
          tags: [],
          version: "current",
          frontMatter: {
            id: "discriminators",
            title: "Mongoose Discriminators",
          },
          sidebar: "someSidebar",
          previous: { title: "FAQ", permalink: "/nestjs-typegoose/docs/faq" },
          next: {
            title: "Multiple MongoDB Connections",
            permalink: "/nestjs-typegoose/docs/multiple-connections",
          },
        },
        l = {},
        u = [],
        m = { toc: u };
      function d(e) {
        const t = e.components,
          n = (0, o.Z)(e, a);
        return (0, i.kt)(
          "wrapper",
          (0, r.Z)({}, m, n, { components: t, mdxType: "MDXLayout" }),
          (0, i.kt)(
            "p",
            null,
            "To add ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://mongoosejs.com/docs/discriminators.html",
              },
              "discriminators"
            ),
            " to a model, you may specify a ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "discriminators"),
            " array in the long-form options shown below."
          ),
          (0, i.kt)(
            "p",
            null,
            "You may either add just the class, or if you need to override the ",
            (0, i.kt)(
              "a",
              {
                parentName: "p",
                href: "https://mongoosejs.com/docs/discriminators.html#discriminator-keys",
              },
              "discriminator key"
            ),
            " value, an object with ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "typegooseClass"),
            " and ",
            (0, i.kt)("inlineCode", { parentName: "p" }, "discriminatorId"),
            " property. "
          ),
          (0, i.kt)("p", null, "For example:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              { parentName: "pre", className: "language-typescript" },
              "class Tabby extends Cat {\n  @prop()\n  spotted: boolean \n}\n\nclass BlackCat extends Cat {\n  @prop()\n  unlucky: boolean\n}\n\n@Module({\n  imports: [\n    TypegooseModule.forFeature([\n      {\n        typegooseClass: Cat,\n        discriminators: [\n          Tabby,\n          {\n            typegooseClass: BlackCat,\n            discriminatorId: 'Black'\n          }\n        ]\n      }\n    ])\n  ]\n})\nexport class CatsModule {}\n"
            )
          )
        );
      }
      d.isMDXComponent = !0;
    },
  },
]);
