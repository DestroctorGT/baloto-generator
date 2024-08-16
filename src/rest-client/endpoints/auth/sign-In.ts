import { ApiAuth } from '@/enums/api'
import { post } from '@/proxy/verbs'
import { CreateUserDto } from '@/rest-client/dtos/users/create-user-dto'

export const signIn = async (body: CreateUserDto): Promise<{
  isSuccessful: string
} | undefined> => {
  const { data } = await post<string>(`${ApiAuth.ApiAuth}${ApiAuth.ApiSignIn}`, { ...body })

  if (data != null) {
    return { isSuccessful: 'Registro exitoso' }
  }
}
