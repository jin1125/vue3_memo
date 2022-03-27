import { createRouter, createWebHistory } from "vue-router";
import Top from '../components/pages/Top.vue';
import Edit from '../components/pages/Edit.vue';

// const route = useRoute();

const routes = [
  { path: '/', name: 'Top', component: Top },
  { path: '/edit/:id',
    name: 'Edit',
    component: Edit,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;