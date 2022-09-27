import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const blocked_country = 'CZ'

export const config = {
  matcher: '/private-page'
}

export function middleware(req: NextRequest) {
  const country = req.geo && req.geo.country || 'us'

  console.log(`Visitor from: ${country}`)

  if (country === blocked_country) {
    req.nextUrl.pathname === '/login'
  } else {
    req.nextUrl.pathname = '/private-page'
  }

  return NextResponse.rewrite(req.nextUrl)
}
