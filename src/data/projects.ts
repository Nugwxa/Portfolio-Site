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
    tags: [
      'NextJS',
      'React',
      'Typescript',
      'Node',
      'Stripe',
      'Prisma',
      'MySql',
      'Radix UI',
    ],
    description: [
      "Developed a robust Learning Management System (LMS) with features such as custom access levels for admins, department heads, and organizational leaders, comprehensive course management, the ability for users to manually request and download a PDF certificate upon course completion, secure Stripe integration for purchasing course credits, and a built-in course feedback system. Additionally, I ensured all emails were styled according to the client's branding to enhance the overall user experience.",
      'I also integrated a Learning Record Store (LRS) using xAPI to track and store user learning activities and performance, providing detailed reporting and insights.',
    ],
    projectLink: 'https://my.maguiretraining.co.uk/',
    imgUrl: '/img/maguire-screenshot.JPG',
  },
  {
    title: 'Under One Cloud',
    tags: ['Astro', 'HTML', 'CSS', 'JavaScript', 'Express', 'Figma'],
    description: [
      'Redeveloped the Under One Cloud website by migrating from WordPress to a custom-built solution using Astro. This transition significantly enhanced the site’s loading speeds and overall performance. I started by designing a modern, user-friendly interface in Figma. The custom development not only improved site responsiveness but also optimized user experience, demonstrating my skills in both design and development while delivering substantial performance gains.',
      'Highlight: On the "About Us" page, I created an engaging hover effect on the team photos, adding a unique and interactive touch to the site.',
    ],
    imgUrl: '/img/uoc-screenshot.JPG',
    projectLink: 'https://underonecloud.com/',
  },
  {
    title: 'Football Voting Platform',
    tags: [
      'NextJS',
      'React',
      'Typescript',
      'Node',
      'Imgur',
      'Prisma',
      'Supabase',
      'Radix UI',
      'Figma',
    ],
    description: [
      'Developed a web application that offers a seamless and interactive experience for football fans to vote for their favorite players during events. Built using Next.js with TypeScript, the platform includes a range of features to enhance user interaction and admin management.',
    ],
    projectLink: 'https://football-voting-platform.vercel.app/',
    sourceCodeLink: 'https://github.com/Nugwxa/Football-Voting-Platform',
    imgUrl: '/img/fvp-screenshot.JPG',
  },
  {
    title: 'Cornerstone',
    tags: ['Astro', 'HTML', 'CSS', 'Express', 'Figma'],
    description: [
      'Cornerstone, a company specializing in building and renovation, needed an upgrade from their existing Wix site, which didn’t align with their brand or functionality requirements. I redesigned the site in Figma to create a more professional and engaging look that reflected their services and expertise. Following the design phase, I developed the new site using Astro, significantly improving performance and delivering a smoother user experience. This redesign allowed Cornerstone to showcase their work more effectively and enhance their online presence.',
    ],
    imgUrl: '/img/cornerstone-screenshot.JPG',
  },
  {
    title: 'Cloud Socials',
    tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    description: [
      "Cloud Socials, a social media management company, required a new website to enhance their online presence. I designed a sleek, single-page site in Figma, adhering closely to their brand guidelines. I then developed the site using a straightforward tech stack of HTML, CSS, and JavaScript, focusing on clean, efficient code and a seamless user experience. The result was a visually appealing and functional site that effectively represents Cloud Socials' services.",
    ],
    imgUrl: '/img/cloud-socials-screenshot.JPG',
    projectLink: 'https://cloudsocials.com/',
  },
  {
    title: "Survivor's Ark",
    tags: ['Unity', 'C#', 'Adobe XD', 'Photoshop'],
    description: [
      'A survivor shooter game developed using the Unity game engine, featuring UI elements crafted with Adobe XD, Illustrator and Photoshop, garnered over 500 downloads since its release in 2020, and earned 3rd place among other games at the Naija Games Showcase later that year.',
    ],
    projectLink: 'https://nugwxa.itch.io/survivorsark',
    imgUrl: '/img/survivor-screenshot.png',
  },
]
