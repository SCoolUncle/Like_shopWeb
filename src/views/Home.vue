<template>
  <div class="home">
    <div class="banner">
      <Banner :data="bannerList" effec="fade"></Banner>
    </div>
    <IconArea :cateList="cateList" link="/listpage" class="bgwhite" />

    <Title class="bgwhite title" text="热门推荐" />
    <ShopList class="bgwhite shoplist" :shoplist="shoplist" link="/detail" />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner/Banner";
import IconArea from "../components/IconArea/IconArea";
import ShopList from "../components/ShopList/ShopList";
import Title from "../components/Title/Title";


export default {
  name: "Home",
  components: {
    Banner,
    IconArea,
    ShopList,
    Title
  },
  data() {
    return {
      bannerList: [
        { _id: 1, title: "banenr1", url: "./images/home_banner4.png" },
        { _id: 2, title: "banenr2", url: "./images/home_banner5.png" },
        { _id: 3, title: "banenr3", url: "./images/home_banner6.png" }
      ],
      cateList: [
        { _id: 1, title: "热门关键词", bg: "#fd9d21", ico: "icon-meishi" },
        { _id: 2, title: "智能酷玩", bg: "#ff6767", ico: "icon-convenience-" },
        { _id: 3, title: "潮流数码", bg: "#8a90fa", ico: "icon-kuaican" },
        { _id: 3, title: "智能家居", bg: "#fd9d21", ico: "icon-tianpincai" },
        { _id: 3, title: "智能酷玩", bg: "#00d3be", ico: "icon-meishi" },
        { _id: 3, title: "智能酷玩", bg: "#8a90fa", ico: "icon-huodong" },
        { _id: 3, title: "智能酷玩", bg: "#fd9d21", ico: "icon-tuijian" },
        { _id: 3, title: "智能酷玩", bg: "#ff6767", ico: "icon-yuding" }
      ],
      shoplist: [],
      n:1
    };
  },
  created () {
    // 获取首页商品列表
    this.getHomedata(this.n);
  },
  mounted () {
    this.continuousGet();
  },

  methods: {
    find() {},

    getHomedata(n) {
      // 获取首页商品数据
      this.$axios({
        url: "http://127.0.0.1/vuephp/php/goods_list.php",
        params: {
          cat_two_id: "数码家电",
          page: n,
          line: 8
        }
      }).then(res => {
        if (res.data.length > 0) {
          this.shoplist = this.shoplist.concat(res.data);
          console.log(this.shoplist)
        }else{
          // 没有数据垃圾回收
          // this.datanum = false;
          this.getHomedata = null;
        }
      });
    },

  // 连续请求
    continuousGet(){
        let ele = document.querySelector('.shoplist');
        let home = document.querySelector('.home');
      home.onscroll = (e)=>{
        // console.log(home.scrollHeight-home.offsetHeight-1);
        // console.log(parseInt(home.scrollTop));
        if(Math.abs(parseInt(home.scrollTop) - (home.scrollHeight-home.offsetHeight-1))<5){
          console.log("到底了");
          this.n++;
         
          this.getHomedata(this.n)
        }
      }
    }
  }
};
</script>
<style scoped>
.home .banner {
  width: 100%;
  /* padding:0px 16px; */
  box-sizing: border-box;
  background: #fff;
}
.home .bgwhite {
  background: #fff;
}
.home .title {
  margin-top: 10px;
  background: #fff;
  padding: 0px 16px;
  box-sizing: border-box;
}

.home .shoplist {
  padding: 0px 16px;
  box-sizing: border-box;
  margin-top: 1px;
}
</style>
