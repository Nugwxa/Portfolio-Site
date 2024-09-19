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
      {/* Container for the main content of the project */}
      <div className={styles.projectContent}>
        {/* Wrapper for the project image to control its layout and styling */}
        <div className={styles.projectImageWrapper}>
          <Image
            className={styles.projectImage}
            alt={project.title}
            src={project.imgUrl}
            fill
          />
        </div>

        {/* Project Title */}
        <h3 className={styles.projectTitle}>{project.title}</h3>

        {/* Project Tags */}
        <div className={styles.projectTags}>
          {project.tags.map((tag) => {
            return (
              <span className={styles.projectTag} key={tag}>
                {tag}
              </span>
            )
          })}
        </div>

        {/* Project Description */}
        <div className={styles.projectDescription}>
          {/* Iterate over each paragraph in the project's description array and render them */}
          {project.description.map((paragraph) => {
            return <p key={paragraph}>{paragraph}</p>
          })}
        </div>
      </div>

      {/* Container for the project's external links, such as the live project and source code */}
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
