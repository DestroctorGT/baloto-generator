import * as Yup from 'yup'

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Correo invalido').required('El correo es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria')
})
