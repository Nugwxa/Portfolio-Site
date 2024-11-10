import { ProjectDTO } from '@/data/projects'
import Button from '../Button'
import Image from 'next/image'
import styles from './ProjectCard.module.css'

type ProjectCardProps = {
  project: ProjectDTO
}
export default function ProjectCard(props: Readonly<ProjectCardProps>) {
  const { project } = props

  return (
    <div className={styles.project}>
      {/* Project Image */}
      <div className={styles.projectImageWrapper}>
        <Image
          className={styles.projectImage}
          alt={project.title}
          src={project.imgUrl}
          fill
        />
      </div>

      {/* Content */}
      <div className={styles.projectContent}>
        <div className={styles.mainContent}>
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

          {/* Project Title */}
          <h3 className={styles.projectTitle}>{project.title}</h3>

          {/* Project Description */}
          <div className={styles.projectDescription}>
            {/* Iterate over each paragraph in the project's description array and render them */}
            {project.description.map((paragraph) => {
              return <p key={paragraph}>{paragraph}</p>
            })}
          </div>
        </div>

        {/* Links */}
        <div className={styles.projectLinks}>
          {project.projectLink && (
            <Button
              href={project.projectLink}
              target="_blank"
              aria-label={`View the project ${project.title} in a new tab`}
              rel="noopener noreferrer"
            >
              View Project
            </Button>
          )}
          {project.sourceCodeLink && (
            <Button
              href={project.sourceCodeLink}
              target="_blank"
              aria-label={`View the source code for ${project.title} in a new tab`}
              rel="noopener noreferrer"
            >
              View Source
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
