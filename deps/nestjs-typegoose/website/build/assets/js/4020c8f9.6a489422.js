'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [888],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return u
        },
        kt: function () {
          return f
        }
      })
      var o = n(7294)
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function c(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              a = Object.keys(e)
            for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      var s = o.createContext({}),
        p = function (e) {
          var t = o.useContext(s),
            n = t
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n
        },
        u = function (e) {
          var t = p(e.components)
          return o.createElement(s.Provider, { value: t }, e.children)
        },
        l = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return o.createElement(o.Fragment, {}, t)
          }
        },
        m = o.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            u = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = p(n),
            f = r,
            d = m[''.concat(s, '.').concat(f)] || m[f] || l[f] || a
          return n
            ? o.createElement(d, i(i({ ref: t }, u), {}, { components: n }))
            : o.createElement(d, i({ ref: t }, u))
        })
      function f(e, t) {
        var n = arguments,
          r = t && t.mdxType
        if ('string' == typeof e || r) {
          var a = n.length,
            i = new Array(a)
          i[0] = m
          var c = {}
          for (var s in t) hasOwnProperty.call(t, s) && (c[s] = t[s])
          ;(c.originalType = e), (c.mdxType = 'string' == typeof e ? e : r), (i[1] = c)
          for (var p = 2; p < a; p++) i[p] = n[p]
          return o.createElement.apply(null, i)
        }
        return o.createElement.apply(null, n)
      }
      m.displayName = 'MDXCreateElement'
    },
    5396: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return u
          },
          contentTitle: function () {
            return s
          },
          default: function () {
            return f
          },
          frontMatter: function () {
            return c
          },
          metadata: function () {
            return p
          },
          toc: function () {
            return l
          }
        })
      var o = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        i = ['components'],
        c = { id: 'schema-options', title: 'Schema Options' },
        s = void 0,
        p = {
          unversionedId: 'schema-options',
          id: 'schema-options',
          title: 'Schema Options',
          description:
            'To add custom mongoose schema options you can simply change Typegoose.forFeature to the following format:',
          source: '@site/docs/schema-options.md',
          sourceDirName: '.',
          slug: '/schema-options',
          permalink: '/docs/schema-options',
          draft: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/schema-options.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'schema-options', title: 'Schema Options' },
          sidebar: 'someSidebar',
          previous: { title: 'Async Configuration', permalink: '/docs/async-configuration' }
        },
        u = {},
        l = [],
        m = { toc: l }
      function f(e) {
        var t = e.components,
          n = (0, r.Z)(e, i)
        return (0, a.kt)(
          'wrapper',
          (0, o.Z)({}, m, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            'To add custom ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'http://mongoosejs.com/docs/guide.html#options' },
              'mongoose schema options'
            ),
            ' you can simply change ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'Typegoose.forFeature'),
            ' to the following format:'
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '@Module({\n  imports: [\n    TypegooseModule.forFeature([\n      {\n        typegooseClass: Cat,\n        schemaOptions: {\n          collection: "ADifferentCollectionNameForCats"\n        }\n      }\n    ])\n  ]\n})\nexport class CatsModule {}\n'
            )
          )
        )
      }
      f.isMDXComponent = !0
    }
  }
])
