'use server'

import { ApiAuth } from '@/enums/api'
import { post } from '@/proxy/verbs'
import { CreateUserDto } from '@/rest-client/dtos/users/create-user-dto'
import { cookies } from 'next/headers'

export const signUp = async (body: CreateUserDto): Promise<{
  accessToken: string
  refreshToken: string
} | undefined> => {
  const { data } = await post<{
    accessToken: string
    refreshToken: string
  }>(`${ApiAuth.ApiAuth}${ApiAuth.ApiSignIn}`, undefined, { ...body })

  if (data != null) {
    cookies().set('accessToken', data.accessToken)
    cookies().set('refreshToken', data.refreshToken)

    return data
  }
}
