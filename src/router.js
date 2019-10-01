import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import register from './views/register.vue'
import uploadPicture from './views/uploadPicture.vue'
import businessInfo from './views/businessInfo.vue'
import businessCategory from './views/businessCategory.vue'
import choosePlan from './views/choosePlan.vue'
import paymentMethod from './views/paymentMethod.vue'



Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/uploadPicture',
      name: 'uploadPicture',
      component: uploadPicture
    },
    {
      path: '/businessInfo',
      name: 'businessInfo',
      component: businessInfo
    },
    {
      path: '/businessCategory',
      name: 'businessCategory',
      component: businessCategory
    },
    {
      path: '/choosePlan',
      name: 'choosePlan',
      component: choosePlan
    },
    {
      path: '/paymentMethod',
      name: 'paymentMethod',
      component: paymentMethod
    }
  ]
})