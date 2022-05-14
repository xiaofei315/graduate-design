import { useState, useEffect } from "react";
import Taro from "@tarojs/taro";
import { View, Map } from "@tarojs/components";
import styles from "./index.module.scss";
import { useNavigatorText } from "@/hooks/useNavigatorText";

interface Imarker {
  id: number;
  latitude: number;
  longitude: number;
  title: string;
  width: string | number;
  height: string | number;
}

const Index = () => {
  useNavigatorText("足迹");
  const [markers, setMarkers] = useState<Imarker[]>([]);

  const [location, setLocation] = useState({ lat: 0, lon: 0 });
  const openid = Taro.getStorageSync("openid");

  useEffect(() => {
    Taro.cloud.callFunction({
      name: "selectRecords",
      data: {
        collectionName: openid,
        type: "0",
      },
      success: (res: any) => {
        let markersArr = res?.result?.data.map((item, index) => {
          return {
            id: index,
            latitude: item?.location?.latitude,
            longitude: item?.location?.longitude,
            title: item?.location?.name || item?.location?.address,
            iconPath: "",
            width: "20",
            height: "30",
          };
        });
        setMarkers(() => markersArr);
      },
    });
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
        showCompass
        showLocation
      ></Map>
    </View>
  );
};
export default Index;
