import axios from 'axios'
import Vue from 'vue'
// import router from './router.js'
import vm from '../main.js'
//添加一个请求的拦截器
axios.interceptors.request.use(function (config) {
    // 加载loading动画
    vm.$root.loadingShow = true;
    //
    return config;// 撒手放出经过配置的请求
}, function (error) {
    // 发出了错误的请求，拦截
    return Promise.reject(error);
});

// 添加一个响应的拦截器
axios.interceptors.response.use(function (response) {
    vm.$root.loadingShow = false;

    return response;//奔向组件
}, function (error) {
    // 错误的响应，拦截
    return Promise.reject(error);
});


Vue.prototype.$axios = axios;
window.axios = axios;
export default axios;