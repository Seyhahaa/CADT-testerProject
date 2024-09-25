import './assets/main.css'

import { createApp } from 'vue'
import i18n from './i18n'


import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Service from '@/pages/Service.vue'
import Team from '@/pages/Team.vue'
import Member from './components/Member.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/service', component: Service },
  { path: '/team', component: Team },]



const router = createRouter({
  history: createWebHistory(),
  routes
})



const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')