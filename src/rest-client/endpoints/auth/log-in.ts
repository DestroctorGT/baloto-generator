import { post } from '@/proxy/verbs'
import { ApiAuth } from '@/enums/api'
import { LoginDto } from '@/rest-client/dtos/auth/login-dto'

export const logIn = async (body: LoginDto): Promise<{
  isSuccessful: string
} | undefined> => {
  const { data } = await post<string>(`${ApiAuth.ApiAuth}${ApiAuth.ApiLogIn}`, { ...body })

  if (data != null) {
    return { isSuccessful: 'Login exitoso' }
  }
}
