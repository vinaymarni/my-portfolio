import { EmailSvg, GithubSvg, LinkdinSvg, WhatsAppSvg } from "./commonSvgs"

// Frontend:  
// - HTML, CSS, JavaScript, Bootstrap  
// - React.js (Hooks, Redux, Jotai)  
// - Next.js (Client-side & Server-side Rendering)  
// - React Query (Server State Management)  
// - Micro-frontend Architecture with React  

// Backend:  
// - Node.js, Express.js  
// - Python  

// Databases:  
// - SQL, SQLite, MongoDB  

// Tools & IDEs:  
// - VS Code, Eclipse, Spring Tool Suite (STS), MySQL Workbench, Postman, GitHub  

// Methodologies & Concepts:  
// - Agile Methodologies  
// - Database Management Systems (DBMS)  
// - Software Development Life Cycle (SDLC)  
// - Debugging & Troubleshooting  
// - Design Patterns  
// - Microservices Architecture & Monolithic Architecture  
// - REST APIs

// export const skillsDetails = [
//     {
//         name: "Programming Languages",
//         content:"Skilled in multiple programming languages, delivering robust and efficient solutions.",
//         technologies:[ 
//             {name :"Javascript", url: Javascript}, 
//             {name :"HTML", url: html}, 
//             {name :"CSS", url: css},  
//             {name :"Python", url: python},
//         ]
//     },
//     {
//         name: "Tools",
//         content:"Experienced with various tools and IDEs for efficient development workflows.",
//         technologies:[ 
//             {name :"GitHub", url: gitHub}, 
//             {name :"VS Code", url: VSCode}, 
//             {name :"Eclipse", url: eclipse}, 
//             {name :"MySQL Workbench", url: mySQL},
//             {name :"STS", url: sts}, 
//             {name :"Postman", url: postman}, 
//         ]
//     },
//     {
//         name: "Frameworks",
//         content:"Proficient in diverse frameworks, delivering scalable and maintainable software solutions.",
//         technologies:[ 
//             {name :"Spring boot", url: springBoot}, 
//             {name :"ReactJS", url: react},  
//             {name: "NextJs", url: next}
//         ]
//     },
//     {
//         name: "Database",
//         content:"Skilled in Database technologies.",
//         technologies:[ 
//             {name :"MySQL", url: mySQL},
//             {name :"sqLite", url: sqLite},
//             {name :"MongoDb", url: MongoDb }, 
//         ]
//     },
//     {
//         name: "DevOps",
//         content:"Proficient in DevOps and Testing, optimizing deployments and ensuring quality.",
//         technologies:[ 
//             {name :"Git", url: git},
//         ]
//     },
//     {
//         name: "Methodologies & Concepts",
//         content:"Skilled in Methodologies & Concepts.",
//         technologies:[ 
//             {name :"Agile Methodologies", url: agile }, 
//             {name :"Database Management Systems (DBMS)", url: dbms}, 
//             {name :"Software Development Life Cycle (SDLC)", url: sdlc}, 
//             {name :"Debugging", url: debugging}, 
//             {name :"Design Patterns", url: designPattern}, 
//             {name :"Microservices Architecture", url: microServicesArc }, 
//             {name :"Monolithic Architecture", url: monolithic}, 
//             {name :"REST APIs", url: restApis},  
//         ]
//     }, 
//     {
//         name: "Frontend Language",
//         content:"Skilled in frontend languages, creating engaging and responsive user interfaces.",
//         technologies:[ 
//             {name :"React", url: react},  
//             {name :"HTML", url: html},
//             {name :"CSS", url: css}, 
//             {name :"Bootstrap", url: bootstrap}, 
//             {name :"Micro-frontend Architecture with React ", url: microService},  
//             {name :"NextJs", url: Next},  
//             {name :"React Query", url: reactQuery}, 
//             {name :"Javascript", url: Javascript}, 
//             {name :"Hooks", url: reactHooks},
//             {name :"Redux", url: redux},
//             {name :"Jotai", url: jotai},   
//         ]
//     },
//     {
//         name: "Backend Language",
//         content:"Skilled in backend languages, ensuring efficient, reliable server-side solutions.",
//         technologies:[ 
//             {name :"Nodejs", url: node},  
//             {name :"ExpressJs", url: Express},
//             {name :"Python", url: python},
//         ]
//     },
// ];

export const sectionsData = new Map([
    ["sections", ["home", "about", "techStack", "projects", "contact"]],
    ["home", {
        link: "",
        logo: "",
        name: "home",
        title:"Home"
    }],
    ["about", {
        link: "",
        logo: "",
        name: "about",
        title: "About"
    }],
    ["techStack", {
        link: "",
        logo: "",
        name: "techStack",
        title:"Tech Stack"
    }],
    ["projects", {
        link: "",
        logo: "",
        name: "projects",
        title:"Projects"
    }],
    ["contact", {
        link: "",
        logo: "",
        name: "ontact",
        title:"Contact"
    }],
])

