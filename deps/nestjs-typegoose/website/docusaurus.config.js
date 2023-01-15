module.exports = {
  title: '@m8a/nestjs-typegoose',
  tagline: 'A NestJS Module for Typegoose',
  url: 'https://m8a-io.github.io',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'm8a-io',
  projectName: 'm8a',
  themeConfig: {
    navbar: {
      title: 'm8a.io - Nestjs Typegoose',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [
        { to: 'docs/install', label: 'Docs', position: 'left' },
        {
          href: 'https://github.com/m8a-io/m8a',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Installation',
              to: 'docs/install'
            },
            {
              label: 'Getting Started',
              to: 'docs/usage'
            }
          ]
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/m8a-io/m8a/tree/dev/deps/nestjs-typegoose'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} m8a.io - Scott Molinari and Kyle Pfromer.`
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ]
}
