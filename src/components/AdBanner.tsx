import { useEffect, useRef, useState } from 'react'

interface AdBannerProps {
  slotDesktop?: string
  slotMobile?: string
  format?: 'auto' | 'rectangle' | 'horizontal'
  className?: string
}

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    adsbygoogle: any[]
  }
}

const AdBanner = ({
  slotDesktop,
  slotMobile,
  format = 'auto',
  className = '',
}: AdBannerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const adPushed = useRef(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (adPushed.current || !containerRef.current) return

    const container = containerRef.current
    const existingIns = container.querySelector('ins.adsbygoogle')
    if (existingIns) return

    const ins = document.createElement('ins')
    ins.className = 'adsbygoogle'
    ins.style.display = 'block'
    ins.style.textAlign = 'center'
    ins.setAttribute('data-ad-client', 'ca-pub-8671364989340299')

    const slot = isMobile ? slotMobile : slotDesktop
    if (slot) ins.setAttribute('data-ad-slot', slot)

    ins.setAttribute('data-ad-format', format)
    ins.setAttribute('data-full-width-responsive', 'true')
    container.appendChild(ins)

    adPushed.current = true

    const timer = setTimeout(() => {
      try {
        if (!window.adsbygoogle) {
          window.adsbygoogle = []
        }
        window.adsbygoogle.push({})
      } catch {
        // AdSense may fail silently — no user-facing error needed
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [slotDesktop, slotMobile, format, isMobile])

  return (
    <div className={`ad-container my-10 ${className}`}>
      <div
        ref={containerRef}
        className="flex items-center justify-center"
      />
    </div>
  )
}

export default AdBanner
