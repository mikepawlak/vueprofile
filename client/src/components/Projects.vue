<template>
  <section class="section project-section">
    <div class="container">
      <div class="box">
        <h2>Projects</h2>
        <p>Here are some personal projects I created to showcase which technologies I am comfortable with. Some are designed explicitly for this portfolio, others I built to solve problems I had or to explore parts of the industry I wasn’t familiar with. </p>
        <p>This website is also my most recent project and was built, full-stack, by me using Node, Express, Vue, SASS, and Webpack. The site in full is available on <a url="#">my github</a>.</p>
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
        showContent : true,
        focusedProject : {
          content: [],
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
    },
    closeFocusProject() {
      this.modal.isActive = false;
      this.modal.focusedProject = this.projects.createDefault();
      this.modal.showContent = true;
    },
    toggleContent() {
      this.modal.showContent = !this.modal.showContent;
    },
    getMoreIcon() {
      if (this.modal.showContent) {
        return `<i class="fas fa-angle-down"></i>`;
      } else {
        return `<i class="fas fa-angle-up"></i>`;
      }
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
  .project-container
    height: 250px
    background-size: cover !important
    padding: 0
    margin: 5px
    &:hover
      cursor: pointer
    .project-tile
      width: 100%;
      background-color: rgba(0,0,0,.5)
      color: #FFF
      flex-direction: column
      margin-right: 0px !important
      p
        text-align: center;
  .carousel-bottom-text
    top: auto
    color: #FFF
    background: rgba(0,0,0,.5)
    padding: 5px
    max-height: 100%
    overflow: scroll
  .modal-content
    .container
      width: 100%
  .hide-btn
    display: inline-block
  .hide-btn:hover
    cursor: pointer
    @media screen and (min-width: 769px)
      .modal-content
        max-height: calc(100vh - -3px)


</style>
