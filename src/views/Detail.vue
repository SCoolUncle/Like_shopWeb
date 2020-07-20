<template>
  <div class="box">
    <div class="pdimg">
      <img :src="pdinfo.goods_big_logo" alt />
    </div>
    <div class="price">
      <span>
        ￥{{pdinfo.goods_price}}
        <i>市场价:{{pdinfo.goods_price}}元</i>
      </span>
      <Button class="goshop" text="抢购" @btnfn="btnfn"/>
    </div>
    <div class="kind bg">
      <span>{{pdinfo.cat_one_id}}</span>
      <span>{{pdinfo.cat_two_id}}</span>
      <span>{{pdinfo.cat_three_id}}</span>
    </div>
    <div class="pdname bg">
      <Title text="产品信息" class="pdtitle" />
      <p>
        <span>商品名称 | </span><br>
        {{pdinfo.goods_name}}<br>
        <span>商品数量 | </span><br>
        {{pdinfo.goods_number}}<br>
      </p>
    </div>
  
  </div>
</template>
<script>
import ShopList from "../components/ShopList/ShopList.vue";
import Button from "../components/Button/Button";
import Title from "../components/Title/Title";
export default {
  props: {
    // 路由props传参
    id: { type: String }
  },
  components: {
    ShopList,
    Button,
    Title
  },
  data() {
    return {
      pdinfo: {}
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios({
        url: "http://127.0.0.1/vuephp/php/goods_detail.php",
        method: "POST",
        data: "goods_id=" + this.id
      }).then(res => {
        console.log(res);
        this.pdinfo = res.data;
      });
    },
    btnfn(){
        
    }
  }
};
</script>
<style  scoped>
.box {
  width: 100%;
}
.box .bg {
  background: #fff;
}
.box .pdimg {
  width: 100%;
  height: 200px;
  overflow: auto;
}
.box .pdimg img {
  width: 100%;
}
.box .price {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  margin-top: 1px;
  padding: 0px 16px;
  box-sizing: border-box;
}
.box .price span {
  font-size: 16px;
  color: #ff9600;
  font-weight: 600;
}
.box .price span i {
  font-size: 14px;
  font-weight: 400;
  color: #ccc;
}
.box .goshop {
  height: 35px;
  width: 20%;
}
.box .kind {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 2px;
}
.box .kind span {
  padding: 5px 10px;
  color: seagreen;
  border: 1px solid rgb(47, 165, 0);
  border-radius: 4px;
}
.box .pdname{
    width:100%;
    margin-top:5px;
    box-sizing: border-box;
    padding:0px 16px;
}
.box .pdname p{
    padding-top:10px;
    border-top:1px #ccc solid;
    line-height: 24px;
    font-size:14px;
    color:#666;
}
.box .pdname p span{
    color:#000;
    font-weight: 600;
}
.box .infoimg{
    width:100%;
}
</style>
