<template>
  <section class="section skill-section">
    <div class="container">
      <div class="box">
        <h2 id="top">My Skills</h2>
        <p>Most of my experience has been in front end development, including in modern frameworks such as <strong>VueJS</strong> and with modern build tools such as <strong>Webpack</strong>. However I’m just as comfortable working with <strong>native JavaScript</strong> as I am inside of a framework. My back end experience is primarily in <strong>NodeJS</strong>, where I have worked extensively both on webservers with <strong>Express</strong> and writing web based tools for tasks like <strong>data management and analysis</strong>, <strong>task automation</strong>, and <strong>APIs</strong>. I have also spent some time working with other languages such as <strong>PHP</strong>. </p>
        <hr class="is-hidden-desktop">
        <ul class="is-hidden-desktop">
          <li v-for="skill in skillsArray"><a :href="'#' + createLinkId(skill.title)">{{ skill.title }}</a></li>
        </ul>
      </div>
      <div class="box" v-for="(skill, i) in skillsArray">
        <h3 :id="createLinkId(skill.title)">{{ skill.title }}</h3>
        <p><em>{{ skill.subtitle }}</em></p>
        <img class="skill-img is-pulled-right" v-bind:src="'/public/uncomputed/skills/' + getImg(i) + '.png'" v-bind:alt="getImg(i)">
        <p>{{ skill.content }}</p>
        <p class="tags"><span class="tag is-rounded is-medium is-primary" v-for="pill in skill.pills">{{ pill }}</span></p>
        <a class="is-hidden-desktop" href="#top">back to top</a>
      </div>
    </div>
  </section>

</template>


<script>
import axios from 'axios';

export default {
  data() {
    return {
      skillsArray: []
    };
  },
  methods : {
    createLinkId(title) {
      return title.replace(/ /g,"_");
    },
    getImg(index) {
      let imgArray = ['frontend', 'backend', 'devops', 'projectManagement'];

      return imgArray[index];
    }
  },
  mounted() {
    this.$parent.changeText("skills");
    axios
      .get('/data/skills')
        .then(res => {
          this.skillsArray = res.data;
      });
  }
}

</script>

<style lang='sass'>
  .box hr
    background-color: #999
  .skill-img
    border-radius: 50%
    max-width: 300px
    width: 20%
    margin: 10px
    shape-outside: circle()

  @media screen and (max-width: 600px)
    .skill-img
      width: 30%
      float: none !important
      margin: 0px auto
      display: block
  @media screen and (min-width: 1250px)
    .skill-img
      max-width: 150px
</style>
