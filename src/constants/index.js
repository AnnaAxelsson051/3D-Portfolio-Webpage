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
      date: "Aug 2015 - Dec 2020",
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
      date: "Feb 2021 - Aug 2022",
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
        "Programming in C# and .NET",
        "Project methodology and agile methods",
        "Backend development and databases",
        "Frontend development and UX",
        "Programming methodology and testing",
        "Web technology",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "",
      name: "Person1",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "",
      name: "Person2",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "",
      name: "Person3",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Art App with Microservices and Cloud Messaging",
      description:
        "Art gallery with security enabling customers to log in, filter products, check out with Stripe and receive rewards.",
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
          color: "grey-text-gradient2",
        },
       
      ],
      image: artstore,
      source_code_link: "https://github.com/AnnaAxelsson051/Art-Gallery-with-Microservices-Gateway-and-Cloud-Messaging",
    },

    {
      name: "Shoes Central Store",
      description:
        "An MVC e-commerce platform with distinct logins for customers and admin, robust security and checkout via PayPal or credit card. Including email confirmation and comprehensive management tools for admin.",
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
          color: "grey-text-gradient2",
        },
      ],
      image: shoestore,
      source_code_link: "https://github.com/AnnaAxelsson051/Shoes-Central-Store",
    },

    {
      name: "Tech Store",
      description:
        "A store where customers can log in with hashed passwords, filter and search for products and checkout with Stripe. Admin can log in and modify products in the system with details and image.",
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
      source_code_link: "https://github.com/AnnaAxelsson051/Tech-Store",
    },

    
    {
      name: "Forecast Fetcher",
      description:
        "A web app that aggregates multiple weather services to provide the optimal 24-hour forecast for Stockholm. ",
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
      source_code_link: "https://github.com/AnnaAxelsson051/Forecast-Fetcher",
    },

    
    {
      name: "Paint & Chat App",
      description:
        "An MVC paint app for collaborative drawing on shared or individual canvases, with SVG save functionality and integrated chat.",
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
      source_code_link: "https://github.com/AnnaAxelsson051/Paint-and-Chat-Application",
    },
    
    {
      name: "Movie Spot",
      description:
        "A movie app where users curate favorite films and genres, rate movies, and receive personalized recommendations.",
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
          color: "grey-text-gradient2",
        },
      ],
      image: moviesystem,
      source_code_link: "https://github.com/AnnaAxelsson051/Movie-System",
    },
  
    

   
    
    {
      name: "App Store",
      description:
        "An MVC e-commerce store with customer login, product filtering, purchasing, email confirmations and admin tools.",
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
          color: "grey-text-gradient2",
        },
      ],
      image: appstore,
      source_code_link: "https://github.com/AnnaAxelsson051/App-Store",
    },

    {
      name: "Code Collab' Finder",
      description:
        "A meeting app allowing programmers to find project collaborators by viewing profiles and ideas, with chat for mutual interests. ",
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
          color: "grey-text-gradient2",
        },
      ],
      image: collab,
      source_code_link: "https://github.com/AnnaAxelsson051/Coding-Collaboration-Finder",
    },
    
    {
      name: "Succession Law Guide",  
      description:
        "A law app offering comprehensive information on Swedish succession law with references, providing a free and efficient legal resource.",
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
      source_code_link: "https://github.com/AnnaAxelsson051/Swedish-Succession-Law-Guide",
      
    },
    /*
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
      source_code_link: "https://github.com/AnnaAxelsson051/Sorting-Algorithm-Visualizer",
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
      source_code_link: "https://github.com/AnnaAxelsson051/Database-Design-Normalization",
    },


    
    {
      name: "Retro Super Mario Game",
      description:
        "A Retro Super Mario game with multiple levels.",
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
      source_code_link: "https://github.com/AnnaAxelsson051/Super-Mario-Game",
    },

*/
  

 
    
  ];
  
  export { services, technologies, experiences, testimonials, projects };