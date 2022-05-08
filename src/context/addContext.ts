import {createContext} from 'react';
import {IItem} from '../constants/enums'

import dayjs from 'dayjs';

export interface ILocation {
  address: string;
  errMsg: string;
  latitude: string | number;
  longitude: string | number;
  name: string;
}

export interface IData {
  type: IItem;
  date: string | number;
  time: string | number;
  amount: number | string;
  desc: string;
  location: ILocation;
}

interface IAdd {
  data: IData;
}

export const initialData = {
  type: {
    id: '',
    type: '',
    subType: '',
    name: ''
  },
  date: dayjs().valueOf(),
  time: dayjs().format('HH:mm'),
  amount: 0,
  desc: '',
  location: {
    address: '',
    errMsg: '',
    latitude: 0,
    longitude: 0,
    name: '',
  },
};

export const addContext = createContext<IAdd>({
  data: initialData,
});
