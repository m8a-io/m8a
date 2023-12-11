'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [888],
  {
    2517: (e, o, t) => {
      t.r(o),
        t.d(o, {
          assets: () => r,
          contentTitle: () => i,
          default: () => m,
          frontMatter: () => c,
          metadata: () => a,
          toc: () => p
        })
      var n = t(1527),
        s = t(8627)
      const c = { id: 'schema-options', title: 'Schema Options' },
        i = void 0,
        a = {
          id: 'schema-options',
          title: 'Schema Options',
          description:
            'To add custom mongoose schema options you can simply change Typegoose.forFeature to the following format:',
          source: '@site/docs/schema-options.md',
          sourceDirName: '.',
          slug: '/schema-options',
          permalink: '/docs/schema-options',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/schema-options.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'schema-options', title: 'Schema Options' },
          sidebar: 'someSidebar',
          previous: { title: 'Async Configuration', permalink: '/docs/async-configuration' }
        },
        r = {},
        p = []
      function d(e) {
        const o = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, s.a)(), ...e.components }
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(o.p, {
              children: [
                'To add custom ',
                (0, n.jsx)(o.a, {
                  href: 'http://mongoosejs.com/docs/guide.html#options',
                  children: 'mongoose schema options'
                }),
                ' you can simply change ',
                (0, n.jsx)(o.code, { children: 'Typegoose.forFeature' }),
                ' to the following format:'
              ]
            }),
            '\n',
            (0, n.jsx)(o.pre, {
              children: (0, n.jsx)(o.code, {
                className: 'language-typescript',
                children:
                  '@Module({\n  imports: [\n    TypegooseModule.forFeature([\n      {\n        typegooseClass: Cat,\n        schemaOptions: {\n          collection: "ADifferentCollectionNameForCats"\n        }\n      }\n    ])\n  ]\n})\nexport class CatsModule {}\n'
              })
            })
          ]
        })
      }
      function m(e = {}) {
        const { wrapper: o } = { ...(0, s.a)(), ...e.components }
        return o ? (0, n.jsx)(o, { ...e, children: (0, n.jsx)(d, { ...e }) }) : d(e)
      }
    },
    8627: (e, o, t) => {
      t.d(o, { Z: () => a, a: () => i })
      var n = t(959)
      const s = {},
        c = n.createContext(s)
      function i(e) {
        const o = n.useContext(c)
        return n.useMemo(
          function () {
            return 'function' == typeof e ? e(o) : { ...o, ...e }
          },
          [o, e]
        )
      }
      function a(e) {
        let o
        return (
          (o = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          n.createElement(c.Provider, { value: o }, e.children)
        )
      }
    }
  }
])
