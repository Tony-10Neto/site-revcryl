'use client';

import Image from 'next/image';

export default function Products() {
  const productCategories = [
    {
      title: "Tintas Internas",
      description: "Tintas de alta qualidade para ambientes internos com acabamento perfeito e durabilidade.",
      icon: "🏠",
      items: ["Tintas Látex", "Tintas Acrílicas", "Tintas Epóxi", "Esmaltes Sintéticos"],
      gradient: "from-blue-500 to-blue-600"
    },
    {
      title: "Tintas Externas",
      description: "Proteção máxima contra intempéries com cores vibrantes que não desbotam.",
      icon: "🌤️",
      items: ["Tintas Acrílicas Externas", "Impermeabilizantes", "Primers", "Seladores"],
      gradient: "from-green-500 to-green-600"
    },
    {
      title: "Texturas",
      description: "Texturas decorativas para criar ambientes únicos e sofisticados.",
      icon: "🎨",
      items: ["Textura Acrílica", "Textura Riscada", "Textura Lisa", "Grafiato"],
      gradient: "from-orange-500 to-orange-600"
    },
    {
      title: "Acessórios",
      description: "Todos os acessórios necessários para um acabamento profissional.",
      icon: "🛠️",
      items: ["Pincéis", "Rolos", "Trinchas", "Espátulas"],
      gradient: "from-purple-500 to-purple-600"
    }
  ];

  const features = [
    {
      icon: "🛡️",
      title: "Proteção Máxima",
      description: "Produtos que oferecem proteção duradoura contra umidade, fungos e intempéries."
    },
    {
      icon: "🌈",
      title: "Cores Vibrantes",
      description: "Ampla cartela de cores que mantêm sua vivacidade por muito mais tempo."
    },
    {
      icon: "⚡",
      title: "Secagem Rápida",
      description: "Fórmulas desenvolvidas para secagem rápida sem comprometer a qualidade."
    },
    {
      icon: "🌿",
      title: "Eco-Friendly",
      description: "Produtos desenvolvidos com responsabilidade ambiental e baixo odor."
    }
  ];

  return (
    <section id="produtos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              Nossos Produtos
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa linha completa de produtos premium para todos os seus projetos
          </p>
        </div>

        {/* Product Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {productCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${category.gradient} text-white p-6 rounded-t-2xl`}>
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-sm text-gray-700">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Por que escolher a RevCryl?
            </h3>
            <p className="text-lg text-gray-600">
              Diferenciais que fazem a diferença em seus projetos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">
              Precisa de ajuda para escolher o produto ideal?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Nossa equipe especializada está pronta para orientar você na escolha dos melhores produtos
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors">
                Fale com um especialista
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Ver catálogo completo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}