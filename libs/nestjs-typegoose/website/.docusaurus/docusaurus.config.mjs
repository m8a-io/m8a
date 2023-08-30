/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
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
      items: [
        {
          to: 'docs/install',
          label: 'Docs',
          position: 'left'
        },
        {
          href: 'https://github.com/m8a-io/m8a',
          label: 'GitHub',
          position: 'right'
        }
      ],
      hideOnScroll: false
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
      copyright: 'Copyright © 2023 m8a.io - Scott Molinari and Kyle Pfromer.'
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false
    },
    docs: {
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: false,
        autoCollapseCategories: false
      }
    },
    metadata: [],
    prism: {
      additionalLanguages: [],
      theme: {
        plain: {
          color: '#bfc7d5',
          backgroundColor: '#292d3e'
        },
        styles: [
          {
            types: ['comment'],
            style: {
              color: 'rgb(105, 112, 152)',
              fontStyle: 'italic'
            }
          },
          {
            types: ['string', 'inserted'],
            style: {
              color: 'rgb(195, 232, 141)'
            }
          },
          {
            types: ['number'],
            style: {
              color: 'rgb(247, 140, 108)'
            }
          },
          {
            types: ['builtin', 'char', 'constant', 'function'],
            style: {
              color: 'rgb(130, 170, 255)'
            }
          },
          {
            types: ['punctuation', 'selector'],
            style: {
              color: 'rgb(199, 146, 234)'
            }
          },
          {
            types: ['variable'],
            style: {
              color: 'rgb(191, 199, 213)'
            }
          },
          {
            types: ['class-name', 'attr-name'],
            style: {
              color: 'rgb(255, 203, 107)'
            }
          },
          {
            types: ['tag', 'deleted'],
            style: {
              color: 'rgb(255, 85, 114)'
            }
          },
          {
            types: ['operator'],
            style: {
              color: 'rgb(137, 221, 255)'
            }
          },
          {
            types: ['boolean'],
            style: {
              color: 'rgb(255, 88, 116)'
            }
          },
          {
            types: ['keyword'],
            style: {
              fontStyle: 'italic'
            }
          },
          {
            types: ['doctype'],
            style: {
              color: 'rgb(199, 146, 234)',
              fontStyle: 'italic'
            }
          },
          {
            types: ['namespace'],
            style: {
              color: 'rgb(178, 204, 214)'
            }
          },
          {
            types: ['url'],
            style: {
              color: 'rgb(221, 221, 221)'
            }
          }
        ]
      },
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {
            start: 'highlight-start',
            end: 'highlight-end'
          }
        }
      ]
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 3
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: '/home/dev/m8a/deps/nestjs-typegoose/website/sidebars.js',
          editUrl: 'https://github.com/m8a-io/m8a/edit/dev/deps/nestjs-typegoose/website'
        },
        theme: {
          customCss: '/home/dev/m8a/deps/nestjs-typegoose/website/src/css/custom.css'
        }
      }
    ]
  ],
  baseUrlIssueBanner: true,
  i18n: {
    defaultLocale: 'en',
    path: 'i18n',
    locales: ['en'],
    localeConfigs: {}
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  staticDirectories: ['static'],
  customFields: {},
  plugins: [],
  themes: [],
  scripts: [],
  headTags: [],
  stylesheets: [],
  clientModules: [],
  titleDelimiter: '|',
  noIndex: false,
  markdown: {
    mermaid: false
  }
}