/*! For license information please see c4f5d8e4.9c5132a5.js.LICENSE.txt */
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [195],
  {
    2585: (e, t, r) => {
      'use strict'
      r.r(t), r.d(t, { default: () => h })
      r(959)
      var n = r(4875),
        s = r.n(n),
        i = r(2014),
        o = r(2384),
        a = r(1050),
        l = r(3426)
      const u = {
        heroBanner: 'heroBanner_UJJx',
        buttons: 'buttons_pzbO',
        features: 'features_keug',
        featureImage: 'featureImage_yA8i'
      }
      var c = r(1527)
      const h = function () {
        const e = (0, a.Z)(),
          { siteConfig: t = {} } = e
        return (0, c.jsx)(i.Z, {
          title: '' + t.title,
          description: 'A NestJS Module for Typegoose',
          children: (0, c.jsx)('header', {
            className: s()('hero hero--primary', u.heroBanner),
            children: (0, c.jsxs)('div', {
              className: 'container',
              children: [
                (0, c.jsx)('h1', { className: 'hero__title', children: t.title }),
                (0, c.jsx)('p', { className: 'hero__subtitle', children: t.tagline }),
                (0, c.jsx)('div', {
                  className: u.buttons,
                  children: (0, c.jsx)(o.Z, {
                    className: s()('button button--outline button--secondary button--lg', u.getStarted),
                    to: (0, l.Z)('docs/install'),
                    children: 'Get Started'
                  })
                })
              ]
            })
          })
        })
      }
    },
    4875: (e, t) => {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function s() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var i = typeof r
              if ('string' === i || 'number' === i) e.push(r)
              else if (Array.isArray(r)) {
                if (r.length) {
                  var o = s.apply(null, r)
                  o && e.push(o)
                }
              } else if ('object' === i) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes('[native code]')
                ) {
                  e.push(r.toString())
                  continue
                }
                for (var a in r) n.call(r, a) && r[a] && e.push(a)
              }
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((s.default = s), (e.exports = s))
          : void 0 ===
              (r = function () {
                return s
              }.apply(t, [])) || (e.exports = r)
      })()
    }
  }
])
