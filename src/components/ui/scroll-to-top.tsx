"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 md:bottom-10 md:right-10 p-3 sm:p-4 rounded-full bg-brand-green hover:bg-[#34c759] text-[#0f172a] shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-brand-green/20 dark:border-brand-green/50 transition-all duration-500 z-50 flex items-center justify-center hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(46,213,115,0.3)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Voltar ao topo da página"
      title="Voltar ao topo da página"
    >
      <ArrowUp className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2.5} />
    </button>
  );
}
