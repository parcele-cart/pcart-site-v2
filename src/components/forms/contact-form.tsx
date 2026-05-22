"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { contactFormSchema, type ContactFormData } from "@/lib/validations/contact"
import { Button } from "@/components/ui/button"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

interface ContactFormProps {
  origin: "LGPD" | "Canal de Denúncias" | "Ouvidoria" | "Contato"
}

export function ContactForm({ origin }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          origin,
        }),
      })

      if (!response.ok) throw new Error("Erro ao enviar")

      setStatus("success")
      reset()
    } catch (error) {
      console.error(error)
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-display font-bold text-foreground dark:text-white">Mensagem Enviada!</h3>
        <p className="text-gray-500 dark:text-gray-400 max-w-sm">
          Agradecemos seu contato. Nossa equipe analisará sua solicitação e retornará o mais breve possível.
        </p>
        <Button 
          onClick={() => setStatus("idle")}
          variant="outline"
          className="mt-4"
        >
          Enviar nova mensagem
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 animate-in fade-in duration-700">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Nome</label>
          <input 
            {...register("name")}
            type="text" 
            placeholder="João Silva"
            className={`w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${
              errors.name ? "border-red-500" : "border-foreground/10 dark:border-white/10"
            } focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400`}
          />
          {errors.name && <p className="text-xs text-red-500 ml-1">{errors.name.message}</p>}
        </div>
        
        {/* Email */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Email</label>
          <input 
            {...register("email")}
            type="email" 
            placeholder="exemplo@email.com.br"
            className={`w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${
              errors.email ? "border-red-500" : "border-foreground/10 dark:border-white/10"
            } focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400`}
          />
          {errors.email && <p className="text-xs text-red-500 ml-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Telefone</label>
          <input 
            {...register("phone")}
            type="tel" 
            placeholder="(11) 91234-5678"
            className={`w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${
              errors.phone ? "border-red-500" : "border-foreground/10 dark:border-white/10"
            } focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400`}
          />
          {errors.phone && <p className="text-xs text-red-500 ml-1">{errors.phone.message}</p>}
        </div>
        
        {/* Subject */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Assunto</label>
          <input 
            {...register("subject")}
            type="text" 
            placeholder="Ex. Solicitação de dados"
            className={`w-full h-12 px-4 rounded-xl bg-gray-50 dark:bg-white/5 border ${
              errors.subject ? "border-red-500" : "border-foreground/10 dark:border-white/10"
            } focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400`}
          />
          {errors.subject && <p className="text-xs text-red-500 ml-1">{errors.subject.message}</p>}
        </div>
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-foreground/70 dark:text-gray-400 ml-1">Mensagem</label>
        <textarea 
          {...register("message")}
          placeholder="Escreva aqui sua mensagem"
          rows={4}
          className={`w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-white/5 border ${
            errors.message ? "border-red-500" : "border-foreground/10 dark:border-white/10"
          } focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green transition-all placeholder:text-gray-400 resize-none`}
        />
        {errors.message && <p className="text-xs text-red-500 ml-1">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
          <AlertCircle size={18} />
          <span>Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.</span>
        </div>
      )}

      <Button 
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto h-12 px-8 bg-brand-blue hover:bg-brand-blue/90 text-white rounded-xl text-base font-semibold shadow-lg shadow-brand-blue/20 transition-all active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          "Enviar mensagem"
        )}
      </Button>
    </form>
  )
}
