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
          "subtitle": "A majority of my professional experience has been in front end development. I have a particular interest in creating elegent and effortless websites and have naturally been drawn to working on user facing code.",
          "content": "Lorem ipsum dolor sit amet, mel dicit labores eleifend at. Quidam elaboraret voluptatibus eu vim. Dico tritani an sed, malis appareat volutpat ad eam, ad elitr dicant putent vis. Sea at docendi appareat. Iusto debitis perfecto sit et, id dolor sadipscing sed, et pri dicta corrumpit. No cum paulo noluisse petentium.",
          "pills": ["VueJS", "Webpack", "Javascript", "CSS/SASS"]
        },
        {
          "title": "Back End Development",
          "subtitle": "Te mei omnesque scriptorem, vim et indoctum praesent scripserit. Ex mea hinc dolores.",
          "content": "His id maiorum ocurreret deterruisset, pri te dicat ceteros, vis doctus deserunt at. Primis docendi persecuti vix no, mei ea wisi natum menandri. Ius novum ignota adversarium no, pri ne feugait facilisis consetetur, eu reprimique liberavisse pri. An nusquam fierent his, officiis.",
          "pills": ["NodeJS", "Express", "MongoDB"]
        },
        {
          "title": "Build Tools",
          "subtitle": "Te mei omnesque scriptorem, vim et indoctum praesent scripserit. Ex mea hinc dolores.",
          "content": "His id maiorum ocurreret deterruisset, pri te dicat ceteros, vis doctus deserunt at. Primis docendi persecuti vix no, mei ea wisi natum menandri. Ius novum ignota adversarium no, pri ne feugait facilisis consetetur, eu reprimique liberavisse pri. An nusquam fierent his, officiis.",
          "pills": ["Git", "Mocha", "NPM", "Supertest", "Gimp"]
        },
        {
          "title": "Project Management",
          "subtitle": "Te mei omnesque scriptorem, vim et indoctum praesent scripserit. Ex mea hinc dolores.",
          "content": "His id maiorum ocurreret deterruisset, pri te dicat ceteros, vis doctus deserunt at. Primis docendi persecuti vix no, mei ea wisi natum menandri. Ius novum ignota adversarium no, pri ne feugait facilisis consetetur, eu reprimique liberavisse pri. An nusquam fierent his, officiis.",
          "pills" : []
        }
      ];
      break;
    case "projects":
      return [
        {
          "title": 'Data On Politics',
          "subtitle": "A civic engagement tool and blog site",
          "content": "project content",
          "mainImageSrc": "dop.png",
          "galleryImages": ["dop_1.png","dop_2.png","dop_3.png"],
          "pills": ["Express", "Handlebars", "MongoDB", "AngularJS"]
        },
        {
          "title": 'Tier III Resources',
          "subtitle": "A content and tool SPA for a Tier III network group",
          "content": "project content",
          "mainImageSrc": "t3.png",
          "galleryImages": ["t3_1.png","t3_2.png","t3_3.png"],
          "pills": ["AngularJS", "PassportJS", "mySQL"]
        },
        {
          "title": 'Project Title III',
          "subtitle": "project subtitle",
          "content": "project content",
          "mainImageSrc": "sb0.png",
          "galleryImages": ["image1.jpg","image2.jpg","image3.jpg"],
          "pills": ["pill1", "pill2", "pill3"]
        }
      ];
      break;
    default:
      return null;
  }
};
