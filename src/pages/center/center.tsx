import {Component} from 'react';
import Taro from '@tarojs/taro';
import {View, Text} from '@tarojs/components';
import List from './components/List';
import styles from './index.module.scss';

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
    this.state = {userInfo: {}};
  }

  componentWillMount() {
    Taro.setNavigationBarTitle({title:'个人中心'})
    Taro.getStorage({
      key: 'userInfo',
      success: (res) => {
        console.log(res?.data);
        this.setState({
          userInfo: res?.data,
        });
      },
      fail: () => {
        Taro.showToast({
          title: '请先登录',
          icon: 'none',
          duration: 2000,
        });
      },
    });
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  render() {
    const {userInfo} = this.state;
    return (
      <View className={styles.container}>
        {/* <AtAvatar circle size="large" image={userInfo?.avatarUrl}/> */}
        <Text className={styles.nickName}>{userInfo?.nickName}</Text>
        <View className={styles.count}>
          <View className={styles.item}>记账天数<Text className={styles.text}>10</Text></View>
          <View className={styles.item}>记账笔数<Text className={styles.text}>40</Text></View>
        </View>
        <List/>
      </View>
    );
  }
}
