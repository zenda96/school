<template>
    <transition name="fade-in">
        <div class="total">
            <div class="left">
                <div class="totalCheckIn">
                    <span class="num"><span style="padding:0 24px">{{checkedInNum}}</span></span>
                    <span class="intro">已报到人数</span>              
                </div>
                <div class="scale"> 
                    <div class="boy">
                        <span class="intro">男生</span>
                        <span class="icon-man icon"></span>
                        <span class="peopleNum">{{checkedInBoy}}</span>
                    </div>  
                    <div class="girl">
                        <span class="intro">女生</span>
                        <span class="icon-woman icon"></span>
                        <span class="peopleNum">{{checkedInGirl}}</span>
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
                                      :stroke-dashoffset="dashoffset"/>
                            </svg>
                            <div class="circleNum">
                                {{checkedInPercent}}
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
    import * as API from '@/api/api'

    export default {
        data(){
            return{
                checkedInNum:0,
                checkedInBoy:0,
                checkedInGirl:0,
                checkedInRatio:0.381,
            }
        },
        computed:{
            dashoffset(){
                return (1-this.checkedInRatio) * 314
            },
            checkedInPercent(){
                return this.checkedInRatio * 100 +'%'
            }
        },
        created(){
            this._getTotalData()
        },
        mounted(){
            setTimeout(this.pushCollege,20000)
            setTimeout(this.pushMap,40000)
            setTimeout(this.pushTotal,60000)
        },
        methods:{
                //TODO
                _getTotalData(){
                    API.getTotalData().then((res)=>{
                                            if(res.code==0){
                                                this.checkedInNum=res.checkedInNum
                                                this.checkedInBoy=res.checkedInBoy
                                                this.checkedInGirl=res.checkedInGirl
                                                this.checkedInRatio=res.checkedInRatio
                                            }else{
                                                console.error('未获取到数据')
                                            }
                                  }).catch(function (error) {
                                    console.log(error);
                                  })
                },
                pushCollege(){
                    this.$router.push({
                            path:'/college'
                        })
                },
                pushMap(){
                    this.$router.push({
                            path:'/map'
                        })
                },
                pushTotal(){
                    this.$router.push({
                            path:'/total'
                        })
                },
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scpoed>
    .fade-in-enter-active,.fade-in-leave-active
        transition:all 0.5s
        .left,.right
            transition:all 0.5s    
    .fade-in-enter,.fade-in-leave-to
        opacity:0
        .left
            opacity:0
            transform:translate3d(200px,100px,0)
        .right
            opacity:0
            transform:translate3d(-200px,100px,0)
    .total
        position:absolute
        width:100% 
        height:100% 
        top:0 
        left:0 
        display:flex 
        align-items:center 
        justify-content:center
        .left,.right
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.60);
            box-shadow: 0 4px 16px 0 rgba(24,36,103,0.60);
            border-radius: 10px;
        .left
            width:35%
            min-width:300px
            height:40%
            margin-right:20px
            border-radius:6px
            .totalCheckIn
                height:40%
                display:flex
                align-items:center
                flex-direction: column
                justify-content:center
                .num
                    font-size:80px
                    padding:0 5px
                    &::before,&::after                        
                        opacity:0.2 
                        font-size:30px  
                        vertical-align:middle   
                        content:'——'            
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
                        font-size:36px
                        padding-top:20px
                .boy
                    .icon
                        color:#32ADFF
                .girl
                    .icon
                        color:#FF746A
        .right
            width:25%
            min-width:190px
            height:40%
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
                        stroke: rgba(0,0,0,0.2)
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
                        font-size:50px
                        color:#00cc66
                        transform:translate(-50%,-50%)
        .intro
            font-size:20px
</style>