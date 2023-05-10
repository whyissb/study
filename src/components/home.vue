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
    <el-row>
      <el-col :span="8">
        <el-card
          class="box-card"
          style="margin: 20px; width: 500px; height: 300px"
        >
          <div slot="header" class="header">
            <img src="../assets/1.jpg" width="100px" class="img" />
            <div style="margin-left: 50px">
              <p style="font-size: 20px">{{ username }}</p>
              <p class="gray">超级管理员</p>
            </div>
          </div>
          <div>
            <p class="gray">上次登录时间 <span>2022-5-17</span></p>
            <br />
            <p class="gray">上次登录地点 <span>北京</span></p>
          </div>
        </el-card>
      </el-col>
      <el-col :span="15">
        <el-card style="height: 200px; margin-top: 20px">
          <div class="card">
            <div
              v-for="(item, index) in orderData"
              :key="index"
              style="display: flex; margin-bottom: 10px; width: 33%"
            >
              <i
                :class="`el-icon-${item.icon}`"
                :style="{
                  background: item.color,
                  height: '80px',
                  width: '80px',
                }"
              ></i>
              <div class="detail">
                <p>￥{{ item.value }}</p>
                <p>{{ item.name }}</p>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="15">
        <el-card style="height: 150px; margin-top: 20px"> </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="margin-left: 20px; width: 500px; height: 450px">
          <Table :tableColumn="tableColumn" :tableData="tableData"></Table>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card style="margin-top: 20px; width: 500px; height: 430px">
          <div id="main" style="width: 450px; height: 430px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card
          style="
            margin-top: 20px;
            width: 500px;
            height: 430px;
            margin-right: 10px;
          "
        >
          <div id="pieoption" style="width: 500px; height: 430px"></div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Table from "./com/table/table.vue";

export default {
  name: "homePage",
  components: { Table },
  data() {
    return {
      username: this.$store.state.username,
      orderData: [
        {
          name: "今日支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        { name: "今日收藏订单", value: 210, icon: "star-on", color: "#ffb980" },
        {
          name: "今日未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
        {
          name: "本月支付订单",
          value: 1234,
          icon: "success",
          color: "#2ec7c9",
        },
        { name: "本月收藏订单", value: 210, icon: "star-on", color: "#ffb980" },
        {
          name: "本月未支付订单",
          value: 1234,
          icon: "s-goods",
          color: "#5ab1ef",
        },
      ],
      tableColumn: [
        {
          prop: "name",
          label: "姓名",
        },
        {
          prop: "todayBuy",
          label: "今日购买",
        },
        {
          prop: "monthBuy",
          label: "本月购买",
        },
        {
          prop: "totalBuy",
          label: "总购买",
        },
      ],

      tableData: [
        {
          name: "oppo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "华为",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "红米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "vivo",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "苹果",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "小米",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "三星",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
        {
          name: "魅族",
          todayBuy: 100,
          monthBuy: 300,
          totalBuy: 800,
        },
      ],
    };
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.initPic(), this.piePic();
      });
    },
    initPic() {
      //柱状图 基于准备好的dom，初始化echarts实例
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
    piePic() {
      var myChart = this.$echarts.init(document.getElementById("pieoption"));

      var pieoption = {
        title: {
          text: "订单详细",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: "5%",
          left: "center",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: this.orderData,
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

      pieoption && myChart.setOption(pieoption);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style lang="scss"  scoped>
.detail {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  p:nth-child(1) {
    font-size: 15px;
    margin-bottom: -10px;
    font-weight: 900;
    margin-left: 10px;
  }

  p:nth-child(2) {
    font-size: 13px;
    color: #bbbbbb;
    margin-left: 10px;
  }
}
.card {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
.img {
  border-radius: 50%;
}
.header {
  display: flex;
}
</style>

