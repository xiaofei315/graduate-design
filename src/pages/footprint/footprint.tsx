import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Map } from "@tarojs/components";
import styles from "./index.module.scss";
import { useNavigatorText } from "@/hooks/useNavigatorText";
import { data } from "./data";

interface Imarker {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  width: string | number;
  height: string | number;
}
interface Ipolyine {
  longitude: number;
  latitude: number;
}

const listData = [
  {
    points: [
      { latitude: 70.546811, longitude: 14.064354 },
      { longitude: 104.060737, latitude: 60.546739 },
      { longitude: 115.96191, latitude: 28.68194 },
    ],
    color: "#DC143C",
    dottedLine: true,
    width: 3,
  },
];

const Index = () => {
  useNavigatorText("足迹");
  const [markers, setMarkers] = useState<Imarker[]>([]);
  const [polylinePoints, setPolylinePoints] = useState<Ipolyine[]>([]);

  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  // const openid = Taro.getStorageSync("openid");

  // useEffect(() => {
  //   Taro.cloud.callFunction({
  //     name: "selectRecords",
  //     data: {
  //       collectionName: openid,
  //       type: "0",
  //     },
  //     success: (res: any) => {
  //       console.log(res?.result?.data);
  //       let markersArr,
  //         polylineArr = [];
  //       markersArr = res?.result?.data.map((item, index) => {
  //         return {
  //           id: index,
  //           latitude: item?.location?.latitude,
  //           longitude: item?.location?.longitude,
  //           title: item?.location?.name || item?.location?.address,
  //           width: "20",
  //           height: "30",
  //         };
  //       });
  //       setMarkers(() => markersArr);
  //       polylineArr = res?.result?.data.map((item, index) => {
  //         return {
  //           latitude: item?.location?.latitude,
  //           longitude: item?.location?.longitude,
  //         };
  //       });
  //       setPolylinePoints(() => polylineArr);
  //       console.log(polylineArr);
  //     },
  //   });
  // }, []);
  useEffect(() => {
    let markersArr: Imarker[] = [],
      polylineArr: Ipolyine[] = [];
    markersArr = data.map((item, index) => {
      return {
        id: index,
        latitude: item?.location?.latitude,
        longitude: item?.location?.longitude,
        title: item?.location?.name || item?.location?.address,
        width: "20",
        height: "30",
      };
    });
    setMarkers(() => markersArr);
    polylineArr = data.map((item, index) => {
      return {
        latitude: item?.location?.latitude,
        longitude: item?.location?.longitude,
      };
    });
    setPolylinePoints(() => polylineArr);
    listData[0].points = polylineArr;
    console.log(polylineArr);
    console.log(listData);
    
  }, []);
  useEffect(() => {
    Taro.getLocation({
      type: "wgs84", //返回可以用于 Taro.openLocation的经纬度
      success: function (res) {
        setLocation(() => {
          return {
            lat: res.latitude,
            lon: res.longitude,
          };
        });
      },
    });
  }, []);
  return (
    <View>
      <Map
        className={styles.map}
        id="map"
        latitude={location.lat}
        longitude={location.lon}
        scale={10}
        markers={markers}
        polyline={listData}
        layerStyle={-1}
        showCompass
        showLocation
      ></Map>
    </View>
  );
};
export default Index;
