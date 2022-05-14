import { Component } from "react";
import Taro from "@tarojs/taro";
import { View, Text, Image, Button } from "@tarojs/components";
import List from "./components/List";
import styles from "./index.module.scss";

interface UserInfo {
  avatarUrl?: string;
  nickName?: string;
}

interface IState {
  userInfo: UserInfo;
}

export default class Index extends Component<null, IState> {
  constructor(props) {
    super(props);
    this.state = { userInfo: {} };
  }

  componentWillMount() {
    Taro.setNavigationBarTitle({ title: "个人中心" });
    Taro.getStorage({
      key: "userInfo",
      success: (res) => {
        console.log(res?.data);
        this.setState({
          userInfo: res?.data,
        });
      },
      fail: () => {
        Taro.showToast({
          title: "请先登录",
          icon: "none",
          duration: 2000,
        });
      },
    });
  }
  handleLogout = () => {
    Taro.showModal({
      title: "提示",
      content: "是否退出登录",
      success: function (res) {
        if (res.confirm) {
          // console.log('用户点击确定')
          Taro.showLoading({
            title: "退出中...",
          });
          Taro.clearStorage();
          setTimeout(function () {
            Taro.hideLoading();
            Taro.reLaunch({
              url: "/pages/home/home",
            });
          }, 100);
        } else if (res.cancel) {
          console.log("用户点击取消");
        }
      },
    });
  };
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { userInfo } = this.state;
    return (
      <View className={styles.container}>
        <Image
          style={{
            width: "60px",
            height: "60px",
            background: "#fff",
            borderRadius: "50%",
          }}
          src={userInfo?.avatarUrl}
        ></Image>
        <Text className={styles.nickName}>{userInfo?.nickName}</Text>
        <List />
        <Button className={styles.btn} onClick={this.handleLogout}>
          退出登录
        </Button>
      </View>
    );
  }
}
