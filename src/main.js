import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
// document.addEventListener('deviceready', function() {
//   new Vue({
//     el: '#app',
//     render: h => h(App),
//     router
//   })
//   window.navigator.splashscreen.hide()
// },false);
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
