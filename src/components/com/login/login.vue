<template>
  <div class="loginpage">
    <div class="loginbox">
      <div>
        <p>why系统</p>
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
import Cookie from "js-cookie";

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
      if (param.username === "1" && param.password === "1") {
        try {
          let data = await aaa(param);
          Cookie.set("token", data.data.token);
          Cookie.set("username", data.data.username);
          this.$store.commit("setusername", data.data.username);
          this.$router.push("/");
          this.$message.success(`欢迎回来,${data.data.username}!`);
        } catch (error) {
          let data = {
            data: {
              username: "王鸟宇",
              token: "eeee",
            },
          };
          Cookie.set("token", data.data.token);
          Cookie.set("username", data.data.username);
          this.$store.commit("setusername", data.data.username);
          this.$router.push("/");
          this.$message.success(`欢迎回来,${data.data.username}!`);
        }
      } else {
        this.$message.error("账号密码错误，请重新输入");
      }
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped>
.loginpage {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../../assets/img/login.png");
  .loginbox {
    height: 300px;
    width: 400px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
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
  }
}
</style>
