import Vue from 'vue'
import router from './router'
import Gql from './libs/gql'
import App from './App'

Vue.config.productionTip = false

Vue.use(Gql, {
  url: 'https://api-euwest.graphcms.com/v1/cjtq7hrbq273s01b9qumn7j8j/master'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
