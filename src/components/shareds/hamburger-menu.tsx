'use client'

import { ROUTES } from '@/constants/routes'
import { routesNavBar } from '@/constants/routes-nav-bar'
import { useAuthenticated } from '@/contexts/authenticated'
import { RouteTypes } from '@/enums/route-types'
import { MenuMobileLinksProps } from '@/interfaces/props/menu-mobile-links'
import { signOut } from '@/rest-client/endpoints/auth/log-out'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Menu as MenuIcon } from 'iconoir-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

export default function HamburgerMenu (): JSX.Element {
  const { isAuthenticated, setIsAuthenticated } = useAuthenticated()
  const currentPathname = usePathname()
  const router = useRouter()

  const getClassName = (isActive: boolean): 'px-1 rounded bg-secondary-400 text-neutrals-white' | '' =>
    isActive ? 'px-1 rounded bg-secondary-400 text-neutrals-white' : ''

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
    <Menu>
      <MenuButton><MenuIcon /></MenuButton>
      <MenuItems anchor='bottom end' className='flex flex-col gap-1 p-2 rounded bg-neutrals-100 origin-top transition duration-200 ease-out data-[closed]:scale-95 data-[closed]:opacity-0' transition>
        {routesNavBar.map((link) => (
          <MenuItem key={link.key}>
            {handleLinks(link)}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
