import {createModel} from "@rematch/core";
import Taro from "@tarojs/taro";

export interface SystemInfo {
  navBarHeight: number;
  menuHeight: number;
  menuWidth: number;
  menuBottom: number;
  statusBarHeight: number;
}

export interface UserInfo {
  userId?: number;
  userType?: number;
  name: string;
  mobile: string;
  accid: string;
  portraitUrl: string;
}

export const global = createModel()({
  state: {
    isInit: false,
    isLogin: false,
    // 地区数据
    address: {provinces: [], cities: [], areas: []},
    // 当前地理位置
    currentArea: {},
    systemInfo: null,
    userInfo: {},
  },
  effects: () => ({
    // 获取用户信息
    async getBasicInfo() {
    },

    async fetchArea() {
    },
    // 根据经纬度请求当前地址
    async fetchLocation() {
    },

    async fetchSystemInfo() {
      Taro.getSystemInfo({
        success: (systemInfo) => {
          const menuButtonInfo = Taro.getMenuButtonBoundingClientRect();
          let navBarHeight =
            (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 +
            menuButtonInfo.height +
            systemInfo.statusBarHeight;
          let menuHeight = menuButtonInfo.height;
          let menuWidth = menuButtonInfo.width;
          let menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
          let statusBarHeight = systemInfo.statusBarHeight;
          this.save({
            systemInfo: {
              navBarHeight,
              menuHeight,
              menuWidth,
              menuBottom,
              statusBarHeight,
            },
          });
        },
      });
    },
  }),
  reducers: {
    save(state, payload) {
      return {...state, ...payload};
    },
    init(state) {
      return {
        ...state,
        isInit: true,
      };
    },
    setLogin(state, payload) {
      return {
        ...state,
        isLogin: payload,
      };
    },
    setUserInfo(state, userInfo) {
      return {
        ...state,
        userInfo,
      };
    },
    savePartUserInfo(state, userInfo) {
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          ...userInfo,
        },
      };
    },
    // 退出登陆
    // setLogout(state) {
    //   return {
    //     ...state,
    //     isLogin: false,
    //     userInfo: null,
    //   };
    // },
  },
});
