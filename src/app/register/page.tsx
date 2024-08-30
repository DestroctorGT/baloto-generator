'use client'

import Link from 'next/link'
import Button from '../../components/shareds/button'
import Input from '../../components/shareds/input'
import { ButtonConvention } from '../../enums/button-convention'
import { Formik } from 'formik'
import { useLoader } from '@/contexts/loader'
import { useRouter } from 'next/navigation'
import { ROUTES } from '@/constants/routes'
import { SignUpSchema } from '@/formik-schemas/sign-up-schema'
import { SignUp } from '@/interfaces/register'
import { signUp } from '@/rest-client/endpoints/auth/sign-up'

const initialValues: SignUp = { email: '', password: '', name: '', lastName: '', userName: '' }

export default function Register (): JSX.Element {
  const { showLoader, hideLoader } = useLoader()
  const router = useRouter()

  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-6 text-neutrals-black'>
      <Formik
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmit={async (values, { setSubmitting }) => {
          showLoader()
          const response = await signUp(values)
          setSubmitting(false)
          hideLoader()

          if (response?.isSuccessful !== null) {
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
          <form className='grid grid-cols-1 gap-5 w-4/5 sm:w-1/4 md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5' onSubmit={handleSubmit}>
            <div>
              <Input props={{ id: 'name', name: 'name', onChange: handleChange, onBlur: handleBlur, value: values.name }} label='Nombre' />
              {(Boolean(errors.name)) && (touched.name === true)
                ? (
                  <label className='text-error font-normal text-sm'>
                    {errors.name}
                  </label>
                  )
                : null}
            </div>

            <div>
              <Input props={{ id: 'lastName', name: 'lastName', onChange: handleChange, onBlur: handleBlur, value: values.lastName }} label='Apellido' />
              {(Boolean(errors.lastName)) && (touched.lastName === true)
                ? (
                  <label className='text-error font-normal text-sm'>
                    {errors.lastName}
                  </label>
                  )
                : null}
            </div>

            <div>
              <Input props={{ id: 'userName', name: 'userName', onChange: handleChange, onBlur: handleBlur, value: values.userName }} label='Nombre de usuario' />
              {(Boolean(errors.userName)) && (touched.userName === true)
                ? (
                  <label className='text-error font-normal text-sm'>
                    {errors.userName}
                  </label>
                  )
                : null}
            </div>

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
                convention={ButtonConvention.Primary} label='Crear cuenta' props={{
                  type: 'submit',
                  disabled: isSubmitting
                }}
              />
              <Link href={ROUTES.LOGIN}>¿Ya tienes una cuenta?</Link>
            </div>
          </form>
        )}
      </Formik>

    </main>
  )
}
