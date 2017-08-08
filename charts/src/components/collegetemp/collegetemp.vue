<template>
    <div class="collegetemp">
        <div class="college-wrapper">
            <div class="title">{{title}}</div>
            <div class="content">
                <div class="left">
                    <span class="icon-users icon"></span>
                    <span class="num">{{num}}</span>
                </div>
                <div class="right">
                    <span class="icon-pie-chart icon"></span>
                    <span class="num">{{ratio}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            title:{
                type:String,
                default:''
            },
            num:{
                type:Number,
                default:0
            },
            ratio:{
                type:String,
                default:'0%'
            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .collegetemp
        .college-wrapper
            width:280px
            height:200px
            background:rgba(255,255,255,0.1)
            border-radius:6px
            border:1px solid rgba(255,255,255,0.5)
            margin:20px
            .title
                height:25%
                line-height:50px
                text-align:center
                border-bottom:1px solid rgba(255,255,255,0.5)
                background:rgba(255,255,255,0.2)
                border-radius:6px 6px 0 0 
                font-size:20px
                letter-spacing:2px
                font-weight:bold
            .content
                height:75%
                .left,.right
                    width:50%
                    height:100%
                    display:flex
                    align-items:center
                    flex-direction:column
                    justify-content:center
                    .num
                        padding-top:5px
                        font-size:30px
                    .icon
                        font-size:35px
                .left
                    float:left
                    color:#32ADFF
                .right
                    float:right
                    color:#00cc66
</style>