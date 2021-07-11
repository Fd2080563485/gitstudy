import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import { Button } from 'ant-design-vue';
// Vue.component(Button.name, Button);
require('./assets/css/normal.css')
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
