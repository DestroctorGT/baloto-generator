import Button from '@/components/shareds/button'
import Input from '@/components/shareds/input'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Copy } from 'iconoir-react'

export default function Home (): JSX.Element {
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
                <Input props={{ disabled: true, id: 'baloto', name: 'baloto', className: 'text-center' }} />
                <button type='button'>
                  <Copy />
                </button>
              </div>
              <Button props={{}} label='Generar' />
            </TabPanel>
            <TabPanel className='flex flex-col items-center justify-center gap-6'>
              <div className='flex flex-row gap-3'>
                <Input props={{ disabled: true, id: 'miloto', name: 'miloto', className: 'text-center' }} />
                <button type='button'>
                  <Copy />
                </button>
              </div> <Button props={{}} label='Generar' />
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </section>
    </main>
  )
}
