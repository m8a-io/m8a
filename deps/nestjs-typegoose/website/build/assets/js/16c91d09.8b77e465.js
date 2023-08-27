'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [519],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return u
        },
        kt: function () {
          return f
        }
      })
      var o = t(7294)
      function r(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 })
            : (e[n] = t),
          e
        )
      }
      function i(e, n) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable
            })),
            t.push.apply(t, o)
        }
        return t
      }
      function s(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {}
          n % 2
            ? i(Object(t), !0).forEach(function (n) {
                r(e, n, t[n])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : i(Object(t)).forEach(function (n) {
                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
              })
        }
        return e
      }
      function a(e, n) {
        if (null == e) return {}
        var t,
          o,
          r = (function (e, n) {
            if (null == e) return {}
            var t,
              o,
              r = {},
              i = Object.keys(e)
            for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t])
            return r
          })(e, n)
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e)
          for (o = 0; o < i.length; o++)
            (t = i[o]),
              n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (r[t] = e[t]))
        }
        return r
      }
      var c = o.createContext({}),
        p = function (e) {
          var n = o.useContext(c),
            t = n
          return e && (t = 'function' == typeof e ? e(n) : s(s({}, n), e)), t
        },
        u = function (e) {
          var n = p(e.components)
          return o.createElement(c.Provider, { value: n }, e.children)
        },
        l = {
          inlineCode: 'code',
          wrapper: function (e) {
            var n = e.children
            return o.createElement(o.Fragment, {}, n)
          }
        },
        y = o.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            i = e.originalType,
            c = e.parentName,
            u = a(e, ['components', 'mdxType', 'originalType', 'parentName']),
            y = p(t),
            f = r,
            g = y[''.concat(c, '.').concat(f)] || y[f] || l[f] || i
          return t
            ? o.createElement(g, s(s({ ref: n }, u), {}, { components: t }))
            : o.createElement(g, s({ ref: n }, u))
        })
      function f(e, n) {
        var t = arguments,
          r = n && n.mdxType
        if ('string' == typeof e || r) {
          var i = t.length,
            s = new Array(i)
          s[0] = y
          var a = {}
          for (var c in n) hasOwnProperty.call(n, c) && (a[c] = n[c])
          ;(a.originalType = e), (a.mdxType = 'string' == typeof e ? e : r), (s[1] = a)
          for (var p = 2; p < i; p++) s[p] = t[p]
          return o.createElement.apply(null, s)
        }
        return o.createElement.apply(null, t)
      }
      y.displayName = 'MDXCreateElement'
    },
    3944: function (e, n, t) {
      t.r(n),
        t.d(n, {
          assets: function () {
            return u
          },
          contentTitle: function () {
            return c
          },
          default: function () {
            return f
          },
          frontMatter: function () {
            return a
          },
          metadata: function () {
            return p
          },
          toc: function () {
            return l
          }
        })
      var o = t(7462),
        r = t(3366),
        i = (t(7294), t(3905)),
        s = ['components'],
        a = { id: 'async-configuration', title: 'Async Configuration' },
        c = void 0,
        p = {
          unversionedId: 'async-configuration',
          id: 'async-configuration',
          title: 'Async Configuration',
          description:
            'To provide asynchronous mongoose schema options (similar to nestjs mongoose implementation) you can use the TypegooseModule.forRootAsync',
          source: '@site/docs/async-configuration.md',
          sourceDirName: '.',
          slug: '/async-configuration',
          permalink: '/docs/async-configuration',
          draft: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/async-configuration.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'async-configuration', title: 'Async Configuration' },
          sidebar: 'someSidebar',
          previous: { title: 'Multiple MongoDB Connections', permalink: '/docs/multiple-connections' },
          next: { title: 'Schema Options', permalink: '/docs/schema-options' }
        },
        u = {},
        l = [
          { value: 'Note: typegooseOptions with async', id: 'note-typegooseoptions-with-async', level: 4 }
        ],
        y = { toc: l }
      function f(e) {
        var n = e.components,
          t = (0, r.Z)(e, s)
        return (0, i.kt)(
          'wrapper',
          (0, o.Z)({}, y, t, { components: n, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            'To provide asynchronous mongoose schema options (similar to ',
            (0, i.kt)(
              'a',
              { parentName: 'p', href: 'https://docs.nestjs.com/techniques/mongodb' },
              'nestjs mongoose implementation'
            ),
            ') you can use the ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'TypegooseModule.forRootAsync')
          ),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      imports: [ConfigModule],\n      useFactory: async (configService: ConfigService) => ({\n        uri: configService.getString("MONGODB_URI")\n        // ...typegooseOptions (Note: config is spread with the uri)\n      }),\n      inject: [ConfigService]\n    })\n  ]\n})\nexport class CatsModule {}\n'
            )
          ),
          (0, i.kt)('h4', { id: 'note-typegooseoptions-with-async' }, 'Note: typegooseOptions with async'),
          (0, i.kt)(
            'p',
            null,
            'The typegooseOptions is spread with the ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'uri'),
            '. The ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'uri'),
            ' is ',
            (0, i.kt)('strong', { parentName: 'p' }, 'required'),
            '!'
          ),
          (0, i.kt)(
            'p',
            null,
            'You can also use a class with ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'useClass')
          ),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              'import {\n  TypegooseOptionsFactory,\n  TypegooseModuleOptions\n} from "nestjs-typegoose";\n\nclass TypegooseConfigService extends TypegooseOptionsFactory {\n  createTypegooseOptions():\n    | Promise<TypegooseModuleOptions>\n    | TypegooseModuleOptions {\n    return {\n      uri: "mongodb://localhost/nest"\n    };\n  }\n}\n\n@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      useClass: TypegooseConfigService\n    })\n  ]\n})\nexport class CatsModule {}\n'
            )
          ),
          (0, i.kt)(
            'p',
            null,
            'Or if you want to prevent creating another ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'TypegooseConfigService'),
            ' class and want to use it from another imported module then use ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'useExisting')
          ),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      imports: [ConfigModule],\n      useExisting: ConfigService\n    })\n  ]\n})\nexport class CatsModule {}\n'
            )
          )
        )
      }
      f.isMDXComponent = !0
    }
  }
])
