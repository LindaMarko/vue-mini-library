import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import BookDetails from "../views/BookDetails"

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
      path: "/details/:title",
      name: "BookDetails",
      component: BookDetails,
    },
  ],
})

export default router
