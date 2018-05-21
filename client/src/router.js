import VueRouter from 'vue-router';


  const routes = [
    {
      path: "/",
      component: require("./components/Home.vue").default
    },
    {
      path: "/skills",
      component: require("./components/Skills.vue").default
    },
    {
      path: "/projects",
      component: require("./components/Projects.vue").default
    },
    {
      path: "/contact",
      component: require("./components/Contact.vue").default
    },
    {
      path: "*",
      component: require("./components/NotFound.vue").default
    }

  ];

export default new VueRouter({
  routes,

  linkActiveClass: 'is-active'
});
