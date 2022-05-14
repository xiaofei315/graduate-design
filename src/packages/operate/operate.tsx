import { View, ScrollView, Image } from "@tarojs/components";
import step1 from "./img/1.png";
import step2 from "./img/2.png";
import step3 from "./img/3.png";
import step4 from "./img/4.png";
import step5 from "./img/5.png";
import step6 from "./img/6.png";
import step7 from "./img/7.png";
import step8 from "./img/8.png";
import Taro from "@tarojs/taro";
function Index() {
  Taro.setNavigationBarTitle({ title: "操作" });

  return (
    <ScrollView
      style={{
        width: "100vw",
      }}
      scrollY
    >
      <View
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <View style={{ fontSize: "32px", fontWeight: 600 }}>第一步</View>
        <Image
          src={step1}
          style={{ width: "100%", height: "100%", margin: "auto" }}
        />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第二步</View>
        <Image src={step2} style={{ width: "100%", height: "100%" }} />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第三步</View>
        <Image src={step3} style={{ width: "100%", height: "100%" }} />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第四步</View>
        <Image src={step4} style={{ width: "100%", height: "100%" }} />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第五步</View>
        <Image src={step5} style={{ width: "100%", height: "100%" }} />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第六步</View>
        <Image src={step6} style={{ width: "100%", height: "100%" }} />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第七步</View>
        <Image src={step7} style={{ width: "100%", height: "100%" }} />

        <View style={{ fontSize: "32px", fontWeight: 600 }}>第八步</View>
        <Image src={step8} style={{ width: "100%", height: "100%" }} />
      </View>
    </ScrollView>
  );
}

export default Index;
