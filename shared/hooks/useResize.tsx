import { useCallback, useEffect, useState } from "react"

export default function useResize() {
  const [isMobile, setIsMobile] = useState(false)

  const handleResize = useCallback(() => {
    setIsMobile(window.innerWidth < 1024)
  }, [])

  useEffect(() => {
    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])

  return {isMobile}
}
