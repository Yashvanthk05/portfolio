import { BrainCircuit, Folder, Github, House, Info, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiVercel } from "react-icons/si";

export const navItems = [
    {
        name:"Home",
        icon:<House/>,
        link:"/",
        path:"/"
    },
    {
        name:"About",
        icon:<Info/>,
        link:"/about",
        path:"/about"
    },
    {
        name:"Skills",
        icon:<BrainCircuit/>,
        link:"/skills",
        path:"/skills"
    },
    {
        name:"Projects",
        icon:<Folder/>,
        link:"/projects",
        path:"/projects"
    },
]
export const logos = [
    {
        link:"mailto:yashvanthk05@gmail.com",
        icon:<Mail/>,
        name:"Mail"
    },
    {
        link:"",
        icon:<Linkedin/>,
        name:"Linkedin"
    },
    {
        link:"",
        icon:<Github/>,
        name:"Github"
    },
    {
        link:"",
        icon:<Instagram/>,
        name:"Instagram"
    }
]

export const education = [
    {
        year:"2020-2021",
        name:"CBSE Class 10",
        institution:"Devi Academy",
        location:"Chennai",
        grade:"96.7%"
    },
    {
        year:"2022-2023",
        name:"CBSE Class 12",
        institution:"Devi Academy",
        location:"Chennai",
        grade:"96.2%"
    },
    {
        year:"2023-2027",
        name:"CS AIML",
        institution:"Vellore Institute of Technology",
        location:"Chennai",
        grade:"9.64 CGPA"
    }
]
export const work =[
    {
        year:"May,2024 - July,2024",
        name:"Cyber Security Physical System",
        position:"Research Intern",
        institution:"Vellore Institute of Technology",
        location:"Chennai"
    }
]

export const skills = [
    {
        name:"Graphics and Design",
        skills:[
            {
                name:"Figma",
                link:"",
                icon:"/skills/figma.png"
            },
            {
                name:"Canva",
                link:"",
                icon:"/skills/canva.png"
            },
            {
                name:"Framer",
                link:"",
                icon:"/skills/framer.png"
            },
            {
                name:"Photoshop",
                link:"",
                icon:"/skills/photoshop.png"
            },
            {
                name:"Illustrator",
                link:"",
                icon:"/skills/illustrator.png"
            },
            {
                name:"Premiere Pro",
                link:"",
                icon:"/skills/premiere.png"
            },
        ]
    },
    {
        name:"Development",
        skills:[
            {
                name:"HTML",
                link:"",
                icon:"/skills/html.png"
            },
            {
                name:"CSS",
                link:"",
                icon:"/skills/css.png"
            },
            {
                name:"Javascript",
                link:"",
                icon:"/skills/js.png"
            },
            {
                name:"React JS",
                link:"",
                icon:"/skills/reactjs.png"
            },
            {
                name:"Next JS",
                link:"",
                icon:"/skills/nextjs.png"
            },
            {
                name:"Node JS",
                link:"",
                icon:"/skills/nodejs.png"
            },
            {
                name:"Express JS",
                link:"",
                icon:"/skills/expressjs.png"
            },
            {
                name:"jQuery",
                link:"",
                icon:"/skills/jquery.png"
            },
        ]
    },
    {
        name:"Languages",
        skills:[
            {
                name:"C",
                link:"",
                icon:"/skills/c.png"
            },
            {
                name:"C++",
                link:"",
                icon:"/skills/c++.png"
            },
            {
                name:"Java",
                link:"",
                icon:"/skills/java.png"
            },
            {
                name:"Python",
                link:"",
                icon:"/skills/python.png"
            },
        ]
    },
    {
        name:"Database",
        skills:[
            {
                name:"Firebase",
                link:"",
                icon:"/skills/firebase.png"
            },
            {
                name:"MongoDB",
                link:"",
                icon:"/skills/mongodb.png"
            },
            {
                name:"MySQL",
                link:"",
                icon:"/skills/mysql.png"
            },
            {
                name:"PostgreSQL",
                link:"",
                icon:"/skills/postgresql.png"
            },
        ]
    },
]

export const projects = [
    {
        name:"VBLOG",
        tools:["Nextjs","Next-auth","MongoDB"],
        image:"/projects/vblog.png",
        desc:"A Blogging Website for VIT Students",
        website:"https://v-blog-psi.vercel.app/",
        github:"https://github.com/Yashvanthk05/VBlog"
    },
    {
        name:"Vehnicate",
        tools:["Nextjs","Firebase","MongoDB"],
        desc:"A Website for a Startup Company",
        image:"/projects/vblog.png",
        website:"https://vehnicate.vercel.app/",
        github:""
    },
    {
        name:"VChem",
        tools:["flask"],
        image:"/projects/vblog.png",
        website:"",
        github:""
    },
    {
        name:"EcoCart",
        tools:["Firebase","Nextjs","Next-auth","3js"],
        image:"/projects/ecocart.png"
    }
]

export const socialprof = [
    {
        name:"Github",
        desc:"Projects",
        link:"https://github.com/Yashvanthk05",
        image:"/profiles/githubicon.svg",
        height:1000,
        width:1000,
    },
    {
        name:"Vercel",
        desc:"Deployment",
        link:"https://vercel.com/yashvanths-projects",
        image:"/profiles/vercelicon.png",
        height:1000,
        width:1000,
    },
    {
        name:"Linkedin",
        desc:"Work",
        image:"/profiles/linkedin.png",
        height:1000,
        width:1000,
        link:"https://www.linkedin.com/in/yashvanth-karunakaran-35288828b/"
    },
    {
        name:"StackOverflow",
        desc:"Discussions",
        image:"/profiles/stackoverflow.png",
        height:1000,
        width:1000,
        link:"abc"
    }
]