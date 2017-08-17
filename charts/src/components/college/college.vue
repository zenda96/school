<template>
        <div class="college">  
            <div class="wrapper">
            <transition-group name="collegeanimate" tag="div" mode="out-in">
                <div class="box" v-for="n in group" :data-index=n v-show="n===flag" :key="n">
                    <ul>
                        <li v-for="(item,index) in items" v-if="index>=((n-1)*6)&&index<(n*6)" :key="index">
                            <collegetemp :num="item.num" :title="item.title" :ratio="item.ratio"></collegetemp>
                        </li>
                    </ul>
                </div>
            </transition-group>
            </div> 
        </div>
    
</template>
<script>
    import Collegetemp from '../collegetemp/collegetemp.vue'
    import * as API from '@/api/api'

    export default {
        data(){
            return{
                group:0,
                flag:1,
                items:[{
                    title:"外国语学院",
                    num:22,
                    ratio:'96.6%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96.3%'
                },{
                    title:"食品学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"人文学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"园艺学院",
                    num:22,
                    ratio:'95.6%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'98.6%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'91.6%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'90.6%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
                }]
            }
        },
        created(){
            this._getCollegeData()
            this.split()
            this.setSlide()
        },
        methods:{
            //TODO
            _getCollegeData(){
                 API.getCollegeData().then((res)=>{
                                     if(res.code==0){
                                                this.items=res.items
                                        }else{
                                                console.error('未获取到数据')
                                        }
                                  }).catch(function (error) {
                                    console.log(error);
                                  })
            },
            split(){
                let len = Number(this.items.length)
                this.group = Math.ceil( len / 6)
            },
            setSlide(){
                setTimeout(()=>{
                    this.flag = (this.flag +1) 
                    if(this.flag > this.group){
                        this.flag=1
                    } 
                    this.setSlide()
                },5000)
            }
        },

        components:{
            Collegetemp
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .collegeanimate-enter-active
        transition:all 2s 
    .collegeanimate-leave-active
        transition:all 2s 
    .collegeanimate-enter, .collegeanimate-leave-to
        transform:translateY(100px)
        opacity:0
    .box
        overflow: hidden
        position: absolute
        top:50%
        left:50%
        width: 1000px
        margin-top:-250px
        margin-left:-500px
    .college
        position:absolute
        width:100% 
        height:100% 
        top:0 
        left:0 
        .wrapper
            width:1000px
            ul
                padding:0
                li
                    list-style:none
                    float:left
</style>