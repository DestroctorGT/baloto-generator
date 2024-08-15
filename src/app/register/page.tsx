import Link from 'next/link'
import Button from '../../components/shareds/button'
import Input from '../../components/shareds/input'
import { ButtonConvention } from '../../enums/button-convention'

export default function Register (): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6'>
      <section className='flex flex-col items-center justify-center gap-4'>
        <Input props={{}} label='Correo electrónico' />
        <Input props={{}} label='Contraseña' />

        <div className='flex flex-col items-center gap-4 mt-4'>
          <Button convention={ButtonConvention.Primary} label='Crear cuenta' />
          <Link href='/'>¿Ya tienes una cuenta?</Link>
        </div>
      </section>
    </main>
  )
}
