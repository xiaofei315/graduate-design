import { Input, Picker, View, Map } from "@tarojs/components";
import Taro from "@tarojs/taro";
import cn from "classnames";
import { ILocation } from "@/context/addContext";
import { useNavigatorText } from "@/hooks/useNavigatorText";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import styles from "./index.module.scss";
import { IData } from "@/context/addContext";

const Index = () => {
  const [data, setData] = useState<IData>();
  const [disabled, setDisable] = useState(true);
  const [location, setLocation] = useState<ILocation>();
  const [date, setDate] = useState(dayjs().format("MM-DD"));
  const [time, setTime] = useState(dayjs().format("HH:mm"));

  const init = () => {
    const openid = Taro.getStorageSync("openid");
    const params = Taro.getCurrentInstance()?.router?.params;
    Taro.cloud.callFunction({
      name: "selectRecordById",
      data: {
        collectionName: openid,
        id: params?.id,
      },
      success: (res: any) => {
        console.log(res.result.data);
        setData(res.result.data[0]);
      },
    });
  };

  useEffect(() => {
    init();
  }, []);
  useNavigatorText("记录详情");

  const handleclick = () => {
    if (disabled) {
      Taro.showToast({
        title: "不可编辑",
        icon: "none",
        duration: 2000,
      });
    }
  };
  // 选择地址
  const handleLocation = (e) => {
    if (!disabled) {
      Taro.chooseLocation({
        success: (res) => {
          setLocation(res);
        },
      });
    } else {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
  };
  const handleEdit = () => {
    setDisable(false);
  };
  const handleCancel = () => {
    setDisable(true);
  };
  const handleSubmit = () => {
    Taro.showModal({
      title: "提示",
      content: "是否确认提交",
      success: function (res) {
        if (res.confirm) {
          console.log("用户点击确定");
        } else if (res.cancel) {
          console.log("用户点击取消");
        }
      },
    });
    console.log("完成");
  };

  // 时间
  const handleDateChange = (e) => {
    setDate(() => e.detail.value);
    let mon = dayjs(e.detail.value).month() + 1;
    let day = dayjs(e.detail.value).date();
    console.log(mon, day);
  };
  const handleTimeChange = (e) => {
    setTime(() => e.detail.value);
  };
  return (
    <View className={styles.container}>
      <View className={styles.content} onClick={handleclick}>
        <View className={styles.item}>
          <View className={styles.title}>分类:</View>
          <View className={styles.input}>{data && data.type.name}</View>
        </View>
        <View className={styles.item}>
          <View className={styles.title}>金额:</View>
          <Input
            className={styles.input}
            placeholder="金额"
            value={String(data && data.amount) || "0" + "元"}
            disabled={disabled}
          />
        </View>
        <View className={styles.item}>
          <View className={styles.title}>时间:</View>
          <Picker
            mode="date"
            onChange={handleDateChange}
            value={date}
            disabled={disabled}
          >
            <View>{data?.date}</View>
          </Picker>
          <View>--</View>
          <Picker
            mode="time"
            onChange={handleTimeChange}
            value={time}
            disabled={disabled}
          >
            <View>{data?.time}</View>
          </Picker>
        </View>

        <View className={styles.item}>
          <View className={styles.title}>备注:</View>
          <Input
            className={styles.input}
            placeholder="备注"
            value={data && data.desc}
            disabled={disabled}
          />
        </View>
        <View className={styles.item}>
          <View className={styles.title}>地点:</View>
          <View className={styles.input} onClick={handleLocation}>
            {location?.name ||
              (data && (data?.location?.name || data?.location?.address))}
          </View>
        </View>
      </View>

      <View className={cn(styles.btnWrap, { [styles.active]: !disabled })}>
        {!disabled ? (
          <View
            className={cn(styles.edit, { [styles.active]: !disabled })}
            onClick={handleCancel}
          >
            取消
          </View>
        ) : (
          <View className={styles.edit} onClick={handleEdit}>
            修改
          </View>
        )}
        <View
          className={cn(styles.submit, { [styles.active]: !disabled })}
          onClick={handleSubmit}
        >
          提交
        </View>
      </View>

      <View className={styles.mapContainer}>
        <Map
          className={styles.map}
          latitude={Number(data?.location?.latitude)}
          longitude={Number(data?.location?.longitude)}
          markers={[
            {
              id: 0,
              iconPath: "",
              latitude: Number(data?.location?.latitude),
              longitude: Number(data?.location?.longitude),
              title: data?.location?.name || data?.location?.address,
            },
          ]}
        />
      </View>
    </View>
  );
};
export default Index;
