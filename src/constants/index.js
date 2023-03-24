import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    typescript,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    paintchat,
    ecommerce,
    chasit,
    threejs,
    collab,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Education and Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },

  ];
  
  const services = [
    
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Fullstack Developer",
      icon: mobile,
    },
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Ex Lawyer",
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
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "MongoDB",
      icon: mongodb,
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
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Degree of Master of Laws, LL.M.",
      company_name: "Stockholm University",
      icon: starbucks,
      iconBg: "#ffffff", //#383E56
      date: "Aug 2015 - Jan 2021",
      points: [
        "IT-Law & Gdpr",
        "I wrote my master thesis on the relationship between law and technology",
      ],
    },
    {
      title: "Online courses",
      company_name: "Udemy",
      icon: tesla,
      iconBg: "#ffffff", //#E6DEDD
      date: "May 2021 - May 2022",
      points: [
        "Java Programming Masteclass",
        "Build Responsive Real-World Websites with Html and Css",
        "The Complete Javascript Course 2022",
        "Advanced Css and Sass",
      ],
    },
    {
      title: "Java Developer",
      company_name: "IT-Högskolan",
      icon: shopify,
      iconBg: "#ffffff", //#383E56
      date: "Aug 2022 - Present",
      points: [
        "Java Programming",
        "Development and databases",
        "Java tools and frameworks",
        "Complex Java development",
        "Web services and integrations",
        "Web application development",
        "Agile development",
      ],
    },
    {
      title: "Full stack Developer .NET",
      company_name: "Chas Academy",
      icon: meta,
      iconBg: "#ffffff", //#E6DEDD
      date: "Aug 2022 - Present",
      points: [
        "IT Tech and Operations",
        "Programmering in C# and .NET",
        "Project methodology and agile methods",
        "Backenddevelopment and databases",
        "Frontend development and UX",
        "Programming methodology and testing",
        "Web technology",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chasit Law",  
      description:
        "An informative law webpage that allows users to find extensive information about succession law, providing a convenient, efficient and cost free solution for legal information needs.",
        tags: [
     
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: chasit,
      source_code_link: "https://github.com/",
      
    },
    
    {
      name: "Friennypaint",
      description:
        "A collaboration promoting application that enables multiple users in different locations to draw on the same canvas whilst chatting, and save images in SVG-format.",
      tags: [
        {
          name: "JavaFX",
          color: "blue-text-gradient",
        },
        {
          name: "XML",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: paintchat,
      source_code_link: "https://github.com/",
    },
    {
      name: "E-commerce store",
      description:
        "A comprehensive e-commerce platform that allows users to search for items and make purchases, complete with security and payment processing.",
      tags: [
        {
          name: "Java Spring Boot",
          color: "green-text-gradient",
        },
        {
          name: "Angular",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap Css",
          color: "pink-text-gradient",
        },
        {
          name: "MySql",
          color: "grey-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Collab'",
      description:
        "An app that enables programmers log in, connect via chat and find collaborators for their future projects. Providing a great way for people to learn and develop together",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "MongoDb",
          color: "purple-text-gradient",
        },
      ],
      image: collab,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };