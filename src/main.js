import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router';

import Discover from './components/Discover.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/discover', component: Discover}
    ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
