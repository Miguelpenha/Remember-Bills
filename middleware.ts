import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/auth/login' || req.nextUrl.pathname === '/api/unauthorized') {
    return NextResponse.next()
  } else {
    const token = req.cookies.get('auth')?.value

    if (token) {
      try {
        if (await jwtVerify(token, new TextEncoder().encode(process.env.SECRET_JWT))) {
          return NextResponse.next()
        } else {
          return NextResponse.redirect(new URL('/api/unauthorized', req.url))
        }
      } catch {
        return NextResponse.redirect(new URL('/api/unauthorized', req.url))
      }
    } else {
      return NextResponse.redirect(new URL('/api/unauthorized', req.url))
    }
  }
}

export const config = {
  matcher: '/api/:path*'
}