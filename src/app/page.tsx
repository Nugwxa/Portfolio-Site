import { projects } from '@/data/projects'
import { user } from '@/data/'
import ContentWrapper from '@/components/ContentWrapper'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard/'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navWrapper}>
        <nav>
          <ul>
            <li>
              <Link href={'#about'}>About</Link>
            </li>

            <li>
              <Link href={'#projects'}>Projects</Link>
            </li>
            <li>
              <Link href={'mailto:phavorabba@gmail.com'}>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Hero section containing user details and social links */}
      <section className={styles.heroSection}>
        <div className={styles.userDetails}>
          <h1 className={styles.userName}>{user.name}</h1>
          <div className={styles.userRole}>{user.role}</div>
        </div>

        <div className={styles.userSummary}>{user.summary}</div>

        {user.socials.length > 0 && (
          <div className={styles.userSocials}>
            {user.socials.map((social) => {
              return (
                <Link
                  key={social.link}
                  href={social.link}
                  target="_blank"
                  className={styles.socialButton}
                >
                  {social.label}
                </Link>
              )
            })}
          </div>
        )}
      </section>

      <ContentWrapper>
        <section className={styles.section} id="about">
          <h2>About Me</h2>

          <div className={styles.userProfile}>
            {user.profile.map((paragraph) => {
              return <p key={paragraph}>{paragraph}</p>
            })}
          </div>
        </section>

        <section className={styles.section} id="projects">
          <h2>Projects</h2>

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
