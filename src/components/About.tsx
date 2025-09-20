export default function About() {
  return (
    <section id="quem-somos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Quem Somos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa história e compromisso com a qualidade
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Mais de 15 anos no mercado</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                A RevCryl Tintas & Texturas está há mais de 15 anos consolidada no mercado, 
                oferecendo soluções completas em tintas, texturas e revestimentos de alta qualidade.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Qualidade Garantida</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Trabalhamos apenas com produtos de primeira qualidade, garantindo 
                durabilidade e acabamento perfeito em todos os seus projetos.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Atendimento Especializado</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Nossa equipe especializada está sempre pronta para orientar e ajudar 
                na escolha dos produtos ideais para cada tipo de projeto.
              </p>
            </div>
          </div>

          {/* Stats and Visual */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2">15+</div>
                <div className="text-green-100">Anos de experiência</div>
              </div>
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Projetos realizados</div>
              </div>
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2">100+</div>
                <div className="text-orange-100">Produtos disponíveis</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold mb-2">24h</div>
                <div className="text-purple-100">Suporte especializado</div>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 rounded-2xl">
              <h4 className="text-2xl font-bold mb-4">Nossa Missão</h4>
              <p className="text-gray-300 leading-relaxed">
                Fornecer produtos de alta qualidade e soluções inovadoras em tintas, 
                texturas e revestimentos, superando as expectativas de nossos clientes 
                e contribuindo para a beleza e proteção de seus projetos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}