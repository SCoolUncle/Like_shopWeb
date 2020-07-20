<template>
    <div class="box">
        <div>
            <span>{{title}}</span>
            <span>{{content}}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        title:{type:String,default:"标题"},
        content:{type:String,default:"内容"}

    },
    data () {
        return {
            
        }
    }
}
</script>
<style scoped>
.box{
    width:100%;
    height:100%;
}
.box div{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width:100%;
    height:100%;
}
.box div span{
    color:#000;
    font-size:14px;
}
.box div span:nth-of-type(2){
    color:#ccc;
}
</style>