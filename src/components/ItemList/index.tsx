import { ScrollView, View } from "@tarojs/components";

function Index({ data, chooseType, onClick }) {
  return (
    <ScrollView
      scrollY
      style={{ width: "100vw", height: "200px", backgroundColor: "#b8f1ed",marginTop:'20px' }}
    >
      <View
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {data.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                padding: "10px 0",
                display:'flex',
                justifyContent: "center",
                alignItems: "center",
                borderRadius:'20px',
                  backgroundColor:chooseType.id===item.id?'skyblue':''
              }}
              onClick={() => onClick(item)}
            >
              {item.name}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
export default Index;
