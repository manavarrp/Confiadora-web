import { NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'
import { KEY_ROLES } from './config'

export async function middleware (req) {
  const { pathname } = req.nextUrl
  const session = await getToken({ req, secret: process.env.NEXTAUTH_SECRET })
  const role = session?.user[KEY_ROLES]

  if (role === 'Customer' && (pathname.startsWith('/admin') || pathname.startsWith('/consultant'))) {
    return NextResponse.redirect(new URL('/customer', req.url))
  }

  if (role === 'Super Administrator' && (pathname.startsWith('/customer') || pathname.startsWith('/consultant'))) {
    return NextResponse.redirect(new URL('/admin', req.url))
  }

  if (role === 'Consultant' && (pathname.startsWith('/admin') || pathname.startsWith('/customer'))) {
    return NextResponse.redirect(new URL('/ ', req.url))
  }
  // console.log(role, 'REWQQ')

  return NextResponse.next()
}
