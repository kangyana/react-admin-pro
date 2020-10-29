export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    name: 'basicLayout',
    component: '../layouts/BasicLayout',
    routes: [
      {
        path: '/AfterSale',
        name: '售后管理',
        routes: [
          {
            name: '欢迎',
            path: '/afterSale/welcome',
            component: './Welcome',
          },
          {
            name: '售后中心',
            path: '/afterSale/logisticsCenter',
            component: './AfterSale/LogisticsCenter',
          },
        ]
      },
      {
        path: '/admin',
        name: '管理页',
        access: 'canAdmin',
        component: './Admin',
      },
    ],
  },
  {
    component: './404',
  },
]