<template>
  <div class="main">
    <el-container >
      <el-aside class="aside" :width="isWidth">
        <Menu></Menu>
      </el-aside>
      <el-container style=" height: 100vh;">
        <el-header class="header">
          <Header />
        </el-header>
        <main class="mainpage">
          <router-view />
        </main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import Header from "../header/header.vue";
import Menu from '../menu/menu.vue';
export default {
  name: "mainPage",
  components: {
    Menu,
    Header,
  },
  //监听函数
  watch: {},
  computed:{
   isWidth(){
    return this.$store.state.collapse?"60px":"200px"
   }
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.mainpage{
  overflow: scroll;
  height: 100%;
}
.aside {
  background-color: #545c64;
}
.header {
  background-color: rgb(223, 211, 211);
}
</style>