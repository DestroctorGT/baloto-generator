import { ApiAuth } from '@/enums/api'
import { post } from '@/proxy/verbs'

export const signOut = async (): Promise<{
  isSuccessful: string
} | undefined> => {
  const { data } = await post<string>(`${ApiAuth.ApiAuth}${ApiAuth.ApiLogOut}`)

  if (data != null) {
    return { isSuccessful: 'Sesión cerrada con éxito' }
  }
}
