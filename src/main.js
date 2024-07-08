import Vue from 'vue'
import store from './vuex/store'
import router from '@/router'
Vue.config.productionTip = false;
Vue.config.devtools = false;
import App from './App'
import '@/styles/reset.css'
import '@/styles/base.less';
import '@/styles/common.less';
import '@/styles/icons.less'
import '@/styles/vant.less'
/* 引入 swiper css */
import 'swiper/css/swiper.css'
import lodash from 'lodash'
import {
  Search,
  Toast,
  List,
  Icon,
  Checkbox,
  CheckboxGroup,
  ActionSheet,
  Cell,
  CellGroup,
  Button,
  Field,
  Dialog,
  Rate,
  Tag,
  Empty,
  Tabs,
  Tab,
  Divider,
  PullRefresh,
  DatetimePicker,
  TreeSelect,
  Radio,
  RadioGroup
} from 'vant';
Vue.use(Search)
Vue.use(Toast);
Vue.use(List)
Vue.use(Icon);
Vue.use(Checkbox)
Vue.use(CheckboxGroup)
Vue.use(Cell)
Vue.use(CellGroup)
Vue.use(ActionSheet)
Vue.use(Button)
Vue.use(Field)
Vue.use(Dialog)
Vue.use(Rate)
Vue.use(Tag)
Vue.use(Empty)
Vue.use(Tabs)
Vue.use(Tab)
Vue.use(Divider)
Vue.use(PullRefresh)
Vue.use(DatetimePicker)
Vue.use(TreeSelect)
Vue.use(Radio)
Vue.use(RadioGroup)
Toast.setDefaultOptions({ duration: 1000 });
Toast.setDefaultOptions('loading', { forbidClick: true, duration: 0 });


// /*
//   解析 url 中携带的参数 
// */
import routeQuery from '@/utils/routeQuery'
let q = routeQuery()

// let timer = null
// if (!q.sessionKey) {

//   clearTimeout(timer)
//   timer = setTimeout(()=>{
//     clearTimeout(timer)
//   console.log('用户未登录, 直接跳转到登录页面去')

//   wx.miniProgram.navigateTo({
//     url: '/pages/login/main'
//   })


    
//   }, 500)





  
// }


sessionStorage.setItem('lantitude', q.latitude)
sessionStorage.setItem('longitude', q.longitude)
sessionStorage.setItem('sessionKey', q.sessionKey)

// 测试
// sessionStorage.setItem('lantitude', '31.34399929470486')
// sessionStorage.setItem('longitude', '121.2595998806423')
// sessionStorage.setItem('sessionKey', '82ed5d04414e427aa899dc87876b207e')


import R from '@/modules/daxing'
Vue.prototype.R = R;
Vue.prototype.D = R;

import L from '@/modules/leaddirect'
Vue.prototype.L = L;

import O from '@/modules/objectHttp'
Vue.prototype.O = O;




import confirm from '@/modules/confirm'
Vue.prototype.$confirm = confirm;

import delay from '@/utils/delay'
Vue.prototype.$delay = delay
import formatDate from '@/utils/formatDate'
Vue.prototype.$formatDate = formatDate
import highlight from '@/utils/highlight'
Vue.filter('highlight', highlight)
import Square from '@/components/Square'
Vue.component('Square', Square)


/* 注入 wx*/
import wxConfig from '@/modules/wxConfig'
wxConfig(['chooseImage', 'uploadImage', 'previewImage', 'getLocation', 'openLocation']);

import qs from 'querystring'
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || ''
  next()
})

import { VueJsonp } from 'vue-jsonp'
Vue.use(VueJsonp)


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})








