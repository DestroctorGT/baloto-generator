'use client'

import { AuthenticatedContextProps } from '@/interfaces/props/authenticated'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthenticatedContext = createContext<AuthenticatedContextProps | undefined>(undefined)

export const AuthenticatedProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar la cookie en el cliente
    const cookies = document.cookie.split('; ').reduce<Record<string, string>>((acc, cookie) => {
      const [name, value] = cookie.split('=')
      acc[name] = value
      return acc
    }, {})

    const token = cookies.access_token
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    setIsAuthenticated(!!token)
  }, [isAuthenticated])

  const obj = useMemo(() => ({ isAuthenticated, setIsAuthenticated }), [isAuthenticated])

  return (
    <AuthenticatedContext.Provider value={obj}>
      {children}
    </AuthenticatedContext.Provider>
  )
}

export const useAuthenticated = (): AuthenticatedContextProps => {
  const context = useContext(AuthenticatedContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within a AuthenticatedProvider')
  }
  return context
}
