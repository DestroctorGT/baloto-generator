import { ApiAuth } from '@/enums/api'
import { post } from '@/proxy/verbs'
import { CreateUserDto } from '@/rest-client/dtos/users/create-user-dto'

export const signUp = async (body: CreateUserDto): Promise<{
  isSuccessful: string
} | undefined> => {
  const { data } = await post<string>(`${ApiAuth.ApiAuth}${ApiAuth.ApiSignIn}`, undefined, { ...body })

  if (data != null) {
    return { isSuccessful: 'Registro exitoso' }
  }
}