export const myDetails = new Map([
    ["social", ["gitHub", "linkdin", "email", "whatsapp"]],
    ["name", "vinay Kumar Marni"],
    ["ShortName", "vinay"],
    ["skills", ["Frontend Language", "Backend Language", "Tools", "Frameworks", "Database", "DevOps", "Methodologies & Concepts"]],
    ["mobile", "+917702249962"],
    ["email", "vinaykumarmarni26@gmail.com"],
    ["github", ""],
    ["linkdin", ""],
    ["address", "Bengaluru - 560066"],
    ["experience", ["BFC ", "RP CLAN"]],
    ["projects", ["Get Right Property", "Rp Clan Internal Application", "Expense Tracker", "Hospital Management System", "PDF to IMAGE Converter", "Personal Portfolio Project"]]
]);

export const otherDetails = new Map([
    ["Frontend Language", {
        name: "Frontend Language",
        content:"Skilled in frontend languages, creating engaging and responsive user interfaces.",
        technologies:[ 
            {name :"React", url: "/react.jpg"},  
            {name :"HTML", url: "/css5.jpg"},
            {name :"CSS", url: "/css.jpg"}, 
            {name :"Bootstrap", url: "/bootstrap.jpg"}, 
            {name :"Micro-frontend Architecture with React ", url: "/microService.jpg"},  
            {name :"NextJs", url: "/next.webp"},  
            {name :"React Query", url: "/reactQuery.jpg"}, 
            {name :"Javascript", url: "/Javascript.jpg"}, 
            {name :"Hooks", url: "/reactHooks.png"},
            {name :"Redux", url: "/redux.png"},
            {name :"Jotai", url: "/jotai.png"},   
        ]
    },],
    ["Backend Language", {
        name: "Backend Language",
        content:"Skilled in backend languages, ensuring efficient, reliable server-side solutions.",
        technologies:[ 
            {name :"Nodejs", url: "/node.jpg"},  
            {name :"ExpressJs", url: "/express.png"},
            {name :"Python", url: "/python.png"},
        ]
    },],
    ["Tools", {
        name: "Tools",
        content:"Experienced with various tools and IDEs for efficient development workflows.",
        technologies:[ 
            {name :"GitHub", url: "/github.jpg"}, 
            {name :"VS Code", url: "/vscode.jpg"}, 
            {name :"Eclipse", url: "/eclipse.jpg"}, 
            {name :"MySQL Workbench", url: "/mysql.png"},
            {name :"STS", url: "/sts.png"}, 
            {name :"Postman", url: "/postman.jpg"}, 
        ]
    },],
    ["Frameworks", {
        name: "Frameworks",
        content:"Proficient in diverse frameworks, delivering scalable and maintainable software solutions.",
        technologies:[ 
            {name :"Spring boot", url: "/springBoot.jpg"}, 
            {name :"ReactJS", url: "/react.jpg"},  
            {name: "NextJs", url: "/next.webp"}
        ]
    },],
    ["Database", {
        name: "Database",
        content:"Skilled in Database technologies.",
        technologies:[ 
            {name :"MySQL", url: "/mysql.png"},
            {name :"sqLite", url: "/sqlite.jpg"},
            {name :"MongoDb", url: "/mongodb.png" }, 
        ]
    },],
    ["DevOps", {
        name: "DevOps",
        content:"Proficient in DevOps and Testing, optimizing deployments and ensuring quality.",
        technologies:[ 
            {name :"Git", url: "/git.jpg"},
        ]
    },],
    ["Methodologies & Concepts", {
        name: "Methodologies & Concepts",
        content:"Skilled in Methodologies & Concepts.",
        technologies:[ 
            {name :"Agile Methodologies", url: "/agile-icon.jpg" }, 
            {name :"Database Management Systems (DBMS)", url: "/dbms.png"}, 
            {name :"Software Development Life Cycle (SDLC)", url: "/sdlc.png"}, 
            {name :"Debugging", url: "/debugging.png"}, 
            {name :"Microservices Architecture", url: "/microservicesArchitecture.png" }, 
            {name :"Monolithic Architecture", url: "/monolithic.webp"}, 
            {name :"REST APIs", url: "/restAPIS.jpg"},  
        ]
    }],
    ["Programming Languages", {
        name: "Programming Languages",
        content:"Skilled in multiple programming languages, delivering robust and efficient solutions.",
        technologies:[ 
            {name :"Javascript", url: "/Javascript.jpg"}, 
            {name :"HTML", url: "/css5.jpg"}, 
            {name :"CSS", url: "/css.jpg"},  
            {name :"Python", url: "/python.png"},
        ]
    },],
    ["gitHub", {
        link: "",
        logo: GithubSvg,
        name: "",
        title:"Git Hub"
    }],
    ["linkdin", {
        link: "",
        logo: LinkdinSvg,
        name: "",
        title:"Linkdin"
    }],
    ["email", {
        link: "",
        logo: EmailSvg,
        name: "email",
        title:"Email"
    }],
    ["whatsapp", {
        link: "",
        logo: WhatsAppSvg,
        name: "whatsapp",
        title:"WhatsApp"
    }],
    ["RP CLAN",    {
        name: "RP CLAN",
        logo: "/rpclan.png",
        joinDate: "Jun 2023 - Present",
        role: "SOFTWARE DEVELOPER",
        keyPoints:[
            "Lead the development of two innovative projects, architecting,designing, and implementing robust solutions.",
            "Utilized Reactjs and Next js for front-end development, creating userfriendly interfaces.",
            "Employed Java, Spring boot and Hibernate for back-end development, ensuring application robustness and efficiency.",
            "Leveraged AWS for cloud deployment, optimizing scalability and reliability",
            "Collaborated with cross-functional teams, delivering seamless user experiences and driving business growth and innovation",
        ],
    }]
]);

