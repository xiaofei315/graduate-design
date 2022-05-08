export const mainType = {
  consume: {
    name: '支出',
    value: 0,
  },
  incoming: {
    name: '收入',
    value: 1,
  },
};

export interface IItem {
  id: string;
  type: string;
  subType: string;
  name: string;
}

export const subType = {
  '1': '衣',
  '2': '食',
  '3': '住',
  '4': '行',
  '5': '玩',
  '6': '其他',
};

// 消费：type: '0'
export const costType: IItem[] = [
  // 衣：subType: '1'
  {
    id: '011',
    type: '0',
    subType: '1',
    name: '服饰',
  },
  {
    id: '012',
    type: '0',
    subType: '1',
    name: '美妆',
  },
  {
    id: '013',
    type: '0',
    subType: '1',
    name: '包包',
  },
  // 食 subType: '2'
  {
    id: '021',
    type: '0',
    subType: '2',
    name: '餐饮',
  },
  {
    id: '022',
    type: '0',
    subType: '2',
    name: '蔬菜',
  },
  {
    id: '023',
    type: '0',
    subType: '2',
    name: '水果',
  },
  {
    id: '024',
    type: '0',
    subType: '2',
    name: '零食',
  },
  {
    id: '025',
    type: '0',
    subType: '2',
    name: '烟酒',
  },
  {
    id: '026',
    type: '0',
    subType: '2',
    name: '调料',
  },

  // 住  subType: '3',
  {
    id: '031',
    type: '0',
    subType: '3',
    name: '房租',
  },
  {
    id: '032',
    type: '0',
    subType: '3',
    name: '水电',
  },
  {
    id: '033',
    type: '0',
    subType: '3',
    name: '通讯',
  },
  {
    id: '034',
    type: '0',
    subType: '3',
    name: '物业',
  },

  // 行  subType: '4'
  {
    id: '041',
    type: '0',
    subType: '4',
    name: '汽车',
  },
  {
    id: '042',
    type: '0',
    subType: '4',
    name: '出租',
  },
  {
    id: '043',
    type: '0',
    subType: '4',
    name: '地铁',
  },
  {
    id: '044',
    type: '0',
    subType: '4',
    name: '共享出行',
  },
  {
    id: '045',
    type: '0',
    subType: '4',
    name: '火车',
  },
  {
    id: '046',
    type: '0',
    subType: '4',
    name: '高铁',
  },
  {
    id: '047',
    type: '0',
    subType: '4',
    name: '飞机',
  },
  // 娱乐 subType: '5'
  {
    id: '051',
    type: '0',
    subType: '5',
    name: '聚会',
  },
  {
    id: '052',
    type: '0',
    subType: '5',
    name: '游戏',
  },
  {
    id: '053',
    type: '0',
    subType: '5',
    name: '音乐',
  },
  {
    id: '054',
    type: '0',
    subType: '5',
    name: '旅游',
  },
  {
    id: '055',
    type: '0',
    subType: '5',
    name: '运动',
  },
  {
    id: '056',
    type: '0',
    subType: '5',
    name: '约会',
  },

  // 其他 subType: '6'
  {
    id: '061',
    type: '0',
    subType: '6',
    name: '还款',
  },
  {
    id: '062',
    type: '0',
    subType: '6',
    name: '捐赠',
  },
  {
    id: '063',
    type: '0',
    subType: '6',
    name: '数码',
  },
  {
    id: '064',
    type: '0',
    subType: '6',
    name: '学习',
  },
  {
    id: '065',
    type: '0',
    subType: '6',
    name: '办公',
  },
  {
    id: '066',
    type: '0',
    subType: '6',
    name: '其他',
  },
];

export const incoming: IItem[] = [
  {
    id: '071',
    type: '1',
    subType: '7',
    name: '工资',
  },
  {
    id: '072',
    type: '1',
    subType: '8',
    name: '理财',
  },
  {
    id: '073',
    type: '1',
    subType: '9',
    name: '兼职',
  },
  {
    id: '074',
    type: '1',
    subType: '10',
    name: '礼金',
  },
  {
    id: '075',
    type: '1',
    subType: '11',
    name: '其他',
  },
];
