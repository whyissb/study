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
    <div class="block">
      <el-carousel
        type="card"
        :interval="2000"
        height="400px"
        style="margin: auto"
      >
        <el-carousel-item v-for="(item, index) in srcList" :key="index">
          <el-image  class="imgBig" :src="item.src" />
        </el-carousel-item>
      </el-carousel>
      <div style="display: flex">
        <el-card v-for="(item, index) in srcList" :key="index" class="b-card">
          <el-image :src="srcList[1].src" class="b-img" />
        </el-card>
      </div>
      <div style="display: flex">
        <el-card
          class="b-card"
          v-for="(item, index) in srcList"
          :key="index"
          style="width: 500px; height: 220px"
        >
          <el-image class="b-img" :src="srcList[0].src" />
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
//import Table from "./com/table/table.vue";

export default {
  name: "homePage",
  components: {},
  data() {
    return {
      srcList: [
        {
          imgName: "whyissb",
          src: require("../assets/img/L1.jpg"),
        },
        {
          imgName: "whyissb",
          src: require("../assets/img/L2.jpg"),
        },
        {
          imgName: "whyissb",
          src: require("../assets/img/L3.jpg"),
        },
        {
          imgName: "whyissb",
          src: require("../assets/img/L2.jpg"),
        },
      ],
    };
  },
  methods: {},
  mounted() {},
};
</script>

<style lang="scss"  scoped>
.b-img {
 transition: transform .5s linear;
 height: 200px;
 width: 400px;
}
.imgBig{
  transition: transform 1.5s linear;
}
.imgBig:hover{
  transform:scale(1.5) ;
}
.b-card {
  width: 500px;
  height: 200px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.b-card :hover {
  transform: translate3d(0,-2px,0);
  box-shadow: 0 15px 30px rgba(0,0,0,0.1); 
}

</style>

