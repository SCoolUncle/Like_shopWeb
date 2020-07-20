<template>
    <div class="box">
    <p><i v-if="iconshow" class="iconfont icon-ic_menu_px"></i> {{text}}</p>
    </div>
</template>
<script>
import "./assets/iconfont/iconfont.css"

export default {
    props: {
        text:{type:String,default:"标题"},
        iconshow:{type:Boolean,default:true}
    },
    data () {
        return {
            
        }
    },
    methods: {
        
    },

}
</script>
<style  scoped>
.box{
    width:100%;
}
.box p{
    width:100%;
    font-size:16px;
    letter-spacing: 5px;
    color:#666;
}
</style>