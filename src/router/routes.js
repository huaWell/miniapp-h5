export default [
  {
    path: '/',
    name: 'Home',
    component: () =>
      import('../views/PublishOrder'),
    meta: {
      title: ''
    }
  },
  {
    path: '/publish-order',
    name: 'PublishOrder',
    component: () =>
      import('../views/PublishOrder'),
    meta: {
      title: ''
    }
  },
  {
    path: '/search-production',
    name: 'SearchProduction',
    component: () =>
      import('../views/SearchProduction'),
    meta: {
      title: ''
    }
  },
  {
    path: '/quotate-strategy',
    name: 'QuotateStrategy',
    component: () =>
      import('../views/QuotateStrategy'),
    meta: {
      title: ''
    }
  },
  {
    path: '/circle-detail',
    name: 'CircleDetail',
    component: () =>
      import('../views/CircleDetail'),
    meta: {
      keepAlive: true,
      title: ''
    }
  },

  {
    path: '/create-circle',
    name: 'CreateCircle',
    component: () =>
      import('../views/CreateCircle'),
    meta: {
      keepAlive: true,
      title: ''
    }
  },


  {
    path: '/in-circle-persons',
    name: 'InCirclePersons',
    component: () =>
      import('../views/InCirclePersons'),
    meta: {
      title: ''
    }
  },


  {
    path: '/black-list',
    name: 'BlackList',
    component: () =>
      import('../views/BlackList'),
    meta: {
      title: ''
    }
  },


  {
    path: '/publish-message',
    name: 'PublishMessage',
    component: () =>
      import('../views/PublishMessage'),
    meta: {
      title: ''
    }
  },


  {
    path: '/publish-fresh',
    name: 'PublishFresh',
    component: () =>
      import('../views/PublishFresh'),
    meta: {
      title: ''
    }
  },


  {
    path: '/publish-homeland',
    name: 'PublishHomeland',
    component: () =>
      import('../views/PublishHomeland'),
    meta: {
      title: ''
    }
  },


  {
    path: '/fresh-detail',
    name: 'FreshDetail',
    component: () =>
      import('../views/FreshDetail'),
    meta: {
      title: ''
    }
  },

  {
    path: '/map-picker',
    name: 'MapPicker',
    component: () =>
      import('../views/MapPicker'),
    meta: {
      title: ''
    }
  },
  {
    path: '/good-picker',
    name: 'GoodPicker',
    component: () =>
      import('../views/GoodPicker'),
    meta: {
      title: ''
    }
  },
  {
    path: '/post-detail',
    name: 'PostDetail',
    component: () =>
      import('../views/PostDetail'),
    meta: {
      title: ''
    }
  },
  {
    path: '/good-share',
    name: 'GoodShare',
    component: () =>
      import('../views/GoodShare'),
    meta: {
      title: ''
    }
  },
  {
    path: '/add-object',
    name: 'AddObject',
    component: () =>
      import('../views/AddObject'),
    meta: {
      title: ''
    }
  },
  {
    path: '/setup',
    name: 'Setup',
    component: () =>
      import('../views/Setup'),
    meta: {
      title: ''
    }
  },
  {
    path: '/objectCategory',
    name: 'ObjectCategory',
    component: () =>
      import('../views/ObjectCategory'),
    meta: {
      title: ''
    }
  },
  {
    path: '/objectLabel',
    name: 'ObjectLabel',
    component: () =>
      import('../views/ObjectLabel'),
    meta: {
      title: ''
    }
  },
  {
    path: '/userSpace',
    name: 'UserSpace',
    component: () =>
      import('../views/UserSpace'),
    meta: {
      title: ''
    }
  },
  {
    path: '/objectHome',
    name: 'ObjectHome',
    component: () =>
      import('../views/ObjectHome'),
    meta: {
      title: ''
    }
  },
  {
    path: '/objectView',
    name: 'ObjectView',
    component: () =>
      import('../views/ObjectView'),
    meta: {
      title: ''
    }
  },
  {
    path: '/objectDetail',
    name: 'ObjectDetail',
    component: () =>
      import('../views/ObjectDetail'),
    meta: {
      title: ''
    }
  },
  {
    path: '/objectList',
    name: 'ObjectList',
    component: () =>
      import('../views/ObjectList'),
    meta: {
      title: ''
    }
  },
]