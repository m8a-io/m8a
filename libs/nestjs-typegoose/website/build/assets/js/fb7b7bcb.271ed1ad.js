'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [730],
  {
    7853: (e, n, o) => {
      o.r(n),
        o.d(n, {
          assets: () => d,
          contentTitle: () => i,
          default: () => u,
          frontMatter: () => c,
          metadata: () => r,
          toc: () => l
        })
      var t = o(1527),
        s = o(8627)
      const c = { id: 'multiple-connections', title: 'Multiple MongoDB Connections' },
        i = void 0,
        r = {
          id: 'multiple-connections',
          title: 'Multiple MongoDB Connections',
          description:
            'To have multiple MongoDB connections one needs to add a connectionName string to forRoot and forFeature.',
          source: '@site/docs/multiple-connections.md',
          sourceDirName: '.',
          slug: '/multiple-connections',
          permalink: '/docs/multiple-connections',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/multiple-connections.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'multiple-connections', title: 'Multiple MongoDB Connections' },
          sidebar: 'someSidebar',
          previous: { title: 'Mongoose Discriminators', permalink: '/docs/discriminators' },
          next: { title: 'Async Configuration', permalink: '/docs/async-configuration' }
        },
        d = {},
        l = [
          { value: '<code>forRoot</code> usage', id: 'forroot-usage', level: 2 },
          { value: '<code>forRootAsync</code> usage', id: 'forrootasync-usage', level: 2 },
          {
            value: 'Added in 11.1.0 - You can now inject a connection into your services.',
            id: 'added-in-1110---you-can-now-inject-a-connection-into-your-services',
            level: 2
          }
        ]
      function a(e) {
        const n = {
          code: 'code',
          h2: 'h2',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ...(0, s.a)(),
          ...e.components
        }
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsxs)(n.p, {
              children: [
                'To have multiple MongoDB connections one needs to add a ',
                (0, t.jsx)(n.code, { children: 'connectionName' }),
                ' string to ',
                (0, t.jsx)(n.code, { children: 'forRoot' }),
                ' and ',
                (0, t.jsx)(n.code, { children: 'forFeature' }),
                '.'
              ]
            }),
            '\n',
            (0, t.jsxs)(n.h2, {
              id: 'forroot-usage',
              children: [(0, t.jsx)(n.code, { children: 'forRoot' }), ' usage']
            }),
            '\n',
            (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'app.module.ts' }) }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  'import { Module } from "@nestjs/common";\nimport { TypegooseModule } from "@m8a/nestjs-typegoose";\n\n@Module({\n  imports: [\n    TypegooseModule.forRoot("mongodb://localhost:27017/otherdb", {\n      connectionName: "other-mongodb"\n    }),\n    CatsModule\n  ]\n})\nexport class ApplicationModule {}\n'
              })
            }),
            '\n',
            (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'cat.module.ts' }) }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  '@Module({\n  imports: [TypegooseModule.forFeature([Cat], "other-mongodb")],\n  controllers: [CatsController],\n  providers: [CatsService]\n})\nexport class CatsModule {}\n'
              })
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Here the CatsService will use the ',
                (0, t.jsx)(n.code, { children: 'other-mongodb' }),
                ' connection defined in the ',
                (0, t.jsx)(n.code, { children: 'forRoot' }),
                '.'
              ]
            }),
            '\n',
            (0, t.jsxs)(n.h2, {
              id: 'forrootasync-usage',
              children: [(0, t.jsx)(n.code, { children: 'forRootAsync' }), ' usage']
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'Same ',
                (0, t.jsx)(n.strong, { children: 'cat.module.ts' }),
                ' as above for the ',
                (0, t.jsx)(n.code, { children: 'forFeature' }),
                '.'
              ]
            }),
            '\n',
            (0, t.jsx)(n.p, { children: (0, t.jsx)(n.strong, { children: 'cat.module.ts' }) }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  '@Module({\n  imports: [TypegooseModule.forFeature([Cat], "other-mongodb")],\n  controllers: [CatsController],\n  providers: [CatsService]\n})\nexport class CatsModule {}\n'
              })
            }),
            '\n',
            (0, t.jsxs)(n.p, {
              children: [
                'And for ',
                (0, t.jsx)(n.code, { children: 'forRootAsync' }),
                ' add ',
                (0, t.jsx)(n.code, { children: 'connectionName' }),
                ' to the options as well.'
              ]
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  '@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      connectionName: "other-mongodb",\n      imports: [ConfigModule],\n      useFactory: async (configService: ConfigService) => ({\n        uri: configService.getString("MONGODB_URI"),\n        // ...typegooseOptions (Note: config is spread with the uri)\n      }),\n      inject: [ConfigService]\n    })\n  ]\n})\nexport class CatsModule {}\n'
              })
            }),
            '\n',
            (0, t.jsx)(n.h2, {
              id: 'added-in-1110---you-can-now-inject-a-connection-into-your-services',
              children: 'Added in 11.1.0 - You can now inject a connection into your services.'
            }),
            '\n',
            (0, t.jsx)(n.p, {
              children: 'You can now inject a connection inside of your services, when needed.'
            }),
            '\n',
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: 'language-typescript',
                children:
                  "import { Injectable } from '@nestjs/common';\nimport { InjectConnection } from '@m8a/nestjs-typegoose';\nimport { Connection } from 'mongoose';\n\n@Injectable()\nexport class CatsService {\n  constructor(@InjectConnection() private connection: Connection) {}\n}\n\n"
              })
            })
          ]
        })
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, s.a)(), ...e.components }
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e)
      }
    },
    8627: (e, n, o) => {
      o.d(n, { Z: () => r, a: () => i })
      var t = o(959)
      const s = {},
        c = t.createContext(s)
      function i(e) {
        const n = t.useContext(c)
        return t.useMemo(
          function () {
            return 'function' == typeof e ? e(n) : { ...n, ...e }
          },
          [n, e]
        )
      }
      function r(e) {
        let n
        return (
          (n = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          t.createElement(c.Provider, { value: n }, e.children)
        )
      }
    }
  }
])
