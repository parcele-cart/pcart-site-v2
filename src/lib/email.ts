/**
 * E-mails de contato isolados em um único lugar.
 *
 * Defina os endereços via env:
 *   NEXT_PUBLIC_SALES_EMAIL      — comercial
 *   NEXT_PUBLIC_SUPPORT_EMAIL    — suporte
 *   NEXT_PUBLIC_OMBUDSMAN_EMAIL  — ouvidoria
 *
 * Use `salesEmail` / `supportEmail` / `ombudsmanEmail` nos componentes:
 *   email.address  → comercial@parcelecart.com.br
 *   email.mailto   → mailto:comercial@parcelecart.com.br
 *   email.upper    → COMERCIAL@PARCELECART.COM.BR
 */

export type Email = {
  /** Endereço, ex.: comercial@parcelecart.com.br */
  address: string
  /** Link de e-mail, ex.: mailto:comercial@parcelecart.com.br */
  mailto: string
  /** Endereço em maiúsculas, ex.: COMERCIAL@PARCELECART.COM.BR */
  upper: string
}

/** Constrói as variações a partir do endereço de e-mail. */
export function makeEmail(input: string): Email {
  const address = input.trim().toLowerCase()

  return {
    address,
    mailto: `mailto:${address}`,
    upper: address.toUpperCase(),
  }
}

export const salesEmail = makeEmail(
  process.env.NEXT_PUBLIC_SALES_EMAIL ?? "comercial@parcelecart.com.br"
)

export const supportEmail = makeEmail(
  process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "suporte@parcelecart.com.br"
)

export const ombudsmanEmail = makeEmail(
  process.env.NEXT_PUBLIC_OMBUDSMAN_EMAIL ?? "ouvidoria@parcelecart.com.br"
)
