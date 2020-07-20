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
    kindname: { type: String },
    keyword:{type:String,default:"数码"}
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
      console.log('hell');
    // 获取分类列表信息
    this.getdata(this.n);
  },
  mounted() {
    
  },
  methods: {
    //检索
    getdata(n) {
      this.$axios({
        url: "http://127.0.0.1/vuephp/php/goods_find.php",
        params: {
          keyword: this.keyword,
          page: n,
          line: 10
        }
      }).then(res => {
        // 注意 没有搜索到商品也返回一个数组
        if (res.data.length > 0 && res.data[0] !=1) {
          this.shoplist = this.shoplist.concat(res.data);
          console.log(this.shoplist);
        }
      });
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