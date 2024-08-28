import { MenuMobileLinksProps } from '@/interfaces/props/menu-mobile-links'
import { ROUTES } from './routes'
import { RouteTypes } from '@/enums/route-types'

export const routesNavBar: MenuMobileLinksProps[] = [
  { key: crypto.randomUUID(), href: ROUTES.LOGIN, label: 'Iniciar sesión', type: RouteTypes.LINK, authenticated: false, isAuthenticated: true },
  { key: crypto.randomUUID(), href: ROUTES.REGISTER, label: 'Registrarse', type: RouteTypes.LINK, authenticated: false, isAuthenticated: true },
  { key: crypto.randomUUID(), href: ROUTES.FAVORITES, label: 'Favoritos', type: RouteTypes.LINK, authenticated: true, isAuthenticated: false },
  { key: crypto.randomUUID(), href: ROUTES.HISTORY, label: 'Historial de sorteos', type: RouteTypes.LINK, authenticated: false, isAuthenticated: false },
  { key: crypto.randomUUID(), href: ROUTES.LOGIN, label: 'Cerrar sesión', type: RouteTypes.BUTTON, authenticated: true, isAuthenticated: false }
]
