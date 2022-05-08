import cn from 'classnames';
import {Swiper, SwiperItem, View} from '@tarojs/components';
import styles from './index.module.scss';
import {IItem} from '@/constants/enums';

function Index({data, chooseType, onClick}) {
  // 分页
  let totalPage = Math.ceil(data.length / 12);
  let newList: IItem[][] = [];
  for (let i = 1; i < totalPage + 1; i++) {
    newList.push(data.slice((i - 1) * 12, i * 12));
  }

  return (
    <View className={styles.container}>
      <Swiper
        className={styles.swiperWrap}
        indicatorColor="#cecece"
        indicatorActiveColor="#346fc2"
        indicatorDots={totalPage > 1}
      >
        {newList.map((list, index) => {
          return (
            <SwiperItem key={index} className={styles.swiperItem}>
              <View className={styles.listWrap}>
                {list.map((item: IItem) => {
                  return (
                    <View
                      key={item.id}
                      className={styles.itemWrap}
                      onClick={() => onClick(item)}
                    >
                      <View
                        className={cn(styles.item, {
                          [styles.active]: chooseType.id == item.id,
                        })}
                      >
                        {item.name}
                      </View>
                    </View>
                  );
                })}
              </View>
            </SwiperItem>
          );
        })}
      </Swiper>
    </View>
  );
}

export default Index;
