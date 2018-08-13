/*this project has very little data that will change very infrequently
  so I decided to store the data as JS objects in JSON format on the server
  itself. To scale out I would move to a document oriented model like
  MongoDB (unless there was a reason relational data structures better
  fit my needs) and set this module up to instead contain DB interaction
  utilities.
*/

module.exports = function(dataSet) {
  switch (dataSet) {
    case "skills":
      return [
        {
          "title": "Front End Development",
          "subtitle": "A substantial amount of my experience is in front end development, both due to an interest in creating elegant user interfaces and the nature of the positions I’ve held.",
          "content": "I have years of experience writing the front end of several kinds of web applications; with and without frameworks, full sites and plugins, design oriented work and technical work. I am very familiar with JavaScript; starting my web development career with native JavaScript and JQuery, I moved into AngularJS to build larger scale SPA’s. Today I write a lot of framework agnostic native JS at work and with Vue.JS and webpack at home. I’m comfortable with both CSS and SASS and have worked with several design libraries. I sort of skipped React, as I liked the way VueJS worked as a smarter, more modern version of AngularJS but have focused recently on learning it in my personal time.",
          "pills": ["VueJS", "Webpack", "Javascript", "ES6/7", "Bulma", "Bootstrap", "MDL/Angular Material", "CSS/SASS"]
        },
        {
          "title": "Back End Development",
          "subtitle": "I have spent most of my development career writing front-end code but I also have an amount of experience with server side development, primarily with NodeJS and PHP, though I’ve dabbled in other stacks including DJango and Rails.",
          "content": "Most of my back end experience is in simply serving up web pages and connecting them to a database. This I can do in several stacks including Node and PHP. I have experience in more complex programming concepts using Node such as APIs, user authentication, data fetching (both from API hooks and crawling pages), parsing and manipulating, building command line tools, BDD/TDD, and server-side rendering with tools like Handlebars, Pug, and Blade. I currently use a proprietary MVC PHP framework during work hours but also have experience using a Laravel based stack. I am familiar with package managers such as NPM and Composer, again being able to set up and automate more complex tasks using NPM than other languages’ managers.",
          "pills": ["NodeJS", "Express", "MongoDB", "MySQL", "Handlebars/Pug", "Blade", "PHP", "Laravel", "PassportJS and JWTs"]
        },
        {
          "title": "Dev Ops",
          "subtitle": "Through school and personal projects, I’ve had to overcome many problems of the DevOps world. I certainly wouldn’t say I’m well versed in DevOps but I have several basic skills.",
          "content": "While I’m certainly not a DevOps Engineer, I am familiar with a lot of build tools and peripherals. I have a basic understanding of navigating and manipulating linux environments and have launched servers on several personal projects. I’m familiar with version control with Git, SSH and FTP with a number of tools and several “DevOps-y” processes and programs.",
          "pills": ["Git", "SSH/FTP", "HTTP/HTTPS", "Linux Administration", "NGinx", "PM2"]
        },
        {
          "title": "Project Management",
          "subtitle": "While I made this site to showcase my technical skills, soft skills can be just as important to a developer as technical ones are. I have a strong background in communicating with clients and leading and working with teams.",
          "content": "I grew up as a fairly shy and quiet kid, as most people willing to sit in front of a computer for hours on end can relate to. Because of this I have paid particular attention to the development of my communication skills. I seek out responsibilities that include a public speaking, mentorship, or management component and therefore am very comfortable working with people. This translates to the ability to engage in communication effectively in several settings, both as a leader and follower.",
          "pills" : ["Timeline Development", "Client Communications", "Training and Mentorship", "Public Speaking", "Meeting Management"]
        }
      ];
      break;
    case "projects":
      return [
        {
          "title": 'D&D PDF Reader',
          "subtitle": "A cli tool to read pdf character sheets and generate statblocks",
          "content": `<p>This is a project I created recently that takes a pdf created from this Dungeons &amp; Dragons character generator and creates what a web-based compressed view called a statblock.</p>
                      <p>I used the pdf2json library and the node fs utility to take in a path fed via the command line and create an object with the data. I then spawn a child process to open a web browser and serve the data with a simple local server and handlebars. I use commander to generate terminal commands and Chai for testing.</p>
                      <p>I plan on expanding this tool to generate blocks from several types of pdfs, at first directed by a command line argument, then by testing data generated by the parse. I also would like to create the ability to drag and drop pdfs to the served webpage and have other clients connect and generate blocks over a local network.</p>
                      <p><a class='button is-medium tooltip' data-tooltip='Github' href='https://github.com/mikepawlak' target='_blank'><span class='icon'><i class='fab fa-github'></i></span></a></p>`,
          "mainImageSrc": "dnd.png",
          "galleryImages": ["dnd1.png","dnd2.png"],
          "pills": ["NodeJS", "TDD", "Handlebars"]
        },
        {
          "title": 'Javascript Pong',
          "subtitle": "A simple pong game written in JavaScript",
          "content" : `<p> I created this basic browser game to run neural networks using Brain.js. Unfortunately, so far, I have been unable to train a machine learning player but the environment is still a pretty fun pong game. Since this game hasn&rsquo;t been created with the express purpose of being a user-facing game, it only currently works in desktop. I set up a computer vs computer demo for mobile.  </p>
                       <p> I used the P5 canvas game library and webpack on top of a simple express server. I decided to go with material design concepts in creating the environment since I like the aesthetic. In the future I would love to have a well trained network to have users play against and create mobile player support.  </p>
                       <p><a class='button is-medium tooltip' data-tooltip='Github' href='https://github.com/mikepawlak' target='_blank'><span class='icon'><i class='fab fa-github'></i></span></a> <a class='button is-medium tooltip' data-tooltip='Live Demo' href='https://github.com/mikepawlak' target='_blank'><span class='icon'><i class='fas fa-file'></i></span></a></p>`,
          "mainImageSrc": "pong.png",
          "galleryImages": ["dnd1.png","dnd2.png"],
          "pills": ["Webpack", "P5", "Express"]
        },
        {
          "title": 'Data On Politics',
          "subtitle": "A civic engagement tool and blog site",
          "content": "<p>Data On Politics was a site I created during a semester break that consisted of several tools and a blog dedicated to political information and news using a classic MEAN setup. I combined datasets found in public data and legislative APIs, Wikipedia, and Google’s Knowledge Graph API to gather data and display by the state that the user entered. I took down the site fairly quickly as it became difficult to maintain but the full code is available on <a href=””>Github</a>. </p><p> <a class='button is-medium tooltip' data-tooltip='Github' href='https://github.com/mikepawlak' target='_blank'><span class='icon'><i class='fab fa-github'></i></span></a></p>",
          "mainImageSrc": "dop.png",
          "galleryImages": ["dop_1.png","dop_2.png","dop_3.png"],
          "pills": ["Express", "Handlebars", "MongoDB", "AngularJS"]
        }
      ];
      break;
    default:
      return null;
  }
};
