import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import AboutSingleBook from "../views/AboutSingleBook"

Vue.use(VueRouter)

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/..views/AboutSingleBook/:book",
      name: "About Single Book",
      component: AboutSingleBook,
    },
  ],
})

export default router
