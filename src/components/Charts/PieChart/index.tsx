import { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import styles from "./index.module.scss";

interface IProps {
  data: any[];
}

class Line extends Component<IProps> {
  Line: any;

  componentDidMount() {
    console.log(this.props.data);

    setTimeout(() => {
      this.refresh();
    }, 10);
  }

  refresh() {
    const option = {
      title: {
        text: "年度消费总览",
        left: "center",
      },
      tooltip: {
        trigger: "item",
        show: true,
      },
      legend: {
        orient: "horizontal",
        icon: "circle",
        left: "left",
        align: "left",
        top: "30px",
      },
      series: [
        {
          type: "pie",
          radius: ["20%", "40%"],
          data: this.props.data,
          label: {
            normal: {
              show: true,
              // formatter: "{b}:{d}%", //模板变量有 {a}、{b}、{c}、{d}，分别表示系列名，数据名，数据值，百分比。{d}数据会根据value值计算百分比
              formatter: (args: any) => {
                return `${args.name}:${args.value}`;
              },
              textStyle: {
                align: "center",
                baseline: "middle",
                fontFamily: "微软雅黑",
                fontSize: 15,
                fontWeight: "bolder",
              },
            },
          },
          startAngle: 180,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
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
        <EChart ref={this.refLineChart} canvasId="lineChart" />
      </View>
    );
  }
}

export default Line;
