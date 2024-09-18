type User = {
  name: string
  role: string
  summary: string
  profile: string[]
  socials: {
    label: string
    link: string
  }[]
}

export const user: User = {
  name: 'OJ Abba',
  role: 'Software Developer',
  summary:
    'A software developer with expertise in full-stack web development, performance optimization, and user-centric design.',
  profile: [
    "I'm a software developer with a passion for building efficient and user-focused web applications. With experience in full-stack development, I specialize in crafting clean code and optimizing performance. Proficient in a range of technologies, I continuously enhance my skills through hands-on projects and contributions to open-source communities.",
    'I hold a BSc (Hons) in Computing from the University of Portsmouth, UK, where I developed a strong foundation in software engineering and user experience design. My work includes successful projects in web development, from custom LMS solutions to dynamic voting platforms, demonstrating my commitment to delivering high-quality, impactful software.',
  ],
  socials: [
    { label: 'Github', link: 'https://github.com/Nugwxa' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/in/ojabba/' },
  ],
}
