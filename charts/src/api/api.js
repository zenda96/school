import axios from 'axios'

export const getTotalData=function(){
	const url = 'http://baidu.com'
	return axios.get(url)
}
//返回所有数据的成功状态码不限

//返回格式: checkedInNum:0,   //报到总人数
		//  checkedInBoy:0,	  //报到男生人数
		//  checkedInGirl:0,  //报到女生人数
		//  checkedInRatio:0.3, //报到总比例

export const getCollegeData=function(){
	const url = 'http://baidu.com'
	return axios.get(url)
}

//返回格式： items：[{
                //     title:"外国语学院",
                //     num:22,
                //     ratio:'96%'
                // },{
                //     title:"信息科技学院",
                //     num:22,
                //     ratio:'96%'
                // },{
                //     title:"食品学院",
                //     num:22,
                //     ratio:'96%'
                // },{
                //     title:"人文学院",
                //     num:22,
                //     ratio:'96%'
                // },{
                //     title:"园艺学院",
                //     num:22,
                //     ratio:'96%'
                // },{
                //     title:"金融学院",
                //     num:22,
                //     ratio:'96%'
                // }]
//返回所有学院       

export const getMapData=function(){
	const url = 'http://baidu.com'
	return axios.get(url)
}

//map返回格式有疑问请@郑丹
//返回格式：  totalNum:100,    // 报到总人数   //  该省报到人数/该省份应报道人数
           // locations:[{
           //          name: '上海',          //  该省的名字，不要加‘省’
           //          coord: [121.472644, 31.231706],  //  该省的坐标值 ，参考src/components/map/coord.json
           //          value:56,            
           //      }, {
           //          name: '北京',
           //          coord: [116.405285, 39.904989],
           //          value:62,
           //      }, {
           //          name: '广东',
           //          coord: [113.280637, 23.839463714285714],
           //          value:85,
           //      }]
           //      返回前五个省即可