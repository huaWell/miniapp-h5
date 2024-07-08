import axios from 'axios'
import Service from '@/config/service'
import qs from 'querystring';

import routeQuery from '@/utils/routeQuery'
let q = routeQuery()
const service = axios.create({
  baseURL: Service[process.env.NODE_ENV].objectURL,
  headers: {
    //'session_key': q.sessionKey,
    'session_key': 'c311a4b772e4447d9f3223daedc646d6',
    'Content-Type': 'application/json',
  }
})
service.interceptors.response.use((res) => {
  /* 如果请求是成功的, 则直接将请求的结果解构返回 */
  if (res.data.code == 0) {
    return res.data.data;
  } else {
    return Promise.reject(res)
  }
});
export default {
  // 获取物品分类
  async fetchObjectCategoryList(){
    return service.get('objectCategory/list')
  },
  // 新增物品分类
  async fetchAddObjectCategory(data){
    return service.post('objectCategory/create', data)
  },
  // 删除物品分类
  async fetchObjectCategoryDel(code) {
    return service.post('objectCategory/del', {value: code})
  },
  // 获取物品属性
  async fetchObjectLabelList() {
    return service.get('objectLabel/list')
  },
  // 创建物品属性
  async fetchObjectLabelCreate(data){
    return service.post('objectLabel/create', data)
  },
  // 删除物品属性
  async fetchObjectLabelDel(code){
    return service.post('objectLabel/del', {value: code})
  },
  // 获取空间List
  async fetchUserSpaceList(){
    return service.get('userSpace/list')
  },
  // 空间创建
  async fetchUserSpaceCreate(data){
    return service.post('userSpace/create', data)
  },
  // 删除空间
  async fetchUserSpaceDel(code){
    return service.post('userSpace/del', {value: code})
  },
  // 获取容器/物品List
  async fetchUserObjectList(){
    return service.get('userObject/list')
  },
  async fetchUserObjectCreate(data){
    return service.post('userObject/create', data)
  },
  async fetchUserObjectDel(code){
    return service.post('userObject/del', {value: code})
  },
  // 获取所有属性
  async fetchObjectLabelAttrs(){
    return service.get('/objectLabel/attrsByCode')
  },
   // 获取分类下的所有属性
   async fetchObjectLabelCategoryAttrs(code){
    return service.get(`/objectLabel/attrsByCode?category_code=${code}`)
  },
  // 获取所有容器
  async fetchUserObjectContainer(){
    return service.get('/userObject/containerDisplayV2')
  },
  //获取一级分类
  async fetchCategoryTop(){
    return service.get('/view/category/top')
  },
  // 获取看板
  async fetchCategoryDashboard(code){
    return service.get(`/view/category/dashboard?value=${code}`)
  },
  // 物品详情
  async fetchObjectDetail(code){
    return service.get(`/userObject/detail?value=${code}`)
  },
  // 获取一级空间
  async fetchSpaceTop(){
    return service.get('/view/space/top')
  },
  // 获取空间看板
  async fetchSpaceDashboard(code){
    return service.get(`/view/space/dashboard?value=${code}`)
  },
  // 获取容器看板
  async fetchContainerDashboard(code){
    return service.get(`/view/container/dashboard?value=${code}`)
  },
}
