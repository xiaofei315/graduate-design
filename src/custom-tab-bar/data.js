const road =
  'cloud://account-dev-4gls3cdk24659538.6163-account-dev-4gls3cdk24659538-1308635067/tabbar/';

const add = road + 'add.png';
const addCheck = road + 'add_check.png';
const center = road + 'center.png';
const centerCheck = road + 'center_check.png';
const detail = road + 'detail.png';
const detailCheck = road + 'detail_check.png';
const footPrint = road + 'footprint.png';
const footPrintCheck = road + 'footprint_check.png';
const statistics = road + 'statistics.png';
const statisticsCheck = road + 'statistics_check.png';

const list = [
  {
    id: 1,
    pagePath: '/pages/detail/detail',
    iconPath: detail,
    selectedIconPath: detailCheck,
    text: '明细',
  },
  {
    id: 2,
    pagePath: '/pages/statistical/statistical',
    iconPath: statistics,
    selectedIconPath: statisticsCheck,
    text: '统计',
  },
  {
    id: 3,
    pagePath: '/pages/home/home',
    iconPath: add,
    selectedIconPath: addCheck,
  },
  {
    id: 4,
    pagePath: '/pages/footprint/footprint',
    iconPath: footPrint,
    selectedIconPath: footPrintCheck,
    text: '足迹',
  },
  {
    id: 5,
    pagePath: '/pages/center/center',
    iconPath: center,
    selectedIconPath: centerCheck,
    text: '我的',
  },
];

export default list;
