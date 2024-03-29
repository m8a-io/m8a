'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [730],
  {
    3905: function (e, n, t) {
      t.d(n, {
        Zo: function () {
          return p
        },
        kt: function () {
          return m
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
      function a(e) {
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
      function c(e, n) {
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
      var s = o.createContext({}),
        l = function (e) {
          var n = o.useContext(s),
            t = n
          return e && (t = 'function' == typeof e ? e(n) : a(a({}, n), e)), t
        },
        p = function (e) {
          var n = l(e.components)
          return o.createElement(s.Provider, { value: n }, e.children)
        },
        u = {
          inlineCode: 'code',
          wrapper: function (e) {
            var n = e.children
            return o.createElement(o.Fragment, {}, n)
          }
        },
        d = o.forwardRef(function (e, n) {
          var t = e.components,
            r = e.mdxType,
            i = e.originalType,
            s = e.parentName,
            p = c(e, ['components', 'mdxType', 'originalType', 'parentName']),
            d = l(t),
            m = r,
            f = d[''.concat(s, '.').concat(m)] || d[m] || u[m] || i
          return t
            ? o.createElement(f, a(a({ ref: n }, p), {}, { components: t }))
            : o.createElement(f, a({ ref: n }, p))
        })
      function m(e, n) {
        var t = arguments,
          r = n && n.mdxType
        if ('string' == typeof e || r) {
          var i = t.length,
            a = new Array(i)
          a[0] = d
          var c = {}
          for (var s in n) hasOwnProperty.call(n, s) && (c[s] = n[s])
          ;(c.originalType = e), (c.mdxType = 'string' == typeof e ? e : r), (a[1] = c)
          for (var l = 2; l < i; l++) a[l] = t[l]
          return o.createElement.apply(null, a)
        }
        return o.createElement.apply(null, t)
      }
      d.displayName = 'MDXCreateElement'
    },
    2482: function (e, n, t) {
      t.r(n),
        t.d(n, {
          assets: function () {
            return p
          },
          contentTitle: function () {
            return s
          },
          default: function () {
            return m
          },
          frontMatter: function () {
            return c
          },
          metadata: function () {
            return l
          },
          toc: function () {
            return u
          }
        })
      var o = t(7462),
        r = t(3366),
        i = (t(7294), t(3905)),
        a = ['components'],
        c = { id: 'multiple-connections', title: 'Multiple MongoDB Connections' },
        s = void 0,
        l = {
          unversionedId: 'multiple-connections',
          id: 'multiple-connections',
          title: 'Multiple MongoDB Connections',
          description:
            'To have multiple MongoDB connections one needs to add a connectionName string to forRoot and forFeature.',
          source: '@site/docs/multiple-connections.md',
          sourceDirName: '.',
          slug: '/multiple-connections',
          permalink: '/docs/multiple-connections',
          draft: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/multiple-connections.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'multiple-connections', title: 'Multiple MongoDB Connections' },
          sidebar: 'someSidebar',
          previous: { title: 'Mongoose Discriminators', permalink: '/docs/discriminators' },
          next: { title: 'Async Configuration', permalink: '/docs/async-configuration' }
        },
        p = {},
        u = [
          { value: '<code>forRoot</code> usage', id: 'forroot-usage', level: 2 },
          { value: '<code>forRootAsync</code> usage', id: 'forrootasync-usage', level: 2 },
          {
            value: 'Added in 11.1.0 - You can now inject a connection into your services.',
            id: 'added-in-1110---you-can-now-inject-a-connection-into-your-services',
            level: 2
          }
        ],
        d = { toc: u }
      function m(e) {
        var n = e.components,
          t = (0, r.Z)(e, a)
        return (0, i.kt)(
          'wrapper',
          (0, o.Z)({}, d, t, { components: n, mdxType: 'MDXLayout' }),
          (0, i.kt)(
            'p',
            null,
            'To have multiple MongoDB connections one needs to add a ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'connectionName'),
            ' string to ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'forRoot'),
            ' and ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'forFeature'),
            '.'
          ),
          (0, i.kt)(
            'h2',
            { id: 'forroot-usage' },
            (0, i.kt)('inlineCode', { parentName: 'h2' }, 'forRoot'),
            ' usage'
          ),
          (0, i.kt)('p', null, (0, i.kt)('strong', { parentName: 'p' }, 'app.module.ts')),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              'import { Module } from "@nestjs/common";\nimport { TypegooseModule } from "@m8a/nestjs-typegoose";\n\n@Module({\n  imports: [\n    TypegooseModule.forRoot("mongodb://localhost:27017/otherdb", {\n      connectionName: "other-mongodb"\n    }),\n    CatsModule\n  ]\n})\nexport class ApplicationModule {}\n'
            )
          ),
          (0, i.kt)('p', null, (0, i.kt)('strong', { parentName: 'p' }, 'cat.module.ts')),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '@Module({\n  imports: [TypegooseModule.forFeature([Cat], "other-mongodb")],\n  controllers: [CatsController],\n  providers: [CatsService]\n})\nexport class CatsModule {}\n'
            )
          ),
          (0, i.kt)(
            'p',
            null,
            'Here the CatsService will use the ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'other-mongodb'),
            ' connection defined in the ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'forRoot'),
            '.'
          ),
          (0, i.kt)(
            'h2',
            { id: 'forrootasync-usage' },
            (0, i.kt)('inlineCode', { parentName: 'h2' }, 'forRootAsync'),
            ' usage'
          ),
          (0, i.kt)(
            'p',
            null,
            'Same ',
            (0, i.kt)('strong', { parentName: 'p' }, 'cat.module.ts'),
            ' as above for the ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'forFeature'),
            '.'
          ),
          (0, i.kt)('p', null, (0, i.kt)('strong', { parentName: 'p' }, 'cat.module.ts')),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '@Module({\n  imports: [TypegooseModule.forFeature([Cat], "other-mongodb")],\n  controllers: [CatsController],\n  providers: [CatsService]\n})\nexport class CatsModule {}\n'
            )
          ),
          (0, i.kt)(
            'p',
            null,
            'And for ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'forRootAsync'),
            ' add ',
            (0, i.kt)('inlineCode', { parentName: 'p' }, 'connectionName'),
            ' to the options as well.'
          ),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              '@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      connectionName: "other-mongodb",\n      imports: [ConfigModule],\n      useFactory: async (configService: ConfigService) => ({\n        uri: configService.getString("MONGODB_URI"),\n        // ...typegooseOptions (Note: config is spread with the uri)\n      }),\n      inject: [ConfigService]\n    })\n  ]\n})\nexport class CatsModule {}\n'
            )
          ),
          (0, i.kt)(
            'h2',
            { id: 'added-in-1110---you-can-now-inject-a-connection-into-your-services' },
            'Added in 11.1.0 - You can now inject a connection into your services.'
          ),
          (0, i.kt)('p', null, 'You can now inject a connection inside of your services, when needed.'),
          (0, i.kt)(
            'pre',
            null,
            (0, i.kt)(
              'code',
              { parentName: 'pre', className: 'language-typescript' },
              "import { Injectable } from '@nestjs/common';\nimport { InjectConnection } from '@m8a/nestjs-typegoose';\nimport { Connection } from 'mongoose';\n\n@Injectable()\nexport class CatsService {\n  constructor(@InjectConnection() private connection: Connection) {}\n}\n\n"
            )
          )
        )
      }
      m.isMDXComponent = !0
    }
  }
])
