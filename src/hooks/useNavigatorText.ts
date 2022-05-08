import {useEffect} from 'react'
import Taro from "@tarojs/taro";

export const useNavigatorText = (text: string) => {
  useEffect(() => {
    Taro.setNavigationBarTitle({title: text});
    return () => {
      Taro.setNavigationBarTitle({title: ''});
    }
  }, [])
}
