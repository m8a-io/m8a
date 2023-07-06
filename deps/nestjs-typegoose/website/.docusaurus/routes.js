import React from 'react'
import ComponentCreator from '@docusaurus/ComponentCreator'

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'ef4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '978'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '688'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '25c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '007'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'bb6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ee1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '156'),
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
  },
  {
    path: '/',
    component: ComponentCreator('/', 'cdb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*')
  }
]
