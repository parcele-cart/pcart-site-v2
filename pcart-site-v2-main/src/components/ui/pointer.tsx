"use client"

import { useEffect, useRef, useState } from "react"
import {
  AnimatePresence,
  HTMLMotionProps,
  motion,
  useMotionValue,
} from "motion/react"

import { cn } from "@/lib/utils"

/**
 * A custom pointer component that displays an animated cursor.
 * Add this as a child to any component to enable a custom pointer when hovering.
 * You can pass custom children to render as the pointer.
 *
 * @component
 * @param {HTMLMotionProps<"div">} props - The component props
 */
export function Pointer({
  className,
  style,
  children,
  ...props
}: HTMLMotionProps<"div">): React.ReactNode {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isActive, setIsActive] = useState<boolean>(false)
  const [isHoveringClickable, setIsHoveringClickable] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      if (window.matchMedia("(pointer: coarse)").matches) return

      // Get the parent element directly from the ref
      const parentElement = containerRef.current.parentElement

      if (parentElement) {
        // Signal that custom pointer is active (enables cursor:none in CSS)
        document.body.classList.add("pointer-active")
        parentElement.style.cursor = "none"

        const checkClickable = (target: EventTarget | null) => {
          if (!(target instanceof Element)) return false
          return !!target.closest('button, a, [role="button"], input, select, label, textarea')
        }

        // Add event listeners to parent
        const handleMouseMove = (e: MouseEvent) => {
          x.set(e.clientX)
          y.set(e.clientY)
          setIsActive(true)
        }

        const handleMouseOver = (e: MouseEvent) => {
          setIsHoveringClickable(checkClickable(e.target))
        }

        const handleMouseEnter = (e: MouseEvent) => {
          x.set(e.clientX)
          y.set(e.clientY)
          setIsActive(true)
        }

        const handleMouseLeave = () => {
          setIsActive(false)
          setIsHoveringClickable(false)
        }

        parentElement.addEventListener("mousemove", handleMouseMove)
        parentElement.addEventListener("mouseover", handleMouseOver)
        parentElement.addEventListener("mouseenter", handleMouseEnter)
        parentElement.addEventListener("mouseleave", handleMouseLeave)

        return () => {
          document.body.classList.remove("pointer-active")
          parentElement.style.cursor = ""
          parentElement.removeEventListener("mousemove", handleMouseMove)
          parentElement.removeEventListener("mouseover", handleMouseOver)
          parentElement.removeEventListener("mouseenter", handleMouseEnter)
          parentElement.removeEventListener("mouseleave", handleMouseLeave)
        }
      }
    }
  }, [x, y])

  return (
    <>
      <div ref={containerRef} />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="pointer-events-none fixed top-0 left-0 z-[99999]"
            style={{
              x,
              y,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            {...props}
          >
            {children || (
              isHoveringClickable ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className={cn(className)}
                >
                  <path
                    d="M9 11.5V4.5a1.5 1.5 0 0 1 3 0v4a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1 3 0v1a1.5 1.5 0 0 1 3 0v4c0 3.314-2.686 6-6 6h-2.032A6 6 0 0 1 7 14.768V13.5a1.5 1.5 0 0 1 2-1.415V11.5z"
                    fill="black"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="1"
                  viewBox="0 0 16 16"
                  height="16"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                  className={cn(
                    "rotate-[-70deg] stroke-white text-black",
                    className
                  )}
                >
                  <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
                </svg>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
