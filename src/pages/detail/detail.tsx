import { useNavigatorText } from '@/hooks/useNavigatorText';
import { useState, useEffect } from 'react';
import cn from 'classNames';
import { ScrollView, View } from '@tarojs/components';
import styles from './index.module.scss';
import Card from '@/components/Card';
import Taro from '@tarojs/taro';

const Index = () => {
  useNavigatorText('详情');
  const [currentTab, setCurrentTab] = useState(1);
  const [currentData, setCurrentData] = useState<unknown[]>();

  const openid = Taro.getStorageSync('openid');

  useEffect(() => {
    Taro.cloud.callFunction({
      name: 'selectRecords',
      data: {
        collectionName: openid,
        type: '0',
      },
      success: (res:any) => {
        console.log(res?.result?.data);
        setCurrentData(() => res?.result?.data);
      },
    });
  }, []);
  const handleChangeTab = (v) => {
    setCurrentTab(() => v);
    Taro.showToast({
      title:'加载中...',
      icon: 'loading',
      duration:1000,
    })
    Taro.cloud.callFunction({
      name: 'selectRecords',
      data: {
        collectionName: openid,
        type: String(v - 1),
      },
      success: (res:any) => {
        console.log(res?.result?.data);
        setCurrentData(() => res?.result?.data);
      },
    });
  };
  return (
    <View className={styles.container}>
      <Tab currentTab={currentTab} onClick={handleChangeTab} />
      <ScrollView
        className={styles.scrollViewContainer}
        scrollY
        scrollWithAnimation
      >
        <View className={styles.scrollView}>
          {currentData &&
            currentData.map((item, index) => {
              return <Card key={index} data={item} />;
            })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Index;

const Tab = ({ currentTab, onClick }) => {
  return (
    <View
      className={cn(styles.tabContainer, {
        [styles.active1]: currentTab == 1,
        [styles.active2]: currentTab == 2,
      })}
    >
      <View className={styles.tabItem} onClick={() => onClick(1)}>
        支出
      </View>
      <View className={styles.tabItem} onClick={() => onClick(2)}>
        收入
      </View>
    </View>
  );
};
