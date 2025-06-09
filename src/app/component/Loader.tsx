'use client'
import { usePathname, useSearchParams } from 'next/navigation'
import NProgress from 'nprogress'
import { useEffect } from 'react'
import 'nprogress/nprogress.css'
import '../styles/nprogress-custom.css'

export default function Loader() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    NProgress.start()

    const id = requestAnimationFrame(() => {
      NProgress.done()
    })

    return () => cancelAnimationFrame(id)
  }, [pathname, searchParams])

  return null
}
