import { NextResponse } from 'next/server'

import { PostController } from 'lib/controllers/post'

export async function middleware(req: any) {
  const url = req.nextUrl.clone()
  const slug = url.pathname.split('/').pop()

  if (!url.pathname.startsWith('/blog')) {
    return NextResponse.next()
  }

  const post = await PostController.getLegacyPost(slug)

  if (post) {
    url.pathname = `/blog/${post.slug}`
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
