import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '@/router/routes';
import consts from "../consts";
import convertSnakeToCamel from "../utils/convertSnakeToCamel";

Vue.use(VueRouter);

routes.push(
  {
    path: '/error/:errorIndex',
    name: 'Error',
    component: () => import('@/pages/ErrorPage.vue'),
    props:
      (route) => {
        const errorIndex = convertSnakeToCamel(route.params.errorIndex);
        if (consts.errors[errorIndex] === undefined)
          return {
            error: consts.errors.pageNotFound
          }
        return {error: consts.errors[errorIndex]}
      },
  },
)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router;
