'use server'

import { ApiAuth } from '@/enums/api'
import { post } from '@/proxy/verbs'
import { cookies } from 'next/headers'

export const signOut = async (): Promise<{
  isSuccessful: string
} | undefined> => {
  const { data } = await post<string>(`${ApiAuth.ApiAuth}${ApiAuth.ApiLogOut}`)

  if (data != null) {
    cookies().delete('accessToken')
    cookies().delete('refreshToken')

    return { isSuccessful: 'Sesión cerrada con éxito' }
  }
}
