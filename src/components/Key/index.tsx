import {useContext, useState} from 'react';
import {addContext} from '../../context/addContext';
import {View, Picker} from '@tarojs/components';
import styles from './index.module.scss';
import dayjs from 'dayjs';

interface IProps {
  type: string;
  name: string | number;
  onClick: () => void;
}

const Key = ({type, name, onClick}: IProps) => {
  const [date, setDate] = useState(dayjs().format('MM-DD'));
  const [time, setTime] = useState(dayjs().format('HH:mm'));
  const context = useContext(addContext);

  const handleDateChange = (e) => {
    setDate(() => e.detail.value);
    let mon = dayjs(e.detail.value).month() + 1;
    let day = dayjs(e.detail.value).date();
    console.log(mon, day);
    context.data.date = e.detail.value;
  };

  const handleTimeChange = (e) => {
    setTime(() => e.detail.value);
    context.data.time = e.detail.value;
    console.log(context.data.time);
  };

  return (
    <View className={styles.item}>
      {type == 'date' && (
        <View className={styles.name}>
          <Picker mode="date" onChange={handleDateChange} value={date}>
            <View>{`${
              dayjs(context.data.date).month() + 1 >= 10
                ? dayjs(context.data.date).month() + 1
                : '0' + (dayjs(context.data.date).month() + 1)
            }-${
              dayjs(context.data.date).date() > 10
                ? dayjs(context.data.date).date()
                : '0' + dayjs(context.data.date).date()
            }`}</View>
          </Picker>
        </View>
      )}

      {type == 'time' && (
        <View className={styles.name}>
          <Picker mode="time" onChange={handleTimeChange} value={time}>
            <View>{context.data.time}</View>
          </Picker>
        </View>
      )}

      {type == 'number' && (
        <View className={styles.name} onClick={onClick}>
          {name}
        </View>
      )}

      {type == 'operator' && (
        <View className={styles.name} onClick={onClick}>
          {name}
        </View>
      )}
    </View>
  );
};

export default Key;
