'use client'

import Button from '@/components/shareds/button'
import Input from '@/components/shareds/input'
import { useLoader } from '@/contexts/loader'
import { generatePossibleBalotoNumber } from '@/rest-client/endpoints/baloto/generate-possible-baloto-number'
import { generatePossibleMilotoNumber } from '@/rest-client/endpoints/baloto/generate-possible-miloto-number'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Copy } from 'iconoir-react'
import { useState } from 'react'

export default function Home (): JSX.Element {
  const [balotoNumber, setBalotoNumber] = useState<number | undefined>()
  const [milotoNumber, setMilotoNumber] = useState<number | undefined>()
  const { showLoader, hideLoader } = useLoader()

  const generateBalotoNumber = async (): Promise<void> => {
    showLoader()
    const response = await generatePossibleBalotoNumber()
    hideLoader()

    if (response != null) {
      const newBalotoNumber = Number(response.possibleNumber.join('') + response.superBalota.toString())

      setBalotoNumber(newBalotoNumber)
    }
  }

  const generateMilotoNumber = async (): Promise<void> => {
    showLoader()
    const response = await generatePossibleMilotoNumber()
    hideLoader()

    if (response != null) {
      const newMilotoNumber = Number(response.join(''))

      setMilotoNumber(newMilotoNumber)
    }
  }
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6'>
      <section className='flex flex-col items-center justify-center gap-4'>
        <TabGroup className='bg-secondary-300 p-10 rounded shadow-md'>
          <TabList className='flex flex-row gap-3 mb-10'>
            <Tab className='rounded py-1 px-3 data-[selected]:bg-primary-500'>Baloto</Tab>
            <Tab className='rounded py-1 px-3 data-[selected]:bg-primary-500'>Miloto</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className='flex flex-col items-center justify-center gap-6'>
              <div className='flex flex-row gap-3'>
                <Input props={{ disabled: true, id: 'baloto', name: 'baloto', className: 'text-center', value: balotoNumber }} />
                <button type='button'>
                  <Copy />
                </button>
              </div>
              <Button
                props={{
                  onClick: () => {
                    void generateBalotoNumber()
                  }
                }} label='Generar'
              />
            </TabPanel>
            <TabPanel className='flex flex-col items-center justify-center gap-6'>
              <div className='flex flex-row gap-3'>
                <Input props={{ className: 'text-center', disabled: true, value: milotoNumber, id: 'miloto', name: 'miloto' }} />
                <button type='button'>
                  <Copy />
                </button>
              </div> <Button
                props={{
                  onClick: () => {
                    void generateMilotoNumber()
                  }
                }} label='Generar'
                     />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </section>
    </main>
  )
}
