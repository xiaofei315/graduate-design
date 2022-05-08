import {useState, useEffect} from 'react';
import Taro from '@tarojs/taro';
import {View, Map} from '@tarojs/components';
import styles from './index.module.scss';
import {useNavigatorText} from "@/hooks/useNavigatorText";

interface Location {
  lat: number;
  lon: number;
}

// TODO: add location
const markers = [
  {
    id: 1,
    latitude: 23.099994,
    longitude: 113.32452,
    name: 'T.I.T 创意园',
  },
  {
    id: 2,
    latitude: 30.099994,
    longitude: 120.32452,
    // name: 'T.I.T 创意园'
  },
];
const Index = () => {
  useNavigatorText('足迹');

  const [location, setLocation] = useState<Location>({lat: 0, lon: 0});
  useEffect(() => {
    Taro.getLocation({
      type: 'wgs84', //返回可以用于 Taro.openLocation的经纬度
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
        scale={5}
        markers={markers}
        layerStyle={-1}
        showCompass
        showLocation
      ></Map>
    </View>
  );
};
export default Index;
