'use client'

import { SignIn } from '@/interfaces/login'
import Button from '../../components/shareds/button'
import Input from '../../components/shareds/input'
import { ButtonConvention } from '../../enums/button-convention'
import { Formik } from 'formik'
import { useLoader } from '@/contexts/loader'
import { logIn } from '@/rest-client/endpoints/auth/log-in'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { SignInSchema } from '@/formik-schemas/sign-in-schema'
import { useAuthenticated } from '@/contexts/authenticated'

const initialValues: SignIn = { email: '', password: '' }

export default function Login (): JSX.Element {
  const { showLoader, hideLoader } = useLoader()
  const router = useRouter()
  const { setIsAuthenticated } = useAuthenticated()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6 text-neutrals-black'>
      <Formik
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmit={async (values, { setSubmitting }) => {
          showLoader()
          const response = await logIn({ userName: values.email, password: values.password })
          setSubmitting(false)
          hideLoader()

          if (response?.isSuccessful !== null) {
            setIsAuthenticated(true)
            router.push(ROUTES.HOME)
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
          <form onSubmit={handleSubmit} className='grid grid-rows-2 gap-5 w-4/5 sm:w-1/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5'>
            <div>
              <Input props={{ id: 'email', name: 'email', type: 'email', onChange: handleChange, onBlur: handleBlur, value: values.email }} label='Correo electrónico' />
              {(Boolean(errors.email)) && (touched.email === true)
                ? (
                  <label className='text-error font-normal text-sm'>
                    {errors.email}
                  </label>
                  )
                : null}
            </div>

            <div>
              <Input props={{ id: 'password', name: 'password', type: 'password', onChange: handleChange, onBlur: handleBlur, value: values.password }} label='Contraseña' />
              {(Boolean(errors.password)) && (touched.password === true)
                ? (
                  <label className='text-error font-normal text-sm'>
                    {errors.password}
                  </label>
                  )
                : null}
            </div>

            <div className='flex flex-col items-center gap-4 mt-4'>
              <Button
                convention={ButtonConvention.Primary} label='Iniciar sesión' props={{
                  type: 'submit',
                  disabled: isSubmitting
                }}
              />
              <button
                type='button' onClick={() => {
                  router.push(ROUTES.REGISTER)
                }}
              >¿Olvidaste tu contraseña?
              </button>
            </div>
          </form>
        )}
      </Formik>
    </main>
  )
}
