import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MyProject from '../views/MyProject.vue'
import Team from '../views/Team.vue'
import Education from '../views/Education.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myproject',
    name: 'MyProject',
    component: MyProject
  },
  {
    path: '/team',
    name: 'Team',
    component: Team
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
