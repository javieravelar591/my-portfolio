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
    globalPayments,
    threejs,
    switchApp,
    javiGG
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
      title: "Software Engineer",
      company_name: "Global Payments Inc",
      icon: globalPayments,
      iconBg: "#E6DEDD",
      date: "Aug 2024 - Present",
      points: [
        "Led frontend migration of merchant portal to the Vega design system, redesigning core pages for 300K+ users.",
        "Contributed to the migration of 40K+ users from legacy systems into a unified platform.",
        "Standardized JUnit practices across 10+ services, increasing test coverage by 50%.",
        "Built PCI-compliant RESTful microservices with Java and Spring Boot hosted GCP Kubernetes Engine.",
        "Maintained microservices across multiple environments using CI/CD pipelines with Jenkins and ArgoCD.",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: "Blend Interactive",
      icon: blend,
      iconBg: "S#383E56",
      date: "June 2023 - Sept 2023",
      points: [
        "Developed full-stack features using C#.NET and JavaScript within Git-based workflows.",
        "Delivered iterative enhancements to client-facing and internal applications, improving usability and performance.",
      ],
    },
    {
      title: "ML Research Assistant",
      company_name: "UMN Networking Lab",
      icon: goldy,
      iconBg: "#E6DEDD",
      date: "Sept 2023 - Dec 2023",
      points: [
        "Collected LiDAR data for environment reconstruction later used to simulate signal propagations.",
        "Individually collected and analyzed other researchers’ papers and presented applicable findings to research mentor.",
      ],
    },
  ];

  const projects = [
    {
      name: "Switch",
      description:
        "Full-stack app enabling users to discover and favorite streetwear and luxury brands. Features REST APIs with relational data modeling and strict validation for consistent API contracts.",
      tags: [
        {
          name: "FastAPI",
          color: "blue-text-gradient",
        },
        {
          name: "SQLAlchemy",
          color: "green-text-gradient",
        },
        {
          name: "React/TS",
          color: "pink-text-gradient",
        },
      ],
      image: switchApp,
      source_code_link: "https://github.com/javieravelar591/switch-frontend",
    },
    {
      name: "JaviGG",
      description:
        "League of Legends stat tracker integrating the Riot Games API to display player data, ranked stats, match history, and live game status with real-time UI updates.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "React/TS",
          color: "green-text-gradient",
        },
        {
          name: "AWS",
          color: "pink-text-gradient",
        },
      ],
      image: javiGG,
      source_code_link: "https://github.com/javieravelar591/javigg-client",
    },
  ];
  
  export { services, technologies, experiences, projects };