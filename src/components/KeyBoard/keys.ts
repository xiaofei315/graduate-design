export interface Ikey {
  type: string;
  name: string;
  value: number | string;
}

export const keyList: Array<Ikey> = [
  {
    type: 'number',
    name: '7',
    value: '7',
  },
  {
    type: 'number',
    name: '8',
    value: '8',
  },
  {
    type: 'number',
    name: '9',
    value: '9',
  },
  {
    type: 'date',
    name: '日期',
    value: '',
  },
  {
    type: 'number',

    name: '4',
    value: '4',
  },
  {
    type: 'number',

    name: '5',
    value: '5',
  },
  {
    type: 'number',
    name: '6',
    value: '6',
  },
  {
    name: '时间',
    type: 'time',
    value: '',
  },
  {
    type: 'number',
    name: '1',
    value: '1',
  },
  {
    type: 'number',
    name: '2',
    value: '2',
  },
  {
    type: 'number',
    name: '3',
    value: '3',
  },

  {
    type: 'operator',
    name: '删除',
    value: 'delete',
  },

  {
    type: 'number',
    name: '.',
    value: '.',
  },
  {
    type: 'number',
    name: '0',
    value: '0',
  },

  {
    type: 'operator',
    name: '+',
    value: '+',
  },

  {
    type: 'operator',
    name: '完成',
    value: 'finish',
  },
];
