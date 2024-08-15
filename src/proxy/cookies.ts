import 'server-only'

import { JWTPayload, jwtVerify, JWTVerifyResult } from 'jose'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const JWT_SECRET = new TextEncoder().encode(process.env.SECRET_JWT_KEY)

export async function decrypt (token: string): Promise<JWTVerifyResult<JWTPayload> | null> {
  try {
    const payload = await jwtVerify(token, JWT_SECRET)

    return payload
  } catch (error) {
    return null
  }
}

export async function verifySession (): Promise<JWTVerifyResult<JWTPayload>> {
  const cookie = cookies().get('access_token')?.value

  if (cookie != null) {
    const session = await decrypt(cookie)

    if (session == null) {
      redirect('/login')
    } else {
      return session
    }
  } else {
    redirect('/login')
  }
}