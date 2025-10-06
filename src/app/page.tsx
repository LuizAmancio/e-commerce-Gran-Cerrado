"use client";
import React, { useState, useEffect, useContext } from 'react';
import { Loading } from '@/components/Loading';
import { LoadingContext } from '@/context/LoadingContext';
import { ProductsByCategory, ProdutosPorCategoria } from '@/components/ProdutosPorCategoria';
import { Slider } from '@/components/_ui/Slider';
import { Banner } from '@/components/_ui/Banner';

const GranCerradoEcommerce: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<keyof ProductsByCategory>('ofertas');
  const { isLoading, setIsLoading } = useContext(LoadingContext);

   // Simula o carregamento da página
  useEffect(() => {
    const loadTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos de loading

    return () => clearTimeout(loadTimer);
  }, []);

  if(isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">

      {/* Slider */}
      <Slider/>

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
      <ProdutosPorCategoria selectedCategory={selectedCategory}/>

      {/* Info Banner */}
      <Banner />

    </div>
  );
};

export default GranCerradoEcommerce;