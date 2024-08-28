import { RouteTypes } from '@/enums/route-types'

export interface MenuMobileLinksProps {
  key: string
  href: string
  label: string
  type: RouteTypes
  authenticated: boolean
  isAuthenticated: boolean
}
