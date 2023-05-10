<template>
  <div>
    <el-container>
      <el-aside class="aside" width="200px">
        <Menu></Menu>
      </el-aside>

      <el-container>
        <el-header class="header">
          <Header />
        </el-header>
        <router-view> 
          
        </router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from "../components/com/menu/menu";
import Header from "./com/header/header.vue";
export default {
  name: "WorkspaceJsonMain",
  components: {
    Menu,
    Header,
  },
  //监听函数
  watch: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style  scoped>
.aside {
  background-color: #545c64;

  height: 100vh;
}
.header {
  background-color: rgb(223, 211, 211);
  height: 100vh;
}
</style>