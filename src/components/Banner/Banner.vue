<template>
  <div class="swiper-container" :style="{height:height}">
    <div class="swiper-wrapper">
      <router-link
        to
        tag="div"
        class="swiper-slide"
        v-for="(item,key) in data"
        @click="$emit('bclick',item._id,key)"
        :key="item._id"
      >
        <img width="100%"  :src="item.url" alt >
        <!-- <p>{{item.title}}</p> -->
      </router-link>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
/////////////////////
// 参数说明
// data:子元素为对象的数组，
// click:点击图片触发的事件,返回banner id 和当前索引下标
//////////////////////
import Swiper from "swiper";
export default {
  props: {
    data: { type: Array, required: true },
    height:{type:String,default:"150px"},
    effect:{type:String,default:"fade"}
  },
  data() {
    return {};
  },
  mounted() {
    this.data.length && this.move();
  },
  updated() {
    this.move();
  },
  methods: {
    move() {
      var mySwiper = new Swiper(".swiper-container", {
        direction: "horizontal", // 垂直切换选项
        loop: true, // 循环模式选项
        effect:this.effect,//切换效果
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        speed: 300,
        pagination: {
          el: ".swiper-pagination"
        }
      });
    }
  }
};
</script>
<style  scoped>
.swiper-container {
  width: 100%;
  overflow: hidden;
  /* width: auto; */
  /* height: 150px; */
  background: rgba(10, 172, 150, 0.514);
  vertical-align: baseline;
  border-radius: 4px;
  position: relative;
}
.swiper-container .swiper-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  box-sizing: content-box;
  vertical-align: baseline;
}
.swiper-container .swiper-slide {
  position: relative;
  overflow: hidden;
  z-index: 1;
  width: 100%;
  flex-shrink: 0;
  height: 100%;
}
.swiper-container .swiper-slide p {
  padding: 0;
  margin: 0;
  width: 100%;
  position: absolute;
  bottom: 0px;
  left: 0px;
  line-height: 40px;
  font-size: 13px;
  color: #fff;
  text-align: center;
  background: #00000090;
}
.swiper-container .swiper-slide img {
  width: 100%;
  /* height: 100%; */
  display: block;
}
.swiper-container .swiper-pagination{
    display: none;
}
</style>