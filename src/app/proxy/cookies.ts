import 'server-only'

import { JWTPayload, jwtVerify, JWTVerifyResult } from 'jose'

const JWT_SECRET = new TextEncoder().encode(process.env.SECRET_JWT_KEY)

export async function decrypt (token: string): Promise<JWTVerifyResult<JWTPayload> | null> {
  try {
    const payload = await jwtVerify(token, JWT_SECRET)

    return payload
  } catch (error) {
    return null
  }
}
