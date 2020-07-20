<template>
<div class="box">
    <div class="inputbox" :style="{height:height,borderRadius:borderRadius,border:border,background:background}">
        <div @click="$emit('find',inputval)"  v-if="iconDisplay" :style="{background:btnBg,color:btnColor}">
            <i class="iconfont icon-sousuo"></i>
        </div>
        <input  :type="type" :placeholder="placeholder" v-model="inputval"  @input="$emit('find',inputval)" >
        
    </div>
</div>
</template>
<script>
import './assets/iconfont/iconfont.css'
export default {
    props:{
        placeholder:{type:String,default:'请输入内容'},
        type:{type:String,default:'text'},
        borderRadius:{type:String,default:'4px'},
        border:{type:String,default:"1px #ffffff solid"},
        iconDisplay:{type:Boolean,default:true},
        btnBg:{type:String,default:'#ffffff'},
        btnColor:{type:String,default:'#ccc'},
        background:{type:String,default:'#ffffff90'},
        height:{type:String,default:'35px'}
    },
    data () {
        return {
            inputval:''
        }
    },
    created () {
        
    },
    mounted () {
        
    },
    updated () {
        
    },
    methods: {
        
    },
}
</script>
<style scoped>
    .box{
        width:100%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    .inputbox{
        width:100%;
        overflow: hidden;
        box-sizing: border-box;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
    .inputbox div{
        height: 100%;
        width: 15%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .inputbox div i{
        font-size:14px;
    }
    .inputbox input{
        width:100%;
        height: 100%;
        font-size:14px;
        border: none;
        outline: none;
        flex: 1;
    }
</style>