<!--
 * @Author: why 2594258643@qq.com
 * @Date: 2023-05-08 11:17:29
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-09 17:33:16
 * @FilePath: \demo\src\components\com\menu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :router="true"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="li in menuList[0].children">
        <el-submenu v-if="li.children" :key="li.path" :index="li.path">
          <template slot="title">
            <i :class="li.icon"></i>
            <span>{{ li.title }}</span>
          </template>
          <template v-for="menu2 in li.children">
            <el-menu-item :key="menu2.path" :index="menu2.path">
              <i :class="menu2.icon"></i>
              <span>{{ menu2.title }}</span>
            </el-menu-item>
          </template>
        </el-submenu>
        <el-menu-item v-if="!li.children" :key="li.path" :index="li.path">
          <i :class="li.icon"></i>
          <span>{{ li.title }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "navMenu",

  data() {
    return {
      menuList: [
        { path: "/", title: "首页" },
        { path: "/userPage", title: "测试" },
      ],
    };
  },
  computed:{
    isCollapse(){
      return this.$store.state.collapse;
    }
    
  },
  created() {
    this.menuList = this.$router.options.routes;
  },
  mounted() {
    window.onresize = () => {
      return (() => {
        this.$nextTick(() => {
          this.headHeight();
          console.log(this.headHeight());
        });
      })();
    };
  },
  methods: {
    
    handleOpen() {},
    handleClose() {},
  },
};
</script>

<style  scoped>
.el-menu {
  border: 0px;
}
.el-submenu .el-menu-item {
  padding: 0;
  min-width: 0;
}
</style>