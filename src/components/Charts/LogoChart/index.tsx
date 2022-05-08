import { Component } from "react";
import { View } from "@tarojs/components";
import { EChart } from "echarts-taro3-react";
import "./index.scss";

class Line extends Component {
  Line: any;

  componentDidMount() {
    setTimeout(() => {
      this.refresh();
    }, 10);
  }

  refresh() {
    const option = {
      graphic: {
        elements: [
          {
            type: "text",
            left: "center",
            top: "center",
            style: {
              text: "Apache ECharts",
              fontSize: 80,
              fontWeight: "bold",
              lineDash: [0, 200],
              lineDashOffset: 0,
              fill: "transparent",
              stroke: "#000",
              lineWidth: 1,
            },
            keyframeAnimation: {
              duration: 3000,
              loop: true,
              keyframes: [
                {
                  percent: 0.7,
                  style: {
                    fill: "transparent",
                    lineDashOffset: 200,
                    lineDash: [200, 0],
                  },
                },
                {
                  // Stop for a while.
                  percent: 0.8,
                  style: {
                    fill: "transparent",
                  },
                },
                {
                  percent: 1,
                  style: {
                    fill: "black",
                  },
                },
              ],
            },
          },
        ],
      },
    };

    this.Line.refresh(option);
  }

  refLineChart = (node) => (this.Line = node);

  render() {
    return (
      <View className="logo-chart">
        <EChart ref={this.refLineChart} canvasId="logo-chart" />
      </View>
    );
  }
}

export default Line;
