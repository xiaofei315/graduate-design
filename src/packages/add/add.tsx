import { View } from "@tarojs/components";
import { useState, useContext, useEffect } from "react";
import ItemList from "@/components/ItemList";
import cn from "classNames";

import { costType, incoming, IItem } from "@/constants/enums";
import { addContext, initialData } from "@/context/addContext";
import KeyBoard from "@/components/KeyBoard";

import styles from "./index.module.scss";
import { useNavigatorText } from "@/hooks/useNavigatorText";

const Index = () => {
  useNavigatorText("首页");

  const [currentTab, setCurrentTab] = useState(0);
  const [chooseType, setChooseType] = useState<IItem>({
    id: "",
    type: "",
    subType: "",
    name: "",
  });
  const [mask, setMask] = useState(false);

  const context = useContext(addContext);

  useEffect(() => {
    context.data = initialData;
  }, [chooseType]);

  const handleTabClick = (v: number) => {
    setCurrentTab(v);
  };

  const handleCloseMask = () => {
    setMask(false);
  };

  const handlePaymentClick = (v: IItem) => {
    console.log(v);
    setChooseType(v);
    context.data.type = v;
    setMask(true);
  };

  return (
    <addContext.Provider value={{ data: context.data }}>
      <View className={styles.container}>
        <Tab currentTab={currentTab} onClick={handleTabClick} />

        {currentTab == 1 && (
          <ItemList
            data={costType}
            chooseType={chooseType}
            onClick={handlePaymentClick}
          />
        )}

        {currentTab == 2 && (
          <ItemList
            data={incoming}
            chooseType={chooseType}
            onClick={handlePaymentClick}
          />
        )}
      </View>
      <KeyBoard isShowKeyboard={mask} onCloseMask={handleCloseMask} />
    </addContext.Provider>
  );
};
export default Index;

const Tab = ({ currentTab, onClick }) => {
  return (
    <View
      className={cn(styles.tabContainer, {
        [styles.active1]: currentTab == 1,
        [styles.active2]: currentTab == 2,
      })}
    >
      <View className={styles.tabItem} onClick={() => onClick(1)}>
        支出
      </View>
      <View className={styles.tabItem} onClick={() => onClick(2)}>
        收入
      </View>
    </View>
  );
};
