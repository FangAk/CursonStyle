// 手机端接口

import Axios from 'axios'
const BASE_URL = 'http://58.210.32.10:9021'
// import Vue from 'vue'
const token = JSON.parse(localStorage.getItem('token'))
// 格式化参数
function formatParams(params) {
  let str = ''
  for (let key in params) {
    str = str + key + '=' + params[key] + '&'
  }
  str = str.substring(0, str.length - 1)
  return str
}
// 封装axios
function Request(url, params, toke) {
  if (toke) {
    // 有token
    return new Promise((resolve) => {
      Axios.post(BASE_URL + url, formatParams(params), { headers: { token } }).then((res) => {
        resolve(res.data)
      })
    })
  } else {
    // 无token
    return new Promise((resolve) => {
      Axios.post(BASE_URL + url, formatParams(params)).then((res) => {
        resolve(res.data)
      })
    })
  }
}


// 获取token
function Mtoken(params) {
  return Request('/account/getToken', params)
}
//第二页
//getTaskStreetStatistics
function getTaskStreetStatistics(params) {
  return Request('/taskStreet/getTaskStreetStatistics', params,true)
}
function getAccounts(params) {
  return Request('/account/getAccounts', params,true)
}

export {
  Mtoken,
  getTaskStreetStatistics,
  getAccounts
}
