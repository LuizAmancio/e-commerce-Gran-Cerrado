"use client";

import { Product } from "@/components/ProdutosPorCategoria";
import React, { createContext, useState, useEffect, ReactNode } from "react";

export type CartProduct = Product & {
  qntd: number;
  vrProduct: number;
  vrProductDesconto: number;
};

type ProductsCartType = CartProduct[];

// Crie o contexto
export const CartContext = createContext<{
  sizeCart: number;
  productsCart: ProductsCartType;
  setSizeCart: React.Dispatch<React.SetStateAction<number>>;
  setProductsCart: React.Dispatch<React.SetStateAction<ProductsCartType>>;
}>({
  sizeCart: 0,
  productsCart: [],
  setSizeCart: () => {},
  setProductsCart: () => {},
});

export default function CartProvider({ children }: { children: ReactNode }) {
  const [sizeCart, setSizeCart] = useState(0);
  const [productsCart, setProductsCart] = useState<ProductsCartType>([]);

  useEffect(() => {
    setSizeCart(productsCart.reduce((acc, item) => acc + item.qntd, 0));
  }, [productsCart]);

  return (
    <CartContext.Provider value={{ sizeCart, productsCart, setSizeCart, setProductsCart }}>
      {children}
    </CartContext.Provider>
  );
}