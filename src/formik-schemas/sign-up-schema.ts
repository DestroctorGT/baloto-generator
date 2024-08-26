import * as Yup from 'yup'

export const SignUpSchema = Yup.object().shape({
  email: Yup.string().email('Correo invalido').required('El correo es obligatorio'),
  password: Yup.string().required('La contraseña es obligatoria'),
  userName: Yup.string().required('El nombre de usuario es obligatorio'),
  name: Yup.string().required('El nombre es obligatorio'),
  lastName: Yup.string().required('El apellido es obligatorio')
})
