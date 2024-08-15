'use client'

import Link from 'next/link'
import HamburgerMenu from './hamburger-menu'
import { ROUTES } from '@/constants/routes'

export function NavBar (): JSX.Element {
  return (
    <ul className='flex flex-row justify-between pt-3 px-3 py-1 bg-primary-400 lg:py-3'>
      <li><span>Generador de baloto</span></li>
      <li className='lg:hidden'><HamburgerMenu /></li>
      <li className='hidden lg:block'>
        <div className='flex flex-row items-center justify-center gap-8'>
          <Link href={ROUTES.LOGIN}>Iniciar sesión</Link>
          <Link href={ROUTES.REGISTER}>Registrarse</Link>
          <Link href={ROUTES.HISTORY}>Historial de sorteos</Link>
        </div>
      </li>
    </ul>
  )
}
