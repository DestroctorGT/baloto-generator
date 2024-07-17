import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { decrypt } from './app/proxy/cookies'

// This function can be marked `async` if using `await` inside
export async function middleware (request: NextRequest): Promise<NextResponse<unknown>> {
  const protectedRoutes = ['/home']
  const currentPath = request.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(currentPath)

  if (isProtectedRoute) {
    const cookie = cookies().get('access_token')?.value

    if (cookie != null) {
      const session = await decrypt(cookie)

      if (session == null) {
        return NextResponse.redirect(new URL('/login', request.nextUrl))
      }
    }
  }

  return NextResponse.next()
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*'
}
