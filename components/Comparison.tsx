import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="relative w-full grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
      
      {/* Left Side: Pain */}
      <div className="bg-neutral-900 border-r border-neutral-800 flex flex-col justify-center px-8 py-16 md:p-20 relative group">
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-700"></div>
        <div className="relative z-10 space-y-6 max-w-lg mx-auto md:mx-0 md:ml-auto text-right md:text-left">
          <div className="flex items-center justify-end md:justify-start gap-3 opacity-50">
            <XCircle className="w-8 h-8 text-neutral-600" />
            <span className="uppercase tracking-widest text-neutral-500 font-bold text-sm">A Realidade Atual</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-neutral-600 leading-tight">
            Site Lento.<br/>
            Design Genérico.<br/>
            Sem Estratégia.
          </h2>
          <p className="text-2xl font-serif text-neutral-500 italic">
            = Honorários Baixos.
          </p>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-sm ml-auto md:ml-0">
            O cliente percebe a desorganização visual como desorganização processual. 
            Você perde a causa antes mesmo da primeira reunião.
          </p>
        </div>
      </div>

      {/* Right Side: Desire */}
      <div className="bg-matte-900 flex flex-col justify-center px-8 py-16 md:p-20 relative border-t md:border-t-0 border-neutral-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold-900/10 to-transparent"></div>
        <div className="relative z-10 space-y-6 max-w-lg mx-auto md:mx-0">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-gold-500" />
            <span className="uppercase tracking-widest text-gold-500 font-bold text-sm">O Padrão Elite</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white leading-tight">
            Design Premium.<br/>
            Autoridade Visual.<br/>
            Foco em Conversão.
          </h2>
          <p className="text-2xl font-serif text-gold-400 italic">
            = Clientes de Alto Padrão.
          </p>
          <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
            Uma presença digital que intimida a parte contrária e conforta o cliente. 
            Seu nome chega antes de você.
          </p>
        </div>
      </div>

    </section>
  );
};

export default Comparison;