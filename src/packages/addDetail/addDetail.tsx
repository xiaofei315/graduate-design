import { Input, Picker, View, Map, CoverView } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useNavigatorText } from "@/hooks/useNavigatorText";

import styles from "./index.module.scss";

const Index = () => {
  const params = Taro.getCurrentInstance().router?.params;

  useNavigatorText("记录详情");

  return (
    <View className={styles.container}>
      <View className={styles.content}>
        <View className={styles.item}>
          <View className={styles.title}>分类:</View>
          <View className={styles.input}>
            {decodeURIComponent(params?.name)}
          </View>
        </View>
        <View className={styles.item}>
          <View className={styles.title}>金额:</View>
          <Input
            className={styles.input}
            placeholder="金额"
            value={params?.amount}
            disabled
          />
        </View>
        <View className={styles.item}>
          <View className={styles.title}>时间:</View>
          <Picker mode="date" disabled>
            <View>{decodeURIComponent(params?.date)}</View>
          </Picker>
          <View>--</View>
          <Picker mode="time" disabled>
            <View>{decodeURIComponent(params?.time)}</View>
          </Picker>
        </View>

        <View className={styles.item}>
          <View className={styles.title}>备注:</View>
          <Input
            className={styles.input}
            placeholder="备注"
            value={decodeURIComponent(params?.desc)}
            disabled
          />
        </View>
        <View className={styles.item}>
          <View className={styles.title}>地点:</View>
          <View className={styles.input}>
            {decodeURIComponent(params?.location)}
          </View>
        </View>
      </View>
      <CoverView className={styles.mapContainer}>
        <Map
          className={styles.map}
          latitude={Number(params?.lat)}
          longitude={Number(params?.lon)}
          markers={[
            {
              id: 0,
              iconPath: "",
              latitude: Number(params?.lat),
              longitude: Number(params?.lon),
              title: decodeURIComponent(params?.location),
            },
          ]}
        />
      </CoverView>
    </View>
  );
};
export default Index;
