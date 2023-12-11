'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [836],
  {
    7905: (e, t, n) => {
      n.r(t),
        n.d(t, {
          assets: () => a,
          contentTitle: () => i,
          default: () => l,
          frontMatter: () => r,
          metadata: () => c,
          toc: () => u
        })
      var o = n(1527),
        s = n(8627)
      const r = { id: 'faq', title: 'FAQ' },
        i = void 0,
        c = {
          id: 'faq',
          title: 'FAQ',
          description: 'No FAQs currently',
          source: '@site/docs/faq.md',
          sourceDirName: '.',
          slug: '/faq',
          permalink: '/docs/faq',
          draft: !1,
          unlisted: !1,
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/faq.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'faq', title: 'FAQ' },
          sidebar: 'someSidebar',
          previous: { title: 'Testing', permalink: '/docs/testing' },
          next: { title: 'Mongoose Discriminators', permalink: '/docs/discriminators' }
        },
        a = {},
        u = [{ value: 'No FAQs currently', id: 'no-faqs-currently', level: 2 }]
      function d(e) {
        const t = { h2: 'h2', ...(0, s.a)(), ...e.components }
        return (0, o.jsx)(t.h2, { id: 'no-faqs-currently', children: 'No FAQs currently' })
      }
      function l(e = {}) {
        const { wrapper: t } = { ...(0, s.a)(), ...e.components }
        return t ? (0, o.jsx)(t, { ...e, children: (0, o.jsx)(d, { ...e }) }) : d(e)
      }
    },
    8627: (e, t, n) => {
      n.d(t, { Z: () => c, a: () => i })
      var o = n(959)
      const s = {},
        r = o.createContext(s)
      function i(e) {
        const t = o.useContext(r)
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
            : i(e.components)),
          o.createElement(r.Provider, { value: t }, e.children)
        )
      }
    }
  }
])
