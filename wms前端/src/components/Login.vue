<template>


  <div class="container">
    <div style="width: 25%; display: flex;background-color: white; ">
      <div style="flex: 1;width: 50%;padding: 40px;display: flex;  flex-direction: column;justify-content: center;" >
        <div style="text-align: center; font-size: 30px; color: #131313;margin-bottom: 15px;  ">仓 库 管 理 系 统</div>
        <el-form ref="loginForm" :model="loginForm"  class="login-form">
          <el-form-item  prop="num">
            <el-input v-model="loginForm.num" placeholder="请输入账号" style="width: 100%;"></el-input>
          </el-form-item>
          <el-form-item  prop="password">
            <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" style="width: 100%;" @keyup.enter.native="login(loginForm)"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login(loginForm)" style="width: 100%;margin-top: 30px">登录</el-button>
          </el-form-item>
        </el-form>
      </div>

    </div>

  </div>


</template>

<script>

export default {
  name:"Login",
  data() {
    return {
      loginForm: {
        num: '',
        password: ''
      }
    };
  },

  methods: {
    login(loginForm) {
      this.$axios.get(this.$httpUrl+'/user/login?num='+loginForm.num+"&password="+loginForm.password).then(res=>res.data).then(res=>{
            console.log(res)
            if(res.code==200){
                sessionStorage.setItem("CurUser",JSON.stringify(res.data.user))
                this.$store.commit("setMenu",res.data.menu)
                this.$router.replace('/index');
            }else{
              this.$message.error('账号或密码错误');
            } 
        })
    },
  },
};
</script>

<style>

.container {
  height: 100vh;
  overflow: hidden;
  /*background-color: #f3e7ce;*/
  background-image: url("../assets/bg1.jpg");
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
}


.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /*background: #f5f7fa;*/
  background-image: url("../assets/bg5.png");
  background-size: 100% 100%;
}

.login-card {
  width: 380px;
  padding: 40px;
  background-color: rgba(255,255,255,0.9);
}

.login-title {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.login-form {
  margin-top: 20px;
}
</style>
