import React from 'react'
import ComponentCreator from '@docusaurus/ComponentCreator'

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', '6e9'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '2c5'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '29d'),
            routes: [
              {
                path: '/docs/async-configuration',
                component: ComponentCreator('/docs/async-configuration', '4ef'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/discriminators',
                component: ComponentCreator('/docs/discriminators', '5e7'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/faq',
                component: ComponentCreator('/docs/faq', '96a'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/install',
                component: ComponentCreator('/docs/install', '944'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/multiple-connections',
                component: ComponentCreator('/docs/multiple-connections', 'ac1'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/schema-options',
                component: ComponentCreator('/docs/schema-options', 'aba'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/testing',
                component: ComponentCreator('/docs/testing', '5e8'),
                exact: true,
                sidebar: 'someSidebar'
              },
              {
                path: '/docs/usage',
                component: ComponentCreator('/docs/usage', '84f'),
                exact: true,
                sidebar: 'someSidebar'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '336'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
]
