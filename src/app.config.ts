export default {
  pages: [
    'pages/home/home',
    'pages/detail/detail',
    'pages/statistical/statistical',
    'pages/footprint/footprint',
    'pages/center/center',
  ],
  tabBar: {
    custom: true,
    selectColor: '#0c9',
    list: [
      {
        pagePath: 'pages/detail/detail',
      },
      {
        pagePath: 'pages/statistical/statistical',
      },
      {
        pagePath: 'pages/home/home',
      },
      {
        pagePath: 'pages/footprint/footprint',
      },
      {
        pagePath: 'pages/center/center',
      },
    ],
    usingComponents: {
      customtabbar: 'custom-tab-bar/index',
    },
  },
  subpackages: [
    {
      root: 'packages',
      pages: [
        'add/add',
        'detail/detail'
      ]
    }

  ],
  window: {
    backgroundColor: '#fff',
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  permission: {
    'scope.userLocation': {
      desc: '你的位置信息将用于小程序位置接口的效果展示'
    }
  }
};
