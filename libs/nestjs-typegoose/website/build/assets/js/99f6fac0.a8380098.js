'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [11],
  {
    5761: (e, o, n) => {
      n.r(o),
        n.d(o, {
          assets: () => c,
          contentTitle: () => r,
          default: () => m,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => d
        })
      var s = n(1527),
        t = n(8627)
      const i = { id: 'discriminators', title: 'Mongoose Discriminators' },
        r = void 0,
        a = {
          id: 'discriminators',
          title: 'Mongoose Discriminators',
          description:
            'To add discriminators to a model, you may specify a discriminators array in the long-form options shown below.',
          source: '@site/docs/discriminators.md',
          sourceDirName: '.',
          slug: '/discriminators',
          permalink: '/docs/discriminators',
          draft: !1,
          unlisted: !1,
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/discriminators.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'discriminators', title: 'Mongoose Discriminators' },
          sidebar: 'someSidebar',
          previous: { title: 'FAQ', permalink: '/docs/faq' },
          next: { title: 'Multiple MongoDB Connections', permalink: '/docs/multiple-connections' }
        },
        c = {},
        d = []
      function l(e) {
        const o = { a: 'a', code: 'code', p: 'p', pre: 'pre', ...(0, t.a)(), ...e.components }
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsxs)(o.p, {
              children: [
                'To add ',
                (0, s.jsx)(o.a, {
                  href: 'https://mongoosejs.com/docs/discriminators.html',
                  children: 'discriminators'
                }),
                ' to a model, you may specify a ',
                (0, s.jsx)(o.code, { children: 'discriminators' }),
                ' array in the long-form options shown below.'
              ]
            }),
            '\n',
            (0, s.jsxs)(o.p, {
              children: [
                'You may either add just the class, or if you need to override the ',
                (0, s.jsx)(o.a, {
                  href: 'https://mongoosejs.com/docs/discriminators.html#discriminator-keys',
                  children: 'discriminator key'
                }),
                ' value, an object with ',
                (0, s.jsx)(o.code, { children: 'typegooseClass' }),
                ' and ',
                (0, s.jsx)(o.code, { children: 'discriminatorId' }),
                ' property.'
              ]
            }),
            '\n',
            (0, s.jsx)(o.p, { children: 'For example:' }),
            '\n',
            (0, s.jsx)(o.pre, {
              children: (0, s.jsx)(o.code, {
                className: 'language-typescript',
                children:
                  "class Tabby extends Cat {\n  @prop()\n  spotted: boolean \n}\n\nclass BlackCat extends Cat {\n  @prop()\n  unlucky: boolean\n}\n\n@Module({\n  imports: [\n    TypegooseModule.forFeature([\n      {\n        typegooseClass: Cat,\n        discriminators: [\n          Tabby,\n          {\n            typegooseClass: BlackCat,\n            discriminatorId: 'Black'\n          }\n        ]\n      }\n    ])\n  ]\n})\nexport class CatsModule {}\n"
              })
            })
          ]
        })
      }
      function m(e = {}) {
        const { wrapper: o } = { ...(0, t.a)(), ...e.components }
        return o ? (0, s.jsx)(o, { ...e, children: (0, s.jsx)(l, { ...e }) }) : l(e)
      }
    },
    8627: (e, o, n) => {
      n.d(o, { Z: () => a, a: () => r })
      var s = n(959)
      const t = {},
        i = s.createContext(t)
      function r(e) {
        const o = s.useContext(i)
        return s.useMemo(
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
              ? e.components(t)
              : e.components || t
            : r(e.components)),
          s.createElement(i.Provider, { value: o }, e.children)
        )
      }
    }
  }
])
