const features = [
  {
    title: 'Experiência',
    description: 'Anos de atuação no mercado com resultados comprovados.',
  },
  {
    title: 'Qualidade',
    description: 'Compromisso com a excelência em cada entrega.',
  },
  {
    title: 'Inovação',
    description: 'Sempre buscando as melhores soluções para nossos clientes.',
  },
  {
    title: 'Confiança',
    description: 'Relacionamentos duradouros baseados em transparência.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-slate-500 font-medium text-sm uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
              Construindo o futuro junto com você
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-lg">
              Somos uma empresa dedicada a entregar soluções de alta qualidade
              que fazem a diferença. Nossa equipe combina experiência técnica
              com visão estratégica para transformar desafios em oportunidades.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Acreditamos que o sucesso dos nossos clientes é o nosso sucesso.
              Por isso, trabalhamos lado a lado em cada projeto, garantindo
              resultados que superam expectativas.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <div className="w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">{feature.title}</h3>
                    <p className="text-sm text-slate-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Nossos Números</h3>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-white">X</div>
                  <div className="text-slate-400 text-sm mt-1">Clientes Atendidos</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">X+</div>
                  <div className="text-slate-400 text-sm mt-1">Anos de Mercado</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">X%</div>
                  <div className="text-slate-400 text-sm mt-1">Satisfação</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-white">24/7</div>
                  <div className="text-slate-400 text-sm mt-1">Suporte</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-700">
                <p className="text-slate-300 text-sm leading-relaxed">
                  "Nosso compromisso é entregar valor real e construir
                  parcerias duradouras com cada cliente."
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-700 rounded-full"></div>
                  <div>
                    <div className="font-medium text-white text-sm">CEO</div>
                    <div className="text-slate-400 text-xs">Fundador</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-200 rounded-xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-slate-300 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
