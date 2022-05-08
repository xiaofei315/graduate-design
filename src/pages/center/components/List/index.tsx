// import React from 'react'
import { Button, View } from "@tarojs/components";
import { useShareAppMessage } from "@tarojs/taro";
import share from "../../../../assets/share.png";
import styles from "./index.module.scss";

function List() {
  // const handleShare =()=>{

  // }
  useShareAppMessage((res) => {
    if (res.from === "button") {
      // 来自页面内转发按钮
      console.log(res.target);
    }
    return {
      title: "欢迎使用小飞记账",
      path: "/page/home/home",
      imageUrl: share,
    };
  });
  return (
    <View className={styles.container}>
      <Button openType="share" className={styles.btn}>
        <View className={styles.shareItem}>邀请好友</View>
      </Button>
      <Button className={styles.btn}>
        <View className={styles.shareItem}>关于我们</View>
      </Button>
      <Button className={styles.btn}>
        <View className={styles.shareItem}>使用手册</View>
      </Button>
      <Button className={styles.btn}>
        <View className={styles.shareItem}>隐私协议</View>
      </Button>
    </View>
  );
}

export default List;
