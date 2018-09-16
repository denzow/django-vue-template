import Vue from 'vue';
import Router from 'vue-router';
import WebSocketMiddleware from './middlewares/websocket';

import DefaultLayout from '../components/layouts/DefaultLayout.vue';
import NotFound from '../pages/NotFound.vue';


Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: DefaultLayout,
    },
    {
      path: '*',
      component: NotFound,
    },
  ],
});

WebSocketMiddleware(router);
export default router;
