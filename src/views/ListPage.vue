<template>
  <div class="listpage">
    <div class="list-page-box">
      <ShopList :shoplist="shoplist" link="/detail" />
    </div>
  </div>
</template>
<script>
import ShopList from "../components/ShopList/ShopList";
export default {
  props: {
    kindname: { type: String }
  },
  components: {
    ShopList
  },
  data() {
    return {
      shoplist: [],
      n:1
    };
  },
  created() {
    // 获取分类列表信息
    this.getdata(this.n);
  },
  mounted() {
    this.continuousGet();
  },
  methods: {
    getdata(n) {
      this.$axios({
        url: "http://127.0.0.1/vuephp/php/goods_list.php",
        params: {
          cat_two_id: this.kindname,
          page: n,
          line: 8
        }
      }).then(res => {
        if (res.data.length > 0) {
          this.shoplist = this.shoplist.concat(res.data);
          console.log(this.shoplist);
        }
      });
    },
    // 连续请求
    continuousGet(){
        // let ele = document.querySelector('.shoplist');
        let home = document.querySelector('.listpage');
        
      home.onscroll = (e)=>{
        // console.log(home.scrollHeight-home.offsetHeight-1);
        // console.log(parseInt(home.scrollTop));
        if(Math.abs(parseInt(home.scrollTop) - (home.scrollHeight-home.offsetHeight-1))<5){
          console.log("到底了");
          this.n++;
          this.getdata(this.n)
        }
      }
    }
  }
};
</script>
<style  scoped>
.list-page-box {
  width: 100%;
  padding: 0px 16px;
  box-sizing: border-box;
  background: #fff;
}
</style>