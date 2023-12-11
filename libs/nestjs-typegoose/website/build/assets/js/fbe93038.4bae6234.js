'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [432],
  {
    9909: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => r,
          default: () => l,
          frontMatter: () => i,
          metadata: () => c,
          toc: () => d
        })
      var o = n(1527),
        s = n(8627)
      const i = { id: 'testing', title: 'Testing' },
        r = void 0,
        c = {
          id: 'testing',
          title: 'Testing',
          description:
            "Like @nestjs/mongoose (see the testing section) nestjs-typegoose's forFeature and forRoot rely on a database connection to work. To unit test your CatService without connecting to a mongo database you need to create a fake model using a custom provider.",
          source: '@site/docs/testing.md',
          sourceDirName: '.',
          slug: '/testing',
          permalink: '/docs/testing',
          draft: !1,
          unlisted: !1,
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/testing.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'testing', title: 'Testing' },
          sidebar: 'someSidebar',
          previous: { title: 'Basic Usage', permalink: '/docs/usage' },
          next: { title: 'FAQ', permalink: '/docs/faq' }
        },
        a = {},
        d = []
      function u(e) {
        const t = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, s.a)(), ...e.components }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(t.p, {
              children: [
                'Like ',
                (0, o.jsx)(t.a, {
                  href: 'https://docs.nestjs.com/v5/techniques/mongodb',
                  children: '@nestjs/mongoose'
                }),
                " (see the testing section) nestjs-typegoose's ",
                (0, o.jsx)(t.code, { children: 'forFeature' }),
                ' and ',
                (0, o.jsx)(t.code, { children: 'forRoot' }),
                ' rely on a database connection to work. To unit test your ',
                (0, o.jsx)(t.code, { children: 'CatService' }),
                ' without connecting to a mongo database you need to create a fake model using a ',
                (0, o.jsx)(t.a, {
                  href: 'https://docs.nestjs.com/fundamentals/custom-providers',
                  children: 'custom provider'
                }),
                '.'
              ]
            }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  'import { getModelToken } from "@m8a/nestjs-typegoose";\n\n@Module({\n  ProductService,\n  {\n    provide: getModelToken(\'Product\'),\n    useValue: fakeProductModel\n  }\n})\n'
              })
            }),
            '\n',
            (0, o.jsx)(t.p, { children: 'In a spec file this would look like:' }),
            '\n',
            (0, o.jsx)(t.pre, {
              children: (0, o.jsx)(t.code, {
                className: 'language-typescript',
                children:
                  '\nconst fakeProductModel = jest.fn();\n\nconst module: TestingModule = await Test.createTestingModule({\n  providers: [\n    {\n      provide: getModelToken("Product"),\n      useValue: fakeProductModel\n    },\n    ProductService\n  ]\n}).compile();\n'
              })
            }),
            '\n',
            (0, o.jsxs)(t.p, {
              children: [
                'The string given to ',
                (0, o.jsx)(t.code, { children: 'getModelToken' }),
                ' function should be the class name of the typegoose model that you are testing.'
              ]
            })
          ]
        })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, s.a)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(u, { ...e }) }) : u(e)
      }
    },
    8627: (e, t, n) => {
      n.d(t, { Z: () => c, a: () => r })
      var o = n(959)
      const s = {},
        i = o.createContext(s)
      function r(e) {
        const t = o.useContext(i)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(t) : { ...t, ...e }
          },
          [t, e]
        )
      }
      function c(e) {
        let t
        return (
          (t = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          o.createElement(i.Provider, { value: t }, e.children)
        )
      }
    }
  }
])
