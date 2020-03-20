// 引入mockjs
const Mock = require('mockjs')
// 引入模块home
import homeApi from './home'

// 设置200-2000毫秒延时
Mock.setup({
  timeout: '200-2000'
})


// 首页相关
// 拦截的是 /home/get
// get 请求
// homeApi.getHomeData  响应数据为：home模块中的getHomeData函数执行结果
Mock.mock(/\/home\/get/, 'get', homeApi.getHomeData)