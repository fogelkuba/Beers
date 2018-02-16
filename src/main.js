import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router';
import { Firebase } from './Firebase';

import store from './store';

import Discover from './components/Discover.vue';
import ItemDetails from './components/ItemDetails.vue';
import Collection from './components/Collection.vue';
import Account from './components/Account.vue';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/discover', component: Discover},
        {path: '/discover/details', component: ItemDetails},
        {path: '/collection', component: Collection},
        {path: '/account', component: Account}
    ]
});

Firebase.auth().onAuthStateChanged( user => {
    if (user) {
        store.dispatch('signIn', user);
        router.push('/collection')
    }else{
        router.replace('/account')
    }
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
