import { NextResponse } from 'next/server'

export async function middleware (): Promise<NextResponse<unknown>> {
  // const currentPath = request.nextUrl.pathname
  // const isProtectedRoute = protectedRoutes.includes(currentPath)

  // if (isProtectedRoute) {
  //   const cookie = cookies().get('access_token')?.value

  //   if (cookie != null) {
  //     const session = await decrypt(cookie)

  //     if (session == null) {
  //       return NextResponse.redirect(new URL(ROUTES.LOGIN, request.nextUrl))
  //     }
  //   } else {
  //     return NextResponse.redirect(new URL(ROUTES.LOGIN, request.nextUrl))
  //   }
  // }

  return NextResponse.next()
}

export const config = {
  matcher: ['/', '/favorites']
}
