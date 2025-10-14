import Link from "next/link";

export default function NotFound() {
  return (
    <div className="background fixed inset-0 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Logo Animado */}
          <div className="relative mb-8">
            <div className="w-50 h-50 rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <img className="w-full h-full" alt="Logo Gran Cerrado" src="/logoTree.png"/>
            </div>
          </div>

           <h1 className="text-4xl font-bold text-(--dark-brown)">404 - Not Found</h1>
              <p className="subtitle text-xl mb-6 animate-fade-in-delay p-4">
                A página que você está procurando não foi encontrada.
              </p>
              <Link
        href="/"
        className="bg-(--primary-green) text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
      >
        Voltar para a home
      </Link>
        </div>
    </div>
  );
}
