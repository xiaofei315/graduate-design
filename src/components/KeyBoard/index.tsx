import { keyList, Ikey } from "./keys";
import { useState, useContext } from "react";
import { Input, View, Text } from "@tarojs/components";
import dayjs from "dayjs";
import Taro from "@tarojs/taro";
import { addContext, ILocation } from "../../context/addContext";
import Key from "../Key";

const KeyBoard = () => {
  const context = useContext(addContext);
  // 计算价钱
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  //地址
  const [location, setLocation] = useState<ILocation>({
    address: "",
    errMsg: "",
    latitude: 0,
    longitude: 0,
    name: "",
  });

  const collectionName = Taro.getStorageSync("openid");

  const handleClick = (item: Ikey) => {
    Taro.vibrateShort();
    // 提交
    if (item.value == "finish") {
      handleCalc();
      if (!context.data.location.latitude) {
        Taro.showToast({
          icon: "none",
          title: "请填写地址",
          duration: 3000,
        });
        return;
      }
      if (!context.data.desc) {
        Taro.showToast({
          icon: "none",
          title: "请填写备注",
          duration: 3000,
        });
        return;
      }
      if (context.data.amount == 0) {
        Taro.showToast({
          icon: "none",
          title: "请填写金额",
          duration: 3000,
        });
        return;
      }
      let result = {
        ...context.data,
        date: dayjs(context.data.date).format("YYYY-MM-DD"),
      };
      console.log(result);
      Taro.showModal({
        title: "提示",
        content: "是否确认提交",
        success: function (res) {
          if (res.confirm) {
            Taro.cloud.callFunction({
              name: "addRecord",
              data: {
                collectionName: collectionName,
                data: result,
              },
              success: (res) => {
                console.log(res);
                Taro.showToast({
                  icon: "none",
                  title: "提交成功",
                  duration: 2000,
                });
                Taro.redirectTo({
                  url: `/packages/addDetail/addDetail?name=${
                    result?.type?.name
                  }&desc=${result?.desc}&amount=${result?.amount}&lat=${
                    result?.location?.latitude
                  }&lon=${result?.location?.longitude}&location=${
                    result?.location?.name || result?.location?.address
                  }&date=${result?.date}&time=${result?.time}`,
                });
              },
            });
          } else if (res.cancel) {
            Taro.showToast({
              icon: "none",
              title: "取消提交",
              duration: 2000,
            });
          }
        },
      });

      return;
    }
    // 删除
    if (item.value == "delete") {
      if (amount == result) {
        Taro.showModal({
          title: "提示",
          content: "是否删除计算结果",
          success: function (res) {
            if (res.confirm) {
              setResult("0");
            } else if (res.cancel) {
              console.log("用户点击取消");
            }
          },
        });
        return;
      }
      setAmount((oldValue) => oldValue.substring(0, oldValue.length - 1));
      return;
    }

    setAmount((oldValue) => "" + oldValue + item.value);
  };

  // 计算
  const handleCalc = () => {
    let num = amount.split("+");
    if (num[0] && !num[1]) {
      setResult(num[0]);
      setAmount(num[0].toString() + "+");
      context.data.amount = num[0];
      return;
    }
    if (!num[1]) return;
    let temp = num.reduce((prev, cur) => Number(prev) + Number(cur), 0);
    setResult(temp.toString());
    setAmount(temp.toString() + "+");
    context.data.amount = temp;
  };

  // 选择地址
  const handleLocation = () => {
    Taro.chooseLocation({
      success: (res) => {
        console.log(res);
        setLocation(res);
        context.data.location = res;
      },
    });
  };
  // 备注
  const handleInput = (e) => {
    console.log(e.detail.value);
    context.data.desc = e.detail.value;
  };
  return (
    <View
      style={{
        width: "100vw",
        height: "370px",
        position: "fixed",
        bottom: "0",
        backgroundColor: "#fff",
        paddingBottom: "20px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      <View
        style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          alignItems: "center",
          borderBottom: "1px solid #346fc2",
        }}
        onClick={handleLocation}
      >
        <Text style={{ fontWeight: "bold" }}>位置:</Text>
        <View
          style={{
            flex: "1",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "left",
          }}
        >
          {location?.name || location?.address}
        </View>
      </View>

      <View
        style={{
          width: "100%",
          display: "flex",
          padding: "10px",
          alignItems: "center",
          borderBottom: "1px solid #346fc2",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>备注:</Text>
        <Input
          style={{
            flex: "1",
            textAlign: "left",
          }}
          onInput={handleInput}
          maxlength={20}
        />
      </View>
      <View
        style={{
          width: "100%",
          padding: "10px",
          display: "flex",
          overflow: "hidden",
          whiteSpace: "nowrap",
          alignItems: "center",
          borderBottom: "1px solid #346fc2",
        }}
      >
        <Text style={{ fontWeight: "bold" }}>金额:</Text>
        <View style={{ width: "50%", textAlign: "center", marginLeft: "20px" }}>
          {amount}
        </View>
        <View
          style={{
            width: "20px",
            height: "20px",
            border: "1px solid #346fc2",
            textAlign: "center",
            borderRadius: "5px",
          }}
          onClick={handleCalc}
        >
          =
        </View>
        <View style={{ width: "30%", textAlign: "center", marginLeft: "20px" }}>
          {result}
        </View>
      </View>
      <View
        style={{
          width: "100%",
          position: "absolute",
          zIndex: 1000,
          bottom: "constant(safe-area-inset-bottom)",
          height: "210px",
          display: "grid",
          gridTemplateColumns: "repeat(4,25%)",
          gridTemplateRows: "repeat(4,25%)",
        }}
      >
        {keyList.map((item, index) => {
          return (
            <Key
              key={index}
              type={item.type}
              name={item.name}
              onClick={() => handleClick(item)}
            />
          );
        })}
      </View>
    </View>
  );
};

export default KeyBoard;
