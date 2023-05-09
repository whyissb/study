<!--
 * @Author: why 2594258643@qq.com
 * @Date: 2023-05-09 11:26:48
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-09 11:29:32
 * @FilePath: \demo\src\components\main.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
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