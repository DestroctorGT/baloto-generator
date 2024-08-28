import { Dispatch, SetStateAction } from 'react'

export interface AuthenticatedContextProps {
  isAuthenticated: boolean
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>
}
