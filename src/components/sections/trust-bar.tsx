"use client"

import React from "react"
import { ShieldCheck } from "lucide-react"

const partners = [
  "Siscart",
  "4 Hands",
  "CSI",
  "Inova",
  "VizWise",
  "Minerva",
  "e outros",
]

export function TrustBar() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-gray-400 mb-2">
          Conciliação automática integrada aos principais sistemas notariais e registrais.
        </p>

        <p className="text-sm text-gray-500 mb-6">Serventias em todo o Brasil já operam com a ParceleCart.</p>

        <div className="mb-6">
          <div className="marquee">
            <div className="marquee-track p-10">
              {[...partners, ...partners].map((p, i) => (
                <span
                  key={`${p}-${i}`}
                  className="partner text-lg font-semibold mx-8"
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-600 bg-green-900/5 text-green-400 text-sm">
            <ShieldCheck className="h-4 w-4" aria-hidden />
            PCI DSS
          </span>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 bg-transparent text-sm text-gray-300">
            ⚖️ Provimento 127/2022 (CNJ)
          </span>
        </div>
      </div>
      <style jsx>{`
        .marquee { overflow: hidden; }
        .marquee-track { display: inline-flex; align-items: center; white-space: nowrap; gap: 2rem; animation: marquee 22s linear infinite; }
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        .marquee:hover .marquee-track { animation-play-state: paused; }

        .partner {
          display: inline-block;
          color: rgba(148,163,184,0.9);
          opacity: 0.95;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid transparent;
          transition: color .15s ease, transform .15s ease, opacity .15s ease, background-color .15s ease, border-color .15s ease;
          font-size: 1.125rem; /* match text-lg */
        }

        .partner:hover {
          color: var(--brand-green);
          background: rgba(94,242,117,0.07);
          transform: scale(1.03);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default TrustBar
