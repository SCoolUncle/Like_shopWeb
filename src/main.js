import Vue from 'vue'
import App from './App.vue'
import router from './plugin/router'
import store from './store/store'
import './assets/css/common.css'
import './plugin/axios.js'


Vue.config.productionTip = false

let vm = new Vue({
  router,
  store,
  data:{
    pagetitle:'',
    navShow:false,
    searchShow:true,
    footerShow:true,
    loadingShow:false,
    pagetitle:"详情",
    inputval:''
  },
  methods: {
   
  },
  render: h => h(App)
}).$mount('#app')
export default vm;
