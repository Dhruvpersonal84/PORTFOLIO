import bootstrap from "../src/tech_logo/bootstrap.png";
import css from "../src/tech_logo/css.png";
import docker from "../src/tech_logo/docker.png";
import expressjs from "../src/tech_logo/express.png";
import git from "../src/tech_logo/git.png";
import github from "../src/tech_logo/github.png";
import html from "../src/tech_logo/html.png";
import java from "../src/tech_logo/java.png";
import javascript from "../src/tech_logo/javascript.png";
import kubernets from "../src/tech_logo/kubernets.png";
import materialui from "../src/tech_logo/materialui.png";
import mc from "../src/tech_logo/mc.png";
import mongodb from "../src/tech_logo/mongodb.png";
import mysql from "../src/tech_logo/mysql.png";
import nextjs from "../src/tech_logo/nextjs.png";
import nodejs from "../src/tech_logo/nodejs.png";
import postman from "../src/tech_logo/postman.png";
import reactjs from "../src/tech_logo/reactjs.png";
import redux from "../src/tech_logo/redux.png";
import tailwindcss from "../src/tech_logo/tailwindcss.png";
import vscode from "../src/tech_logo/vscode.png";

/*Experience section */
import ardent from "../src/company_logo/ardent.png";
import Doordarshan from "../src/company_logo/Doordarshan.png";

/*Projects section */
import Stock from "../src/project_logo/Stockwebsite.png";
import AI from "../src/project_logo/AIApp.jpeg";

/*Education logo*/
import college from "../src/education_logo/college.png"
import school1 from "../src/education_logo/1st.jpg"
import school2 from "../src/education_logo/2nd.jpg"



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: html },
      { name: 'CSS', logo: css },
      { name: 'JavaScript', logo: javascript },
      { name: 'React JS', logo: reactjs },
      { name: 'Redux', logo: redux },
      { name: 'Next JS', logo: nextjs },
      { name: 'Tailwind CSS', logo: tailwindcss },
      { name: 'Material UI', logo: materialui },
      { name: 'Bootstrap', logo: bootstrap },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejs },
      { name: 'Express JS', logo: expressjs },
      { name: 'MySQL', logo: mysql },
      { name: 'MongoDB', logo: mongodb },
      { name: 'Mongoose', logo: mc },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: java },
      { name: 'JavaScript', logo: javascript },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: git },
      { name: 'GitHub', logo: github },
      { name: 'VS Code', logo: vscode },
      { name: 'Postman', logo: postman },
      { name: 'Docker', logo: docker },
      { name: 'Kubernets', logo: kubernets },
      
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: ardent,
      role: "Fullstack Developer",
      company: "Ardent Computech Pvt.ltd",
      date: "Jan 2024 - Mar 2024",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    },
    {
      id: 1,
      img: Doordarshan,
      role: "Television Engineering",
      company: "Doordarshan Kendra",
      date: "Oct 2024 - Nov 2024",
      desc: "Hands-on training in TV broadcasting, studio operations, AV signal transmission, and broadcast equipment handling under senior engineers.",
    },
  ];

  export const education = [
    {
      id: 1,
      img: college,
      school: "Future Institute Of Engineering and Management, Kolkata",
      date: "Aug 2021 - July 2025",
      grade: "70.2%",
      desc: "I completed my Bachelor's degree in Electronics and Communication Engineering (B.Tech) from FIEM College, Kolkata. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of Electronics and as well as computing. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at FIEM College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Technology - B.tech (Electronics and Communication)",
    },
    {
      id: 2,
      img: school2,
      school: "St.Joseph and Mary's School, Kolkata",
      date: "May 2020 - July 2021",
      grade: "72.5%",
      desc: "I completed my class 12 education from St.Joseph and Mary's School, Kolkata, under the ISC board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "ISC(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: school1,
      school: "Purushottam Bhagchandka Academic School, Kolkata",
      date: "Feb 2018 - Apr 2019",
      grade: "62.5%",
      desc: "I completed my class 10 education from Purushottam Bhagchandka Academic School, Kolkata, under the ICSE board, where I studied Science.",
      degree: "ICSE(X), Science",
    },
  ];

export const projects = [
    {
      id: 0,
      title: "Stock Market Application",
      description:
        "Built a stock market web application enabling real-time stock tracking, portfolio management, and market analysis Integrated third-party APIs for live and historical stock data, implemented secure authentication, and visualized trends using interactive charts Tech Stack: React.js, Node.js, Express.js, MongoDB, REST APIs",
      image: Stock,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "Node","Express","MongoDB"],
      github: "https://github.com/Dhruvpersonal84/STOCK-APPLICATION-WEBSITE",
      webapp: "https://stock-application-website.vercel.app/",
    },
    {
      id: 1,
      title: "AI chat Application",
      description:
        "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
      image: AI,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Dhruvpersonal84/AI_chat_websie",
      webapp: "https://ai-chat-websie.vercel.app/",
    },
    
  ];