"use client";

import { FC, useContext, useState } from 'react';

import { CartContext } from '@/context/CartContext';
import { LoadingContext } from '@/context/LoadingContext';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export const MenuBar:FC = () => {
  const [search, setSearch] = useState(false);
  const {sizeCart} = useContext(CartContext);
  const { isLoading, setIsLoading } = useContext(LoadingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  if (isLoading) return null;

    return (
      <>
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
            onClick={() => setIsMenuOpen(false)}
          />
        )}

        {/* Menu Lateral */}
        <div className={`fixed top-0 left-0 h-full w-80 bg-gradient-to-b from-amber-50 to-white z-150 shadow-2xl transform transition-transform duration-300 flex flex-col ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>

            {/* Header do Menu Lateral */}
            <div className="sidebar-header p-6 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <img src="/logoGran.png" alt="Gran Cerrado Logo" />
                  </div>
                  <div>
                    <h2 className="text-white font-bold text-lg">GRAN CERRADO</h2>
                     <p className="text-xs text-green-100">Produtos Naturais</p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-white hover:bg-green-600 p-2 rounded-full transition"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Conteúdo Lateral */}
            <div className="flex-1 overflow-y-auto p-6">
              <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Categorias</h3>
              <nav className="space-y-2">
                <Link href="/produtos/suplementos" onClick={() => { setIsMenuOpen(false); setIsLoading(true); }} className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition group">
                  <span className="text-2xl">💪</span>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-green-700">Suplementos</p>
                    <p className="text-xs text-gray-500">Whey, Creatina, BCAA</p>
                  </div>
                </Link>

                <Link href="/produtos/castanhas" onClick={() => { setIsMenuOpen(false); setIsLoading(true); }} className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition group">
                  <span className="text-2xl">🥜</span>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-green-700">Castanhas</p>
                    <p className="text-xs text-gray-500">Pará, Caju, Amendoim</p>
                  </div>
                </Link>

                <Link href="/produtos/proteinas" onClick={() => { setIsMenuOpen(false); setIsLoading(true); }} className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition group">
                  <span className="text-2xl">🍗</span>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-green-700">Proteínas</p>
                    <p className="text-xs text-gray-500">Barras, Snacks Proteicos</p>
                  </div>
                </Link>

                <Link href="/produtos/naturais" onClick={() => { setIsMenuOpen(false); setIsLoading(true); }} className="flex items-center gap-4 p-3 rounded-lg hover:bg-green-50 transition group">
                  <span className="text-2xl">🌿</span>
                  <div>
                    <p className="font-semibold text-gray-800 group-hover:text-green-700">Naturais</p>
                    <p className="text-xs text-gray-500">Granola, Açaí, Mel</p>
                  </div>
                </Link>
              </nav>

              {/* Seção Extra Lateral */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-gray-400 text-sm font-semibold mb-4 uppercase">Atendimento</h3>
                <div className="space-y-3">
                  <a href="#contato" className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition">
                    <span>📱</span>
                    <span className="text-sm">Fale Conosco</span>
                  </a>
                  <a href="#pedidos" className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition">
                    <span>📦</span>
                    <span className="text-sm">Meus Pedidos</span>
                  </a>
                  <a href="#faq" className="flex items-center gap-3 text-gray-700 hover:text-green-700 transition">
                    <span>❓</span>
                    <span className="text-sm">Dúvidas Frequentes</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Footer do Menu Lateral */}
            <div className="flex-shrink-0 p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  U
                </div>
                <div className="flex-1">
                  <p className="font-semibold text-gray-800 text-sm">Usuário</p>
                  <p className="text-xs text-gray-500">usuario@email.com</p>
                </div>
              </div>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-2 rounded-full text-sm font-semibold hover:from-green-700 hover:to-green-600 transition">
                Entrar / Cadastrar
              </button>
            </div>
          </div>

        <header className="text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 md:py-5">
            <div className="flex items-center justify-between relative">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="hover:bg-green-600 p-2 rounded-full transition">
                <Menu size={28} />
              </button>

              <div onClick={() => router.push('/')} className="flex items-center gap-3 bg-transparent  md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 cursor-pointer">
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
      </>
    );
}
