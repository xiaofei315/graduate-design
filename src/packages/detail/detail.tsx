import { Input, Picker, View, Map, CoverView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import cn from "classnames";
import { ILocation } from "@/context/addContext";
import { useNavigatorText } from "@/hooks/useNavigatorText";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

import styles from "./index.module.scss";

const Index = () => {
  const [disabled, setDisable] = useState(true);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [desc, setDesc] = useState("");
  const [location, setLocation] = useState<ILocation>();

  const openid = Taro.getStorageSync("openid");
  const params = Taro.getCurrentInstance()?.router?.params;
  const init = () => {
    Taro.cloud.callFunction({
      name: "selectRecordById",
      data: {
        collectionName: openid,
        id: params?.id,
      },
      success: (res: any) => {
        setId(res.result.data[0]._id);
        setName(res.result.data[0].type.name);
        setAmount(res.result.data[0].amount);
        setDate(res.result.data[0].date);
        setTime(res.result.data[0].time);
        setLocation(res.result.data[0].location);
        setDesc(res.result.data[0].desc);
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
        title: "点击修改按钮",
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
  const handleAmountChange = (e) => {
    setAmount(e.detail.value);
  };
  const handleDescChange = (e) => {
    setDesc(e.detail.value);
  };
  const handledelete = () => {
    Taro.showLoading({
      title: "删除中...",
    });
    Taro.cloud.callFunction({
      name: "deleteRecord",
      data: {
        collectionName: openid,
        id: params?.id,
      },
      success: () => {
        Taro.hideLoading();
        Taro.showToast({
          title: "成功",
          icon: "success",
          duration: 2000,
        });
        setTimeout(() => Taro.navigateBack(), 500);
      },
    });
  };
  const handleCancel = () => {
    setDisable(true);
  };

  // 时间
  const handleDateChange = (e) => {
    setDate(() => e.detail.value);
  };
  const handleTimeChange = (e) => {
    setTime(() => e.detail.value);
  };

  const handleSubmit = () => {
    Taro.showModal({
      title: "提示",
      content: "是否确认提交",
      success: function (res) {
        if (res.confirm) {
          const data = {
            amount: amount,
            date: date,
            time: time,
            desc: desc,
            location: location,
          };
          Taro.showLoading({
            title: "修改中...",
          });
          Taro.cloud.callFunction({
            name: "editRecord",
            data: {
              collectionName: openid,
              id: id,
              data: data,
            },
            success: () => {
              Taro.hideLoading();
              Taro.showToast({
                title: "成功",
                icon: "success",
                duration: 2000,
              });
              init();
              setDisable(true);
            },
          });
        } else if (res.cancel) {
          setDisable(true);
        }
      },
    });
  };
  return (
    <View className={styles.container}>
      <View className={styles.content} onClick={handleclick}>
        <View className={styles.item}>
          <View className={styles.title}>分类:</View>
          <View className={styles.input}>{name}</View>
        </View>
        <View className={styles.item}>
          <View className={styles.title}>金额:</View>
          <Input
            className={styles.input}
            placeholder="金额"
            value={amount}
            onInput={handleAmountChange}
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
            <View>{date}</View>
          </Picker>
          <View>--</View>
          <Picker
            mode="time"
            onChange={handleTimeChange}
            value={time}
            disabled={disabled}
          >
            <View>{time}</View>
          </Picker>
        </View>

        <View className={styles.item}>
          <View className={styles.title}>备注:</View>
          <Input
            className={styles.input}
            placeholder="备注"
            value={desc}
            onInput={handleDescChange}
            disabled={disabled}
          />
        </View>
        <View className={styles.item}>
          <View className={styles.title}>地点:</View>
          <View className={styles.input} onClick={handleLocation}>
            {location?.name || location?.address}
          </View>
        </View>
      </View>

      {disabled ? (
        <View className={cn(styles.btnWrap)}>
          <View className={styles.edit} onClick={handleEdit}>
            修改
          </View>
          <View className={styles.submit} onClick={handledelete}>
            删除
          </View>
        </View>
      ) : (
        <View className={styles.btnWrap}>
          <View className={styles.edit} onClick={handleCancel}>
            取消
          </View>
          <View className={styles.submit} onClick={handleSubmit}>
            提交
          </View>
        </View>
      )}

      <CoverView className={styles.mapContainer}>
        <Map
          className={styles.map}
          latitude={Number(location?.latitude)}
          longitude={Number(location?.longitude)}
          markers={[
            {
              id: 0,
              iconPath: "",
              latitude: Number(location?.latitude),
              longitude: Number(location?.longitude),
              title: location?.name || location?.address,
            },
          ]}
        />
      </CoverView>
    </View>
  );
};
export default Index;
