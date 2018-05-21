<template>
  <section class="section skill-section">
    <div class="container">
      <div class="box">
        <h2>My Skills</h2>
        <p>Sub title about skills</p>
      </div>
      <div class="box" v-for="skill in skillsArray">
        <h3>{{ skill.title }}</h3>
        <p><em>{{ skill.subtitle }}</em></p>
        <p>{{ skill.content }}</p>
        <p class="tags"><span class="tag is-rounded is-medium is-primary" v-for="pill in skill.pills">{{ pill }}</span></p>
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

</style>
