import { View } from "@tarojs/components";

function Index(porps) {
  return (
    <View
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        backgroundColor: "rgba(204, 204, 204, 0.481)",
      }}
      onClick={porps.onClick}
    >
      {porps.children}
    </View>
  );
}

export default Index;
