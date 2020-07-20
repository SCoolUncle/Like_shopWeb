<template>
  <div class="box">
    <ul>
      <router-link :to="link+'/'+item.goods_id" tag="li" v-for="(item,key) in shoplist" :style="border">
        <img :src="item.goods_small_logo" alt />
        <div class="content">
          <p>{{item.cat_id}}</p>
          <p>{{item.goods_name}}</p>
          <!-- 传递一个函数 -->
          <div>
            <span>￥{{item.goods_price}}</span>
            <span>马上抢</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    shoplist: { type: Array,default:[] },
    link:{type:String,required:true},
    border:{type:String,default:'border-bottom:1px #e5e5e5 solid'}
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  updated() {}
};
</script>
<style scoped>
.box {
  width: 100%;
  height: auto;
}
.box ul {
  width: 100%;
  height: auto;
}
.box ul li {
  width:100%;
  height: 95px;
  display: flex;
  align-items: center;
}
.box ul li img {
  display: inline-block;
  height: 80px;
  width: 80px;
  border-radius: 4px;
  background: #e5e5e5;
  box-shadow: inset 0px 0px 10px 0px #00000050;
}
.box ul li .content {
  width:60%;
  height: 80px;
  flex: 1;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.box ul li .content p:nth-of-type(1) {
  width:80%;
  font-size: 16px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #000;
  line-height: 24px;
}
.box ul li .content p:nth-of-type(2) {
  width:80%;
  font-size: 14spx;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #666;
  line-height: 24px;
}
.box ul li .content div {

}
.box ul li .content div span:nth-of-type(1) {
  font-size: 16px;
  font-weight: 600;
  color: #ff9600;
}
.box ul li .content div span:nth-of-type(2) {
  padding: 5px 5px;
  background: #ff9600;
  color: #fff;
  border-radius: 4px;
  float: right;
  font-size: 14px;
}
</style>