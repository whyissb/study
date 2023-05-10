<!--
 * @Author: zhouchunchun 316581172@qq.com
 * @Date: 2023-05-04 16:19:08
<<<<<<< HEAD
 * @LastEditors: why 2594258643@qq.com
 * @LastEditTime: 2023-05-09 13:50:09
=======
 * @LastEditors: zhouchunchun 316581172@qq.com
 * @LastEditTime: 2023-05-06 13:50:55
>>>>>>> 171164e88c2735be367f798728c84444b3e7fee9
 * @FilePath: \apid:\vscode\vue-project\demo\src\views\HomeView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    style="
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    "
  >
    <div
      style="
        height: 300px;
        width: 400px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <div>
        <form action="">
          <input
            v-model="username"
            type="text"
            style="height: 30px; width: 150px; margin-bottom: 10px"
            placeholder="账号"
          /><br />
          <input
            v-model="password"
            type="password"
            style="height: 30px; width: 150px"
            placeholder="密码"
          /><br />
        </form>
        <button @click="demo()">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { aaa } from "../../../assets/api/index";
import Cookie from 'js-cookie'

export default {
  name: "HomeView",
  data() {
    return {
      msg: 1,
      username: "",
      password: "",
    };
  },
  methods: {
    async demo() {
      let param = {
        username: this.username,
        password: this.password,
      };
      console.log(param);
      if (param.username === "1" && param.password === "1") {
        let data = await aaa(param);
        Cookie.set('token',data.data.token)
        Cookie.set('username',data.data.username)
        this.$router.push('/');
        this.$message.success(`欢迎回来,${data.data.username}!`);
      } else {
        this.$message.error("账号密码错误，请重新输入");
      }
    },
  },
  mounted() {},
};
</script>
<style scoped>
input {
  border-style: solid;
  border-top: #fff;
  border-right: #fff;
  border-radius: 5%;
  border-color: aqua;
  transition: transform 2s;
}

input:focus {
  outline: none;
  transform: scale(1.2);
  border-style: solid;
  border-top: #fff;
  border-radius: 5%;
  border-color: aqua;
}

button {
  width: 150px;
  border: 1px solid aqua;
  border-radius: 5%;
  height: 35px;
  margin-top: 10px;
}

button:active {
  background-color: aqua;
}

button:hover {
  animation: myfirst 1s;
}

@keyframes myfirst {
  0% {
    border-left: #fff;
  }

  25% {
    border-bottom: #fff;
  }

  50% {
    border-right: #fff;
  }

  100% {
    border-top: #fff;
  }
}
</style>
