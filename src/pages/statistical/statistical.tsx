import {View, Picker, RadioGroup, Radio} from "@tarojs/components";
import {useState, useEffect} from "react";
import dayjs from "dayjs";
import {LineChart, PieChart} from "@/components/Charts";
import {data, data1} from "./data";
import {incomingSubType, outgoingSubType} from "./type";

import styles from "./index.module.scss";
import Taro from "@tarojs/taro";

const Index = () => {
  const [startDate, setStartDate] = useState("2022-04-30");
  const [endDate, setEndDate] = useState("2022-05-30");
  const [type, setType] = useState(0);
  const [subType, setSubType] = useState(0);

  useEffect(() => {
    console.log(type);
    setSubType(0);
  }, [type]);

  // 日期
  const handleStartDate = (e) => {
    if (dayjs(e.detail.value).valueOf() > dayjs(endDate).valueOf())
    {
      Taro.showToast({
        title:'起始时间不能超过结束时间',
        icon: 'none',
        duration:2000
      })
      return
    };
    setStartDate(e.detail.value);
  };
  const handleEndDate = (e) => {
    if (dayjs(e.detail.value).valueOf() < dayjs(endDate).valueOf()){
      Taro.showToast({
        title:'结束时间不能小于起始时间',
        icon: 'none',
        duration:2000
      })
      return
    } ;
    setEndDate(e.detail.value);
  };

  // 分类
  const handleType = (v) => {
    setType(() => v);
    setSubType(0);
  };

  const handleSubtype = (e) => {
    console.log(e.detail.value);
    if (e.detail.value == 0) {
      setSubType(0);
      return;
    }
    setSubType(e.detail.value);
  };
  return (
    <View className={styles.container}>
      <View className={styles.filter}>

        <View className={styles.filterItem}>
          <View>时间:</View>
          <Picker mode="date" onChange={handleStartDate} value={startDate}>
            {startDate}
          </Picker>
          <View>--</View>
          <Picker mode="date" onChange={handleEndDate} value={endDate}>
            {endDate}
          </Picker>
        </View>

        <View className={styles.filterItem}>
          <RadioGroup>
            <Radio
              value={"0"}
              checked={type == 0}
              onClick={() => handleType(0)}
              color="red"
            >
              支出
            </Radio>
            <Radio
              value={"1"}
              checked={type == 1}
              onClick={() => handleType(1)}
              color="red"
            >
              收入
            </Radio>
          </RadioGroup>
        </View>

        <View className={styles.filterItem}>
          <View>分类:</View>
          <Picker
            mode="selector"
            range={Object.values(type == 0 ? outgoingSubType : incomingSubType)}
            onChange={handleSubtype}
          >
            <View className={styles.filterItemValue}>
              {subType == 0
                ? "无"
                : type == 0
                  ? outgoingSubType[subType]
                  : incomingSubType[Number(subType) + 6]}
            </View>
          </Picker>
        </View>

      </View>

      <View className={styles.graphContainer}>
        {subType == 0 && (
          <LineChart
            xData={data1.map((it) => it.x)}
            yData={data1.map((it) => it.y)}
          />
        )}
        {subType > 0 && (
          <PieChart
            data={data.map((item) => {
              console.log(item);

              return {value: item.value, name: outgoingSubType[item.subType]};
            })}
          />
        )}
      </View>

    </View>
  );
};

export default Index;
