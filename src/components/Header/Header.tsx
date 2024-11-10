'use server'
import Link from 'next/link'
import styles from './Header.module.css'

export default async function Header() {
  return (
    <header aria-label="Main Navigation" className={styles.navWrapper}>
      <nav role="navigation">
        <ul>
          <li>
            <Link href={'#about'}>About</Link>
          </li>

          <li>
            <Link href={'#projects'}>Projects</Link>
          </li>
          <li>
            <Link
              title="Send an email to nugwxa@gmail.com"
              href={'mailto:nugwxa@gmail.com'}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
