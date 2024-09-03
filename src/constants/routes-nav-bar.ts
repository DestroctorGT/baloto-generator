import { MenuMobileLinksProps } from '@/interfaces/props/menu-mobile-links'
import { ROUTES } from './routes'
import { RouteTypes } from '@/enums/route-types'

export const routesNavBar: MenuMobileLinksProps[] = [
  { key: crypto.randomUUID(), href: ROUTES.HISTORY, label: 'Historial de sorteos', type: RouteTypes.LINK, authenticated: false, isAuthenticated: false }
]
