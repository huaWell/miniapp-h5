import axios from 'axios'
import Service from '@/config/service'
import {Toast} from 'vant'

import qs from 'querystring';
import routeQuery from '@/utils/routeQuery'
let q = routeQuery()
console.log('2')
console.log(q)
const service = axios.create({
  baseURL: Service[process.env.NODE_ENV].recycleURL,
  headers: {
    'session_key': q.sessionKey,
    //'session_key': '82ed5d04414e427aa899dc87876b207e',
    'Content-Type': 'application/json'
  }
})


let timer = null
service.interceptors.response.use((res) => {
  /* 如果请求是成功的, 则直接将请求的结果解构返回 */
  if (res.data.code == 0) {
    /* 后端返回的多种多样, 做兼容 */
    let r = {}
    try {
      r = res.data.data

    } catch (err) {
      // console.l
      r = res.data
    }

    if (typeof r!=='object') {
      r = {}
    }

    console.log(r,'mytest')
    return r
  } else {

    /* 当前 token 失效了, 所以我们需要清空一下 */
    if (res.data.code == 100000) {
      // sessionStorage.clear();
      /* 防止多次跳转, 构建一个简单的 debounce */
      clearTimeout(timer)
      timer = setTimeout(() => {
        clearTimeout(timer)
        wx.miniProgram.navigateTo({
          url: '/pages/login/main'
        })
      }, 500)
    } 
    if (res.data.code == 400000) {
      Toast.fail(res.data.messsage)
    }
    
    return Promise.reject(res)
  }
});


export default {
  // 创建圈子
  async fetchGroupCreate(data) {
    return service.post('/group/createApply', data);
  },
  // 加入圈子
  async fetchJoinGroup(data) {
    return service.post('group/join', data)
  },
  // 获取圈子列表
  async fetchGroupList(data) {
    let res = await service.post('/group/listByTab', data)
    return res;
  },

  // 圈子详情 -- 圈子详情
  async fetchGroupDetail(data){
    let res = await service.post('/group/detail', data)
    return res;
  },

  // 圈子详情 -- 获取圈子商品
  async fetchCircleGoods(data) {
    let res = await service.post('/group/productList', data)
    return res;
  },

  // 圈子详情 -- 获取圈子公告
  async fetchCirclePosts(data) {
    let res = await service.post('/group/postList', data)
    return res;
  },
  // 圈子详情 -- 获取圈子新鲜事
  async fetchCircleFresh(data) {
    let res = await service.post('/group/chatList', data)
    return res;
  },
  // 圈子详情 -- 获取邻里之间
  async fetchMissionList(data) {
    let res = await service.post('/group/missionList', data)
    return res;
  },
  // 新鲜事详情
  async fetchFreshDetail(data){
    let res = await service.post('/group/chatDetail', data)
    return res;
  },
  // 新鲜事 -- 评论列表
  async fetchFreshDiscussList(data) {
    let res = await service.post('/group/chatDiscussList', data)
    return res;
  },
  // 新鲜事 -- 评论
  async fetchFreshDiscuss(data) {
    let res = await service.post('/group/chatDiscuss', data)
    return res;
  },

  // 创建公告
  async fetchCreatePost(data){
    let res = await service.post('/group/postCreate', data)
    return res;
  },

  // 创建新鲜事
  async fetchCreateFresh(data){
    let res = await service.post('/group/chatCreate', data)
    return res;
  },
  // 获取我的商品
  async fetchMyGoods(){
    let res = await service.post('/product/publishedList', {pageSize: 100, pageNum:0,status: 1})
    return res;
  },
  // 圈子--成员列表
  async fetchGroupUserList(data){
    let res = await service.post('/group/userList', data)
    return res;
  },
  // 公告详情
  async fetchPostDetail(data){
    let res = await service.post('/group/postDetail', data);
    return res;
  },
  // 获取用户信息
  async fetchUserInfo(){
    let res = await service.post('/user/getUserInfo', {});
    return res;
  },
}
