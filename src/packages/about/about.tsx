import { View, Image } from "@tarojs/components";
import Taro from "@tarojs/taro";
import phooto from "../../assets/share.png";

function Index() {
  Taro.setNavigationBarTitle({ title: "关于" });

  return (
    <View
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Image
        style={{
          width: "100px",
          height: "100px",
          marginTop: "80px",
          borderRadius: "14px",
        }}
        src={phooto}
      />
      <View
        style={{
          width: "100vw",
          textAlign: "center",
          marginTop: "30PX",
        }}
      >
        欢迎使用小飞记账微信小程序
      </View>
      <View style={{ width: "100px", height: "100px", marginTop: "30PX" }}>
        版本：v1.0.0
      </View>
    </View>
  );
}

export default Index;
