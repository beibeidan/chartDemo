import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import g2 from './views/g2.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'g2',
      component: g2,
    },
    {
      path: '/echarts',
      name: 'echarts',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/echarts.vue'),
    },
    {
      path: '/highcharts',
      name: 'highcharts',
      component: () => import(/* webpackChunkName: "about" */ './views/highcharts.vue'),
    },
  ],
});
