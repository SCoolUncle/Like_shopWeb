<template>
  <div class="box">
    <ul>
      <router-link :to="link+'/'+item.title" tag="li" v-for="(item,key) in cateList">
          <span class="imgbox" :style="{background:item.bg}"><i :class="'iconfont '+ item.ico"></i></span>
        <!-- <img :src="item.url" alt /> -->
        <span>{{item.title}}</span>
      </router-link>
    </ul>
  </div>
</template>
<script>
import "./assets/iconfont/iconfont.css"
export default {
  props: {
    cateList: { type: Array, required: true },
    link:{type:String}
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
  height:180px;
  overflow: hidden;
}
.box ul {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
.box ul li {
  width: 25%;
  height: 50%;
  display: flex;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box ul li .imgbox {
  width:50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom:5px;
  color:#fff;
  font-size:16px;
}
</style>