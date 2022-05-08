import { View } from '@tarojs/components';
import { useState, useContext, useEffect } from 'react';
import ItemList from '@/components/ItemList';
import { costType, incoming, IItem } from '@/constants/enums';
import { addContext, initialData } from '@/context/addContext';
import KeyBoard from '@/components/KeyBoard';

import styles from './index.module.scss';
import {useNavigatorText} from "@/hooks/useNavigatorText";

const tabList = [{ title: '支出' }, { title: '收入' }];

const Index = () => {
  useNavigatorText('添加记录')

  const [currentTab, setCurrentTab] = useState(0);
  const [chooseType, setChooseType] = useState<IItem>({
    id: '',
    type: '',
    subType: '',
    name: '',
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
        {/* <AtTabs current={currentTab} tabList={tabList} onClick={handleTabClick}>
          <AtTabsPane current={currentTab} index={0}>
            <ItemList
              data={costType}
              chooseType={chooseType}
              onClick={handlePaymentClick}
            />
          </AtTabsPane>
          <AtTabsPane current={currentTab} index={1}>
            <ItemList
              data={incoming}
              chooseType={chooseType}
              onClick={handlePaymentClick}
            />
          </AtTabsPane>
        </AtTabs> */}
      </View>
      <KeyBoard isShowKeyboard={mask} onCloseMask={handleCloseMask} />
    </addContext.Provider>
  );
};
export default Index;
