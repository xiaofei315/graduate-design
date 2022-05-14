import { View } from "@tarojs/components";
import { useState, useEffect } from "react";
import { LineChart } from "@/components/Charts";

import styles from "./index.module.scss";
import Taro from "@tarojs/taro";

const Index = () => {
  const [initData, setInitData] = useState<any[]>();

  const getData = (type: string) => {
    const openid = Taro.getStorageSync("openid");
    Taro.cloud.callFunction({
      name: "selectRecords",
      data: {
        collectionName: openid,
        type: type,
      },
      success: (res: any) => {
        setInitData(() => res?.result?.data);
      },
    });
  };

  useEffect(() => {
    getData("0");
  }, []);

  return (
    <View className={styles.container}>
      <View className={styles.graphContainer}>
        {initData ? (
          <LineChart
            xData={initData.map((it) => it.date)}
            yData={initData.map((it) => it.amount)}
          />
        ) : (
          <View className={styles.noRseult}>暂无记录</View>
        )}
      </View>
    </View>
  );
};

export default Index;
