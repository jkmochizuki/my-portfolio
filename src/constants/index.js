export const menuOptions = [
  { name: "Home", to: "#home" },
  { name: "Skills", to: "#skills" },
  { name: "Projects", to: "#projects" },
  { name: "About", to: "#about" },
  { name: "Contact", to: "#contact" },
];

export const skills = [
  { name: "JavaScript", class: "devicon-javascript-plain colored" },
  { name: "Ruby", class: "devicon-ruby-plain colored" },
  { name: "Node.js", class: "devicon-nodejs-plain colored" },
  {
    name: "Express.js",
    src: "https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png",
  },
  { name: "Rails", class: "devicon-rails-plain-wordmark colored" },
  { name: "HTML", class: "devicon-html5-plain colored" },
  { name: "CSS", class: "devicon-css3-plain colored" },
  { name: "jQuery", class: "devicon-jquery-plain colored" },
  { name: "React", class: "devicon-react-original colored" },
  { name: "MUI", class: "devicon-materialui-plain colored" },
  { name: "SASS", class: "devicon-sass-original colored" },
  { name: "Bootstrap", class: "devicon-bootstrap-plain colored" },
  {
    name: "SQL",
    src: "https://img.icons8.com/?size=512&id=vAJD4bPPf091&format=png",
  },
  { name: "PostgreSQL", class: "devicon-postgresql-plain colored" },
  {
    name: "Prisma",
    src: "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png",
  },

  { name: "Mocha", class: "devicon-mocha-plain colored" },
  { name: "Jest", class: "devicon-jest-plain colored" },
  { name: "Storybook", class: "devicon-storybook-plain colored" },

  { name: "Socket.IO", class: "devicon-socketio-original" },
];

export const projects = [
  {
    name: "Codi",
    image: "/images/codi-project.png",
    about:
      "A coding-oriented flashcards app to help developers and students retain languages and frameworks concepts effectively.",
    stack:
      "React, Axios, Node.js, Express.js, Prisma, PostgreSQL, Auth0, OpenAI API, Material UI.",
    live: "https://codi-app.netlify.app",
    repo: "https://github.com/PavelKotlov/codi-client",
  },
  {
    name: "Scheduler",
    image: "/images/scheduler-project.png",
    about:
      "React scheduler application that allows users to book and cancel interviews.",
    stack: "React, Axios, Storybook, Cypress, Jest.",
    live: "https://interviewscheduler-app.netlify.app/",
    repo: "https://github.com/jkmochizuki/scheduler",
  },
  {
    name: "TinyApp",
    image: "/images/tinyapp-project.png",
    about: "Web application that allows users to shorten long URLs.",
    stack: "Node.js, Express.js, EJS",
    live: "https://tinyapp.herokuapp.com/",
    repo: "https://github.com/jkmochizuki/tinyapp",
  },

  {
    name: "Tweeter",
    image: "/images/tweeter-project.png",
    about: "A simple, single-page Twitter clone.",
    stack: "Express.js, Node.js, jQuery, PostgreSQL.",
    live: "",
    repo: "https://github.com/jkmochizuki/tweeter",
  },
];
