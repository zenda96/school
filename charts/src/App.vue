<template>
  <div id="app">
    <div class="header"> 
      <div class="left">
          <embed src="../static/logo.svg" width="300" height="100" 
            type="image/svg+xml"
            pluginspage="http://www.adobe.com/svg/viewer/install/" />
      </div>
      <div class="center">    
            <div class="timeDetail">
                <div class="date">{{time.date}}</div>
                <div class="day">{{time.day}}</div>            
            </div>
            <div class="minute">{{time.minute}}</div>
      </div>
      <div class="right">实时报到总况</div>
    </div>
    <router-view></router-view>
    <div class="footer">
        版权所有 ： 中国政法大学
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
        time:{
            minute:'',
            date:'',
            day:''
        }
    }
  },
  mounted(){
        this._getTime()
        setTimeout(this._getTime,60000)
        setTimeout(()=>{
                this.$router.push({
                path:'/college'
            })
        },3000)
  },
  methods:{
    _getTime(){
        let weeks = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]; 
        let T = new Date();
        let year = T.getFullYear()
        let month = T.getMonth() + 1
        let date = T.getDate()
        let day = weeks[T.getDay()]
        let hour = this.formatTime(T.getHours())
        let minute = this.formatTime(T.getMinutes())
        this.time.date = `${year}-${month}-${date}`
        this.time.day = day
        this.time.minute = `${hour}:${minute}`
        console.log(T)
    },
    formatTime(string,len=2){
        var strlen = String(string).length
        while(strlen<len){
            string='0'+string
            strlen++
        }
        return string
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
    #app
        position:absolute
        width:100%
        height:100%
        top:0
        left:0
        font-family:'微软雅黑'
        background:url('assets/bg.png')
        color:#fff
        overflow:hidden
        .header
            height:10%
            width:100%
            display:flex
            align-items:center
            justify-content:space-between
            color:#fff
            .left
                // float:left
            .center
                min-width:260px
                height:100%
                .minute
                    width:50%
                    height:100%
                    float:right
                    color:#00cc66
                    font-size:40px
                    font-family:'微软雅黑'
                    justify-content:flex-end
                    display:flex
                    align-items:center
                .timeDetail
                    width:50%
                    height:100%
                    display:flex
                    align-items:top
                    justify-content:center
                    float:right
                    flex-direction: column 
            .right
                padding:20px
                font-size:18px
        .footer
            text-align:center
            position:absolute
            width:100%
            height:4%
            bottom:0
            left:0
</style>
