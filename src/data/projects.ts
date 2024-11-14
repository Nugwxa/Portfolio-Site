export type ProjectDTO = {
  title: string
  tags: string[]
  description: string[]
  imgUrl: string
  projectLink?: string
  sourceCodeLink?: string
}
export const projects: ProjectDTO[] = [
  // Maguire
  {
    title: 'Maguire Training LMS',
    tags: ['NextJS', 'Typescript', 'Node', 'Stripe', 'MySQL', 'Radix UI'],
    description: [
      'A robust Learning Management System (LMS) with custom access levels, course management, PDF certificate generation, Stripe integration for course credits, and a feedback system. An xAPI-based Learning Record Store (LRS) was integrated to track user activities and provide detailed reporting. All emails were styled to align with the client’s branding for a cohesive user experience.',
    ],
    projectLink: 'https://my.maguiretraining.co.uk/',
    imgUrl: '/img/maguire-screenshot.JPG',
  },

  // Lendsqr
  {
    title: 'Lendsqr Dashboard',
    tags: ['NextJS', 'Typescript', 'SCSS', 'Jest', 'Zustand'],
    description: [
      'Developed a responsive, pixel-perfect frontend following Figma designs for login, dashboard, and user management pages. Built modular, reusable components, utilised Zustand for efficient state management, and ensured reliable functionality through Jest and React Testing Library.',
    ],
    projectLink: 'https://lendsqr-fe-dashboard.vercel.app/',
    sourceCodeLink: 'https://github.com/Nugwxa/lendsqr-dashboard',
    imgUrl: '/img/lendsqr-screenshot.png',
  },

  // UOC
  {
    title: 'Under One Cloud',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript'],
    description: [
      'The Under One Cloud website was redeveloped, migrating from WordPress to a custom Astro solution to enhance performance and loading speeds. A modern, user-friendly interface was designed in Figma, improving responsiveness and optimizing the user experience. An interactive hover effect was added to team photos on the "About Us" page for added engagement.',
    ],
    imgUrl: '/img/uoc-screenshot.JPG',
    projectLink: 'https://underonecloud.com/',
  },

  // Footbal Voting Platform
  {
    title: 'Football Voting Platform',
    tags: ['NextJS', 'Typescript', 'Node', 'Radix UI', 'Supabase'],
    description: [
      'Developed a platform that offers an interactive experience for football fans to vote for their favorite players during events. Built using NextJS with TypeScript, the platform includes a range of features to enhance user interaction and admin management.',
    ],
    projectLink: 'https://football-voting-platform.vercel.app/',
    sourceCodeLink: 'https://github.com/Nugwxa/Football-Voting-Platform',
    imgUrl: '/img/fvp-screenshot.JPG',
  },

  // Moving Faces
  {
    title: 'Moving Faces',
    tags: ['Astro', 'JavaScript', 'TypeScript', 'SCSS'],
    description: [
      'A grid layout of faces where hovering over any face makes the nearby faces "look" towards it. This simple, fun effect adds movement and can make team photos on company pages more engaging. Initially used smiley faces as placeholders, but the effect works well with real images, adding an interactive touch to "Meet the Team" sections.',
    ],
    imgUrl: '/img/moving-faces.JPG',
    projectLink: 'https://moving-faces.vercel.app/',
    sourceCodeLink: 'https://github.com/Nugwxa/Moving-Faces',
  },

  // Built By Cornertone
  {
    title: 'Built By Cornerstone',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript', 'React', 'Express'],
    description: [
      "Built By Cornerstone's site was redesigned from Wix to a custom-built Astro solution, creating a professional look aligned with their brand. The layout was crafted in Figma and developed to boost performance and enhance user experience, enabling Cornerstone to showcase their work more effectively and strengthen their online presence.",
    ],
    projectLink: 'https://builtbycornerstone.co.uk/',
    imgUrl: '/img/cornerstone-screenshot.JPG',
  },

  // Cloud Socials
  {
    title: 'Cloud Socials',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'A single-page website was designed and developed for Cloud Socials, a social media management company. Using Figma for design and a tech stack of HTML, CSS, and JavaScript, the site was created to be visually appealing, brand-aligned, and user-friendly, with clean, efficient code to enhance their online presence.',
    ],
    imgUrl: '/img/cloud-socials-screenshot.JPG',
    projectLink: 'https://cloudsocials.com/',
  },

  // Survivor's Ark
  {
    title: "Survivor's Ark",
    tags: ['Unity', 'C#', 'Adobe XD'],
    description: [
      'A survivor shooter game developed using the Unity game engine, featuring UI elements crafted with Adobe XD, Illustrator and Photoshop, garnered over 500 downloads since its release in 2020, and earned 3rd place among other games at the Naija Games Showcase later that year.',
    ],
    projectLink: 'https://nugwxa.itch.io/survivorsark',
    imgUrl: '/img/survivor-screenshot.png',
  },
]
