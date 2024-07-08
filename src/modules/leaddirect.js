import axios from 'axios'
import Service from '@/config/service'
import qs from 'querystring';

import routeQuery from '@/utils/routeQuery'
let q = routeQuery()
const service = axios.create({
  baseURL: Service[process.env.NODE_ENV].baseURL,
  headers: {
    'session_key': q.sessionKey,
    //'session_key': 'c311a4b772e4447d9f3223daedc646d6',
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
  async fetchWXConfig() {
    return service.post('/wechat/signature', {
      location: encodeURIComponent(location.href.split('#')[0])
    })
  },
  async wxUploadImage(serverId) {
    return service.post('wechat/media/upload', {
      server_id: serverId
    })
  },
  async fetchQrCode ({circleId, scene, page}) {
    return service.post('wechat/circle/qrcode', {
      circle_id: parseInt(circleId),
      page,
      scene: scene.toString()
    })
  },
  async fetchCircleQrCode (circleId) {
    console.log(circleId)
    return service.get(`circle/qrcode?id=${circleId}`)
  }, 
  // 用来跳过微信审核圈子功能
  async fetchCircleDisplay(){
    return service.get('circle/display')
  },
  // 用于绘制商品图片
  async fetchUnlimitQrcode({goodId, scene, page}){
    return service.post('wechat/unlimit/qrcode',{
      product_id: parseInt(goodId),
      page,
      scene: scene.toString()
    })
  }
}
