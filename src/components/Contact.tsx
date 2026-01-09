'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Info */}
            <div>
              <span className="text-slate-500 font-medium text-sm uppercase tracking-wider">
                Contato
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                Vamos conversar?
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                Entre em contato conosco. Estamos prontos para ouvir suas
                necessidades e encontrar a melhor solução para você.
              </p>

              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a href="mailto:contato@seusite.com" className="text-slate-600 hover:text-slate-900 transition-colors">
                      contato@seusite.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Telefone</div>
                    <a href="tel:+5511999999999" className="text-slate-600 hover:text-slate-900 transition-colors">
                      (00) 99999-9999
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-slate-700">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-slate-900">Localização</div>
                    <span className="text-slate-600">Cidade, Estado</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-slate-50 rounded-2xl p-8">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    Mensagem Enviada!
                  </h3>
                  <p className="text-slate-600">
                    Entraremos em contato em breve.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition-all bg-white"
                      placeholder="Seu nome"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition-all bg-white"
                        placeholder="seu@email.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                        Telefone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition-all bg-white"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-slate-400 focus:ring-2 focus:ring-slate-200 outline-none transition-all resize-none bg-white"
                      placeholder="Como podemos ajudar?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-slate-900 text-white font-medium rounded-xl hover:bg-slate-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      'Enviar Mensagem'
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
