<!--
 * @Author: zhouchunchun 316581172@qq.com
 * @Date: 2023-05-04 16:19:08
 * @LastEditors: zhouchunchun 316581172@qq.com
 * @LastEditTime: 2023-05-06 15:14:29
 * @FilePath: \apid:\vscode\vue-project\demo\src\views\AboutView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
    <template>
    <div>
  <div>
    <!-- 为 ECharts 准备一个定义了宽高的 DOM -->
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
  </div>
</template>

<script>
export default {
  name: "homePage",
  components: {},
  mounted() {
    // 基于准备好的dom，初始化echarts实例

    var myChart = this.$echarts.init(document.getElementById("main"));

    // 指定图表的配置项和数据

    var option = {
      title: {
        text: "ECharts 入门示例",
      },

      tooltip: {},

      legend: {
        data: ["销量"],
      },

      xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
      },

      yAxis: {},

      series: [
        {
          name: "销量",

          type: "bar",

          data: [5, 20, 36, 10, 10, 20],
        },
      ],
    };

    // 使用刚指定的配置项和数据显示图表。

    myChart.setOption(option);
  },
};
</script>

<style>
</style>

