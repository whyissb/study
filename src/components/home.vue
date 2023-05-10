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
  
  </div>
</template>

<script>
//import Table from "./com/table/table.vue";

export default {
  name: "homePage",
  components: {},
  data() {
    return {
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
  methods: {},
  mounted() {},
};
</script>

<style lang="scss"  scoped>
</style>

