
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/directory',
  component: ComponentCreator('/directory','079'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','53a'),
  
  routes: [
{
  path: '/docs/contributing',
  component: ComponentCreator('/docs/contributing','853'),
  exact: true,
},
{
  path: '/docs/engineering/eng-introduction',
  component: ComponentCreator('/docs/engineering/eng-introduction','15c'),
  exact: true,
},
{
  path: '/docs/engineering/incident-reports/eos-tracking-downtime',
  component: ComponentCreator('/docs/engineering/incident-reports/eos-tracking-downtime','3d9'),
  exact: true,
},
{
  path: '/docs/engineering/retrospectives',
  component: ComponentCreator('/docs/engineering/retrospectives','2cf'),
  exact: true,
},
{
  path: '/docs/engineering/technical-design-docs/template',
  component: ComponentCreator('/docs/engineering/technical-design-docs/template','ae7'),
  exact: true,
},
{
  path: '/docs/introduction',
  component: ComponentCreator('/docs/introduction','fca'),
  exact: true,
},
{
  path: '/docs/people/benefits',
  component: ComponentCreator('/docs/people/benefits','6ef'),
  exact: true,
},
{
  path: '/docs/people/communication',
  component: ComponentCreator('/docs/people/communication','a3f'),
  exact: true,
},
{
  path: '/docs/people/compensation',
  component: ComponentCreator('/docs/people/compensation','cbf'),
  exact: true,
},
{
  path: '/docs/people/introduction',
  component: ComponentCreator('/docs/people/introduction','476'),
  exact: true,
},
{
  path: '/docs/support/how-to-handle-safe-reports',
  component: ComponentCreator('/docs/support/how-to-handle-safe-reports','ba4'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
