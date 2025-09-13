import { GithubSvg, LinkdinSvg } from "./commonSvgs"

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
    ["social", ["gitHub", "linkdin"]],
    ["gitHub", {
        link: "",
        logo: <GithubSvg />,
        name: "",
        title:"Git Hub"
    }],
    ["linkdin", {
        link: "",
        logo: <LinkdinSvg />,
        name: "",
        title:"Linkdin"
    }],
    ["name", "vinay Kumar Marni"],
    ["ShortName", "vinay"],
    ["skills", ["Frontend Language", "Backend Language", "Tools", "Frameworks", "Database", "DevOps", "Methodologies & Concepts"]],
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
    },]
])
