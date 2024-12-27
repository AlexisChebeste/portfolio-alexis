"use client"

import { useState, type FormEvent } from "react";
import { Notification } from './notification'
import emailjs from '@emailjs/browser'
import '../index.css'
import Comment from '../assets/icons/Comment.svg'
import User from '../assets/icons/User.svg'
import Email from '../assets/icons/Email.svg'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null)

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget;

    try {
      await emailjs.sendForm(
        import.meta.env.PUBLIC_SERVICE_ID,
        import.meta.env.PUBLIC_TEMPLATE_ID,
        form,
        import.meta.env.PUBLIC_USER_ID
      )
      setNotification({ message: "Mensaje enviado. Gracias por contactarme. Te responderé pronto.", type: 'success' })
      form.reset()
    } catch (error) {
      console.error('FAILED...', error)
      setNotification({ message: "Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.", type: 'error' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="scroll-m-20 flex flex-col container px-4  py-12  md:px-10 gap-4 max-w-7xl items-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white leading-tight tracking-tighter md:text-4xl mb-8 text-center">
          Contáctame
        </h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-6 max-w-3xl mx-auto w-full"
        >
          <div className="space-y-2">
            <label htmlFor="from_name" className="text-sm font-medium leading-none">
              Nombre
            </label>
            <div className="relative">
              <img src={User.src} alt="user" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                id="from_name"
                name="from_name"
                placeholder="Tu nombre"
                className="input-form"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email_user" className="text-sm font-medium leading-none">
              Email
            </label>
            <div className="relative">
              <img src={Email.src} alt="email" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="email"
                id="email_user"
                name="email_user"
                placeholder="tu@email.com"
                className="input-form"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium leading-none">
              Mensaje
            </label>
            <div className="relative">
              <img src={Comment.src} alt="comment" className="absolute top-3 left-3" />
              <textarea
                id="message"
                name="message"
                placeholder="Tu mensaje"
                className="input-form min-h-[100px]"
                required
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? "Enviando..." : "Enviar mensaje"}
          </button>
        </form>
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </section>
  )
}

