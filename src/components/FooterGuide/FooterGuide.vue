<template>
    <div class="box">
        <ul>
            <router-link to="/home" tag="li" >
                <i class="iconfont icon-home"></i>
                <span>首页</span>
            </router-link>
            <router-link to="/order" tag="li" >
                <i class="iconfont icon-dingdan-yes" ></i>
                <span>订单</span>
            </router-link>
            <router-link to="/personal" tag="li" >
                <i class="iconfont icon-wode-r-selected" ></i>
                <span>我的</span>
            </router-link>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        homelink:{type:String}
    },
    data () {
        return {
            
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
    height:50px;
}
.box ul{
    height:100%;
    width:100%;
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 0px 4px 0px #00000020; 
}
.box ul li{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.box ul li i{
    font-size: 24px;
    color:#999;
}
.box ul  .router-link-active{
    color:#ff9600;
    
}
.box ul  .router-link-active i{
    color:#ff9600;
    
}

</style>