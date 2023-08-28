/*! For license information please see c4f5d8e4.08db0541.js.LICENSE.txt */
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [195],
  {
    5239: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return f
          }
        })
      var n = r(7294),
        a = r(4184),
        o = r.n(a),
        i = r(7961),
        s = r(9960),
        u = r(2263),
        l = r(4996),
        c = {
          heroBanner: 'heroBanner_UJJx',
          buttons: 'buttons_pzbO',
          features: 'features_keug',
          featureImage: 'featureImage_yA8i'
        }
      var f = function () {
        var e = (0, u.Z)().siteConfig,
          t = void 0 === e ? {} : e
        return n.createElement(
          i.Z,
          { title: '' + t.title, description: 'A NestJS Module for Typegoose' },
          n.createElement(
            'header',
            { className: o()('hero hero--primary', c.heroBanner) },
            n.createElement(
              'div',
              { className: 'container' },
              n.createElement('h1', { className: 'hero__title' }, t.title),
              n.createElement('p', { className: 'hero__subtitle' }, t.tagline),
              n.createElement(
                'div',
                { className: c.buttons },
                n.createElement(
                  s.Z,
                  {
                    className: o()('button button--outline button--secondary button--lg', c.getStarted),
                    to: (0, l.Z)('docs/install')
                  },
                  'Get Started'
                )
              )
            )
          )
        )
      }
    },
    4184: function (e, t) {
      var r
      !(function () {
        'use strict'
        var n = {}.hasOwnProperty
        function a() {
          for (var e = [], t = 0; t < arguments.length; t++) {
            var r = arguments[t]
            if (r) {
              var o = typeof r
              if ('string' === o || 'number' === o) e.push(r)
              else if (Array.isArray(r)) {
                if (r.length) {
                  var i = a.apply(null, r)
                  i && e.push(i)
                }
              } else if ('object' === o) {
                if (
                  r.toString !== Object.prototype.toString &&
                  !r.toString.toString().includes('[native code]')
                ) {
                  e.push(r.toString())
                  continue
                }
                for (var s in r) n.call(r, s) && r[s] && e.push(s)
              }
            }
          }
          return e.join(' ')
        }
        e.exports
          ? ((a.default = a), (e.exports = a))
          : void 0 ===
              (r = function () {
                return a
              }.apply(t, [])) || (e.exports = r)
      })()
    }
  }
])
