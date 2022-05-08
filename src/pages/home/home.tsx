import {useState} from 'react';
import {View, Text, Picker} from '@tarojs/components';
import {useNavigatorText} from "@/hooks/useNavigatorText";
import styles from './index.module.scss';

const Index = () => {
  useNavigatorText('首页');
  const [date, setDate] = useState('2018-04-22');
  const [time, setTime] = useState('12:01');
  const onTimeChange = (e) => {
    setTime(e.detail.value);
  };
  const onDateChange = (e) => {
    setDate(e.detail.value);
  };
  return (
    <View className="index">
      <Text className={styles.text}>首页</Text>
      <View className="page-section">
        <Text>时间选择器</Text>
        <View>
          <Picker mode="time" onChange={onTimeChange} value={''}>
            <View className="picker">当前选择：{time}</View>
          </Picker>
        </View>
      </View>
      <View className="page-section">
        <Text>日期选择器</Text>
        <View>
          <Picker mode="date" onChange={onDateChange} value={''}>
            <View className="picker">当前选择：{date}</View>
          </Picker>
        </View>
      </View>
    </View>
  );
};
export default Index;
