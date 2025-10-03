"use client";
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Search, Menu, ChevronLeft, ChevronRight, Star } from 'lucide-react';

export const GranCerradoEcommerce = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('ofertas');

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=1200&h=400&fit=crop',
      title: 'Proteínas Premium',
      subtitle: 'Até 30% OFF em toda linha'
    },
    {
      image: 'https://images.unsplash.com/photo-1608797178974-15b35a64ede9?w=1200&h=400&fit=crop',
      title: 'Castanhas do Cerrado',
      subtitle: 'Naturais e nutritivas'
    },
    {
      image: 'https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=1200&h=400&fit=crop',
      title: 'Superalimentos',
      subtitle: 'Energia natural para seus treinos'
    }
  ];

  const products = {
    ofertas: [
      {
        id: 1,
        name: 'Whey Protein Gran Cerrado',
        price: 89.90,
        oldPrice: 129.90,
        image: 'https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=300&h=300&fit=crop',
        discount: '30%',
        rating: 4.8
      },
      {
        id: 2,
        name: 'Mix de Castanhas Premium 500g',
        price: 34.90,
        oldPrice: 49.90,
        image: 'https://allnuts.com.br/cdn-cgi/image/quality=80,format=auto,onerror=redirect,metadata=none/wp-content/uploads/2021/03/snack-de-nuts-premium-de-caju-para-nozes-avel-amendoas-e-pistache-2.jpg',
        discount: '30%',
        rating: 4.9
      },
      {
        id: 3,
        name: 'Barra de Proteína Natural',
        price: 3.50,
        oldPrice: 5.90,
        image: 'https://uploads.metroimg.com/wp-content/uploads/2021/12/28143606/Barra-de-proteina.jpg',
        discount: '40%',
        rating: 4.7
      },
      {
        id: 4,
        name: 'Creatina Pura 300g',
        price: 59.90,
        oldPrice: 89.90,
        image: 'https://cdn.awsli.com.br/1000x1000/2790/2790110/produto/329650280/creatina-qhhul426xt.png',
        discount: '33%',
        rating: 4.9
      }
    ],
    maisVendidos: [
      {
        id: 5,
        name: 'Castanha do Pará Orgânica',
        price: 29.90,
        image: 'https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg',
        rating: 5.0
      },
      {
        id: 6,
        name: 'Pasta de Amendoim Integral',
        price: 24.90,
        image: 'https://receitanatureba.com/wp-content/uploads/2018/09/capa-6.jpg',
        rating: 4.8
      },
      {
        id: 7,
        name: 'Granola Artesanal 1kg',
        price: 32.90,
        image: 'https://vejario.abril.com.br/wp-content/uploads/2021/02/D40E8412-F815-421B-B9B8-EDF820899EA3.jpeg?quality=70&strip=info&w=720&crop=1',
        rating: 4.7
      },
      {
        id: 8,
        name: 'Açaí em Pó Premium',
        price: 45.90,
        image: 'https://alphagel.com.br/wp-content/uploads/2021/04/303640-6-beneficios-que-voce-precisa-saber-agora-sobre-acai-em-po.jpg',
        rating: 4.9
      }
    ]
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-700 to-green-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="lg:hidden">
              <Menu size={24} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🌳</span>
              </div>
              <div>
                <h1 className="text-xl font-bold">GRAN CERRADO</h1>
                <p className="text-xs text-green-100">Produtos Naturais</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="hover:bg-green-600 p-2 rounded-full transition">
                <Search size={20} />
              </button>
              <button className="hover:bg-green-600 p-2 rounded-full transition relative">
                <ShoppingCart size={20} />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-3 relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full px-4 py-2 rounded-full text-gray-800 pr-10"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </header>

      {/* Slider */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <div className="relative h-64 md:h-80">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex flex-col justify-center px-8 md:px-16">
                  <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl text-green-300 font-semibold">
                    {slide.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Slider Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronLeft className="text-green-700" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronRight className="text-green-700" size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="flex gap-3 overflow-x-auto pb-2">
          <button
            onClick={() => setSelectedCategory('ofertas')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
              selectedCategory === 'ofertas'
                ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg'
                : 'bg-white text-green-700 hover:bg-green-50 border-2 border-green-600'
            }`}
          >
            🔥 Ofertas
          </button>
          <button
            onClick={() => setSelectedCategory('maisVendidos')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition ${
              selectedCategory === 'maisVendidos'
                ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg'
                : 'bg-white text-green-700 hover:bg-green-50 border-2 border-green-600'
            }`}
          >
            ⭐ Mais Vendidos
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-8 pb-12">
        <h2 className="subtitle text-2xl font-bold mb-6">
          {selectedCategory === 'ofertas' ? '🔥 Ofertas Especiais' : '⭐ Mais Vendidos'}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products[selectedCategory].map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
            >
              {product.discount && (
                <div className="absolute mt-3 ml-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                  -{product.discount}
                </div>
              )}
              
              <div className="relative pb-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 min-h-[3rem]">
                  {product.name}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-sm text-gray-600">{product.rating}</span>
                </div>

                {product.oldPrice && (
                  <p className="text-sm text-gray-400 line-through">
                    R$ {product.oldPrice.toFixed(2)}
                  </p>
                )}
                
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-green-700">
                    R$ {product.price.toFixed(2)}
                  </p>
                </div>

                <button
                  onClick={addToCart}
                  className="w-full mt-3 bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-full font-semibold hover:from-green-700 hover:to-green-600 transition shadow-md hover:shadow-lg"
                >
                  Adicionar
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info Banner */}
      <div className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold mb-2">Frete Grátis</h3>
              <p className="text-green-100">Acima de R$ 99,90</p>
            </div>
            <div>
              <div className="text-4xl mb-3">✓</div>
              <h3 className="font-bold mb-2">100% Natural</h3>
              <p className="text-green-100">Produtos do Cerrado</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💳</div>
              <h3 className="font-bold mb-2">Parcele sem juros</h3>
              <p className="text-green-100">Em até 6x no cartão</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-3xl">🌳</span>
            <h3 className="text-xl font-bold">GRAN CERRADO</h3>
          </div>
          <p className="text-green-200 mb-4">Produtos Naturais e Suplementação Esportiva</p>
          <p className="text-sm text-gray-400">&copy; 2025 Gran Cerrado. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
