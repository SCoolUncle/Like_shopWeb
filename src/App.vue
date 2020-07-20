<template>
  <div id="app">
    <!-- 头部nav -->
    <div class="topnav" v-show="this.$root.navShow">
      <TopNav bgcolor="w" :info="this.$root.pagetitle" />
    </div>

    <!-- 头部搜索框 -->
    <div class="search" v-show="this.$root.searchShow">
      <Search borderRadius="2em" @find="find"></Search>
      <Avatar :headurl="headurl" class="loginbtn" @headjump="headJump" />
    </div>

    <!-- view视图 -->
    <router-view class="view" v-show="!this.$root.loadingShow"></router-view>

    <!-- loading加载动画 -->
    <Loading v-show="this.$root.loadingShow" lstyle="background:#666666" />

    <!-- 底部菜单 -->
    <div class="footer" v-show="this.$root.footerShow">
      <FooterGuide homelink="/home"></FooterGuide>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home";
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import Search from "./components/Field/Field";
import TopNav from "./components/TopNav/TopNav";
import Loading from "./components/Loading/Loading";
import Avatar from "./components/Avatar/Avatar";
import { getc } from "./assets/js/cookies.js";

export default {
  components: {
    Home,
    FooterGuide,
    Search,
    TopNav,
    Loading,
    Avatar
  },

  data() {
    return {
      headurl: ""
    };
  },

  mounted() {},

  methods: {
    // 搜索事件
    find(inputval) {
      this.$router.replace('/serachpage/'+inputval);
      if(inputval === ''){
        this.$router.replace('/home');
      }
      console.log(inputval);
    },
    urlLisenter() {},    

    // 点击头像跳转控制
    headJump() {
      let cookieinfo = getc();
      if (cookieinfo.user) {
        this.$router.push("/personal");
      } else {
        this.$router.push("/login");
      }
    }

    
  },

  watch: {
    $route: {
      handler(to) {
        let path = to.path;
        if (/home|order|serachpage/.test(path)) {
          this.$root.footerShow = this.$root.searchShow = true;
          this.$root.navShow = false;
        }
        if (/detail|listpage/.test(path)) {
          if (/detail/.test(path)) {
            this.$root.pagetitle = "详情";
          } else {
            this.$root.pagetitle = "商品列表";
          }
          this.$root.navShow = true;
          this.$root.footerShow = this.$root.searchShow = false;
        }
        if (/login/.test(path)) {
          this.$root.navShow = true;
          this.$root.pagetitle = "注册登录";
          this.$root.footerShow = this.$root.searchShow = false;
        }
        if(/personal/.test(path)){
          this.$root.navShow = false;
          this.$root.searchShow = false;
        }
      
      }
    }
  }
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
/* routerview */
#app .view {
  background: rgb(241, 241, 241);
  flex: 1;
  overflow: auto;
}
#app .footer {
  width: 100%;
  height: 50px;
  z-index: 5;
  background: #fff;
}
#app .topnav {
  box-sizing: border-box;
  padding: 0px 16px;
  width: 100%;
  height: 50px;
  background: #ff9600;
  z-index: 5;
}
#app .search {
  z-index: 5;
  width: 100%;
  background: #ff9600;
  padding: 0px 16px;
  height: 50px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
#app .search .loginbtn {
  height: 50px;
  width: 50px;
  text-align: right;
  line-height: 50px;
  color: #fff;
}
#app .search .loginbtn i {
  font-size: 26px;
}
</style>
