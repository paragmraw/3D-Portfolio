import {
    awsgcp,
    cv,
    nlp,
    ds,
    aws,
    docker,
    c,
    git,
    java,
    gcp,
    matplotlib,
    opencv,
    python,
    seaborn,
    yolo,
    ran,
    lexicon,
    dsu,
    blockchain,
    xampp,
    adas,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "connect",
      title: "Connect",
    },
  ];
  
  const services = [
    {
      title: "Data Science",
      icon: ds,
    },
    {
      title: "Natural Language Processing",
      icon: nlp,
    },
    {
      title: "Computer Vision",
      icon: cv,
    },
    {
      title: "AWS & GCP",
      icon: awsgcp,
    },
  ];
  
  const technologies = [
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "GCP",
      icon: gcp,
    },
    {
      name: "SeaBorn",
      icon: seaborn,
    },
    {
      name: "OpenCV",
      icon: opencv,
    },
    {
      name: "YOLO",
      icon: yolo,
    },
    {
      name: "Matplotlib",
      icon: matplotlib,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "B.Tech (Computer Science & Engineering)",
      company_name: "Dayananda Sagar University, Bengaluru",
      icon: dsu,
      iconBg: "white",
      date: "Dec 2020 - May 2024",
      points: [
      ],
    },
    {
      title: "Senior School Certificate Examination (Class XII)",
      company_name: "The Lexicon International School, Wagholi, Pune",
      icon: lexicon,
      iconBg: "grey",
      date: "March 2020",
      points: [
      ],
    },
    {
      title: "Secondary School Examination (Class X)",
      company_name: "The Lexicon International School, Wagholi, Pune",
      icon: lexicon,
      iconBg: "white",
      date: "March 2018",
      points: [
      ],
    },
    {
      title: "Middle School",
      company_name: "R.A.N Public School, Rudrapur",
      icon: ran,
      iconBg: "grey",
      date: "April 2012 - March 2015",
      points: [
      ],
    },
  ];
  
  const projects = [
    {
      name: "E-Commerce Website on XAMPP",
      description:
        " A user-friendly and dynamic online platform for apparel shopping, offering a seamless browsing experience, secure user authentication, shopping cart management, and order tracking functionalities.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "Apache",
          color: "pink-text-gradient",
        },
      ],
      image: xampp,
      source_code_link: "https://github.com/paragmraw/apparel-shopping-website-on-xampp",
    },
    {
      name: "ADAS Blind Spot Detection Using YOLOv8",
      description:
        "Web application that enables users to search for job openings, view estimated The 'ADAS Blind Spot Detection Using YOLOv8' project is a computer vision model that can identify safe and unsafe lane-changing conditions. The model uses the YOLOv8 algorithm from Ultralytics to detect objects and classify them into 'safe' and 'unsafe'. It notifies the user via function calls and warning alarms if an 'unsafe' class is detected i.e situations when changing lanes is dangerous.",
      tags: [
        {
          name: "OpenCV",
          color: "blue-text-gradient",
        },
        {
          name: "YOLOv8",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: adas,
      source_code_link: "https://github.com/paragmraw/ADAS-Blind-Spot-Detection",
    },
    {
      name: "Blockchain Based Land Registry",
      description:
        "Implemented a land registry system on the Ethereum Blockchain network, ensuring secure and transparent transactions for land ownership.",
      tags: [
        {
          name: "Solidity",
          color: "blue-text-gradient",
        },
        {
          name: "Ganache",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: blockchain,
      source_code_link: "https://github.com/paragmraw",
    },
  ];
  
  export { services, technologies, experiences, projects };