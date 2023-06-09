export const menuOptions = [
  { name: 'Home', to: '#home' },
  { name: 'Skills', to: '#skills' },
  { name: 'Projects', to: '#projects' },
  { name: 'About', to: '#about' },
  { name: 'Contact', to: '#contact' },
];

export const skills = [
  { name: 'JavaScript', class: 'devicon-javascript-plain colored' },
  { name: 'Ruby', class: 'devicon-ruby-plain colored' },
  { name: 'Node.js', class: 'devicon-nodejs-plain colored' },
  {
    name: 'Express.js',
    src: 'https://img.icons8.com/?size=512&id=WNoJgbzDr3i2&format=png',
  },
  { name: 'Rails', class: 'devicon-rails-plain-wordmark colored' },
  { name: 'HTML', class: 'devicon-html5-plain colored' },
  { name: 'CSS', class: 'devicon-css3-plain colored' },
  { name: 'jQuery', class: 'devicon-jquery-plain colored' },
  { name: 'React', class: 'devicon-react-original colored' },
  { name: 'MUI', class: 'devicon-materialui-plain colored' },
  { name: 'SASS', class: 'devicon-sass-original colored' },
  { name: 'Bootstrap', class: 'devicon-bootstrap-plain colored' },
  {
    name: 'SQL',
    src: 'https://img.icons8.com/?size=512&id=vAJD4bPPf091&format=png',
  },
  { name: 'PostgreSQL', class: 'devicon-postgresql-plain colored' },
  {
    name: 'Prisma',
    src: 'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_light_prisma_icon_130444.png',
  },

  { name: 'Mocha', class: 'devicon-mocha-plain colored' },
  { name: 'Jest', class: 'devicon-jest-plain colored' },
  { name: 'Storybook', class: 'devicon-storybook-plain colored' },

  { name: 'Socket.IO', class: 'devicon-socketio-original' },
];

export const projects = [
  {
    name: 'Amazin',
    image: '/images/amazin-project.png',
    about:
      'Amazin is a web application aimed at replicating the core functionalities and features of the e-commerce platform, Amazon.',
    stack:
      'Axios, Node.js, Express.js, Prisma, PostgreSQL, React, Redux, Bootstrap, Stripe.js, CryptoJS, Bcrypt.',
    live: 'https://amazin-app.netlify.app/',
    repo: 'https://github.com/julianamochizuki/amazin',
  },
  {
    name: 'Codi',
    image: '/images/codi-project.png',
    about:
      'A coding-oriented flashcards app that uses spaced repetition algorithm to help developers and students retain concepts effectively.',
    stack:
      'Axios, Node.js, Express.js, Prisma, PostgreSQL, React, Auth0, OpenAI API, Material UI.',
    live: 'https://codi-app.netlify.app',
    repo: 'https://github.com/PavelKotlov/codi-client',
  },
  {
    name: 'Scheduler',
    image: '/images/scheduler-project.png',
    about:
      'React scheduler application that allows users to book and cancel interviews.',
    stack: 'Axios, React, Storybook, Cypress, Jest.',
    live: 'https://interviewscheduler-app.netlify.app/',
    repo: 'https://github.com/julianamochizuki/scheduler',
  },
  {
    name: 'TinyApp',
    image: '/images/tinyapp-project.png',
    about: 'Web application that allows users to shorten long URLs.',
    stack: 'Node.js, Express.js, EJS',
    live: 'https://tinyapp.herokuapp.com/',
    repo: 'https://github.com/julianamochizuki/tinyapp',
  },
  {
    name: 'Tweeter',
    image: '/images/tweeter-project.png',
    about: 'A simple, single-page Twitter clone.',
    stack: 'Node.js, Express.js, PostgreSQL, jQuery.',
    live: '',
    repo: 'https://github.com/julianamochizuki/tweeter',
  },
];
