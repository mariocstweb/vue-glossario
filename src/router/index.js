import { createRouter, createWebHistory } from 'vue-router';
//  import NotFoundPage from '../pages/NotFoundPage.vue';


import HomePage from '../pages/HomePage.vue';
import ShowPage from '../pages/ShowPage.vue';
import WordsPage from '../pages/WordsPage.vue';


//  Definisco le rotte
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/words', component: WordsPage, name: 'WordsPage' },
    { path: '/words/:slug', component: ShowPage, name: 'ShowPage' },
    // {path: '/:pathMatch(.*)*', component: NotFoundPage},
  ]
})
