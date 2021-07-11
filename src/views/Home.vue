<template>
  <div class="home">
    <a-form-model :form="form" id="userform">
      <h3>请登录</h3>
      <a-form-model-item>
        <label for="one"><span>账号: </span></label><a-input class="user" v-model="form.user.user" placeholder="请输入账号" id="one"></a-input>
      </a-form-model-item>
      <a-form-model-item>
        <label for="two"><span>密码: </span></label><a-input class="usercode" type="password" v-model="form.user.usercode" placeholder="请输入密码" id="two"></a-input>
      </a-form-model-item>
      
      <span class="useraction">
        <a href="javascript:;" class="a-l">账号注册</a>
        <a href="javascript:;" class="a-r">忘记密码</a>
      </span>
      <a-form-model-item>
        <a-button @click="getIn" id="getin">登录</a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
// @ is an alias to /src

import Vue from 'vue'
import { Button, Input } from 'ant-design-vue';
Vue.component(Button.name, Button);
import { FormModel } from 'ant-design-vue'
Vue.use(FormModel)
Vue.use(Input)

export default {
  name: 'Home',
  data() {
    return {
      form: {
        user: {
          user: '',
          usercode: ''
        }
      }
    }
  },
  mounted() {
    
  },
  methods: {
    getIn() {
      if(!this.form.user.user || !this.form.user.usercode) {
        if(!this.form.user.user && !this.form.user.usercode) {
          alert('请输入账号密码')
          
        }
        else if(!this.form.user.usercode) {
          alert('请输入密码')
        }
        else if(!this.form.user.user){
          alert('请输入账号')
        }
      }
      else {
        this.$router.push('/table').catch(err=>{err})
      }
    }
  },
  components: {

  }
}
</script>

<style>
  h3 {
    color: blueviolet;
    font-weight: 700;
  }
  #userform {
    display: block;
    width: 300px;
    margin-left: 38%;
    margin-top: 50px;
    text-align: center;
    background-color: #fff;
    box-shadow:  0 0 5px rgba(0, 0, 0, .3);
    box-sizing: border-box;
    padding-top: 10px;
  }
  #userform span {
    font-size: 16px;
  }
  .user, .usercode {
    width: 200px;
  }
  #getin {
    height: 30px;
    line-height: 30px;
  }
  #getin:hover {
    background-color: skyblue;
    color: #fff;
  }
  .ant-btn {
    background-color: pink;
  }
  .useraction {
    position: relative;
  }
  .useraction a {
    font-size: 12px;
    color: #ccc;
    margin: 10px;
  }
  .useraction a:hover {
    color: skyblue;
  }
  /* .useraction {
    display: block;
    background-color: pink;
    position: relative;
    width: 300px;
    height: 1px;
  }
  .useraction a {
    font-size: 12px;
    position: absolute;
    color: #ccc;
  }
  
  .useraction a:first-child {
    top: 20px;
    left: 10px;
  }
  .useraction a:last-child {
    top: 20px;
    right: 10px;
  }  */
</style>
