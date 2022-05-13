import { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import styles from "./index.module.scss";

interface IProps {
  xData: any[];
  yData: any[];
}

class Line extends Component<IProps> {
  Line: any;

  componentDidMount() {
    setTimeout(() => {
      this.refresh();
    }, 10);
  }

  refresh() {
    const { xData, yData } = this.props;
    const option = {
      title: {
        text: "年度消费总览",
        // subtext: "年度消费总览",
        left: "center",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          axis: "auto",
          label: {
            backgroundColor: "#6a7985",
          },
        },
        formatter: `日期: {b} 价格: {c}`,
        textStyle: {
          fontSize: 12,
        },
      },
      // toolbox: {
      //   show: true, //是否显示工具栏组件
      //   orient: "vertical", //工具栏 icon 的布局朝向'horizontal' 'vertical'
      //   itemSize: 15, //工具栏 icon 的大小
      //   itemGap: 10, //工具栏 icon 每项之间的间隔
      //   showTitle: true,
      //   feature: {
      //     dataZoom: {
      //       yAxisIndex: "none",
      //     },
      //     dataView: {
      //       readOnly: false,
      //     },
      //     magicType: {
      //       type: ["line", "pie"],
      //     },
      //     restore: {},
      //     saveAsImage: {},
      //   },
      // },
      toolbox: {
        show: true,
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: xData,
        axisLine: {
          show: true, //这里的show用于设置是否显示x轴那一条线 默认为true
          lineStyle: {
            //lineStyle里面写x轴那一条线的样式
            color: "#000",
            width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
          },
        },
      },
      yAxis: {
        type: "value",
        axisLine: {
          show: true, // 这里的show用于设置是否显示x轴那一条线 默认为true
          lineStyle: {
            // lineStyle里面写x轴那一条线的样式
            color: "#000",
            width: 2, //轴线的粗细 我写的是2 最小为0，值为0的时候线隐藏
          },
        },
      },
      series: [
        {
          data: yData,
          type: "line",
          // smooth: true,
          areaStyle: {
            color: "#f1b8e4",
          },
          itemStyle: {
            color: "#f65303",
          },
          lineStyle: {
            color: "#f1b8e4 ",
          },
        },
      ],
    };

    this.Line.refresh(option);
  }

  refLineChart = (node) => (this.Line = node);

  render() {
    return (
      <View className={styles.lineChart}>
        <EChart ref={this.refLineChart} canvasId="line-chart" />
      </View>
    );
  }
}
export default Line;
