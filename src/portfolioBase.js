/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Portfolio d'Élie Simard",
  description: "",
  og: {
    title: "eliesimardPortfolio",
    type: "website",
    url: "http://eliesimard.dev/",
  },
};

//Home Page
//subTitle: "Bonjour, bienvenue sur mon portfolio! Je suis Élie Simard, un développeur logiciel, un musicien passionné, un amateur de café.",
/*
Bienvenue dans mon portfolio ! Je suis passionné par le développement logiciel et je possède une expertise technique diversifiée, 
notamment en Java, JavaScript, React et Spring Boot, ainsi qu'une maîtrise des outils de développement comme Docker et Git. 
Formé au Collège de Maisonneuve, j'ai participé à des projets pratiques en équipe selon la méthodologie Agile Scrum. 
Parmi mes réalisations, vous trouverez des projets tels que Vitamine et BankApp, qui démontrent mes compétences full-stack 
et mon aptitude à intégrer des APIs. Fort d'une expérience variée, incluant l'accompagnement au piano et le service en restauration,
 je suis prêt à relever de nouveaux défis et à contribuer à des projets innovants.
*/
const greeting = {
  title: "Élie Simard",
  logo_name: "Elie Simard",

  //go into greeting.js to change the profile image -> ligne 52
  subTitle:
    "Bienvenue dans mon portfolio ! Je suis un développeur logiciel et un musicien passionné, toujours en quête de nouveaux défis. Jetez un coup d'oeil à mes projets et à mon parcours!",
  resumeLink:
    "https://drive.google.com/file/d/1ZZJPWTg86ihzNG3O7p1MmNiIX2U7qpfg/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Elie-Simard",
};

const socialMediaLinks = [
  {
    name: "Linktree",
    link: "https://linktr.ee/elie_simard",
    fontAwesomeIcon: "fa-link",
    backgroundColor: "#39FFF3",
  },

  {
    name: "Github",
    link: "https://github.com/Elie-Simard",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/élie-simard/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCJYDSzYTB0p0FZzGe13OtOw",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:eliesimard.dev@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Langages et Cadres de Développement",
      fileName: "DesignImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: null,
          imageSrc: "java_logo.png",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "RESTful API",
          fontAwesomeClassname: null,
          imageSrc: "rest.png",
          style: {
            color: "#FF7F50",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#777BB4",
          },
        },
        //html5
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },

        {
          skillName: "CSS",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Material-UI",
          fontAwesomeClassname: null,
          imageSrc: "material-UI.png",
          style: {
            color: "#0081CB",
          },
        },
        {
          skillName: "Semantic-UI",
          fontAwesomeClassname: null,
          imageSrc: "semantic-UI.png",
          style: {
            color: "#35bdb2",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: null,
          imageSrc: "bootstrap.png",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "JQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: null,
          imageSrc: "node-JS.png",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Swagger",
          fontAwesomeClassname: "simple-icons:swagger",
          style: {
            color: "#85EA2D",
          },
        },
      ],
    },
    // {
    //   title: "Frameworks/Bibliothèques",
    //   fileName: "DataScienceImg",
    //   skills: [],
    //   softwareSkills: [],
    // },
    // {
    //   title: "Technologies Web",
    //   fileName: "CloudInfraImg",
    //   skills: [],
    //   softwareSkills: [],
    // },
    {
      title: "Outils de Développement",
      // fileName: "DevelopmentToolsImg",
      fileName: "DataScienceImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Gradle",
          fontAwesomeClassname: "simple-icons:gradle",
          style: {
            color: "#02303A",
          },
        },
        {
          skillName: "Maven",
          fontAwesomeClassname: "simple-icons:apachemaven",
          style: {
            color: "#C71A36",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
        {
          skillName: "IntelliJ",
          fontAwesomeClassname: "simple-icons:intellijidea",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#007ACC",
          },
        },
        {
          skillName: "Android Studio",
          fontAwesomeClassname: "simple-icons:androidstudio",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Visio",
          fontAwesomeClassname: "simple-icons:microsoftvisio",
          style: {
            color: "#3955A3",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#217346",
          },
        },
        {
          skillName: "LaTeX",
          fontAwesomeClassname: "simple-icons:latex",
          style: {
            color: "#008080",
          },
        },
        {
          skillName: "Markdown",
          fontAwesomeClassname: "simple-icons:markdown",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Overleaf",
          fontAwesomeClassname: "simple-icons:overleaf",
          style: {
            color: "#47A141",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
    // {
    //   title: "Documentation",
    //   fileName: "DataScienceImg",
    //   skills: [],
    //   softwareSkills: [],
    // },

    // {
    //   title: "SGBD",
    //   fileName: "DatabaseImg",
    //   skills: [], //"⚡ "
    //   softwareSkills: [],
    // },
    {
      title: "Serveur, Cloud et Base de Données",
      // fileName: "CloudInfraImg",
      fileName: "FullStackImg",
      skills: [],
      softwareSkills: [
        {
          skillName: "XAMPP",
          fontAwesomeClassname: "simple-icons:xampp",
          style: {
            color: "#FB7A24",
          },
        },
        {
          skillName: "Microsoft Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#430098",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },

        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "MariaDB",
          fontAwesomeClassname: "simple-icons:mariadb",
          style: {
            color: "#003545",
          },
        },
        {
          skillName: "phpMyAdmin",
          fontAwesomeClassname: "simple-icons:phpmyadmin",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "simple-icons:postman",
          style: {
            color: "#FF6C37",
          },
        },
      ],
    },
  ],
};

