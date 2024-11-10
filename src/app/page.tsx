import { projects } from '@/data/projects'
import Button from '@/components/Button'
import ContentWrapper from '@/components/ContentWrapper'
import Header from '@/components/Header'
import ProjectCard from '@/components/ProjectCard/'
import styles from './page.module.css'

export default function Home() {
  return (
    <div>
      <Header />

      <ContentWrapper className={styles.contentWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection} id="about">
          <div className={styles.userDetailsWrapper}>
            <h1 className={styles.userName}>OJ Abba</h1>
            <p className={styles.userRole}>Software Developer</p>
          </div>

          <div className={styles.userSummary}>
            <p>
              I build user-friendly web applications and solve complex problems
              using modern frameworks like Next.js, Astro, and Node.js. With a
              strong focus on clean, efficient code, I thrive in collaborative
              environments where I can continuously learn and improve.
            </p>

            <p>
              In my free time, I explore my love for cycling, discover new
              trails, and play the saxophone.
            </p>
          </div>

          <div className={styles.userSocials}>
            <Button href="https://github.com/Nugwxa">GitHub</Button>
            <Button href="https://www.linkedin.com/in/ojabba/">LinkedIn</Button>
          </div>
        </section>

        {/* Projects */}
        <section className={styles.section} id="projects">
          <h2>Featured Projects</h2>

          <div className={styles.projectsWrapper}>
            {projects.map((project) => {
              return <ProjectCard key={project.title} project={project} />
            })}
          </div>
        </section>
      </ContentWrapper>
    </div>
  )
}
