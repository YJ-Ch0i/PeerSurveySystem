// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import GlobalComponent from './components/global-component'
// import App from './App'
// import router from './router'

Vue.config.productionTip = false
Vue.component(GlobalComponent.name, GlobalComponent)

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>',
//   message: '안녕'
// })

new Vue({
  render: h => h(App)
}).$mount('#app')
