'use client'

import { useEffect } from 'react'

export default function BasicLoader (): JSX.Element {
  useEffect(() => {
    async function getLoader (): Promise<void> {
      const { lineSpinner } = await import('ldrs')
      lineSpinner.register()
    }
    void getLoader()
  }, [])

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-neutrals-900/10 z-50'>
      <l-line-spinner
        size='40'
        stroke='3'
        speed='1'
        color='black'
      />
    </div>
  )
}
