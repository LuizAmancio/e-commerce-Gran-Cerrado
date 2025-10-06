"use client";
import { LoadingContext } from "@/context/LoadingContext";
import { useContext } from "react";

export const Banner = () => {
    const { isLoading } = useContext(LoadingContext);
    if (isLoading) return null;
  return (
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
    );
};