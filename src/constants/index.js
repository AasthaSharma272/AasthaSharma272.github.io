import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    python,
    tailwind,
    nodejs,
    mongodb,
    nextjs,
    git,
    figma,
    C,
    angular,
    sql,
    docker,
    java,
    meta,
    starbucks,
    tesla,
    shopify,
    IEEE,
    hometrust,
    carrent,
    jobit,
    tripguide,
    recipeflow,
    storeMaster,
    ecom,
    threejs,
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
      id: "project",
      title: "Projects",
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
      title: "Software Engineer",
      icon: backend,
    },
    {
      title: "Mobile App Developer",
      icon: mobile,
    },
    {
      title: "Data Scientist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "C",
      icon: C,
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Next JS",
      icon: nextjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ];
  
  const experiences = [
    {
      title: "Logistics Associate",
      company_name: "Institute of Electrical and Electronics Engineers",
      icon: IEEE,
      iconBg: "#006495",
      date: "April 2023 - April 2024",
      points: [
        "Organized two successful hackathons, fostering collaboration and innovation.",
        "Collaborated with a team to create engaging hackathon experiences that inspired creativity.",
        "Selected as a workshop leader for a beginner Angular workshop from 100 candidates.",
        "Led hands-on sessions to educate participants on Angular, enhancing their skills in web development.",
      ],
    },
    {
      title: "Summer Student: IT Digital Services",
      company_name: "HomeTrust",
      icon: hometrust,
      iconBg: "#003466",
      date: "May 2023 - August 2023",
      points: [
        "Enhanced the company website, increasing traffic by 30% and registrations by 15% using Angular, JavaScript, and HTML/CSS.",
        "Automated data transfer to Power BI with a Python script, saving employees 2 hours daily.",
        "Utilized Python, JavaScript, Angular, SQL, and REST APIs to create efficient prototypes.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
      name: "StoreMaster",
      description:
        "StoreMaster is an e-commerce platform that lets users create and manage multiple online stores from a single, easy-to-use dashboard. It simplifies store setup, product management, and sales tracking, by offering real-time insights.",
      tags: [
        {
          name: "Reactjs",
          color: "#fcb1be",
        },
        {
          name: "RestAPI",
          color: "#f58cbe",
        },
        {
          name: "Nextjs",
          color: "#ff829f",
        },
        {
          name: "TypeScript",
          color: "#fcbfda",
        },
      ],
      image: storeMaster,
      source_code_link: "https://github.com/AasthaSharma272/StoreMaster",
    },
    {
      name: "E-commerce Store",
      description:
        "E-commerce Store is a dynamic platform that sells products across multiple categories with advanced filtering options. Integrated with Stripe for secure payments and an admin dashboard, it ensures an efficient shopping experience.",
      tags: [
        {
          name: "Reactjs",
          color: "#fcb1be",
        },
        {
          name: "Stripe",
          color: "#f58cbe",
        },
        {
          name: "Tailwind",
          color: "#ff829f",
        },
        {
          name: "PostgreSQL",
          color: "#fcbfda",
        },
      ],
      image: ecom,
      source_code_link: "https://github.com/AasthaSharma272/ecommerce-store",
    },
    {
      name: "RecipeFlow",
      description:
        "RecipeFlow is an app designed for food enthusiasts to explore recipes. Users can filter, browse and save recipes, while posting their own recipes too. Whether you're trying new dishes or keeping track of family recipes, RecipeFlow streamlines your culinary journey.",
      tags: [
        {
          name: "Java",
          color: "#fcb1be",
        },
        {
          name: "RestAPI",
          color: "#f58cbe",
        },
        {
          name: "Junit",
          color: "#ff829f",
        },
        {
          name: "CleanArchitecture",
          color: "#fcbfda",
        },
      ],
      image: recipeflow,
      source_code_link: "https://github.com/AasthaSharma272/Recipe_Flow",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };