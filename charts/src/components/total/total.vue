<template>
    <div class="total">
        <div class="left">
            <div class="totalCheckIn">
                <span class="num">2173</span>
                <span class="intro">已报到人数</span>              
            </div>
            <div class="scale"> 
                <div class="boy">
                    <span class="intro">男生</span>
                    <span class="icon-man icon"></span>
                    <span class="peopleNum">706</span>
                </div>  
                <div class="girl">
                    <span class="intro">女生</span>
                    <span class="icon-woman icon"></span>
                    <span class="peopleNum">1019</span>
                </div>           
            </div>
        </div>
        <div class="right">
            <div class="text">
                <span class="intro">报到完成率</span>
            </div>
            <div class="circle">
                    <div class="progress-circle">
                        <svg width=200 height=200 viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                          <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
                          <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" stroke-dasharray="314"
                                  stroke-dashoffset="30"/>
                        </svg>
                        <div class="circleNum">
                            90%
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scpoed>
    .total
        position:absolute
        width:100% 
        height:100% 
        top:0 
        left:0 
        display:flex 
        align-items:center 
        justify-content:center
        .left
            width:35%
            height:40%
            background:rgba(255,255,255,0.2)
            margin-right:20px
            border-radius:6px
            .totalCheckIn
                height:40%
                display:flex
                align-items:center
                flex-direction: column
                justify-content:center
                .num
                    font-size:38px
                    padding:0 5px
                    &::before,&::after
                        content:'——'
                        opacity:0.2                      
            .scale
                height:60%
                .boy,.girl
                    width:50%
                    float:left
                    display:flex
                    flex-direction:column
                    align-items:center
                    justify-content:center
                    height:100%
                    .icon
                        font-size:60px
                        padding-top:5px
                    .peopleNum
                        font-size:20px
                        padding-top:20px
                .boy
                    .icon
                        color:#116de2
                .girl
                    .icon
                        color:#e67488
        .right
            width:25%
            height:40%
            background:rgba(255,255,255,0.2)
            display:flex
            flex-direction: column
            border-radius:6px
            .text
                height:10%
                display:flex
                align-items:center
                padding-left:15px
            .circle
                height:90%
                width:100%
                position:relative
                .progress-circle
                    position:relative
                    display:flex
                    align-items:center
                    justify-content:center
                    height:100%
                    transform:transcaleY(-50%)
                    .progress-background
                        transform: scale(0.9)
                        stroke: rgba(0,0,0,0.1)
                    .progress-bar
                        transform: scale(0.9) rotate(-90deg)
                        stroke: #00cc66
                    circle
                        stroke-width: 4px
                        transform-origin: center  
                    .circleNum
                        position:absolute
                        top:50%
                        left:50%
                        font-size:60px
                        color:#00cc66
                        transform:translate(-50%,-50%)
        .intro
            font-size:14px
</style>