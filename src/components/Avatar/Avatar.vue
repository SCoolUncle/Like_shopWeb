<template>
  <div class="box">
    <div class="loginbtn" @click="$emit('headjump')">
      <i class="iconfont icon-dengLuZhuCe"></i>
      <!-- <img :src="headurl" alt /> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    headurl: { type: String },
    
  },
  data() {
    return {};
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.box .loginbtn {
  position: relative;
  height: 100%;
  width: 100%;
  text-align: right;
  line-height: 50px;
  color: #fff;
}
.box .loginbtn i {
  font-size: 26px;
}
/* .box .loginbtn img {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right:0px;
  
} */
</style>