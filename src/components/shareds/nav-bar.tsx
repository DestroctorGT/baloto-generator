'use client'

import Link from 'next/link'
import HamburgerMenu from './hamburger-menu'
import { usePathname, useRouter } from 'next/navigation'
import { routesNavBar } from '@/constants/routes-nav-bar'
import { useAuthenticated } from '@/contexts/authenticated'
import { MenuMobileLinksProps } from '@/interfaces/props/menu-mobile-links'
import { RouteTypes } from '@/enums/route-types'
import { Fragment } from 'react'
import { signOut } from '@/rest-client/endpoints/auth/log-out'
import { ROUTES } from '@/constants/routes'

export function NavBar (): JSX.Element {
  const { isAuthenticated, setIsAuthenticated } = useAuthenticated()
  const currentPathname = usePathname()
  const router = useRouter()

  const getClassName = (isActive: boolean): 'p-1.5 rounded bg-secondary-400 text-neutrals-white' | 'hover:text-neutrals-white transition duration-100 ease-in-out' =>
    isActive ? 'p-1.5 rounded bg-secondary-400 text-neutrals-white' : 'hover:text-neutrals-white transition duration-100 ease-in-out'

  const handleLogOut = async (): Promise<void> => {
    await signOut()
    setIsAuthenticated(false)
    router.push(ROUTES.LOGIN)
  }

  const renderLink = (link: MenuMobileLinksProps, isActive: boolean): JSX.Element =>
    <Link href={link.href} className={getClassName(isActive)}>{link.label}</Link>

  const renderButton = (link: MenuMobileLinksProps): JSX.Element =>
    <button
      className='text-start hover:text-neutrals-white transition duration-100 ease-in-out'
      type='button' onClick={() => {
        if (link.label === 'Cerrar sesión') {
          void handleLogOut()
        }
      }}
    >{link.label}
    </button>

  const handleLinks = (link: MenuMobileLinksProps): JSX.Element | null => {
    const isActive = currentPathname === link.href

    if (link.authenticated && !isAuthenticated) {
      return <></> // No renderiza nada si el usuario no está autenticado
    }

    if (link.isAuthenticated && isAuthenticated) {
      return <></>
    }

    switch (link.type) {
      case RouteTypes.LINK:
        return renderLink(link, isActive)
      case RouteTypes.BUTTON:
        return renderButton(link)
      default:
        return <></>
    }
  }

  return (
    <ul className='flex flex-row items-center justify-between pt-3 px-3 py-1 bg-primary-400 lg:py-3'>
      <li>
        <Link href={ROUTES.HOME} className='hover:text-neutrals-white transition duration-100 ease-in-out'>Generador de baloto</Link>
      </li>
      <li className='lg:hidden'><HamburgerMenu /></li>
      <li className='hidden lg:block'>
        <div className='flex flex-row items-center justify-center gap-8'>
          {routesNavBar.map((link) => (
            <Fragment key={link.key}>
              {handleLinks(link)}
            </Fragment>
          ))}
        </div>
      </li>
    </ul>
  )
}
