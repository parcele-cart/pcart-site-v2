import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Digite um email válido"),
  phone: z.string().min(10, "Digite um telefone válido com DDD"),
  subject: z.string().min(5, "O assunto deve ter pelo menos 5 caracteres"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>
