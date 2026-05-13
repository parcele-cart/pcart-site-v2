"use client"

import { useEffect, useRef } from "react"

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
}

interface ParticlesProps {
  quantity?: number
  staticity?: number
  ease?: number
  color?: string
  size?: number
  className?: string
  opacity?: number
}

export function Particles({
  quantity = 30,
  staticity = 50,
  ease = 50,
  color = "#ffffff",
  size = 1,
  className = "",
  opacity = 0.6,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)

  const circles = useRef<Circle[]>([])
  const rafID = useRef<number | null>(null)

  const mouse = useRef({ x: 0, y: 0 })

  // 🎯 helpers
  const resizeCanvas = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const dpr = window.devicePixelRatio || 1

    canvas.width = window.innerWidth * dpr
    canvas.height = window.innerHeight * dpr

    canvas.style.width = `${window.innerWidth}px`
    canvas.style.height = `${window.innerHeight}px`

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    ctx.scale(dpr, dpr)
    ctxRef.current = ctx
  }

  const clearContext = () => {
    const canvas = canvasRef.current
    const ctx = ctxRef.current
    if (!canvas || !ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  const hexToRgb = (hex: string): number[] => {
    hex = hex.replace("#", "")
    const r = parseInt(hex.substring(0, 2), 16)
    const g = parseInt(hex.substring(2, 4), 16)
    const b = parseInt(hex.substring(4, 6), 16)
    return [r, g, b]
  }

  const drawCircle = (circle: Circle) => {
    const ctx = ctxRef.current
    if (!ctx) return

    const rgb = hexToRgb(color)
    ctx.beginPath()
    ctx.arc(
      circle.x + circle.translateX,
      circle.y + circle.translateY,
      circle.size,
      0,
      Math.PI * 2
    )
    ctx.fillStyle = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},${circle.alpha})`
    ctx.fill()
  }

  const initParticles = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    circles.current = Array.from({ length: quantity }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      translateX: 0,
      translateY: 0,
      size: Math.random() * 2 + size,
      alpha: 0,
      targetAlpha: Math.random() * opacity + 0.1,
      dx: (Math.random() - 0.5) * 0.2,
      dy: (Math.random() - 0.5) * 0.2,
    }))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    resizeCanvas()
    initParticles()

    const handleResize = () => {
      resizeCanvas()
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX
      mouse.current.y = e.clientY
    }

    const animate = () => {
      const ctx = ctxRef.current
      if (!ctx) return

      clearContext()

      circles.current.forEach((circle) => {
        // movimento base
        circle.x += circle.dx
        circle.y += circle.dy

        // interação com mouse
        const targetX = (mouse.current.x / staticity) * -1
        const targetY = (mouse.current.y / staticity) * -1

        circle.translateX += (targetX - circle.translateX) / ease
        circle.translateY += (targetY - circle.translateY) / ease

        // fade
        if (circle.alpha < circle.targetAlpha) {
          circle.alpha += 0.01
        } else {
          circle.alpha -= 0.005
        }

        drawCircle(circle)
      })

      rafID.current = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)

      if (rafID.current) cancelAnimationFrame(rafID.current)
    }
  }, [quantity, staticity, ease, color, size])

  return (
    <canvas
      ref={canvasRef}
      className={className}
    />
  )
}