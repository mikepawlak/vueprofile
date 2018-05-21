<template>
  <section class="section contact-section">
    <div class="container">
      <div class="columns is-gapless">
        <div class="column">
          <div class="box">
            <h2>Get In Touch</h2>
            <p>
              <a class="button" href="tel:9206454654">
                <span class="icon">
                  <i class="fa fa-phone"></i>
                </span>
                <span>(920)645-4654</span>
              </a>
              <a class="button" href="mailto:mpawlak719@gmail.com">
                <span class="icon">
                  <i class="fa fa-envelope-open"></i>
                </span>
                <span>mpawlak719@gmail.com</span>
              </a>
          </p>
      </div>
     </div>
     <div class="column">
         <div class="box">
           <h2>Follow Me</h2>
           <p class="field">
             <a class="button is-medium tooltip" data-tooltip="Linkedin" href="https://www.linkedin.com/in/pawlak-mike/" target="_blank">
               <span class="icon">
                 <i class="fab fa-linkedin"></i>
               </span>
             </a>
             <a class="button is-medium tooltip" data-tooltip="Github" href="https://github.com/mikepawlak" target="_blank">
               <span class="icon">
                 <i class="fab fa-github"></i>
               </span>
             </a>
             <a class="button is-medium tooltip" data-tooltip="Medium" href="https://medium.com/@mpawlak719" target="_blank">
               <span class="icon">
                 <i class="fab fa-medium"></i>
               </span>
             </a>
             <a class="button is-medium tooltip" data-tooltip="Stack Overflow" href="https://stackoverflow.com/users/4869078/mpawlak" target="_blank">
               <span class="icon">
                 <i class="fab fa-stack-overflow"></i>
               </span>
             </a>
           </p>
         </div>
     </div>
   </div>
 </div>
  <div class="container">
    <div class="box">
      <h2 v-if="!submitted">Send Me A Message</h2>
      <form method="POST" action="/contact" @submit.prevent="onSubmit" @keydown="errors.clear($event.target.name)" v-if="!submitted">
        <div class="field">
          <label class="label">Name</label>
          <div class="control has-icons-left has-icons-right">
            <input
              v-bind:class="{ 'is-danger': errors.get('name') }"
              name="name" class="input" type="text" required
              placeholder="First Last" v-model="name">
            <span class="icon is-small is-left">
              <i class="far fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle" v-if="errors.get('name')"></i>
            </span>
          </div>
          <p class="help is-danger" v-text="errors.get('name')"></p>
        </div>
        <label class="label">Company Name</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" name="company" type="text" placeholder="Example Inc." v-model="company">
          <span class="icon is-small is-left">
            <i class="fas fa-building"></i>
          </span>
          <span class="icon is-small is-right is-danger">
            <i class="fas fa-exclamation-triangle" v-if="errors.get('company')"></i>
          </span>
          <p class="help" v-text="errors.get('company')"></p>
        </div>
        <label class="label">Email Address</label>
        <div class="control has-icons-left has-icons-right">
          <input v-bind:class="{ 'is-danger': errors.get('email') }" name="email" class="input" type="email" placeholder="Example@domain.com" v-model="email">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right" v-if="errors.get('email')">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
        <p class="help is-danger" v-text="errors.get('email')"></p>
        <label class="label">Subject</label>
        <div class="control">
          <input class="input" name="subject" type="text" placeholder="Why would you like to message me?" v-model="subject">
        </div>
        <p class="help is-danger" v-text="errors.get('subject')"></p>
        <label class="label">Message</label>
          <div class="control">
            <textarea v-bind:class="{ 'is-danger': errors.get('message') }" name="message" class="textarea" placeholder="What would you like to say?" v-model="message"></textarea>
            <p class="help is-danger" v-text="errors.get('message')"></p>
        </div>
          <p class="help is-danger" v-if="errors.get('internal')">Something went wrong, please reload the page and try again or just email me at <a href="mailto:mpawlak719@gmail.com">mpawlak719@gmail.com</a>.</p>
       <div class="control has-text-right">
          <button class="button is-primary" :disabled="errors.any()">
            SEND MESSAGE
          </button>
        </div>
      </form>
      <div v-if="submitted">
        <h2>Thank you for your interest</h2>
        <p>I will be contacting you shortly to follow up on your message.</p>
      </div>
    </div>
  </div>
</section>

</template>


<script>
import axios from 'axios';

class Errors {
  constructor() {
    this.errors = {};
  }

  get(field) {
    if (this.errors[field]) {
      return this.errors[field].msg;
        }
  }
  any() {
    return Object.keys(this.errors).length > 0 ? true : false;
  }
  load(err) {
    this.errors = err;
  }
  clear(field) {
    delete this.errors[field];
  }
};


export default {
  data() {
    return {
      name: "",
      company: "",
      email: "",
      subject: "",
      message: "",
      errors: new Errors,
      submitted: false
    };
  },
  methods: {
    onSubmit() {
      axios.post('/contact', this.$data)
        .then(res =>{ this.submitted = true; })
        .catch(err => this.errors.load(err.response.data.errors));
    }
  },
  mounted() {
    this.$parent.changeText("contact");
  }
}

</script>

<style lang='sass'>
  .contact-section
    h2
      font-size: 22px
    .box
      height: 100%
    .fa
      color: #000844
    .fa-linkedin
      color: #0077b5
    .fa-medium
      color: #03a87c
    .fa-stack-overflow
      color: #f48024
    form .icon.is-right
      color: #ef5b1f
</style>
