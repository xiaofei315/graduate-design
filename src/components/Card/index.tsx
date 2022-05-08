import { View, Image } from "@tarojs/components";
import styles from "./index.module.scss";
import incoming from "./images/incoming.png";
import output from "./images/output.png";
import Taro from "@tarojs/taro";

function index({ data }) {
  const handleClick = () => {
    Taro.navigateTo({ url: `/packages/detail/detail?id=${data?._id}` });
  };
  return (
    <View className={styles.container} onClick={handleClick}>
      <View
        style={
          data.type.type == "0"
            ? { boxShadow: "0 0 10px #1f2d80" }
            : { boxShadow: "0 0 10px #1497db" }
        }
        className={styles.imageContainer}
      >
        <Image
          style={{ width: "60px", height: "60px" }}
          src={data.type.type == "0" ? output : incoming}
        />
      </View>
      <View className={styles.content}>
        <View className={styles.item}>
          <View className={styles.title}>类型：</View>
          <View className={styles.value}>{data.type.name}</View>
        </View>
        <View className={styles.item}>
          <View className={styles.title}>金额：</View>
          <View className={styles.value}>{data.amount}</View>
        </View>
        <View className={styles.item}>
          <View className={styles.title}>日期：</View>
          <View className={styles.value}>{data.date}</View>
        </View>
        <View className={styles.item}>
          <View className={styles.title}>备注：</View>
          <View className={styles.value}>{data.desc}</View>
        </View>
      </View>
    </View>
  );
}

export default index;
