'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [518],
  {
    9622: (e, n, s) => {
      s.r(n), s.d(n, { default: () => d })
      s(959)
      var r = s(256),
        o = s(6766),
        t = s(2472),
        i = s(3797),
        c = s(4920),
        u = s(1527)
      function a(e) {
        const { version: n } = e
        return (0, u.jsxs)(u.Fragment, {
          children: [
            (0, u.jsx)(c.Z, { version: n.version, tag: (0, o.os)(n.pluginId, n.version) }),
            (0, u.jsx)(r.d, {
              children: n.noIndex && (0, u.jsx)('meta', { name: 'robots', content: 'noindex, nofollow' })
            })
          ]
        })
      }
      function l(e) {
        const { version: n, route: s } = e
        return (0, u.jsx)(r.FG, {
          className: n.className,
          children: (0, u.jsx)(t.q, { version: n, children: (0, i.H)(s.routes) })
        })
      }
      function d(e) {
        return (0, u.jsxs)(u.Fragment, { children: [(0, u.jsx)(a, { ...e }), (0, u.jsx)(l, { ...e })] })
      }
    }
  }
])
