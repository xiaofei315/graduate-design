import {Models} from '@rematch/core';
import {global} from './global';
import {tabbar} from './tabbar';

export interface RootModel extends Models<RootModel> {
  global: typeof global;
  tabbar: typeof tabbar;
}

export const models: RootModel = {
  global,
  tabbar,
};
