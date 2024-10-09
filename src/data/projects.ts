export type ProjectDTO = {
  title: string
  tags: string[]
  description: string[]
  imgUrl: string
  projectLink?: string
  sourceCodeLink?: string
}
export const projects: ProjectDTO[] = [
  {
    title: 'Maguire LMS',
    tags: ['NextJS', 'Typescript', 'Node', 'Stripe', 'MySql', 'Radix UI'],
    description: [
      'Developed a robust Learning Management System (LMS) with custom access levels, course management, PDF certificate generation, Stripe integration for course credits, and a feedback system. Integrated an xAPI-based Learning Record Store (LRS) for tracking user activities and providing detailed reporting. Styled all emails to match the client’s branding for a cohesive user experience.',
    ],
    projectLink: 'https://my.maguiretraining.co.uk/',
    imgUrl: '/img/maguire-screenshot.JPG',
  },
  {
    title: 'Under One Cloud',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript', 'Express'],
    description: [
      'Redeveloped the Under One Cloud website by migrating from WordPress to a custom-built Astro solution, significantly boosting performance and loading speeds. Designed a modern, user-friendly interface in Figma, improving responsiveness and optimising the user experience. Added an interactive hover effect on team photos on the "About Us" page for an engaging touch.',
    ],
    imgUrl: '/img/uoc-screenshot.JPG',
    projectLink: 'https://underonecloud.com/',
  },
  {
    title: 'Football Voting Platform',
    tags: ['NextJS', 'Typescript', 'Node', 'Radix UI', 'Supabase'],
    description: [
      'Developed a platform that offers an interactive experience for football fans to vote for their favorite players during events. Built using Next.js with TypeScript, the platform includes a range of features to enhance user interaction and admin management.',
    ],
    projectLink: 'https://football-voting-platform.vercel.app/',
    sourceCodeLink: 'https://github.com/Nugwxa/Football-Voting-Platform',
    imgUrl: '/img/fvp-screenshot.JPG',
  },
  {
    title: 'Built By Cornerstone',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript', 'Express'],
    description: [
      "Redesigned Cornerstone's site from Wix to a custom-built Astro solution, creating a professional look that better reflected their brand. Designed the new layout in Figma, then developed the site for improved performance and a smoother user experience, enabling Cornerstone to showcase their work more effectively and strengthen their online presence.",
    ],
    projectLink: 'https://builtbycornerstone.co.uk/',
    imgUrl: '/img/cornerstone-screenshot.JPG',
  },
  {
    title: 'Cloud Socials',
    tags: ['HTML', 'CSS', 'JavaScript'],
    description: [
      'Designed and developed a single-page website for Cloud Socials, a social media management company. Using Figma for design and a simple tech stack of HTML, CSS, and JavaScript, I created a visually appealing, brand-aligned site with clean, efficient code and a seamless user experience, enhancing their online presence.',
    ],
    imgUrl: '/img/cloud-socials-screenshot.JPG',
    projectLink: 'https://cloudsocials.com/',
  },
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