export const projectDetails = new Map([
    ["Get Right Property",  {
        name:"Get Right Property",
        technologiesUsed: [
            {name: "Spring Boot", url: "/springBoot.jpg"},
            {name: "ReactJS", url: "/react.jpg"},
            {name: "Javascript", url: "/Javascript.jpg"},
            {name: "MYSQL", url:  "/mysql.png"},
            {name: "NextJs", url: "/next.webp"},
            {name: "GitHub", url: "/github.jpg"},
            // {name: "Maven", url: maven},
            {name: "html", url: "/css5.jpg"},
            {name: "CSS", url:"/css.jpg"},
            // {name: "JWT", url: jwt},
        ],
        description:"Developed secure real estate site with Java, Spring Boot, React, AWS.",
        link: "http://getrightproperty.com",
        contant: "Developed a real estate website with Java, Spring Boot, ReactJs, and NextJs. Integrated security using Spring Security and JWT, and efficient search with Solr. Hosted on AWS EC2 with S3 and RDS storage. Implemented CI/CD pipelines using Jenkins and Maven.",
        images: [],
        videos: [],
    },],
    ["Rp Clan Internal Application", {
        name:"Rp Clan Internal Application",
        technologiesUsed: [
            {name: "Spring Boot", url: "/springBoot.jpg"},
            {name: "ReactJS", url: "/react.jpg"},
            {name: "Javascript", url: "/Javascript.jpg"},
            {name: "MYSQL", url:  "/mysql.png"},
            {name: "NextJs", url: "/next.webp"},
            // {name: "Spring MVC", url: springMVC},
            // {name: "Maven", url: maven},
            {name: "GitHub", url: "/github.jpg"},
            {name: "CSS", url:"/css.jpg"},
            {name: "html", url: "/css5.jpg"},
            // {name: "JWT", url: jwt},
        ],        
        description:"Streamlined property listings with efficient data approval system.",
        link:"http://internal.getrightproperty.com",
        contant: "Developed and implemented an internal data approval system for Get Right Property, streamlining workflows for property listings review and approval. Ensured data accuracy, security, and compliance with protection standards. Utilized modern technologies to automate processes, enhancing efficiency and overall data management.",
        images: [],
        videos: [],
    },],
    ["Expense Tracker",  {
        name:"Expense Tracker",
        technologiesUsed: [
            {name: "Javascript", url:"/Javascript.jpg"},
            {name :"Spring Framework", url: "/springBoot.jpg"},
            {name: "ReactJS", url: "/react.jpg"},
            // {name: "JWT", url: jwt},
            // {name: "Maven", url: maven}
        ],        
        description:"Streamlined property listings with efficient data approval system.",
        link:"https://github.com/chiranjiv09/expense-tracker-backend",
        contant: "An efficient expense tracking application enabling users to monitor spending and split expenses into groups for simplified management and collaboration. Users can easily categorize expenditures and analyze financial trends, promoting effective budgeting and financial transparency.",
        images: [],
        videos: [],
    },],
    ["Hospital Management System", {
        name:"Hospital Management System",
        technologiesUsed: [
            {name :"Spring Framework", url: "/springBoot.jpg"},
            // {name: "Spring Boot", url: "/springBoot.jpg"},
            // {name :"Spring Cloud (Microservices)", url: springCloud},
            // {name: "Maven", url: maven},
            {name: "Javascript", url: "/Javascript.jpg"},
            {name: "GitHub", url: "/github.jpg"},
            {name: "CSS", url:"/css.jpg"},
            {name: "html", url: "/css5.jpg"},
            {name: "ReactJS", url: "/react.jpg"},
        ],        
        description:"Built web app for booking, health records, and management.",
        link:"https://github.com/chiranjiv09/g2-spring-api-gateway",
        contant: "Developed a web application for patients to book appointments, access health records, receive notifications and enable physicians and nurses to manage and update diagnosis and medication details efficiently.",
        images: [],
        videos: [],
    },],
    ["PDF to IMAGE Converter",  {
        name:"PDF to IMAGE Converter",
        technologiesUsed: [
            {name: "ReactJS", url: "/react.jpg"},
            {name: "Cascading Style Sheets (CSS)", url:"/css.jpg"},
            {name: "Javascript", url:"/Javascript.jpg"},
            {name: "html", url:"/css5.jpg"},
            {name: "Figma", url: "/figma.webp"},
        ],        
        description:"Converts PDFs to customizable images in JPEG, JPG, PNG formats; GitHub code available.",
        link:"https://github.com/chiranjiv09/pdf-converter",
        contant: "This project converts PDFs into customizable named images, supporting JPEG, JPG, and PNG formats. It offers flexibility and personalization, with source code available on GitHub for implementation insights and functionality customization.",
        images: ["/projectPdfImg3.jpeg", "/projectPdfImg2.jpeg", "/projectPdfImg1.jpeg" ],
        videos: [],
    },],
    ["Personal Portfolio Project", {
        name:"Personal Portfolio Project",
        technologiesUsed: [
            {name: "ReactJS", url: "/react.jpg"},
            {name: "CSS", url:"/css.jpg"},
            {name: "Javascript", url:"/Javascript.jpg"},
            {name: "html", url:"/css5.jpg"},
            {name: "Figma", url: "/figma.webp"},
        ],        
        description:"Highlighting my journey, skills, and expertise in development.",
        link:"",
        contant: "A showcase of my professional journey, skills, and accomplishments, highlighting projects and experiences in software development and Featuring a collection of works demonstrating expertise skills.",
        images: [],
        videos: [],
    },]
]);



