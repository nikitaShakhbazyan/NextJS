'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession } from 'next-auth/react'

type NavLink = {
    label : string,
    href : string
}

type Props = {
    navLinks : NavLink[];
}

export const Navigation = ({navLinks}: Props) => {
    const pathname = usePathname()
    const session = useSession()
    console.log(session.data)
  return (
    <>{
        navLinks.map(link => {
            const isActive = pathname === link.href

            return (
                <Link key={link.label} href={link.href} 
                className={isActive ? 'active' : ''}>
                    {link.label}
                </Link>
            )
        })
    }</>
  )
}