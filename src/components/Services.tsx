const services = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: 'Consultoria',
    description: 'Análise detalhada das suas necessidades para encontrar as melhores soluções.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: 'Planejamento',
    description: 'Estratégias personalizadas para alcançar seus objetivos de forma eficiente.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Desenvolvimento',
    description: 'Execução com excelência utilizando as melhores práticas do mercado.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    title: 'Suporte',
    description: 'Acompanhamento contínuo para garantir o sucesso do seu projeto.',
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="text-slate-500 font-medium text-sm uppercase tracking-wider">
            Serviços
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">
            O que oferecemos
          </h2>
          <p className="text-slate-600 text-lg">
            Soluções completas para atender às necessidades do seu negócio
            com qualidade e eficiência.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-slate-50 hover:bg-slate-900 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-900 group-hover:bg-white text-white group-hover:text-slate-900 flex items-center justify-center mb-5 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-white mb-2 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
