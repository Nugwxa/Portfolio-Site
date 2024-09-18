import { user } from '@/data/'
import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
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
    </div>
  )
}
