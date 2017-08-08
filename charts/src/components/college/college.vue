<template>
    <transition name="collegeanimate"> 
        <div class="college">  
            <div class="wrapper">
                <ul>
                    <li v-for="item in items">
                        <collegetemp :num="item.num" :title="item.title" :ratio="item.ratio"></collegetemp>
                    </li>
                </ul>
            </div> 
        </div>
    </transition>
</template>
<script>
    import Collegetemp from '../collegetemp/collegetemp.vue'
    import * as API from '@/api/api'

    export default {
        data(){
            return{
                items:[{
                    title:"外国语学院",
                    num:22,
                    ratio:'96%'
                },{
                    title:"信息科技学院",
                    num:22,
                    ratio:'96%'
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
                    ratio:'96%'
                },{
                    title:"金融学院",
                    num:22,
                    ratio:'96%'
                }]
            }
        },
        created(){
            this._getCollegeData()
        },
        methods:{
            //TODO
            _getCollegeData(){
                 API.getCollegeData().then((res)=>{
                                     if(res.status===200){
                                            console.log(res)
                                        }
                                  }).catch(function (error) {
                                    console.log(error);
                                  })
            }
        },
        components:{
            Collegetemp
        }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
    .collegeanimate-enter-active
        transition:all 1s ease
    .collegeanimate-leave-active
        transition:all 0.5s ease
    .collegeanimate-enter, .collegeanimate-leave-to
        transform:translate3d(0,100px,0)
        opacity:0
    .college
        position:absolute
        width:100% 
        height:100% 
        top:0 
        left:0 
        display:flex 
        align-items:center 
        justify-content:center
        .wrapper
            width:1000px
            ul
                padding:0
                li
                    list-style:none
                    float:left
</style>