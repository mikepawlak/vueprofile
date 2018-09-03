<template>
  <section class="section project-section">
    <div class="container">
      <div class="box">
        <h2>Projects</h2>
        <p>Here are some personal projects I created to showcase which technologies I am comfortable with. Some are designed explicitly for this portfolio, others I built to solve problems I had or to explore parts of the industry I wasn’t familiar with. </p>
        <p></p>
      </div>
      <div class="project-wrapper box columns is-multiline is-paddingless" v-for="(project, i) in projects.projectArray">
        <div class="column">
          <h2 class="is-inline-block">{{project.title}}</h2>
          <p class="is-pulled-right">
            <a v-for="link in project.links" class="button is-medium tooltip" v-bind:data-tooltip="link.name" v-bind:href="link.path" target="_blank" v-html="link.icon"></a>
          </p>
          <p><em>{{project.subtitle}}</em></p>
          <p><a v-if="!project.isExpanded" @click="toggle(i)">more</a></p>
          <p><span v-for="pill in project.pills" class="tag is-rounded is-medium is-primary" style="margin: 2px">{{pill}}</span></p>
        </div>
        <div class="column is-one-quarter is-paddingless">
          <img class="" v-bind:src="'/public/uncomputed/projects/' + project.imageSrc" alt="project.title" >
        </div>
        <transition name="slide-fade">
          <div v-if="project.isExpanded" class="column is-12">
            <div v-html="project.content"></div>
            <p><a @click="toggle(i)">less</a></p>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';

class ProjectHelper {
  constructor() {
    this.projectArray = []
  }

  pushProjects(arr) {
    arr.map((x) => {
      x.isExpanded = false;
      this.projectArray.push(x);
    })
  }

  any() {
    return Object.keys(this.projectArray).length > 0 ? true : false;
  }
}
export default {
  data() {
    return {
      projects : new ProjectHelper
    }
  },
  methods: {
    toggle(i = 0) {
      this.projectsArray[i].isExpanded = !this.projectsArray[i].isExpanded;
      console.log("Worked");
    }
  },
  mounted() {
    this.$parent.changeText("projects");
    axios
      .get('/data/projects')
        .then(res => {
          this.projects.pushProjects(res.data);
          this.projectsArray = res.data;
      });
  }
}

</script>
<style lang='sass'>
  /*transition styles*/
  .slide-enter-active, .slide-leave-active
    transition: .3s

  .slide-enter, .slide-leave-to
    transform: translate(0, 100%)

  /*component styles*/
  .project-wrapper
    margin: 10px

</style>
