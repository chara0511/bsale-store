import { useEffect, useState } from 'react'

import { META } from '@/assets/models'

const useSearchMeta = (asPath: string): META => {
  const [pathname, setPathname] = useState<string>('/search')
  const [category, setCategory] = useState<string | undefined>()

  useEffect(() => {
    // Only access asPath after hydration to avoid a server mismatch
    const path = asPath.split('?')[0]
    const parts = path.split('/')
    const c = parts[2]

    setPathname(path)

    if (c !== category) setCategory(c)
  }, [asPath])

  return { pathname, category }
}

export default useSearchMeta
