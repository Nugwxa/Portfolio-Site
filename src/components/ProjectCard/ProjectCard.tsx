import { ProjectDTO } from '@/data/projects'
import Image from 'next/image'
import styles from './ProjectCard.module.css'
import Link from 'next/link'

type ProjectCardProps = {
  project: ProjectDTO
}
export default function ProjectCard(props: Readonly<ProjectCardProps>) {
  const { project } = props

  return (
    <div className={styles.project}>
      <div className={styles.projectContent}>
        <div className={styles.projectImageWrapper}>
          <Image
            className={styles.projectImage}
            alt={project.title}
            src={project.imgUrl}
            fill
          />
        </div>

        <h3 className={styles.projectTitle}>{project.title}</h3>

        <div className={styles.projectTags}>
          {project.tags.map((tag) => {
            return (
              <span className={styles.projectTag} key={tag}>
                {tag}
              </span>
            )
          })}
        </div>

        <div className={styles.projectDescription}>
          {project.description.map((paragraph) => {
            return <p key={paragraph}>{paragraph}</p>
          })}
        </div>
      </div>
      <div className={styles.projectLinks}>
        {project.projectLink && (
          <Link
            target="_blank"
            className={styles.projectLink}
            href={project.projectLink}
          >
            View Project
          </Link>
        )}
        {project.sourceCodeLink && (
          <Link
            target="_blank"
            className={styles.projectLink}
            href={project.sourceCodeLink}
          >
            View Code
          </Link>
        )}
      </div>
    </div>
  )
}
