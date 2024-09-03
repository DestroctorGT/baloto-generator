'use server'
import { post } from '@/proxy/verbs'
import { ApiAuth } from '@/enums/api'
import { LoginDto } from '@/rest-client/dtos/auth/login-dto'
import { cookies } from 'next/headers'

export const logIn = async (body: LoginDto): Promise<{
  accessToken: string
  refreshToken: string
} | undefined> => {
  const { data } = await post<{
    accessToken: string
    refreshToken: string
  }>(`${ApiAuth.ApiAuth}${ApiAuth.ApiLogIn}`, undefined, { ...body })

  if (data != null) {
    cookies().set('accessToken', data.accessToken)
    cookies().set('refreshToken', data.refreshToken)

    return data
  }
}
