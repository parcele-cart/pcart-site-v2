import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Shared cubic-bezier easing for section animations */
export const ease: [number, number, number, number] = [0.25, 0.1, 0.25, 1]
