
'use client'

import { ROUTES } from '@/constants/routes'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Menu as MenuIcon } from 'iconoir-react'
import Link from 'next/link'

enum RouteTypes {
  LINK = 'LINK',
  BUTTON = 'BUTTON'
}

interface MenuMobileLinksProps {
  key: string
  href: string
  label: string
  type: RouteTypes
  authenticated: boolean
}

const routes: MenuMobileLinksProps[] = [
  { key: crypto.randomUUID(), href: ROUTES.LOGIN, label: 'Iniciar sesión', type: RouteTypes.LINK, authenticated: false },
  { key: crypto.randomUUID(), href: ROUTES.REGISTER, label: 'Registrarse', type: RouteTypes.LINK, authenticated: false },
  { key: crypto.randomUUID(), href: ROUTES.FAVORITES, label: 'Favoritos', type: RouteTypes.LINK, authenticated: true },
  { key: crypto.randomUUID(), href: ROUTES.HISTORY, label: 'Historial de sorteos', type: RouteTypes.LINK, authenticated: false },
  { key: crypto.randomUUID(), href: ROUTES.LOGIN, label: 'Cerrar sesión', type: RouteTypes.BUTTON, authenticated: true }
]

export default function HamburgerMenu (): JSX.Element {
  const handleLinks = (link: MenuMobileLinksProps): JSX.Element | undefined => {
    if (link.type === RouteTypes.LINK) {
      return <Link href={link.href}>{link.label}</Link>
    } else if (link.type === RouteTypes.BUTTON) {
      return <button type='button' className='text-start'>{link.label}</button>
    }
  }
  return (
    <Menu>
      <MenuButton><MenuIcon /></MenuButton>
      <MenuItems anchor='bottom end' className='flex flex-col gap-1 p-2 rounded bg-neutrals-100'>
        {routes.map((link) => (
          <MenuItem key={link.key}>
            {handleLinks(link)}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
