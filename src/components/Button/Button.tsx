'use client'

import Link from 'next/link'
import styles from './Button.module.css'
import { ArrowUpRight } from 'lucide-react'

interface ButtonProps extends React.ComponentPropsWithoutRef<'a'> {
  children: React.ReactNode
}

export default function Button(props: Readonly<ButtonProps>) {
  const { children, href = '#', ...rest } = props

  return (
    <Link href={href} className={styles.link} {...rest}>
      {children} <ArrowUpRight />
    </Link>
  )
}
