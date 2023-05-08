<template>
    <div>
        <el-container>
      <el-aside class="aside" width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <i class="el-icon-document"></i>
            <span slot="title">导航三</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header" >
          <span @click="index">why系统</span>
          <el-dropdown  @command="handleCommand" class="dropdown">
            <span class="el-dropdown-link">
              <img class="user" src="../assets/1.jpg" alt="">
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userPage" icon="el-icon-user-solid">个人信息</el-dropdown-item>
              <el-dropdown-item command="loginOut"  icon="el-icon-s-unfold"
                >退出</el-dropdown-item
              >
            </el-dropdown-menu>
          </el-dropdown>
        </el-header>
        <el-main>
            <router-view  />
        </el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    name: 'WorkspaceJsonMain',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
       index(){
        this.$router.push('/')
       },
        handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleCommand(command){
      if (command === 'userPage'){
      this.$router.push('/userPage')
      }
      if (command === 'loginOut'){
        Cookie.remove('token');
        Cookie.remove('username')
      this.$router.push('/login')
      }
      
   }
        
    },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.dropdown {
  
}
.user{
   height: 40px;
   width: 40px;
   border-radius: 50%;
}

</style>