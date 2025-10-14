"use client";

import { CartContext } from "@/context/CartContext";
import { ArrowUpDown, SlidersHorizontal, Star } from "lucide-react";
import { FC, useContext, useMemo, useState } from "react"

// Tipos
export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  rating: number;
  oldPrice?: number;
  discount?: string;
};

export type ProductsByCategory = {
  ofertas: Product[];
  maisVendidos: Product[];
  castanhas: Product[];
  proteinas: Product[];
  naturais: Product[];
  suplementos: Product[];
};

type SortOption = 'default' | 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export const ProdutosPorCategoria:FC<{ selectedCategory: keyof ProductsByCategory }> = ({ selectedCategory }) => {
    const { productsCart,setProductsCart, sizeCart } = useContext(CartContext);
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [showFilters, setShowFilters] = useState(false);

    const products: ProductsByCategory = {
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
    ],
    castanhas: [
      {
        id: 9,
        name: 'Mix de Castanhas 200g',
        price: 19.90,
        image: 'https://cdn.awsli.com.br/1000x1000/2790/2790110/produto/329650280/creatina-qhhul426xt.png',
        rating: 4.8
      },
      {
        id: 10,
        name: 'Castanha de Caju 100g',
        price: 29.90,
        image: 'https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg',
        rating: 4.9
      }
    ],
    proteinas: [
      {
        id: 11,
        name: 'Whey Protein Isolado 900g',
        price: 199.90,
        image: 'https://cdn.awsli.com.br/1000x1000/2790/2790110/produto/329650280/creatina-qhhul426xt.png',
        rating: 4.8
      },
      {
        id: 12,
        name: 'Barra de Proteína 30g',
        price: 9.90,
        image: 'https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg',
        rating: 4.9
      }
    ],
    naturais: [
      {
        id: 13,
        name: 'Granola Natural 500g',
        price: 29.90,
        image: 'https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg',
        rating: 4.8
      },
      {
        id: 14,
        name: 'Mel Orgânico 300g',
        price: 19.90,
        image: 'https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg',
        rating: 4.9
      }
    ],
    suplementos: [
      {
        id: 15,
        name: 'BCAA 120 cápsulas',
        price: 49.90,
        image: 'https://cdn.awsli.com.br/1000x1000/2790/2790110/produto/329650280/creatina-qhhul426xt.png',
        rating: 4.8
      },
      {
        id: 16,
        name: 'Ômega 3 1000mg 60 cápsulas',
        price: 39.90,
        image: 'https://image.tuasaude.com/media/article/ti/ih/castanha-do-para_40499.jpg',
        rating: 4.9
      }
    ]
    };  

     // Função de ordenação
    const sortedProducts = useMemo(() => {
      const productList = [...products[selectedCategory]];

      switch (sortBy) {
        case 'name-asc':
          return productList.sort((a, b) => a.name.localeCompare(b.name));
        
        case 'name-desc':
          return productList.sort((a, b) => b.name.localeCompare(a.name));
        
        case 'price-asc':
          return productList.sort((a, b) => a.price - b.price);
        
        case 'price-desc':
          return productList.sort((a, b) => b.price - a.price);
        
        default:
          return productList;
      }
    }, [selectedCategory, sortBy, products]);

    const addToCart = (product: Product) => {
        try{
            const existing = productsCart.find(item => item.id === product.id);
            if (existing) {
                setProductsCart(productsCart.map(item =>
                item.id === product.id
                    ? { ...item, qntd: item.qntd + 1 }
                    : item
                ));
            } else {
                setProductsCart([
                ...productsCart,
                {
                    ...product,
                    qntd: 1,
                    vrProduct: product.price,
                    vrProductDesconto: product.oldPrice ?? product.price
                }
                ]);
            }
        }catch(e){
            console.log(e);
        }
    };

     // Labels para exibição
      const sortLabels: Record<SortOption, string> = {
        'default': 'Padrão',
        'name-asc': 'Nome: A-Z',
        'name-desc': 'Nome: Z-A',
        'price-asc': 'Menor Preço',
        'price-desc': 'Maior Preço'
      };

     // Título da categoria
  const getCategoryTitle = () => {
    const categoryKey = selectedCategory as string;
    
    if (categoryKey === 'ofertas') return '🔥 Ofertas Especiais';
    if (categoryKey === 'maisVendidos') return '⭐ Mais Vendidos';
    if (categoryKey === 'suplementos') return '💪 Suplementos';
    if (categoryKey === 'castanhas') return '🥜 Castanhas';
    if (categoryKey === 'proteinas') return '🍗 Proteínas';
    if (categoryKey === 'naturais') return '🌿 Naturais';
    
    // Fallback: capitaliza primeira letra
    return categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1);
  };

   return (
    <div className="max-w-7xl mx-auto px-4 pt-6 pb-12" onClick={() => setShowFilters(false)}>
      {/* Header com Título e Filtros */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          {getCategoryTitle()}
        </h2>

        {/* Filtros Desktop */}
        <div className="hidden md:flex items-center gap-3 mb-6">
          <div className="flex gap-2">
            {(['default', 'name-asc', 'name-desc', 'price-asc', 'price-desc'] as SortOption[]).map((option) => (
              <button
                key={option}
                onClick={() => setSortBy(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  sortBy === option
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-white shadow-md'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {sortLabels[option]}
              </button>
            ))}
          </div>
        </div>

        {/* Ícone Filtros Mobile */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden text-(--light-green) p-2 rounded-full transition"
          aria-label="Filtros de ordenação"
        >
          <SlidersHorizontal size={18} />
        </button>
      </div>

      {/* Dropdown Filtros Mobile */}
      {showFilters && (
        <div className="absolute right-2 md:hidden mb-6 bg-white rounded-xl shadow-lg p-4 border border-gray-200 animate-slide-down z-100 w-60">
          <div className="flex items-center gap-2 mb-3 text-gray-700">
            <ArrowUpDown size={18} />
            <span className="font-semibold">Ordenar por:</span>
          </div>
          <div className="space-y-2">
            {(['default', 'name-asc', 'name-desc', 'price-asc', 'price-desc'] as SortOption[]).map((option) => (
              <button
                key={option}
                onClick={() => {
                  setSortBy(option);
                  setShowFilters(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-lg transition ${
                  sortBy === option
                    ? 'bg-gradient-to-r from-green-600 to-green-500 text-white font-semibold'
                    : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {sortLabels[option]}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Indicador de Ordenação Ativa */}
      {sortBy !== 'default' && (
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-600">
          <span>Ordenando por:</span>
          <span className="font-semibold text-green-700">{sortLabels[sortBy]}</span>
          <button
            onClick={() => setSortBy('default')}
            className="text-red-500 hover:text-red-700 underline ml-2"
          >
            Limpar
          </button>
        </div>
      )}

      {/* Grid de Produtos */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {sortedProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 cursor-pointer"
          >
            {product.discount && (
              <div className="absolute mt-3 ml-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold z-10">
                -{product.discount}
              </div>
            )}
            
            <div className="relative">
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
              
              <p className="text-xl font-bold text-green-700 mb-3">
                R$ {product.price.toFixed(2)}
              </p>

              <button
                onClick={() => addToCart(product)}
                className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-full font-semibold hover:from-green-700 hover:to-green-600 transition shadow-md hover:shadow-lg active:scale-95"
              >
                Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mensagem quando não há produtos */}
      {sortedProducts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-500 text-lg">Nenhum produto encontrado nesta categoria.</p>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-down {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-down {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};