import {createModel} from "@rematch/core";

export const tabbar = createModel()({
  state: {
    currentTabbarIndex: 3,
  },
  effects: () => ({
    // 获取用户信息
    async getBasicInfo() {
    },
  }),
  reducers: {
    save(state, payload) {
      return {...state, ...payload};
    },
  },
});
