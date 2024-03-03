import project1 from '../../public/images/projects/grandeur.png';
import project2 from '../../public/images/projects/8doors.png';
import project3 from '../../public/images/projects/expensable.png';
import project4 from '../../public/images/projects/bookstore.png';
import project5 from '../../public/images/projects/bloowatch.png';
import project6 from '../../public/images/projects/themusical.png';
import project7 from '../../public/images/projects/todo.png';
import project8 from '../../public/images/projects/spacex.png';
import project9 from '../../public/images/projects/mathmagicians.png';
import project10 from '../../public/images/projects/gameleadership.gif';
import project11 from '../../public/images/projects/cryptomaster.png';

const projectData = [
  {
    title: 'Grandeur',
    summary:
      'A sophisticated Real Estate platform designed to seamlessly connect buyers and sellers, streamlining the process of booking check-up visits to captivating properties.',
    type: 'Ruby on Rails & React Project',
    link: 'https://grandeur-tx4o.onrender.com/',
    github: 'https://github.com/Elerqsousy/grandeur-backend',
    img: project1,
    skills: [
      'Ruby-on-Rails',
      'PostgreSQL',
      'React',
      'Redux',
      'Typescript',
      'Bootstrap',
      'TailwindCSS',
    ],
  },
  {
    title: '8doors',
    summary:
      '8doors is a template to be used for development. It is also ment to be a platform for doctors and clinics, where you can communicate, connect, and see feed of each doctor, and connect with clinic as a doctor and preserve your appoinments.',
    type: 'Next.js Project',
    link: 'https://drive.google.com/file/d/1Z2vLvXo7yNDr-q3I2Xbdlzftt-E0HBs8/view?usp:share_link',
    github: 'https://github.com/Elerqsousy/8doors',
    img: project2,
    skills: ['Next.js', 'Redux Toolkit', 'Context Api', 'TailwindCSS'],
  },
  {
    title: 'Expensable',
    summary:
      'A Mobile-based Web Application for expense categorization and tracking. It helps users to keep track of their expenses and incomes, and to manage their budgets.',
    type: 'Ruby on Rails Project',
    link: 'https://expensable.onrender.com/',
    github: 'https://github.com/Elerqsousy/ror_fintech',
    small: true,
    img: project3,
    skills: ['Ruby-on-Rails', 'PostgreSQL', 'Device', 'CanCanCan', 'Bootstrap'],
  },
  {
    title: 'Bookstore',
    summary:
      'This is a simple SPA, single pgae application for a bookstore app. Users can add and save books with book name, author name, category, and progress. They can also search and categorize books according to their categories.',
    type: 'React Project',
    link: 'https://chimerical-daifuku-2e3358.netlify.app/',
    github: 'https://github.com/Elerqsousy/bookstore/',
    small: true,
    img: project4,
    skills: ['React.js', 'Redux', 'Open-source Restful API', 'Sass'],
  },

  {
    title: 'bloowatch',
    type: 'Next.js Project',
    link: 'https://drive.google.com/file/d/18ocJTP93TDdF3mJ6UlUCCO55E6aE4B6S/view?usp:share_link',
    github: 'https://github.com/Elerqsousy/next-app-cart',
    small: true,
    img: project5,
    skills: ['React.js', 'Redux Toolkit', 'Context API', 'TailwindCSS'],
  },
  {
    title: 'The Musical',
    summary:
      "An imaginary musical yearly event that features event details and star singers. It's built with a responsive design.",
    type: 'JavaScript Project',
    link: 'https://elerqsousy.github.io/musical-concert-page/',
    github: 'https://github.com/Elerqsousy/musical-concert-page',
    small: true,
    img: project6,
    skills: ['JS', 'HTML5', 'Webpack', 'CSS3', 'GitHub Pages'],
  },
  {
    title: 'To Do List',
    summary:
      'A simple To Do List online application that allows users to save, and manipulate their to-dos, and save their list when application is closed.',
    type: 'JavaScript Project',
    link: 'https://elerqsousy.github.io/to-do-list/',
    github: 'https://github.com/Elerqsousy/to-do-list',
    small: true,
    img: project7,
    skills: ['JS', 'HTML5', 'Webpack', 'CSS3', 'GitHub Pages'],
  },
  {
    title: 'Math Magicians',
    summary:
      'This is a simple SPA for a caluculator. It consists of 3 pages; Home: with an intro about the app, Calculator: were users can have access to a fully fledged calculator and a Quote page.',
    type: 'React Project',
    link: 'https://fancy-khapse-193ed3.netlify.app/',
    github: 'https://github.com/Elerqsousy/calculator-spa',
    small: true,
    img: project9,
    skills: ['React', 'ECMA-5 JS', 'CSS3', 'Netlify'],
  },
  {
    title: 'Game LeaderShip Board',
    summary:
      'A simple design for a leaderboard list. All data are stored on Leaderboard API. Upon page load, List of scores get updated from the API. Upon submitting names and scores, names are added to the list of game scores on the API. Upon clicking refresh, list of names are updated and displayed.',
    type: 'JavaScript Project',
    link: 'https://elerqsousy.github.io/leaderboard-api',
    github: 'https://github.com/Elerqsousy/leaderboard-api',
    small: true,
    img: project10,
    skills: ['JS', 'HTML5', 'Webpack', 'CSS3', 'GitHub Pages'],
  },
  {
    title: 'Crypto Master',
    summary:
      'This is a simple SPA for a caluculator. It consists of 3 pages; Home: with an intro about the app, Calculator: were users can have access to a fully fledged calculator and a Quote page.',
    type: 'React Project',
    link: 'https://adorable-creponne-58a432.netlify.app/',
    github: 'https://github.com/Elerqsousy/crypto-master',
    small: true,
    img: project11,
    skills: ['React', 'ECMA-6 JS', 'CSS3', 'Netlify'],
  },

  {
    title: 'Space X',
    summary:
      'This is an application to reservce space rockets and mission. The Rockets section displays a list of all available SpaceX rockets. Users can book each rocket by clicking the reservation button or cancel the previously made booking. The Missions section displays a list of current missions along with their brief description and participation status. There is also a button next to each mission that allows users to join the selected mission or leave the mission the user joined earlier. The My Profile section displays all reserved rockets and space missions.',
    type: 'React Project',
    link: 'https://gorgeous-melba-746edd.netlify.app/',
    github: 'https://github.com/Elerqsousy/spacex',
    small: true,
    img: project8,
    skills: [
      'React',
      'Redux Toolkit',
      'ECMAScript-6',
      'Open-source Restful API',
      'CSS3',
    ],
  },
];

export default projectData;
