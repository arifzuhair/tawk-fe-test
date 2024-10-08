import Vue from "vue";
import Router from "vue-router";
import Category from "./views/CategoryHome.vue";
import CategorySlug from "./views/CategorySlug.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Category,
    },
    {
      path: "/category/:slug",
      name: "CategorySlug",
      component: CategorySlug,
      props: true,
    },
  ],
});
