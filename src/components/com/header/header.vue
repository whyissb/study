<!--
 * @Author: why 2594258643@qq.com
 * @Date: 2023-05-08 11:25:23
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-08 11:41:18
 * @FilePath: \demo\src\components\com\header\header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <span @click="index">why系统</span>
    <el-dropdown @command="handleCommand" class="dropdown">
      <span class="el-dropdown-link">
        <img class="user" src="../../../assets/1.jpg" alt="" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="userPage" icon="el-icon-user-solid"
          >个人信息</el-dropdown-item
        >
        <el-dropdown-item command="loginOut" icon="el-icon-s-unfold"
          >退出</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  name: "indexHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {
    index() {
      this.$router.push("/");
    },

    handleCommand(command) {
      if (command === "userPage") {
        this.$router.push("/userPage");
      }
      if (command === "loginOut") {
        Cookie.remove("token");
        Cookie.remove("username");
        this.$router.push("/login");
      }
    },
  },
};
</script>

<style scoped>
span {
  cursor: pointer;
}
.user {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
div{
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>