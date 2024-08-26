import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt } from './proxy/cookies'
import { protectedRoutes } from './constants'
import { ROUTES } from './constants/routes'

export async function middleware (request: NextRequest): Promise<NextResponse<unknown>> {
  const currentPath = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute) {
    const cookie = cookies().get('access_token')?.value

    if (cookie != null) {
      const session = await decrypt(cookie)

      if (session == null) {
        return NextResponse.redirect(new URL(ROUTES.LOGIN, request.nextUrl))
      }
    } else {
      return NextResponse.redirect(new URL(ROUTES.LOGIN, request.nextUrl))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/favorites']
}
