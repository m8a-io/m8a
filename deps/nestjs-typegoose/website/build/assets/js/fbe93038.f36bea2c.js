'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [432],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return l
        },
        kt: function () {
          return f
        }
      })
      var r = n(7294)
      function o(e, t, n) {
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
          var r = Object.getOwnPropertySymbols(e)
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, r)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                o(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function s(e, t) {
        if (null == e) return {}
        var n,
          r,
          o = (function (e, t) {
            if (null == e) return {}
            var n,
              r,
              o = {},
              a = Object.keys(e)
            for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (o[n] = e[n])
            return o
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]))
        }
        return o
      }
      var c = r.createContext({}),
        u = function (e) {
          var t = r.useContext(c),
            n = t
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n
        },
        l = function (e) {
          var t = u(e.components)
          return r.createElement(c.Provider, { value: t }, e.children)
        },
        p = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return r.createElement(r.Fragment, {}, t)
          }
        },
        d = r.forwardRef(function (e, t) {
          var n = e.components,
            o = e.mdxType,
            a = e.originalType,
            c = e.parentName,
            l = s(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = u(n),
            f = o,
            m = d[''.concat(c, '.').concat(f)] || d[f] || p[f] || a
          return n
            ? r.createElement(m, i(i({ ref: t }, l), {}, { components: n }))
            : r.createElement(m, i({ ref: t }, l))
        })
      function f(e, t) {
        var n = arguments,
          o = t && t.mdxType
        if ('string' == typeof e || o) {
          var a = n.length,
            i = new Array(a)
          i[0] = d
          var s = {}
          for (var c in t) hasOwnProperty.call(t, c) && (s[c] = t[c])
          ;(s.originalType = e), (s.mdxType = 'string' == typeof e ? e : o), (i[1] = s)
          for (var u = 2; u < a; u++) i[u] = n[u]
          return r.createElement.apply(null, i)
        }
        return r.createElement.apply(null, n)
      }
      d.displayName = 'MDXCreateElement'
    },
    4534: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return l
          },
          contentTitle: function () {
            return c
          },
          default: function () {
            return f
          },
          frontMatter: function () {
            return s
          },
          metadata: function () {
            return u
          },
          toc: function () {
            return p
          }
        })
      var r = n(7462),
        o = n(3366),
        a = (n(7294), n(3905)),
        i = ['components'],
        s = { id: 'testing', title: 'Testing' },
        c = void 0,
        u = {
          unversionedId: 'testing',
          id: 'testing',
          title: 'Testing',
          description:
            "Like @nestjs/mongoose (see the testing section) nestjs-typegoose's forFeature and forRoot rely on a database connection to work. To unit test your CatService without connecting to a mongo database you need to create a fake model using a custom provider.",
          source: '@site/docs/testing.md',
          sourceDirName: '.',
          slug: '/testing',
          permalink: '/docs/testing',
          draft: !1,
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/testing.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'testing', title: 'Testing' },
          sidebar: 'someSidebar',
          previous: { title: 'Basic Usage', permalink: '/docs/usage' },
          next: { title: 'FAQ', permalink: '/docs/faq' }
        },
        l = {},
        p = [],
        d = { toc: p }
      function f(e) {
        var t = e.components,
          n = (0, o.Z)(e, i)
        return (0, a.kt)(
          'wrapper',
          (0, r.Z)({}, d, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)(
            'p',
            null,
            'Like ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://docs.nestjs.com/v5/techniques/mongodb' },
              '@nestjs/mongoose'
            ),
            " (see the testing section) nestjs-typegoose's ",
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'forFeature'),
            ' and ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'forRoot'),
            ' rely on a database connection to work. To unit test your ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'CatService'),
            ' without connecting to a mongo database you need to create a fake model using a ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://docs.nestjs.com/fundamentals/custom-providers' },
              'custom provider'
            ),
            '.'
          ),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              'import { getModelToken } from "@m8a/nestjs-typegoose";\n\n@Module({\n  ProductService,\n  {\n    provide: getModelToken(\'Product\'),\n    useValue: fakeProductModel\n  }\n})\n'
            )
          ),
          (0, a.kt)('p', null, 'In a spec file this would look like:'),
          (0, a.kt)(
            'pre',
            null,
            (0, a.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '\nconst fakeProductModel = jest.fn();\n\nconst module: TestingModule = await Test.createTestingModule({\n  providers: [\n    {\n      provide: getModelToken("Product"),\n      useValue: fakeProductModel\n    },\n    ProductService\n  ]\n}).compile();\n'
            )
          ),
          (0, a.kt)(
            'p',
            null,
            'The string given to ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'getModelToken'),
            ' function should be the class name of the typegoose model that you are testing.'
          )
        )
      }
      f.isMDXComponent = !0
    }
  }
])
