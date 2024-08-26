'use client'

import BasicLoader from '@/components/shareds/basic-loader'
import { LoaderContextProps } from '@/interfaces/props/loader-context'
import { createContext, useContext, useMemo, useState } from 'react'

const LoaderContext = createContext<LoaderContextProps | undefined>(undefined)

export const LoaderProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const showLoader = (): void => setLoading(true)
  const hideLoader = (): void => setLoading(false)

  const obj = useMemo(() => ({ showLoader, hideLoader, loading }), [])

  return (
    <LoaderContext.Provider value={obj}>
      {children}
      {loading && <BasicLoader />}
    </LoaderContext.Provider>
  )
}

export const useLoader = (): LoaderContextProps => {
  const context = useContext(LoaderContext)
  if (context === undefined) {
    throw new Error('useLoader must be used within a LoaderProvider')
  }
  return context
}
