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
    chasit,
    threejs,
    collab,
    forecast,
    moviesystem,
    techstore,
    shoestore,
    appstore,
    artstore,
    algosort,
    supermario,
    dbnormalization,
 

   
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
      title: "Back End Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Quick Learner",
      icon: web,
    },
    {
      title: "Ex Lawyer",
      icon: creator,
    },
  ];


  const technologies = [
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
      
      //Spring
      name: "figma",
      icon: figma,
    },
    {
      //Aspnet core
      name: "Node JS",
      icon: nodejs,
      
    },
    {
      name: "React JS",
      icon: reactjs,
     
    },
    {
      name: "Three JS",
      icon: threejs,
     
    },
    {
       //Mysql
       name: "Tailwind CSS",
       icon: tailwind,
      
    },
    {
      //Postgresql
      name: "git",
      icon: git,
    },
    {
       //Mongodb
       name: "MongoDB",
       icon: mongodb,
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
        "My thesis was about the relationship between law and technology",
      ],
    },
    {
      title: "Online courses",
      company_name: "Udemy",
      icon: tesla,
      iconBg: "#ffffff", //#E6DEDD
      date: "May 2021 - Aug 2022",
      points: [
        "Java Programming Masteclass",
        "Build Responsive Real-World Websites with Html and Css",
        "The Complete Javascript Course 2022",
        "Advanced Css and Sass",
        "Java Data Structures & Algorithms"
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
        "A law webpage that allows users to find comprehensive information about Swedish succession law with legal references, providing a convenient, efficient and cost-free solution for legal information needs.",
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
        {
          name: "ÄB (1958:637) & precedents",
          color: "orange-text-gradient",
        },
        {
          name: "Responsive",
          color: "yellow-text-gradient",
        },
        {
          name: "Animations",
          color: "violet-text-gradient",
        },
      ],
      image: chasit,
      source_code_link: "https://github.com/",
      
    },
    
    {
      name: "Paint & Chat App",
      description:
        "A full stack MVC paint app that enables users to draw images on a personal or shared canvas, facilitating collaborative drawing while also providing the ability to modify and save the artwork as SVG. The app also includes built-in chat functionality to enhance communication and collaboration among users.",
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
        {
          name: "Mvc",
          color: "orange-text-gradient",
        },
        {
          name: "TCP - Sockets",
          color: "yellow-text-gradient",
        },
        {
          name: "File I/O",
          color: "violet-text-gradient",
        },
      ],
      image: paintchat,
      source_code_link: "https://github.com/",
    },
    {
      name: "Tech Store",
      description:
        "A full stack e-commerce store where customers can register and log in with hashed passwords, filter, sort, search and add products to basket, place orders and pay for them with Stripe. Admin can log in and modify products in the system with details and image.",
      tags: [
        {
          name: ".NET Web API",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Material UI",
          color: "orange-text-gradient",
        },
        {
          name: "Stripe-Api",
          color: "yellow-text-gradient",
        },
        {
          name: "SQLite",
          color: "violet-text-gradient",
        },
      ],
      image: techstore,
      source_code_link: "https://github.com/",
    },

    {
      name: "Art Gallery with Microservices and Cloud Messaging",
      description:
        "A full stack art gallery app with microservice architecture and security enabling customers to log in, filter products, check out with Stripe and receive rewards. Utilizing Ocelot gateway for streamlined microservice communication and Azure Service Bus for reliable and efficient messaging across the application.",
      tags: [
        {
          name: ".NET Web API",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        {
          name: "SQL Server Db",
          color: "orange-text-gradient",
        },
        {
          name: "Ocelot gateway",
          color: "yellow-text-gradient",
        },
        {
          name: "Stripe-Api",
          color: "violet-text-gradient",
        },
        {
          name: "Azure Service Bus",
          color: "white-text-gradient",
        },
       
      ],
      image: artstore,
      source_code_link: "https://github.com/",
    },

    {
      name: "Coding Collaboration Finder",
      description:
        "A full stack meeting app with security implementations that enables programmers to find collaborators for their future projects by logging in, browsing other user's detailed profiles/coding project ideas and if mutual interest is identified connecting via chat. ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
        {
          name: "NodeJs",
          color: "orange-text-gradient",
        },
        {
          name: "MongoDb",
          color: "yellow-text-gradient",
        },
        {
          name: "Router-dom",
          color: "violet-text-gradient",
        },
        {
          name: "Axios",
          color: "white-text-gradient",
        },
      ],
      image: collab,
      source_code_link: "https://github.com/",
    },
    {
      name: "Forecast Fetcher",
      description:
        "A full stack rest web service app that fetches data from multiple open weather forecast services, returning the best weather forecast for Stockholm 24 hours in advance. ",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Thymeleaf",
          color: "pink-text-gradient",
        },
        {
          name: "Html",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "yellow-text-gradient",
        },
        {
          name: "Smhi, Met & Meteo - Api",
          color: "violet-text-gradient",
        },
      ],
      image: forecast,
      source_code_link: "https://github.com/",
    },

    {
      name: "Movie Spot",
      description:
        "An movie system application that allows users to collect all their favourite movies and genres on a personal users page, add ratings to movies and get personalized movie recommendations.",
      tags: [
        {
          name: ".NET Web Api",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
        {
          name: "Azure Datastudio",
          color: "orange-text-gradient",
        },
        {
          name: "Docker",
          color: "yellow-text-gradient",
        },
        {
          name: "Minimal Api",
          color: "violet-text-gradient",
        },
        {
          name: "Tmdb-Api",
          color: "white-text-gradient",
        },
      ],
      image: moviesystem,
      source_code_link: "https://github.com/",
    },
    
    

    {
      name: "Shoe Central",
      description:
        "A full stack MVC e-commerce platform featuring distinct customer and admin logins, robust security measures, PayPal or credit card checkout, and email confirmation. Administrators, shippers, and salespersons can log in and manage the product system, users, customer orders, sales reports, and shipping.",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Thymeleaf",
          color: "pink-text-gradient",
        },
        {
          name: "MySQL",
          color: "orange-text-gradient",
        },
        {
          name: "PayPal-Api",
          color: "yellow-text-gradient",
        },
        {
          name: "Responsive",
          color: "violet-text-gradient",
        },
        {
          name: "JUnit",
          color: "white-text-gradient",
        },
      ],
      image: shoestore,
      source_code_link: "https://github.com/",
    },
    {
      name: "App Store",
      description:
        "A full stack MVC e-commerce store with distinct customer and admin logins, enabling filtering, purchasing, email confirmation for customers, and admin product/order management",
      tags: [
        {
          name: "Spring Boot",
          color: "blue-text-gradient",
        },
        {
          name: "Java",
          color: "green-text-gradient",
        },
        {
          name: "Thymeleaf",
          color: "pink-text-gradient",
        },
        {
          name: "Css",
          color: "orange-text-gradient",
        },
        {
          name: "MySQL",
          color: "yellow-text-gradient",
        },
        {
          name: "Spring mail",
          color: "violet-text-gradient",
        },
        {
          name: "JUnit",
          color: "white-text-gradient",
        },
      ],
      image: appstore,
      source_code_link: "https://github.com/",
    },
    {
      name: "Sorting Algorithm Visualizer",
      description:
        "This application provides a visual illustration of how the sorting algorithm Bubble sort performs its operations.",
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
      image: algosort,
      source_code_link: "https://github.com/",
    },
    {
      name: "Database Normalization Script",
      description:
        "A normalization script in SQL that reads data from a CSV file and normalizes it to 1-3NF, creating a number of useful tables and views.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "Docker",
          color: "green-text-gradient",
        },
        {
          name: "Mermaid",
          color: "pink-text-gradient",
        },
      
      ],
      image: dbnormalization,
      source_code_link: "https://github.com/",
    },


    /*
    {
      name: "Retro Super Mario Game",
      description:
        "A game with multiple levels.",
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
          name: "three.js",
          color: "pink-text-gradient",
        },
      
      ],
      image: supermario,
      source_code_link: "https://github.com/",
    },*/


  

 
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };