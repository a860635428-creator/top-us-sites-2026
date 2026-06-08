import { useEffect, useRef } from 'react'

interface ConfettiCanvasProps {
  /** Whether to start the animation */
  active: boolean
  /** Duration in ms before auto-cleanup (default 3000) */
  duration?: number
}

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  rotation: number
  rotationSpeed: number
  opacity: number
}

const COLORS = ['#3b82f6', '#ef4444', '#22c55e', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4']

export default function ConfettiCanvas({ active, duration = 3000 }: ConfettiCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animRef = useRef<number>(0)

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Particle[] = []

    // Create 80 confetti particles
    for (let i = 0; i < 80; i++) {
      particles.push({
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height * 0.2,
        vx: (Math.random() - 0.5) * 10,
        vy: Math.random() * 4 + 2,
        size: Math.random() * 8 + 4,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 8,
        opacity: 1,
      })
    }

    const gravity = 0.08
    const startTime = Date.now()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const elapsed = Date.now() - startTime
      if (elapsed > duration + 500) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        cancelAnimationFrame(animRef.current)
        return
      }

      let allFaded = true

      for (const p of particles) {
        // Fade out in last 500ms
        if (elapsed > duration) {
          p.opacity = Math.max(0, p.opacity - 0.04)
        }

        if (p.opacity <= 0.01) continue
        allFaded = false

        p.x += p.vx
        p.vy += gravity
        p.y += p.vy
        p.rotation += p.rotationSpeed

        ctx.save()
        ctx.globalAlpha = p.opacity
        ctx.translate(p.x, p.y)
        ctx.rotate((p.rotation * Math.PI) / 180)
        ctx.fillStyle = p.color

        // Draw rectangle confetti
        const w = p.size * 0.6
        const h = p.size
        ctx.fillRect(-w / 2, -h / 2, w, h)
        ctx.restore()
      }

      if (!allFaded) {
        animRef.current = requestAnimationFrame(animate)
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
      }
    }

    animRef.current = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animRef.current)
    }
  }, [active, duration])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
      }}
    />
  )
}
