'use strict'
;(self.webpackChunkwebsite = self.webpackChunkwebsite || []).push([
  [943],
  {
    9904: (e, s, n) => {
      n.r(s),
        n.d(s, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => l
        })
      var o = n(1527),
        t = n(8627)
      const i = { id: 'install', title: 'Installation' },
        r = void 0,
        d = {
          id: 'install',
          title: 'Installation',
          description: 'Welcome to the nestjs-typegoose. The Typegoose module/ plugin for NestJS.',
          source: '@site/docs/install.md',
          sourceDirName: '.',
          slug: '/install',
          permalink: '/docs/install',
          draft: !1,
          unlisted: !1,
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website/docs/install.md',
          tags: [],
          version: 'current',
          frontMatter: { id: 'install', title: 'Installation' },
          sidebar: 'someSidebar',
          next: { title: 'Basic Usage', permalink: '/docs/usage' }
        },
        c = {},
        l = [{ value: 'Peer Dependencies', id: 'peer-dependencies', level: 2 }]
      function a(e) {
        const s = {
          a: 'a',
          admonition: 'admonition',
          code: 'code',
          h2: 'h2',
          li: 'li',
          p: 'p',
          ul: 'ul',
          ...(0, t.a)(),
          ...e.components
        }
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(s.p, {
              children: 'Welcome to the nestjs-typegoose. The Typegoose module/ plugin for NestJS.'
            }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'This project is a fork of the original ',
                (0, o.jsx)(s.a, {
                  href: 'https://github.com/kpfromer/nestjs-typegoose',
                  children: 'nestjs-typegoose'
                }),
                ' and credit where credit is definitely due, practically all of the coding was done by ',
                (0, o.jsx)(s.a, { href: 'https://github.com/kpfromer', children: 'Kyle Pfromer' }),
                '. Many thanks to him for putting this module together. This project aims to continue that work and to maintain the plugin for the long run.'
              ]
            }),
            '\n',
            (0, o.jsx)(s.admonition, {
              type: 'note',
              children: (0, o.jsxs)(s.p, {
                children: [
                  "This assumes you have a nestjs project to work with. If you don't it is recommended that you use the ",
                  (0, o.jsx)(s.a, { href: 'https://docs.nestjs.com/cli/overview', children: 'nestjs cli' }),
                  ' to jump start an example project to get started using ',
                  (0, o.jsx)(s.code, { children: 'nestjs-typegoose' }),
                  '.'
                ]
              })
            }),
            '\n',
            (0, o.jsxs)(s.p, { children: ['Using ', (0, o.jsx)(s.code, { children: 'npm' }), ':'] }),
            '\n',
            (0, o.jsx)(s.p, {
              children: (0, o.jsx)(s.code, { children: 'npm install --save @m8a/nestjs-typegoose' })
            }),
            '\n',
            (0, o.jsxs)(s.p, { children: ['Using ', (0, o.jsx)(s.code, { children: 'yarn' }), ':'] }),
            '\n',
            (0, o.jsx)(s.p, { children: (0, o.jsx)(s.code, { children: 'yarn add @m8a/nestjs-typegoose' }) }),
            '\n',
            (0, o.jsx)(s.admonition, {
              type: 'note',
              children: (0, o.jsxs)(s.p, {
                children: [
                  'This package follows the major versions of Typegoose and the peer dependencies accordingly, since ',
                  (0, o.jsx)(s.code, { children: '@typegoose/typegoose' }),
                  ' version 10. So, if you need to use older versions of Typegoose, you need to use older versions of nestjs-typegoose that match it too. For example, if you need to use Typegoose v10, you need to use nestjs-typegoose v10.'
                ]
              })
            }),
            '\n',
            (0, o.jsx)(s.h2, { id: 'peer-dependencies', children: 'Peer Dependencies' }),
            '\n',
            (0, o.jsx)(s.p, {
              children:
                'The latest version of nestjs-typegoose (v12) requires a few peer dependencies to be installed for things to work. You need to install the following:'
            }),
            '\n',
            (0, o.jsxs)(s.ul, {
              children: [
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, o.jsxs)(s.p, {
                      children: [(0, o.jsx)(s.code, { children: '@typegoose/typegoose' }), ' v12+']
                    }),
                    '\n'
                  ]
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, o.jsxs)(s.p, {
                      children: [(0, o.jsx)(s.code, { children: '@nestjs/common' }), ' v10+']
                    }),
                    '\n'
                  ]
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, o.jsxs)(s.p, {
                      children: [(0, o.jsx)(s.code, { children: '@nestjs/core' }), ' v10+']
                    }),
                    '\n'
                  ]
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, o.jsxs)(s.p, {
                      children: [(0, o.jsx)(s.code, { children: 'mongoose' }), ' v8.0.1+']
                    }),
                    '\n'
                  ]
                }),
                '\n',
                (0, o.jsxs)(s.li, {
                  children: [
                    '\n',
                    (0, o.jsx)(s.p, { children: 'be sure you have TypeScript 5.2 or higher also installed' }),
                    '\n'
                  ]
                }),
                '\n'
              ]
            }),
            '\n',
            (0, o.jsxs)(s.p, { children: ['Using ', (0, o.jsx)(s.code, { children: 'npm' }), ':'] }),
            '\n',
            (0, o.jsx)(s.p, {
              children: (0, o.jsx)(s.code, {
                children: 'npm install --save @typegoose/typegoose @nestjs/common @nestjs/core mongoose'
              })
            }),
            '\n',
            (0, o.jsxs)(s.p, { children: ['Using ', (0, o.jsx)(s.code, { children: 'yarn' }), ':'] }),
            '\n',
            (0, o.jsx)(s.p, {
              children: (0, o.jsx)(s.code, {
                children: 'yarn add @typegoose/typegoose @nestjs/common @nestjs/core mongoose'
              })
            }),
            '\n',
            (0, o.jsxs)(s.p, { children: ['Using ', (0, o.jsx)(s.code, { children: 'pnpm' }), ':'] }),
            '\n',
            (0, o.jsx)(s.p, {
              children: (0, o.jsx)(s.code, {
                children: 'pnpm install --save @typegoose/typegoose @nestjs/common @nestjs/core mongoose'
              })
            }),
            '\n',
            (0, o.jsx)(s.admonition, {
              type: 'note',
              children: (0, o.jsxs)(s.p, {
                children: [
                  'If you are upgrading from older versions, please also check the ',
                  (0, o.jsx)(s.a, {
                    href: 'https://typegoose.github.io/typegoose/docs/guides/migration/migrate-12',
                    children: 'migration guides for Typegoose'
                  }),
                  '.'
                ]
              })
            }),
            '\n',
            (0, o.jsxs)(s.p, {
              children: [
                'Now you are ',
                (0, o.jsx)(s.a, { href: '/docs/usage', children: 'ready to start' }),
                ' using ',
                (0, o.jsx)(s.code, { children: 'nestjs-typegoose' }),
                '!'
              ]
            })
          ]
        })
      }
      function p(e = {}) {
        const { wrapper: s } = { ...(0, t.a)(), ...e.components }
        return s ? (0, o.jsx)(s, { ...e, children: (0, o.jsx)(a, { ...e }) }) : a(e)
      }
    },
    8627: (e, s, n) => {
      n.d(s, { Z: () => d, a: () => r })
      var o = n(959)
      const t = {},
        i = o.createContext(t)
      function r(e) {
        const s = o.useContext(i)
        return o.useMemo(
          function () {
            return 'function' == typeof e ? e(s) : { ...s, ...e }
          },
          [s, e]
        )
      }
      function d(e) {
        let s
        return (
          (s = e.disableParentContext
            ? 'function' == typeof e.components
              ? e.components(t)
              : e.components || t
            : r(e.components)),
          o.createElement(i.Provider, { value: s }, e.children)
        )
      }
    }
  }
])
