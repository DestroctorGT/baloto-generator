'use client'

import Button from '@/components/shareds/button'
import Input from '@/components/shareds/input'
import { useLoader } from '@/contexts/loader'
import { ClipBoardTypes } from '@/enums/clip-board-types'
import { generatePossibleBalotoNumber } from '@/rest-client/endpoints/baloto/generate-possible-baloto-number'
import { generatePossibleMilotoNumber } from '@/rest-client/endpoints/baloto/generate-possible-miloto-number'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Copy } from 'iconoir-react'
import { useState } from 'react'
import toast from 'react-hot-toast'

export default function Home (): JSX.Element {
  const [balotoNumber, setBalotoNumber] = useState<string | undefined>()
  const [milotoNumber, setMilotoNumber] = useState<string | undefined>()
  const { showLoader, hideLoader } = useLoader()

  const generateBalotoNumber = async (): Promise<void> => {
    showLoader()
    const response = await generatePossibleBalotoNumber()
    hideLoader()

    if (response != null) {
      const newBalotoNumber = `${response.possibleNumber.join('  ')} - ${response.superBalota}`

      setBalotoNumber(newBalotoNumber)
    }
  }

  const generateMilotoNumber = async (): Promise<void> => {
    showLoader()
    const response = await generatePossibleMilotoNumber()
    hideLoader()

    if (response != null) {
      const newMilotoNumber = response.join('  ')

      setMilotoNumber(newMilotoNumber)
    }
  }

  const handleCopyToClipboard = (option: ClipBoardTypes): void => {
    if (option === ClipBoardTypes.BALOTO && balotoNumber !== undefined) {
      navigator.clipboard.writeText(balotoNumber)
        .then(() => {
          toast.success('Numero copiado al portapapeles')
        })
        .catch(err => {
          toast.error('Hubo un error al copiar el numero')
          return err
        })
    } else if (option === ClipBoardTypes.MILOTO && milotoNumber !== undefined) {
      navigator.clipboard.writeText(milotoNumber)
        .then(() => {
          toast.success('Numero copiado al portapapeles')
        })
        .catch(err => {
          toast.error('Hubo un error al copiar el numero')
          return err
        })
    }
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6'>
      <section className='flex flex-col items-center justify-center gap-4'>
        <TabGroup className='bg-secondary-300 p-10 rounded shadow-md'>
          <TabList className='flex flex-row gap-3 mb-10'>
            <Tab className='rounded py-1 px-3 data-[selected]:bg-primary-500 text-neutrals-black'>Baloto</Tab>
            <Tab className='rounded py-1 px-3 data-[selected]:bg-primary-500 text-neutrals-black'>Miloto</Tab>
          </TabList>
          <TabPanels>
            <TabPanel className='flex flex-col items-center justify-center gap-6'>
              <div className='flex flex-row gap-3'>
                <Input props={{ disabled: true, id: 'baloto', name: 'baloto', className: 'text-center text-neutrals-black', value: balotoNumber }} />
                <button type='button' onClick={() => handleCopyToClipboard(ClipBoardTypes.BALOTO)}>
                  <Copy className='text-neutrals-black' />
                </button>
              </div>
              <Button
                props={{
                  className: 'text-neutrals-black',
                  onClick: () => {
                    void generateBalotoNumber()
                  }
                }} label='Generar'
              />
            </TabPanel>
            <TabPanel className='flex flex-col items-center justify-center gap-6'>
              <div className='flex flex-row gap-3'>
                <Input props={{ className: 'text-center text-neutrals-black', disabled: true, value: milotoNumber, id: 'miloto', name: 'miloto' }} />
                <button type='button' onClick={() => handleCopyToClipboard(ClipBoardTypes.MILOTO)}>
                  <Copy className='text-neutrals-black' />
                </button>
              </div>
              <Button
                props={{
                  className: 'text-neutrals-black',
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
