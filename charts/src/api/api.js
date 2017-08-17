import axios from 'axios'

export const getTotalData=function(){
	return axios.get(window.yxdpzs_cupl.getTotalDataURL).then(function(data){
		return Promise.resolve(window.yxdpzs_cupl.getTotalData(data.data))
	})
}

export const getCollegeData=function(){
	return axios.get(window.yxdpzs_cupl.getCollegeDataURL).then(function(data){
		return Promise.resolve(window.yxdpzs_cupl.getCollegeData(data.data))
	})
}   

export const getMapData=function(){
	return axios.get(window.yxdpzs_cupl.getMapDataURL).then(function(data){
		return Promise.resolve(window.yxdpzs_cupl.getMapData(data.data))
	})
}
