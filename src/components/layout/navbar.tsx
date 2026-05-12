"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { RainbowButton } from "@/components/ui/rainbow-button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Solução", href: "#solucao" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "/contato" },
]

const sectionIds = ["solucao", "como-funciona", "faq"]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")

  const cachedScrollHeight = useRef(0)
  const ticking = useRef(false)
  const progressBarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateCachedHeight = () => {
      cachedScrollHeight.current = document.documentElement.scrollHeight - window.innerHeight
    }
    updateCachedHeight()

    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 20)

        // Update progress bar via ref (avoids re-render on every frame)
        const total = cachedScrollHeight.current
        const pct = total > 0 ? (window.scrollY / total) * 100 : 0
        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${pct}%`
        }

        // Scroll-spy: find which section is currently in view
        let current = ""
        for (const id of sectionIds) {
          const el = document.getElementById(id)
          if (el) {
            const rect = el.getBoundingClientRect()
            if (rect.top <= 200 && rect.bottom > 200) {
              current = id
            }
          }
        }
        setActiveSection(current)

        ticking.current = false
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", updateCachedHeight, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", updateCachedHeight)
    }
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-brand-black/80 backdrop-blur-xl glass border-white/5"
          : "bg-transparent border-transparent"
      )}
    >
      {/* Scroll progress bar — updated via ref, no re-renders */}
      <div
        ref={progressBarRef}
        className="absolute top-0 left-0 h-[2px] bg-brand-green transition-none"
        style={{ width: "0%" }}
      />

      <div className="px-5 sm:px-8 lg:px-16 xl:px-32 2xl:px-[150px]">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/logotipo parcelecart branco.png"
              alt="ParceleCart"
              width={160}
              height={36}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = link.href.startsWith("#") && activeSection === link.href.slice(1)
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-base transition-colors",
                    isActive ? "text-brand-green" : "text-gray-400 hover:text-white"
                  )}
                >
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <RainbowButton asChild>
              <a href="https://portal.parcelecart.com.br">Acessar Plataforma</a>
            </RainbowButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white cursor-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-80 border-b border-white/5 opacity-100 visible" : "max-h-0 opacity-0 invisible"
        )}
      >
        <div className="bg-brand-black/95 backdrop-blur-2xl px-5 py-4 space-y-3 glass">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="block text-base text-gray-400 hover:text-white transition-colors py-2"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <RainbowButton className="w-full mt-2" asChild>
            <a href="https://portal.parcelecart.com.br">Acessar Plataforma</a>
          </RainbowButton>
        </div>
      </div>
    </nav>
  )
}
