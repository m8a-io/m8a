'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [519],
  {
    1813: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => a,
          contentTitle: () => c,
          default: () => l,
          frontMatter: () => i,
          metadata: () => r,
          toc: () => p
        })
      var s = n(1527),
        t = n(8627)
      const i = { id: 'async-configuration', title: 'Async Configuration' },
        c = void 0,
        r = {
          id: 'async-configuration',
          title: 'Async Configuration',
          description:
            'To provide asynchronous mongoose schema options (similar to nestjs mongoose implementation) you can use the TypegooseModule.forRootAsync',
          source: '@site/docs/async-configuration.md',
          sourceDirName: '.',
          slug: '/async-configuration',
          permalink: '/docs/async-configuration',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/async-configuration.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'async-configuration', title: 'Async Configuration' },
          sidebar: 'someSidebar',
          previous: { title: 'Multiple MongoDB Connections', permalink: '/docs/multiple-connections' },
          next: { title: 'Schema Options', permalink: '/docs/schema-options' }
        },
        a = {},
        p = [{ value: 'Note: typegooseOptions with async', id: 'note-typegooseoptions-with-async', level: 4 }]
      function d(e) {
        const o = {
          a: 'a',
          code: 'code',
          h4: 'h4',
          p: 'p',
          pre: 'pre',
          strong: 'strong',
          ...(0, t.a)(),
          ...e.components
        }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o.p, {
              children: [
                'To provide asynchronous mongoose schema options (similar to ',
                (0, s.jsx)(o.a, {
                  href: 'https://docs.nestjs.com/techniques/mongodb',
                  children: 'nestjs mongoose implementation'
                }),
                ') you can use the ',
                (0, s.jsx)(o.code, { children: 'TypegooseModule.forRootAsync' })
              ]
            }),
            '\n',
            (0, s.jsx)(o.pre, {
              children: (0, s.jsx)(o.code, {
                className: 'language-typescript',
                children:
                  '@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      imports: [ConfigModule],\n      useFactory: async (configService: ConfigService) => ({\n        uri: configService.getString("MONGODB_URI")\n        // ...typegooseOptions (Note: config is spread with the uri)\n      }),\n      inject: [ConfigService]\n    })\n  ]\n})\nexport class CatsModule {}\n'
              })
            }),
            '\n',
            (0, s.jsx)(o.h4, {
              id: 'note-typegooseoptions-with-async',
              children: 'Note: typegooseOptions with async'
            }),
            '\n',
            (0, s.jsxs)(o.p, {
              children: [
                'The typegooseOptions is spread with the ',
                (0, s.jsx)(o.code, { children: 'uri' }),
                '. The ',
                (0, s.jsx)(o.code, { children: 'uri' }),
                ' is ',
                (0, s.jsx)(o.strong, { children: 'required' }),
                '!'
              ]
            }),
            '\n',
            (0, s.jsxs)(o.p, {
              children: ['You can also use a class with ', (0, s.jsx)(o.code, { children: 'useClass' })]
            }),
            '\n',
            (0, s.jsx)(o.pre, {
              children: (0, s.jsx)(o.code, {
                className: 'language-typescript',
                children:
                  'import {\n  TypegooseOptionsFactory,\n  TypegooseModuleOptions\n} from "nestjs-typegoose";\n\nclass TypegooseConfigService extends TypegooseOptionsFactory {\n  createTypegooseOptions():\n    | Promise<TypegooseModuleOptions>\n    | TypegooseModuleOptions {\n    return {\n      uri: "mongodb://localhost/nest"\n    };\n  }\n}\n\n@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      useClass: TypegooseConfigService\n    })\n  ]\n})\nexport class CatsModule {}\n'
              })
            }),
            '\n',
            (0, s.jsxs)(o.p, {
              children: [
                'Or if you want to prevent creating another ',
                (0, s.jsx)(o.code, { children: 'TypegooseConfigService' }),
                ' class and want to use it from another imported module then use ',
                (0, s.jsx)(o.code, { children: 'useExisting' })
              ]
            }),
            '\n',
            (0, s.jsx)(o.pre, {
              children: (0, s.jsx)(o.code, {
                className: 'language-typescript',
                children:
                  '@Module({\n  imports: [\n    TypegooseModule.forRootAsync({\n      imports: [ConfigModule],\n      useExisting: ConfigService\n    })\n  ]\n})\nexport class CatsModule {}\n'
              })
            })
          ]
        })
      }
      function l(e = {}) {
        const { wrapper: o } = { ...(0, t.a)(), ...e.components }
        return o ? (0, s.jsx)(o, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e)
      }
    },
    8627: (e, o, n) => {
      n.d(o, { Z: () => r, a: () => c })
      var s = n(959)
      const t = {},
        i = s.createContext(t)
      function c(e) {
        const o = s.useContext(i)
        return s.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : { ...o, ...e }
          },
          [o, e]
        )
      }
      function r(e) {
        let o
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : c(e.components)),
          s.createElement(i.Provider, { value: o }, e.children)
        )
      }
    }
  }
])
