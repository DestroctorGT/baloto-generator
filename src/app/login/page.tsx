import Button from '../../components/shareds/button'
import Input from '../../components/shareds/input'
import { ButtonConvention } from '../../enums/button-convention'

export default function Login (): JSX.Element {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6'>
      <section className='flex flex-col items-center justify-center gap-4'>
        <Input props={{}} label='Correo electrónico' />
        <Input props={{ type: 'password' }} label='Contraseña' />

        <div className='flex flex-col items-center gap-4 mt-4'>
          <Button convention={ButtonConvention.Primary} label='Iniciar sesión' />
          <button type='button'>¿Olvidaste tu contraseña?</button>
        </div>
      </section>
    </main>
  )
}
