<template>
  <section class="section project-section">
    <div class="container">
      <div class="box">
        <h2>Projects</h2>
        <p>Projects subtext</p>
      </div>
      <div class="columns is-multiline">
        <div class="column is-one-third-desktop is-half-tablet" v-for="(project, i) in projects.get()">
          <div class="box project-container level is-mobile is-radiusless"
                v-bind:style="{ background: getBackground(project.mainImageSrc) }"
                @click="focusProject(i)">
              <div class="project-tile level-item">
                <p><b>{{project.title}}</b></p>
                <p><e{{project.subtitle}}</em></p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="modal" v-bind:class="{ 'is-active' : modal.isActive }">
        <div class="modal-background" @click="closeFocusProject()"></div>
        <div class="modal-content">
          <div class="container">
            <carousel :per-page="1" ref="carousel" :navigate-to="0">
              <slide v-for="img in modal.focusedProject.galleryImages">
                <figure class="image is-square">
                  <img v-bind:src="'/public/uncomputed/projects/' + img">
                </figure>
              </slide>
            </carousel>
            <div class="carousel-bottom-text is-overlay">
                <p>{{ modal.focusedProject.content }}</p>
            </div>
          </div>
        </div>
        <button class="modal-close is-large" aria-label="close" @click="closeFocusProject()"></button>
      </div>
    </div>
  </section>
</template>


<script>
import axios from 'axios';
import { Carousel, Slide } from 'vue-carousel';

class ProjectHelper {
  constructor() {
    this.projectArray = []
  }

  pushProjects(arr) {
    arr.map((x) => {
      this.projectArray.push(x);
    })
  }

  any() {
    return Object.keys(this.projectArray).length > 0 ? true : false;
  }

  createDefault() {
    return {
      content: "",
      galleryImages : ['default.png'],
      mainImgeSrc : 'default.png',
      pills : [],
      subtitle: "",
      title: ""
    };
  }

  get(index = -1) {
    return (this.projectArray[index]) ? this.projectArray[index] :  this.projectArray;
  }
}
export default {
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      projects : new ProjectHelper,
      modal : {
        isActive : false,
        focusedProject : {
          content: "",
          galleryImages : ['default.png'],
          mainImgeSrc : 'default.png',
          pills : [],
          subtitle: "",
          title: ""
        },
        activeImage: 0
      },
    }
  },
  methods: {
    getBackground(img) {
      return `url('/public/uncomputed/projects/${img}') center center`;
    },
    focusProject(index) {
      this.modal.focusedProject = this.projects.get(index);
      this.modal.isActive = true;
      console.log(this.$refs.carousel.pageCount);
    },
    closeFocusProject() {
      this.modal.isActive = false;
      this.modal.focusedProject = this.projects.createDefault();
    },
    slideChange(direction) {

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
  .project-container
    height: 250px
    background-size: cover !important
    padding: 0
    margin: 5px
    &:hover
      cursor: pointer
    .project-tile
      background-color: rgba(0,0,0,.5)
      color: #FFF
      flex-direction: column
      margin-right: 0px !important
  .carousel-bottom-text
    top: auto
    bottom: 64px
    color: #FFF
    background: rgba(0,0,0,.5)
    padding: 5px

</style>
