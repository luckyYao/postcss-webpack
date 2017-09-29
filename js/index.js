import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import HelloWorld from './HelloWorld';

const routes = [
  { path: '/', component: HelloWorld }
]

const router = new VueRouter({
  routes
});

new Vue({
  router
}).$mount('#contant');