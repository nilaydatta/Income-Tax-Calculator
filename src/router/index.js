import { createRouter, createWebHistory } from "vue-router";
import OldTaxRegime from '../views/old-tax-regime-container.vue';
import NewTaxRegime from '../views/new-tax-regime-container.vue';
import Homepage from '../views/homepage.vue';

const routes = [
  {
    path: '/',
    component: Homepage
  },
  {
    path: '/old',
    name: 'oldtaxregime',
    component: OldTaxRegime
  },
  {
    path: '/new',
    name: 'newtaxregime',
    component: NewTaxRegime
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;