// const skills = {
//   data: [

//     {
//       title: "Full Stack Development",
//       fileName: "FullStackImg",
//       skills: [
//         "⚡ Building responsive website front end using React-Redux",
//         "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
//         "⚡ Creating application backend in Node, Express & Flask",
//       ],
//       softwareSkills: [
//

//       ],
//     },
//     {
//       title: "Cloud Infra-Architecture",
//       fileName: "CloudInfraImg",
//       skills: [
//         "⚡ Experience working on multiple cloud platforms",
//         "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
//         "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
//       ],
//       softwareSkills: [
//

//       ],
//     },
//     // {
//     //   title: "UI/UX Design",
//     //   fileName: "DesignImg",
//     //   skills: [
//     //     "⚡ Designing highly attractive user interface for mobile and web applications",
//     //     "⚡ Customizing logo designs and building logos from scratch",
//     //     "⚡ Creating the flow of application functionalities to optimize user experience",
//     //   ],
//     //   softwareSkills: [

//   ],
// };

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Collège de Maisonneuve",
      subtitle:
        "Attestation d’Études Collégiales en Développement de logiciels",
      logo_path: "maisonneuve_logo.png",
      alt_name: "College Maisonneuve",
      duration: "2023 - 2024",
      descriptions: [
        "⚡ Formation intensive axée sur les fondamentaux du développement logiciel, avec une approche pratique incluant des projets en équipe selon Agile Scrum.",
        "⚡ Cours sur la Programmation Orientée Objet (Java), Algorithmie, Bases de Données, Développement d’Applications Mobiles/Bureau, Cybersécurité, et Développement Web.",
      ],
      website_link:
        "https://fc.cmaisonneuve.qc.ca/formations/developpement-de-logiciels/#%23information-generale-1-tab",
    },
    {
      title: "Université de Montréal",
      subtitle: "Maîtrise en Musique (Interprétation)",
      logo_path: "udem_logo.jpeg", // Placeholder image path
      alt_name: "UdeM",
      duration: "2020 - 2021",
      descriptions: [
        "Études de haut niveau en interprétation, théorie et analyse de la musique classique.",
        "Coaching et mentorat de la part de professeurs de renom.",
        "Développement de compétences entre autres en travail d'équipe, en développement de projets et en techniques de recherche.",
      ],
      website_link: "https://musique.umontreal.ca/", // Official university link
    },

    {
      title: "Université de Montréal",
      subtitle: "Baccalauréat en Musique (Interprétation)",
      logo_path: "udem_logo.jpeg", // Placeholder image path
      alt_name: "UdeM",
      duration: "2016 - 2019",
      descriptions: [
        "Études en interprétation, théorie et histoire de la musique classique.",
        "Performances dans divers concerts et récitals.",
        "Développement de compétences entre autres en analyse et résolution de problèmes ainsi qu'en communication.",
      ],
      website_link: "https://musique.umontreal.ca/", // Official university link
    },
    {
      //conservatoire de musique et d'art dramatique du québec`
      title: "Conservatoire de musique et d'art dramatique du Québec",
      subtitle: "Diplôme d'Études Collégiales en Musique (Interprétation)",
      logo_path: "conservatoire_logo.png", // Placeholder image path
      alt_name: "CMAQ",
      duration: "2001 - 2015",
      descriptions: [
        //francais
        "Formation musicale complète de haut niveau en interprétation.",
        "Participation à divers concerts et récitals.",
        "Développement de ma discipline, ma concentration et ma capacité de travail, et ce tout au long de mon cheminement primaire, secondaire et collégial.",
      ],
    },
  ],
};

