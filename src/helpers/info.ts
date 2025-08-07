interface Info {
  image: string
}

interface Tecnologies {
  id: number,
  name: string,
  image: string,
}

interface Works {
  id: number,
  title: string,
  image: string,
  description: string,
  status: string,
  gitHubUrl?: string,
  figmaUrl?: string,
  webUrl?: string,
}

export const  data: Info = {
  image: "https://res.cloudinary.com/ivannavas/image/upload/v1745199526/%E7%A7%81/vqc34xmfiwvnddstjqky.png"
}

export const tecnologies: Tecnologies[] = [
  {
    id: 1,
    name: "Node.js",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206178/%E7%A7%81/tecnologies/xayk5lv9e1d87etakm0q.png"
  },
  {
    id: 2,
    name: "JavaScript",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206178/%E7%A7%81/tecnologies/exfyvnepyw92xqoxjmal.png"
  },
  {
    id: 3,
    name: "TypeScript",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206177/%E7%A7%81/tecnologies/e9hsmctafqfgjtr77env.png"
  },
  {
    id: 4,
    name: "React",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206177/%E7%A7%81/tecnologies/zzzsprknciih0sdx6lrh.png"
  },
  {
    id: 5,
    name: "NextJs",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206404/%E7%A7%81/tecnologies/qijszdcpeuaanndv3oox.svg"
  },
  {
    id: 6,
    name: "Tailwind",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206177/%E7%A7%81/tecnologies/ma8kaew0krei9jv1pvwd.png"
  },
  {
    id: 7,
    name: "MySql",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206177/%E7%A7%81/tecnologies/knemkyzau2qbkmf53hc0.png"
  },
  {
    id: 8,
    name: "Git",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206177/%E7%A7%81/tecnologies/yqfxofsfds73tvfeosre.png"
  },
  {
    id: 9,
    name: "Figma",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1745206177/%E7%A7%81/tecnologies/o8yskl3d27a0td0kvwpl.png"
  },
] 

export const works: Works[] = [
  {
    id: 1,
    title: "Lemon",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1746506665/portafolio/works/sizbpfacxcwwrfel9elc.png",
    description: "Red social creada con el fin de utilizar todos los conocimientos adquiridos en consumo y creacion de apis.",
    status: "En proceso",
    gitHubUrl: "https://github.com/Ivan-Navas/next_lemon",
    figmaUrl: "https://www.figma.com/design/bwufG0l2VWNRaDYN9QLDts/RedSocial?node-id=110-2&t=RH5d0ubisK8FeNX8-1",
    webUrl: "",
  },
  {
    id: 2,
    title: "Oinc",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1746506665/portafolio/works/q3mpjapq3yblqpubxo3v.png",
    description: "Pagina web creada para la gestion de ahorros.",
    status: "En proceso",
    gitHubUrl: "https://github.com/Ivan-Navas/next_Objetives",
    figmaUrl: "https://www.figma.com/design/oMhBibkLbX1TzGgETWfRlj/Ahorros?node-id=0-1&t=mHMGmn1HrAJjwu6A-1",
    webUrl: "",
  },
  {
    id: 3,
    title: "Rick & Morty api",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1746506666/portafolio/works/nntsna5vocoiyrdn13ev.png",
    description: "Pagina wen en la que se consume una api(The rick and morty api).",
    status: "Terminado",
    gitHubUrl: "https://github.com/Ivan-Navas/RickAndMorty",
    figmaUrl: "",
    webUrl: "https://rick-and-morty-bay-eight.vercel.app/",
  },
  {
    id: 4,
    title: "Cave",
    image: "https://res.cloudinary.com/ivannavas/image/upload/v1746506690/portafolio/works/nsvp2z03al45obm4g8x2.png",
    description: "Aplicación mobile de gestion financiera",
    status: "En proceso",
    gitHubUrl: "https://github.com/Ivan-Navas/cave",
    figmaUrl: "https://www.figma.com/design/oMhBibkLbX1TzGgETWfRlj/Ahorros?node-id=81-3",
    webUrl: "",
  },
]
