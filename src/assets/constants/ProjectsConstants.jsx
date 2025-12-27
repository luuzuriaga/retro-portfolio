import NewsExplorerImg from "../projects/news-explorer.png";
import geekstore from "../projects/geekstore.png";
import AroundTheUS from "../projects/around-the-us.png";
import PortfolioImg from "../projects/portfolio.png";
import fokus from "../projects/fokus.png";

export const projects = [
    {
      id: 1,
      title: 'News Explorer Website',
      description:
        'Developed a React-based web application that allows users to search, filter, and save news articles in real time by consuming data from an external API. The project focuses on usability, accessibility, and a clean user-centered interface.',
      techStack: ["HTML", "CSS", "JavaScript", "React", "REST API", "NewsAPI"],
      img: NewsExplorerImg,
      colorClass: 'blue-400',
      link: 'https://news-explorer-frontend-lac.vercel.app/',
    },
    {
      id: 2,
      title: 'Around The US - Website',
      description:
        'Around the US is a dynamic React application featuring a responsive photo wall where users can manage profile information and interact with cards through a REST API. The project implements Context API for state management and utilizes custom CSS modals to deliver a seamless, interactive user experience.',
      techStack: ['React', 'Vite', 'Javascript', 'Rest API'],
      img: AroundTheUS,
      colorClass: 'stone-400',
      link: 'https://around-the-us-web.vercel.app/',
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description:
        'A personal portfolio website to showcase my work, design thinking, and skills. Designed with a user-centered approach, intuitive navigation, and responsive design.',
      techStack: ['React', 'Javascript','Framer Motion'],
      img: PortfolioImg,
      colorClass: 'amber-400',
      link: 'https://portfoliolu.vercel.app/',
    },
    {
      id: 4,
      title: 'Geek Store',
      description:
        'This project is a web page designed for a commercial store, with a focus on a clear structure and a modern design, using a Fake API approach.',
      techStack: ['Javascript', 'CSS', 'API', 'Json'],
      img: geekstore,
      colorClass: 'orange-400',
      link: 'https://geek-store-web.vercel.app/',
    },
    {
      id: 5,
      title: 'Fokus',
      description:
        'Fokus is a Pomodoro-style web application/game, lightweight and built with HTML, CSS, and JavaScript. It is designed to run directly in the browser without a backend.',
      techStack: ['Javascript', 'CSS3' ],
      img: fokus,
      colorClass: 'orange-400',
      link: 'https://luuzuriaga.github.io/fokus/',
    },
  ];