'use server'
import Link from 'next/link'
import styles from './Header.module.css'

export default async function Header() {
  return (
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
  )
}
