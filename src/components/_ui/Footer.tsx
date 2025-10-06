"use client";

import { LoadingContext } from "@/context/LoadingContext";
import { useContext } from "react";

export const Footer = () => {
    const { isLoading } = useContext(LoadingContext);
    if (isLoading) return null;
    
    return (
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
    );
}