<template>
    <div class="box">
        <div :style="{borderRadius:borderRadius,border:border,background:background,color:color}" @click="$emit('btnfn')">{{text}}</div>
    </div>
</template>
<script>
export default {
    props: {
        text:{type:String,default:"确认"},
        borderRadius:{type:String,default:"4px"},
        border:{type:String,default:"none"},
        background:{type:String,default:"#ff9600"},
        color:{type:String,default:"#fff"}
    },
    data () {
        return {
            
        }
    },
    created () {
        
    },
    methods: {
        
    }
}
</script>
<style scoped>
.box{
    width:100%;
    height:100%;
}
.box div{
    display: flex;
    height: 100%;
    width:100%;
    justify-content: center;
    align-items: center;
}
</style>