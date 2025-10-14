"use client";

import React, { use, useContext, useEffect } from "react";
import { ProdutosPorCategoria, ProductsByCategory } from "@/components/ProdutosPorCategoria";
import { LoadingContext } from "@/context/LoadingContext";
import { Loading } from "@/components/Loading";
import Link from "next/link";
import { MoveLeftIcon } from "lucide-react";

export default function ProductsByCategoria({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {

  const { categoria } = use(params);

  const { isLoading, setIsLoading } = useContext(LoadingContext);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (isLoading) return <Loading />;

  return (
    <>
      <ProdutosPorCategoria selectedCategory={categoria as keyof ProductsByCategory} />
    </>
  );
}
