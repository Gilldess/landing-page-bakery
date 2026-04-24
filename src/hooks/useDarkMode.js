import { useState, useEffect } from 'react'

export function useDarkMode() {
  // Set default ke dark (true)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    const root = window.document.documentElement
    
    if (isDark) {
      root.classList.add('dark')
      root.classList.remove('light')
    } else {
      root.classList.add('light')
      root.classList.remove('dark')
    }
  }, [isDark])

  return [isDark, setIsDark]
}