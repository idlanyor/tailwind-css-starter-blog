import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams
  const endpoint = params.get('endpoint')
  const query = params.get('query')
  const url = params.get('url')
  const res = await fetch(
    `https://api.lolhuman.xyz/api/${endpoint}?apikey=nyanpasuu&query=${query}&url=${url}`
  )

  console.log(query)
  const data = await res.json()
  return NextResponse.json({ data })
}
