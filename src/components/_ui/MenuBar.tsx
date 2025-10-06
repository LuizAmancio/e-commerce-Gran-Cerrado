"use client";

import { CartContext } from '@/context/CartContext';
import { LoadingContext } from '@/context/LoadingContext';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { FC, useContext, useState } from 'react';

export const MenuBar:FC = () => {
  const [search, setSearch] = useState(false);
  const {sizeCart} = useContext(CartContext);
  const { isLoading} = useContext(LoadingContext);

  if (isLoading) return null;

    return (
      <header className="text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3 md:py-5">
          <div className="flex items-center justify-between relative">
            <button>
              <Menu size={28} />
            </button>
            
            <div className="flex items-center gap-3 bg-transparent  md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
              <div className="w-14 h-14 md:w-18 md:h-18 bg-white rounded-full flex items-center justify-center">
                <img className="w-full h-full" alt="Logo Gran Cerrado" src="/logoGran.png"/>
              </div>
              <div>
                <h1 className="text-sm md:text-xl font-bold">GRAN CERRADO</h1>
                <p className="text-xs text-green-100">Produtos Naturais</p>
              </div>
            </div>

            <div className="flex items-center gap-0 md:gap-4">
               <button className="hover:bg-green-600 p-2 rounded-full transition cursor-pointer">
                 <User />
               </button>
              <button onClick={() => setSearch(!search)} className="hover:bg-green-600 p-2 rounded-full transition cursor-pointer">
                <Search size={20} />
              </button>
              <button className="hover:bg-green-600 p-2 rounded-full transition relative cursor-pointer">
                <ShoppingCart size={20} />
                {sizeCart > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {sizeCart}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search Bar */}
          {search && (
          <div className="mt-2 md:mt-5 relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full px-4 py-2 rounded-full text-gray-800 pr-10"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </div>
          )}
        </div>
      </header>
    );
}