<template>
  <div class="load">
    <div class="box">
      <div class="loading" :style="lstyle"></div>
      <div class="shadow"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    lstyle:{type:String,default:"background:#000000"}
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
    .load{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        position: fixed;
    }
    .box{ 
    width: 100%;
    height:300px; 
    position: fixed;
    /* margin:50px auto;  */
    overflow: hidden; 
    position:relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
/* 定义loading元素大小 */
.box .loading{ 
    width:50px; 
    height:50px; 
    border-radius: 1px; 
    background:#ff9600; 
    /* margin:190px auto; */
    /* 添加loading旋转和角度变化动画 */
    animation: move 2s linear infinite ,radius 2s  linear infinite ; 
}


.box .shadow{ 
    width:100px; 
    height:9px; 
    border-radius: 50%; 
    background:#00000050;
    animation: shadow .25s .02s linear infinite alternate;
}
/* 定义loading旋转动画 */
@keyframes move {
    0%{ transform: translateY(5px) rotate(45deg);}
    12.5%{ transform: translateY(-20px) rotate(90deg);}
    25%{ transform: translateY(5px) rotate(135deg); }
    37.5%{ transform: translateY(-20px) rotate(180deg);}
    50%{ transform: translateY(5px) rotate(225deg);}
    62.5%{ transform: translateY(-20px) rotate(270deg);}
    75%{ transform: translateY(5px) rotate(315deg); }
    87.5%{ transform: translateY(-20px) rotate(360deg);}
    100%{ transform: translateY(5px) rotate(405deg) }
}
/* 定义loading圆角动画 */
@keyframes radius {
    0%{     border-radius: 1px 1px 40px 1px;}
    12.5%{  border-radius: 1px 1px 1px 1px; }
    25%{    border-radius: 1px 40px 1px 1px; }
    37.5%{  border-radius: 1px 1px 1px 1px;}
    50%{    border-radius: 40px 1px 1px 1px;}
    62.5%{  border-radius: 1px 1px 1px 1px;}
    75%{    border-radius: 1px 1px 1px 40px; }
    87.5%{  border-radius: 1px 1px 1px 1px;}
    100%{   border-radius: 1px 1px 40px 1px;}
} 
/* 定义loading阴影动画 */
@keyframes shadow{
    0%{ width:110px;}
    100%{ width:90px;}
}
</style>