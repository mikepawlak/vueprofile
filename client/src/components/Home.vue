<template>
  <section class="section home-section">
    <div class="container">
      <div class="box">
        <h1>Mike Pawlak - Web Developer</h1>
        <img src="/public/dist/me.jpg" alt="Mike Pawlak"/>
        <p>I am a web developer in the Appleton area with about three years of professional experience that works primarily with Javascript - both front end and back end.</p>
        <p>I've also worked with PHP and have dabbled in several languages including Python, and R. I have experience in design, including creating mockups, style guides, and image and icon creation and experience in leadership roles, including mentorship, training, and project management.</p>
        <h2>Skills</h2>
        <p>My skill set is focused around full stack Javascript development. I am well versed in NodeJs, including Node 8 features, and am comfortable working in Node with several stacks. While I am very comfortable using native JS, I prefer to work in more modern frameworks, having used AngularJS for several years and recently moving to VueJS. I also have some experience with other languages including PHP and R.</p>
        <p><strong>Click <router-link tag="a" to="/skills">here</router-link> to learn more about my skills.</strong></p>
        <h2>Projects</h2>
        <p>I've highlighted several projects on this page that show my growth and areas of interest. While this isn't an exhaustive list, I think it shows my strengths both in development and design for the web.</p>
        <p><strong>Click <router-link tag="a" to="/projects">here</router-link> to see my projects</strong></p>
        <hr/>
        <h2 class="has-text-centered"><router-link tag="a" to="/contact">Click here to get in touch</router-link></h2>
      </div>
    </div>
  </section>

</template>


<script>
  export default {
    mounted() {
      console.log("Home mounted");
      this.$parent.changeText("home");
    }
  }

</script>
<style lang="sass">
.home-section
  img
    width: 40%
    -webkit-box-shadow: 2px 2px 2px #999
    box-shadow: 2px 2px 2px #999
    border-radius: 50%
    margin: 5px
    float: right
    -webkit-shape-outside: circle()
    shape-outside: circle()
  hr
    background-color: #999
    height: 2px;
</style>
