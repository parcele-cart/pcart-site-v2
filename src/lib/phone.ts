/**
 * Telefones de contato isolados em um único lugar.
 *
 * Defina os números (apenas dígitos com DDD, ex.: "11912345678") via env:
 *   NEXT_PUBLIC_SALES_PHONE    — comercial
 *   NEXT_PUBLIC_SUPPORT_PHONE  — suporte
 *
 * Use `salesPhone` / `supportPhone` nos componentes e escolha o formato:
 *   phone.whatsapp  → https://wa.me/5511912345678
 *   phone.tel       → tel:+5511912345678
 *   phone.display   → (11) 91234-5678
 *   phone.raw       → 11912345678
 */

const COUNTRY_CODE = "55"

function onlyDigits(value: string): string {
  return value.replace(/\D/g, "")
}

function formatDisplay(local: string): string {
  const ddd = local.slice(0, 2)
  const rest = local.slice(2)
  // celular (9 dígitos): 91234-5678 | fixo (8 dígitos): 1234-5678
  const split = rest.length > 8 ? 5 : 4
  return `(${ddd}) ${rest.slice(0, split)}-${rest.slice(split)}`
}

export type Phone = {
  /** Apenas dígitos com DDD, ex.: 11912345678 */
  raw: string
  /** Formatado para exibição, ex.: (11) 91234-5678 */
  display: string
  /** Link de discagem, ex.: tel:+5511912345678 */
  tel: string
  /** Link de WhatsApp, ex.: https://wa.me/5511912345678 */
  whatsapp: string
}

/** Constrói as variações formatadas a partir dos dígitos do telefone (com DDD). */
export function makePhone(input: string): Phone {
  const raw = onlyDigits(input)
  const full = `${COUNTRY_CODE}${raw}`

  return {
    raw,
    display: formatDisplay(raw),
    tel: `tel:+${full}`,
    whatsapp: `https://wa.me/${full}`,
  }
}

export const salesPhone = makePhone(
  process.env.NEXT_PUBLIC_SALES_PHONE ?? "11912345678"
)

export const supportPhone = makePhone(
  process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "11963982811"
)
