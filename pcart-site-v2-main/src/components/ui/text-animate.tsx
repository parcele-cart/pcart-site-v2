"use client"

import { ElementType, memo } from "react"
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react"

import { cn } from "@/lib/utils"

type AnimationType = "text" | "word" | "character" | "line"
type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown"

interface TextAnimateProps extends MotionProps {
  children: string
  className?: string
  segmentClassName?: string
  delay?: number
  duration?: number
  variants?: Variants
  as?: ElementType
  by?: AnimationType
  startOnView?: boolean
  once?: boolean
  animation?: AnimationVariant
  accessible?: boolean
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.1,
}

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

const presetVariants: Record<AnimationVariant, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  blurIn: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
    exit: { opacity: 0, filter: "blur(10px)" },
  },
  blurInUp: {
    hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(10px)", y: 20 },
  },
  blurInDown: {
    hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0 },
    exit: { opacity: 0, filter: "blur(10px)", y: -20 },
  },
  slideUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  },
  slideDown: {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 },
  },
  slideRight: {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.5 },
  },
  scaleDown: {
    hidden: { opacity: 0, scale: 1.5 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 1.5 },
  },
}

function splitText(text: string, by: AnimationType): string[] {
  switch (by) {
    case "word":
      return text.split(/(\s+)/)
    case "character":
      return text.split("")
    case "line":
      return text.split("\n")
    case "text":
    default:
      return [text]
  }
}

const TextAnimate = memo(function TextAnimate({
  children,
  className,
  segmentClassName,
  delay = 0,
  duration = 0.3,
  variants,
  as: Component = "p",
  by = "word",
  startOnView = true,
  once = true,
  animation = "blurInUp",
  ...props
}: TextAnimateProps) {
  const MotionComponent = motion.create(Component as ElementType)
  const segments = splitText(children, by)
  const finalVariants = variants || presetVariants[animation] || defaultItemVariants
  const stagger = staggerTimings[by]

  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: stagger,
        staggerDirection: -1,
      },
    },
  }

  return (
    <AnimatePresence mode="popLayout">
      <MotionComponent
        variants={containerVariants}
        initial="hidden"
        whileInView={startOnView ? "visible" : undefined}
        animate={startOnView ? undefined : "visible"}
        exit="exit"
        viewport={startOnView ? { once } : undefined}
        className={cn("whitespace-pre-wrap", className)}
        {...props}
      >
        {segments.map((segment, i) => (
          <motion.span
            key={`${by}-${i}-${segment}`}
            variants={finalVariants}
            transition={{ duration }}
            className={cn("inline-block", segmentClassName)}
            style={{ willChange: "filter, transform, opacity" }}
          >
            {segment === " " ? "\u00A0" : segment}
          </motion.span>
        ))}
      </MotionComponent>
    </AnimatePresence>
  )
})

TextAnimate.displayName = "TextAnimate"

export { TextAnimate }
