import { Loader2 } from "lucide-react";

export const Loading = () => {
    return (
      <div className="background fixed inset-0 flex items-center justify-center z-50">
        <div className="text-center">
          {/* Logo Animado */}
          <div className="relative mb-8">
            <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto shadow-2xl animate-pulse">
              <span className="text-6xl">🌳</span>
            </div>
            {/* Círculo rotativo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-40 h-40 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          </div>

          {/* Texto */}
          <p className="subtitle text-xl mb-6 animate-fade-in-delay">
            Produtos Naturais e Suplementação Esportiva
          </p>
        </div>

        <style jsx>{`
        
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes loading-bar {
            from {
              width: 0%;
            }
            to {
              width: 100%;
            }
          }

          .animate-fade-in {
            animation: fade-in 0.6s ease-out;
          }

          .animate-fade-in-delay {
            animation: fade-in 0.6s ease-out 0.2s backwards;
          }

          .animate-loading-bar {
            animation: loading-bar 2s ease-in-out;
          }
        `}</style>
      </div>
    );
}