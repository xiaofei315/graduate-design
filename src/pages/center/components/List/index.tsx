// import React from 'react'
import {View} from '@tarojs/components'
import styles from './index.module.scss';


function List() {
  return (
    <View className={styles.container}>
      <View className={styles.item}>邀请好友</View>
      <View className={styles.item}>关于我们</View>
      <View className={styles.item}>使用手册</View>
      <View className={styles.item}>隐私协议</View>
    </View>
  )
}

export default List
