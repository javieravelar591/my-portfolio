import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    docker,
    blend,
    goldy,
    threejs,
    threadpool,
    wahoo
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Lifelong Learner",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Blend Interactive",
      icon: blend,
      iconBg: "#383E56",
      date: "June 2023 - Aug 2023",
      points: [
        "Developing and maintaining web applications using Javascript, C#, and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implemented monthly support to web applications.",
      ],
    },
    {
      title: "ML Research Assistant",
      company_name: "UMN Networking Lab",
      icon: goldy,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Collaborated with an team of 3 and utilized PyTorch and TensorFlow to develop and tune machine learning models.",
        "Collected LiDAR data for environment reconstruction and applied Nvidia ray-tracing technologies to simulate signal propagations.",
        "Individually collected and analyzed other researchers’ papers and presented applicable findings to research mentor.",
      ],
    },
  ];

  const projects = [
    {
      name: "ThreadPool",
      description:
        "ThreadPool is a social media platform I designed from the ground up using tools such as NodeJS, bcrypt, MySQL, and more. Users are able securely register accounts and login, create and edit new posts, and interact with other users' posts.",
      tags: [
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "MySQL",
          color: "green-text-gradient",
        },
        {
          name: "Pugs",
          color: "pink-text-gradient",
        },
      ],
      image: threadpool,
      source_code_link: "https://github.com/javieravelar591/thread-pool",
    },
    {
      name: "Wahoo Skate",
      description:
        "Wahoo Skate is a web application I created for a fictional skate shop. I designed both server-side and client-side using a number of different tools such as NodeJs, MySQL, PugJs, ExpressJs and more!",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "PugJS",
          color: "pink-text-gradient",
        },
      ],
      image: wahoo,
      source_code_link: "https://github.com/javieravelar591/wahoo-skate",
    },
  ];
  
  export { services, technologies, experiences, projects };