// Projects:

// project 1:

// Get Right Property | Real Estate Website
//  Tech Stack: Html, CSS, ReactJS, NextJS, MySQL, React Query, JavaScript, Bootstrap, React Hooks, Jotai

// -Built a responsive real estate website using React.js and Next.js (CSR & SSR) for a seamless user experience.

// -Integrated Jotai and React Query for efficient client and server-side state management.

// -Increased page performance to ~90% by optimizing rendering and asset loading, and improved API response times for faster data indexing.

// -Implemented infinite scrolling for seamless API data fetching and incremental card rendering, leveraging event delegation to optimize performance and enhance page responsiveness.

// -Optimized Next.js server-side rendering (SSR) and code-splitting, reducing initial page load time by 40% and improving Core Web Vitals for a smoother user experience.

// -Managed multiple parallel development tasks, delivering key project milestones on time, improving overall team productivity by 20%.





// project 2:

// Rp Clan Internal Software | Data Approval Website

// Tech Stack: Html, CSS, ReactJS, MySQL, React Query, JavaScript, Bootstrap, React Hooks, Jotai

// -Built a responsive real estate website using React.js for a seamless user experience.

// -Developed infinite scrolling functionality to automate API data loading and progressively render cards, applying event delegation techniques to minimize DOM overhead and boost application performance

// -Demonstrated strong debugging and problem-solving skills by efficiently handling complex state updates using Jotai, and React Query, ensuring data consistency and smooth user interactions.


// project 3:

//  Hospital Management System

//  Tech Stack: ReactJs, Html, CSS, Microservices Architecture, plugins, React Hooks, Jotai, JavaScript

//  -Developing a web application for patients to book appointments, access health records, and receive notifications
 
//  -Enabled physicians and nurses to manage diagnosis and medication details efficiently, reducing administrative workload by 20%
 
//  -Deployed on AWS using Spring Cloud Microservices, improving scalability and system reliability


// project 4:

//  Expense Tracker with Group Splitting

//  Tech Stack: Java, Spring Boot, ReactJS, Token Security, AWS (RDS, S3). JavaScript
 
//  -Designed an expense tracking application that allows users to monitor spending and split expenses into groups, enhancing financial transparency

//  -Integrated group-based expense management, allowing users to categorize expenses for simplified management and collaboration

//  -Enabled financial trend analysis, promoting better budgeting habits


// project 5:

// PDF to IMAGE Converter
//  Tech Stack: ReactJS, ECMAScript, HTML, CSS, JavaScript

//  -Built a web application that converts PDFs into customizable images supporting JPEG, JPG, and PNG formats

//  -Enhanced user control with flexibility for image naming and customization

//  -Available on GitHub for implementation insights and opensource customization