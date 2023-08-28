'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [943],
  {
    3905: function (e, t, n) {
      n.d(t, {
        Zo: function () {
          return u
        },
        kt: function () {
          return d
        }
      })
      var o = n(7294)
      function r(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 })
            : (e[t] = n),
          e
        )
      }
      function a(e, t) {
        var n = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          t &&
            (o = o.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable
            })),
            n.push.apply(n, o)
        }
        return n
      }
      function i(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {}
          t % 2
            ? a(Object(n), !0).forEach(function (t) {
                r(e, t, n[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : a(Object(n)).forEach(function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
              })
        }
        return e
      }
      function p(e, t) {
        if (null == e) return {}
        var n,
          o,
          r = (function (e, t) {
            if (null == e) return {}
            var n,
              o,
              r = {},
              a = Object.keys(e)
            for (o = 0; o < a.length; o++) (n = a[o]), t.indexOf(n) >= 0 || (r[n] = e[n])
            return r
          })(e, t)
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e)
          for (o = 0; o < a.length; o++)
            (n = a[o]),
              t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]))
        }
        return r
      }
      var s = o.createContext({}),
        l = function (e) {
          var t = o.useContext(s),
            n = t
          return e && (n = 'function' == typeof e ? e(t) : i(i({}, t), e)), n
        },
        u = function (e) {
          var t = l(e.components)
          return o.createElement(s.Provider, { value: t }, e.children)
        },
        c = {
          inlineCode: 'code',
          wrapper: function (e) {
            var t = e.children
            return o.createElement(o.Fragment, {}, t)
          }
        },
        m = o.forwardRef(function (e, t) {
          var n = e.components,
            r = e.mdxType,
            a = e.originalType,
            s = e.parentName,
            u = p(e, ['components', 'mdxType', 'originalType', 'parentName']),
            m = l(n),
            d = r,
            f = m[''.concat(s, '.').concat(d)] || m[d] || c[d] || a
          return n
            ? o.createElement(f, i(i({ ref: t }, u), {}, { components: n }))
            : o.createElement(f, i({ ref: t }, u))
        })
      function d(e, t) {
        var n = arguments,
          r = t && t.mdxType
        if ('string' == typeof e || r) {
          var a = n.length,
            i = new Array(a)
          i[0] = m
          var p = {}
          for (var s in t) hasOwnProperty.call(t, s) && (p[s] = t[s])
          ;(p.originalType = e), (p.mdxType = 'string' == typeof e ? e : r), (i[1] = p)
          for (var l = 2; l < a; l++) i[l] = n[l]
          return o.createElement.apply(null, i)
        }
        return o.createElement.apply(null, n)
      }
      m.displayName = 'MDXCreateElement'
    },
    7520: function (e, t, n) {
      n.r(t),
        n.d(t, {
          assets: function () {
            return u
          },
          contentTitle: function () {
            return s
          },
          default: function () {
            return d
          },
          frontMatter: function () {
            return p
          },
          metadata: function () {
            return l
          },
          toc: function () {
            return c
          }
        })
      var o = n(7462),
        r = n(3366),
        a = (n(7294), n(3905)),
        i = ['components'],
        p = { id: 'install', title: 'Installation' },
        s = void 0,
        l = {
          unversionedId: 'install',
          id: 'install',
          title: 'Installation',
          description: 'Welcome to the nestjs-typegoose. The Typegoose module/ plugin for NestJS.',
          source: '@site/docs/install.md',
          sourceDirName: '.',
          slug: '/install',
          permalink: '/docs/install',
          draft: !1,
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/install.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'install', title: 'Installation' },
          sidebar: 'someSidebar',
          next: { title: 'Basic Usage', permalink: '/docs/usage' }
        },
        u = {},
        c = [{ value: 'Peer Dependencies', id: 'peer-dependencies', level: 2 }],
        m = { toc: c }
      function d(e) {
        var t = e.components,
          n = (0, r.Z)(e, i)
        return (0, a.kt)(
          'wrapper',
          (0, o.Z)({}, m, n, { components: t, mdxType: 'MDXLayout' }),
          (0, a.kt)('p', null, 'Welcome to the nestjs-typegoose. The Typegoose module/ plugin for NestJS.'),
          (0, a.kt)(
            'p',
            null,
            'This project is a fork of the original ',
            (0, a.kt)(
              'a',
              { parentName: 'p', href: 'https://github.com/kpfromer/nestjs-typegoose' },
              'nestjs-typegoose'
            ),
            ' and credit where credit is definitely due, practically all of the coding was done by ',
            (0, a.kt)('a', { parentName: 'p', href: 'https://github.com/kpfromer' }, 'Kyle Pfromer'),
            '. Many thanks to him for putting this module together. This project aims to continue that work and to maintain the plugin for the long run. '
          ),
          (0, a.kt)(
            'admonition',
            { type: 'note' },
            (0, a.kt)(
              'p',
              { parentName: 'admonition' },
              "This assumes you have a nestjs project to work with. If you don't it is recommended that you use the ",
              (0, a.kt)('a', { parentName: 'p', href: 'https://docs.nestjs.com/cli/overview' }, 'nestjs cli'),
              ' to jump start an example project to get started using ',
              (0, a.kt)('inlineCode', { parentName: 'p' }, 'nestjs-typegoose'),
              '.'
            )
          ),
          (0, a.kt)('p', null, 'Using ', (0, a.kt)('inlineCode', { parentName: 'p' }, 'npm'), ':'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'npm install --save @m8a/nestjs-typegoose')
          ),
          (0, a.kt)('p', null, 'Using ', (0, a.kt)('inlineCode', { parentName: 'p' }, 'yarn'), ':'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'yarn add @m8a/nestjs-typegoose')
          ),
          (0, a.kt)('h2', { id: 'peer-dependencies' }, 'Peer Dependencies'),
          (0, a.kt)(
            'p',
            null,
            'The latest version of nestjs-typegoose requires a few peer dependencies to be installed for things to work. You need to install the following:'
          ),
          (0, a.kt)(
            'ul',
            null,
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'p',
                { parentName: 'li' },
                (0, a.kt)('inlineCode', { parentName: 'p' }, '@typegoose/typegoose'),
                ' v11+'
              )
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'p',
                { parentName: 'li' },
                (0, a.kt)('inlineCode', { parentName: 'p' }, '@nestjs/common'),
                ' v10+'
              )
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'p',
                { parentName: 'li' },
                (0, a.kt)('inlineCode', { parentName: 'p' }, '@nestjs/core'),
                ' v10+'
              )
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)(
                'p',
                { parentName: 'li' },
                (0, a.kt)('inlineCode', { parentName: 'p' }, 'mongoose'),
                ' v7.2.0+'
              )
            ),
            (0, a.kt)(
              'li',
              { parentName: 'ul' },
              (0, a.kt)('p', { parentName: 'li' }, 'be sure you have TypeScript 4.9 or higher also installed')
            )
          ),
          (0, a.kt)('p', null, 'Using ', (0, a.kt)('inlineCode', { parentName: 'p' }, 'npm'), ':'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'inlineCode',
              { parentName: 'p' },
              'npm install --save @typegoose/typegoose @nestjs/common @nestjs/core mongoose'
            )
          ),
          (0, a.kt)('p', null, 'Using ', (0, a.kt)('inlineCode', { parentName: 'p' }, 'yarn'), ':'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'inlineCode',
              { parentName: 'p' },
              'yarn add @typegoose/typegoose @nestjs/common @nestjs/core mongoose'
            )
          ),
          (0, a.kt)('p', null, 'Using ', (0, a.kt)('inlineCode', { parentName: 'p' }, 'pnpm'), ':'),
          (0, a.kt)(
            'p',
            null,
            (0, a.kt)(
              'inlineCode',
              { parentName: 'p' },
              'pnpm install --save @typegoose/typegoose @nestjs/common @nestjs/core mongoose'
            )
          ),
          (0, a.kt)(
            'p',
            null,
            'Now you are ',
            (0, a.kt)('a', { parentName: 'p', href: '/docs/usage' }, 'ready to start'),
            ' using ',
            (0, a.kt)('inlineCode', { parentName: 'p' }, 'nestjs-typegoose'),
            '!'
          )
        )
      }
      d.isMDXComponent = !0
    }
  }
])