const certifications = {
  certifications: [
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  // subtitle: "Work, Internship and Volunteership",
  description:
    " Je viens de compléter un programme intensif en développement logiciel, ce qui a enrichi mes compétences techniques et ma compréhension du domaine. Bien que mon expérience professionnelle soit encore en développement, j'ai eu l'occasion de travailler sur des projets significatifs, notamment un stage en développement PHP et des contributions à des projets open-source.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "",
          company: "",
          company_url: "",
          logo_path: "riopel-consultant-logo.png",
          duration: "",
          location: "",
          description: "",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          //stage php / js portail web pour manip donnee de diff api (connectwise manage, veam ), regroupement de donnees, creation de rapports, creation de scripts pour automatiser certaines taches (dont des alerte par courriel), creation de pages web pour afficher les donnees, stockage des nouvelles donnees dans une base de donnees mysql
          title:
            "Stage axé sur la manipulation de données et la création de script, PHP/JS/SQL/CSS/Smarty/DataTables",
          company: "Riopel Consultant Informatique",
          company_url: "https://riopel-consultant.com",
          logo_path: "riopel-consultant-logo.png",
          duration: "May 2024 - Juil. 2024",
          location: "Montréal, Québec",
          description:
            "Contribuer à la création d'un portail web pour manipuler et regrouper des données provenant de différentes API (ConnectWise Manage, Veeam), stocker ces données dans une base de données MySQL, créer des rapports, automatiser certaines tâches quotidiennes et créer des alertes par courriel par le biais de scripts PHP et JavaScript.",
          color: "#0879bf",
        },
        // {
        //   title: "Machine Learning Intern",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "May 2022 - Aug 2022",
        //   location: "San Francisco, USA",
        //   description:
        //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        //   color: "#000000",
        // },
        // {
        //   title: "Data Science Research Intern",
        //   company: "Delhivery Pvt. Ltd.",
        //   company_url: "https://www.delhivery.com/",
        //   logo_path: "delhivery_logo.png",
        //   duration: "May 2019 - Sept 2019",
        //   location: "Gurgaon, Haryana",
        //   description:
        //     "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
        //   color: "#ee3c26",
        // },
        // {
        //   title: "Data Science Intern",
        //   company: "Intel Indexer LLC",
        //   company_url:
        //     "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
        //   logo_path: "intel_logo.jpg",
        //   duration: "Nov 2018 - Dec 2018",
        //   location: "Work From Home",
        //   description:
        //     "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
        //   color: "#0071C5",
        // },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
        // {
        //   title: "Microsoft Student Partner",
        //   company: "Microsoft",
        //   company_url: "https://www.microsoft.com/",
        //   logo_path: "microsoft_logo.png",
        //   duration: "Aug 2019 - May 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //   color: "#D83B01",
        // },
        // {
        //   title: "Mozilla Campus Captain",
        //   company: "Mozilla",
        //   company_url: "https://www.mozilla.org/",
        //   logo_path: "mozilla_logo.png",
        //   duration: "Oct 2019 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //   color: "#000000",
        // },
        // {
        //   title: "Developer Students Club Member",
        //   company: "DSC IIITDM Kurnool",
        //   company_url:
        //     "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //   logo_path: "dsc_logo.png",
        //   duration: "Jan 2018 - May 2020",
        //   location: "Kurnool, Andhra Pradesh",
        //   description:
        //     "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //   color: "#0C9D58",
        // },
        {
          title: "Developper Program Member",
          company: "GitHub",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "Août 2024 - PRÉSENT",
          location: "Travail à distance",
          description:
            "Je commence à contribuer activement à divers projets open-source. Je me concentre actuellement sur le projet 'Queering the Map', un beau projet qui aide la communauté queer à documenté leurs expériences dans une carte du monde interactive. Mes contributions incluent des améliorations des fonctionnalités, la correction de bogues, et la collaboration avec la communauté pour soutenir le succès du projet. J'apprécie particulièrement travailler sur des initiatives inspirantes comme celle-ci et je suis également intéressé à aider la communauté des musiciens classiques.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projets",
  description:
    "J'ai travaillé sur plusieurs projets personnels et collaboratifs. En voici quelques-uns.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description:
    "I have worked on and published a few research papers and publications of my own.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzQ=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzi=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNze=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzt=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
    {
      id: "MDEwOlJlcG9zaXRvcnkyNDU0NjcyNzb=",
      name: "Artificial Intelligence Paper",
      createdAt: "2020-03-06T16:26:54Z",
      description: "Paper Written on Artificial Intelligence published in xyz ",
      url:
        "https://www.andrewng.org/publications/building-high-level-features-using-large-scale-unsupervised-learning/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Me Contacter",
    profile_image_path: "elie1.png",
    description:
      "Je suis disponible sur presque toutes les plateformes en ligne. N'hésitez pas à me contacter.",
  },
  blogSection: {
    //commented by ELIE
    // title: "Blogs",
    // subtitle:
    //   "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://linktr.ee/elie_simard",
    // avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    //commented by ELIE
    // title: "Address",
    // subtitle:
    //   "Ambavadi vas, Kanodar, T.A.-Palanpur, Dist.-Banaskantha, Gujarat - 385520",
    // locality: "Kanodar",
    // country: "IN",
    // region: "Gujarat",
    // postalCode: "385520",
    // streetAddress: "Ambavadi vas",
    // avatar_image_path: "address_image.svg",
    // location_map_link: "https://goo.gl/maps/MpMqtRZytFchMkZ76",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
