"use client";

import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { FC, useState } from 'react';

export const MenuBar:FC<{ cartCount: number }> = ({ cartCount }) => {
  const [search, setSearch] = useState(false);
    return (
      <header className="text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <button className="lg:hidden">
              <Menu size={28} />
            </button>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-2xl">🌳</span>
              </div>
              <div className='hidden md:block'>
                <h1 className="text-md font-bold">GRAN CERRADO</h1>
                <p className="text-xs text-green-100">Produtos Naturais</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <button className="hover:bg-green-600 p-2 rounded-full transition cursor-pointer">
                 <User />
               </button>
              <button onClick={() => setSearch(!search)} className="hover:bg-green-600 p-2 rounded-full transition cursor-pointer">
                <Search size={20} />
              </button>
              <button className="hover:bg-green-600 p-2 rounded-full transition relative cursor-pointer">
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
          {search && (
          <div className="mt-3 relative">
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