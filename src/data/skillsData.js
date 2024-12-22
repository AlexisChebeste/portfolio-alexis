import AstroIcon from '../components/icons/skills/AstroIcon.astro';
import CssIcon from '../components/icons/skills/Css.astro';
import ExpressIcon from '../components/icons/skills/Express.astro';
import HtmlIcon from '../components/icons/skills/Html.astro';
import JavaScriptIcon from '../components/icons/skills/JavaScript.astro';
import MongoDBIcon from '../components/icons/skills/MongoDB.astro';
import NodeJsIcon from '../components/icons/skills/NodeJs.astro';
import ReactIcon from '../components/icons/skills/React.astro';
import TailwindCssIcon from '../components/icons/skills/TailwindCss.astro';
import TypeScriptIcon from '../components/icons/skills/TypeScript.astro';

export const skillsData = [
  {
    category: "Frontend",
    items: [
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "JavaScript", icon: JavaScriptIcon },
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
      { name: "Tailwind CSS", icon: TailwindCssIcon }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: NodeJsIcon },
      { name: "Express", icon: ExpressIcon },
      { name: "MongoDB", icon: MongoDBIcon }
    ]
  },
  {
    category: "Herramientas",
    items: [
      { name: "Astro", icon: AstroIcon }
    ]
  }
]