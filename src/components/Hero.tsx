export default function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
              Bem-vindo ao Seu Site
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Soluções que{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-600 to-slate-900">
                transformam
              </span>{' '}
              negócios
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Somos uma empresa dedicada a entregar resultados excepcionais. 
              Com expertise e inovação, ajudamos nossos clientes a alcançar 
              seus objetivos de forma eficiente e sustentável.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="px-6 py-3 bg-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 transition-colors text-center"
              >
                Entre em Contato
              </a>
              <a
                href="#sobre"
                className="px-6 py-3 bg-white text-slate-700 font-medium rounded-lg border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-center"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Visual */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-white rounded-2xl shadow-2xl shadow-slate-200/50 p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">+X%</div>
                  <div className="text-sm text-slate-500">Crescimento</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">X+</div>
                  <div className="text-sm text-slate-500">Clientes</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">X anos</div>
                  <div className="text-sm text-slate-500">Experiência</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div className="text-2xl font-bold text-slate-900">X/5</div>
                  <div className="text-sm text-slate-500">Avaliação</div>
                </div>
              </div>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-slate-100 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-200 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
