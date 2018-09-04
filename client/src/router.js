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
    }
  ];

export default new VueRouter({
    mode: 'history',
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            console.log(to.hash);
            return {selector: to.hash}
        } else {
            return { x: 0, y: 0 }
        }
    },
  routes,

  linkActiveClass: 'is-active'
});
