import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import bulma from 'bulma';
import style from './main.sass';
import bkg from './assets/header-background.jpg';
import me from './assets/me.jpg';
import loading from './assets/loading.gif';


import Typed from 'vue-typer';

Vue.use(VueRouter);
Vue.use(Typed);


import router from './router.js'


new Vue({
  el: '#app',
  router,
  Typed,
  data: {
    typed_text : []
  },
  methods: {
    changeText(child) {
       switch(child){
        case "home":
          this.typed_text = ["Web Developer"];
          break;
        case "skills":
          this.typed_text = ["Front End Development", "Back End Development", "Behavior Driven Development", "Full-Stack Development"];
          break;
        case "projects":
          this.typed_text = ["NodeJS", "SASS/SCSS", "Webpack", "VueJS"];
          break;
        case "contact":
          this.typed_text = ["Send me an email", "Give me a call", "Follow me on Github", "Get in touch"];
          break;
        default:
          this.typed_text = ["Web Developer"];
        }
    }
  },
  mounted() {
    console.log("main ready");
  }
})
