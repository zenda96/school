<template>
    <transition name="scale-in">
        <div class="map">
            <div id="map">
            </div>          
            <div id="mask"></div>
        </div>
    </transition>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/map'
import 'echarts/map/js/china.js'
import * as API from '@/api/api'
import coord from '@/components/map/coord.json'

export default {
    data(){
        return {
           shouldNums:[{
                 name:'上海',
                 shouldNum:100
                },
                {
                 name:'北京',
                 shouldNum:80
                },
                {
                 name:'广东',
                 shouldNum:90
                },
            ],
           locations:[{
                    name: '上海',
                    // coord: [121.472644, 31.231706],
                    value:56,
                }, {
                    name: '北京',
                    // coord: [116.405285, 39.904989],
                    value:62,
                }, {
                    name: '广东',
                    // coord: [113.280637, 23.839463714285714],
                    value:85,
                },{
                    name: '吉林',
                    // coord: [113.280637, 23.839463714285714],
                    value:39,
                },{
                    name: '西藏',
                    // coord: [113.280637, 23.839463714285714],
                    value:3,
                }]
        }
    },
    created(){
        this._getMapData()
    },
    mounted() {
       let myChart = echarts.init(document.getElementById('map'));
       this.initCharts(myChart)
       this._setInterval(myChart)
    },
    methods:{
        initCharts(myChart){                            
            myChart.setOption({
                tooltip: {
                    trigger: 'item',
                    padding:0,
                    formatter: (params, ticket, callback)=>{
                            console.log(params.name)
                            let temp = `<div class="tooltipBox" style="width:140px;height:140px;">
                                            <h3 style="text-align:center;height:25%;margin:0;vertical-align:middle;padding-top:5px">${params.name}</h3>
                                            <div class="tooltipContent" style="width:100%;height:75%;display:flex;align-items:center;">
                                                <div class="left" style="float:left; width:50%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center;">
                                                    <span class="icon-users" style="font-size:30px;color:#32ADFF;"></span>
                                                    <span class="tooltipIntro" style="margin-top:10px;color:#32ADFF;font-size:24px;">${params.data.value}</span>
                                                </div>
                                                <div class="right" style="float:right; width:50%;height:100%;display:flex;align-items:center;flex-direction:column;justify-content:center;">
                                                    <span class="icon-pie-chart" style="font-size:30px;color:#00cc66"></span>
                                                    <span class="tooltipIntro" style="margin-top:10px;color:#00CC66;font-size:24px;">${((params.data.value / this.getShouldNums(params.name))*100).toFixed(1)}%</span>
                                                </div>
                                            </div>
                                        </div>`
                            return  temp
                        }
                },
                series: [{
                    name: '中国',
                    type: 'map',
                    mapType: 'china',
                    selectedMode: 'single',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    roam:true,
                    itemStyle:{
                        normal:{
                            areaColor:'#fff',
                            borderColor:'#324d82',
                            borderWidth:1
                        },
                        emphasis:{
                            areaColor:'#00cc66',
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },
                }]
             });
        },
        //TODO 
        getShouldNums(name){
            let shouldNum = 1
             this.shouldNums.forEach((item)=>{
                if(item.name===name){
                    shouldNum = item.shouldNum
                }
            })
             console.log(shouldNum)
            return shouldNum
        },
        _getMapData(){
            API.getMapData().then((res)=>{
                    if(res.code==0){
                        this.locations=res.locations
                        this.shouldNums=res.shouldNums
                    }else{
                       console.error('未获取到数据')
                    }
            }).catch(function (error) {
                console.log(error);
              })
        },
        _getCoord(data){
            data.forEach((item)=>{
                coord.forEach((ii)=>{
                    if(ii.name===item.name){
                        Object.assign(item,{
                            coord:ii.cp
                        })
                    }
                })
            })
            return data
        },
        _setInterval(myChart){      
            var locations
            var currentLoc = 0                
            setInterval(()=> {
                    locations = this.locations
                    console.log(locations)
                    myChart.dispatchAction({
                        type: 'showTip',
                        seriesIndex: 0,
                        // dataIndex: 0
                        name:locations[currentLoc].name
                    });

                    myChart.setOption({
                        series: [{
                            // center: locations[currentLoc].coord,
                            // zoom: 4,
                            data: [{
                                name: locations[currentLoc].name,
                                selected: true,
                                value:locations[currentLoc].value
                            }],
                            animationDurationUpdate: 1000,
                            animationEasingUpdate: 'cubicInOut'
                        }]
                    });
                    currentLoc = (currentLoc + 1) % locations.length;       
                }, 2000);
        }
    },
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .scale-in-enter-active,.scale-in-leave-active
        transition:all 1s ease
        #mask
            transition:all 1s linear
    .scale-in-enter
        opacity:0
        transform:scale(0)
        #mask
            transform:scale(0)
    .scale-in-leave-to
        opacity:0
        #mask
            transform:scale(0)
    .map 
        position:absolute
        width:100% 
        height:100% 
        top:0 
        left:0 
        display:flex 
        align-items:center 
        justify-content:center 
        #map 
            height:50% 
            width:50%
            border:1px dashed #fff
            display:relative
            z-index:10
        #mask
            height:50% 
            width:50%
            background:rgba(255,255,255,0.2)
            position:absolute
            z-index:2
</style>
