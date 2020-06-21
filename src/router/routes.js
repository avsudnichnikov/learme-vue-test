const routes = [
  {
    path: '*',
    redirect: '/error/page-not-found',
  },
  {
    path: '/',
    name: 'HomePage',
    component: () => import('@/pages/HomePage.vue'),
  },
];

export default routes;
