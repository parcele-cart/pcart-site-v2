"use client"

import React from "react"

const partners = [
  "Siscart",
  "4 Hands",
  "CSI",
  "Inova",
  "VizWise",
  "Minerva",
]

export function TrustBar() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-lg text-gray-400 mb-2">
          Conciliação automática integrada aos principais sistemas notariais e registrais.
        </p>

        <p className="text-sm text-gray-500 mb-6">Serventias em todo o Brasil já operam com a ParceleCart.</p>

        <div className="marquee mb-6">
          <div className="marquee-track">
            {[...partners, ...partners].map((p, i) => (
              <span
                key={`${p}-${i}`}
                className="partner text-lg font-semibold"
              >
                {p}
              </span>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-brand-green/40 bg-brand-green/5 text-brand-green dark:text-white text-sm font-medium">
            Não encontrou seu sistema? Solicite a integração, é fácil e rápida!
          </span>
        </div>
      </div>
      <style jsx>{`
        .marquee {
          overflow: hidden;
        }
        /* Each item owns its trailing gap (margin-right), so a doubled track
           loops perfectly at translateX(-50%) — no half-gap jump, no reset. */
        .marquee-track {
          display: flex;
          width: max-content;
          align-items: center;
          animation: marquee 30s linear infinite;
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .partner {
          display: inline-block;
          margin-right: 4rem;
          color: rgba(148, 163, 184, 0.9);
          opacity: 0.95;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          border: 1px solid transparent;
          white-space: nowrap;
          transition: color 0.15s ease, transform 0.15s ease, opacity 0.15s ease, background-color 0.15s ease, border-color 0.15s ease;
          font-size: 1.125rem; /* match text-lg */
        }

        .partner:hover {
          color: var(--brand-green);
          background: rgba(94, 242, 117, 0.07);
          transform: scale(1.03);
          opacity: 1;
        }
      `}</style>
    </section>
  )
}

export default TrustBar
