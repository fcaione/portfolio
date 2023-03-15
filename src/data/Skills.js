import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
  SiHeroku,
  SiNetlify,
  SiVisualstudiocode,
  SiVisualstudio,
  SiFigma,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiSequelize,
  SiCanva
} from 'react-icons/si'
import {FaDatabase} from "react-icons/fa"

const languages =
[
  {
    reactIcon: <SiJavascript />,
    name: "Javascript"
  },
  {
    reactIcon: <SiPython />,
    name: "Python"
  },
  {
    reactIcon: <SiHtml5 />,
    name: "HTML"
  },
  {
    reactIcon: <SiCss3 />,
    name: "CSS"
  },
]

const libraries = 
[
  {
    reactIcon: <SiReact />,
    name: "React"
  },
  {
    reactIcon: <SiNodedotjs />,
    name: "Nodedot.js"
  },
  {
    reactIcon: <SiExpress/>,
    name: "Express"
  },
  {
    reactIcon: <FaDatabase />,
    name: "Mongoose"
  },
  {
    reactIcon: <SiSequelize />,
    name: "Sequelize"
  },
  {
    reactIcon: <SiTailwindcss/>,
    name: "Tailwind"
  },
]

const tools =
[
  {
    reactIcon: <SiGit />,
    name: "Git"
  },
  {
    reactIcon: <SiGithub />,
    name: "Github"
  },
  {
    reactIcon: <SiMongodb/>,
    name: "MongoDB"
  },
  {
    reactIcon: <SiPostgresql />,
    name: "PostgreSQL"
  },
  {
    reactIcon: <SiFirebase />,
    name: "Firebase"
  },
  {
    reactIcon: <SiHeroku />,
    name: "Heroku"
  },
  {
    reactIcon: <SiNetlify />,
    name: "Netlify"
  },
  {
    reactIcon: <SiVisualstudiocode/>,
    name: "VS Code"
  },
  {
    reactIcon: <SiCanva />,
    name: "Canva"
  },
]

export {
  languages,
  libraries,
  tools
}