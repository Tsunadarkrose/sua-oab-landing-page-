import React, { useState } from 'react';
import { Calculator as CalcIcon, DollarSign, Send } from 'lucide-react';

const Calculator: React.FC = () => {
  const [fee, setFee] = useState<string>('');

  const formatCurrency = (value: string) => {
    // Remove non-digits
    const number = value.replace(/\D/g, '');
    // Convert to number and format
    const formatted = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(Number(number) / 100);
    return formatted;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/\D/g, '');
    if (rawValue) {
      setFee(formatCurrency(rawValue));
    } else {
      setFee('');
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Olá, gostaria de um diagnóstico do meu site. Meu honorário médio é ${fee || 'não informado'}.`
  );

  return (
    <section id="calculator" className="py-24 px-6 bg-neutral-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
            Calculadora de Prejuízo de Imagem
          </h2>
          <p className="text-neutral-400">Quanto custa parecer amador?</p>
        </div>

        <div className="bg-black border border-neutral-800 p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Input Side */}
            <div className="space-y-6">
              <label className="block font-serif text-xl text-gold-500">
                Valor médio do seu Honorário
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500" />
                <input
                  type="text"
                  value={fee}
                  onChange={handleInputChange}
                  placeholder="R$ 0,00"
                  className="w-full bg-neutral-900 border border-neutral-700 text-white text-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all font-serif"
                />
              </div>
              <div className="flex items-start gap-3 text-neutral-500 text-sm mt-4">
                <CalcIcon size={16} className="mt-1 flex-shrink-0" />
                <p>Cálculo baseado na taxa de rejeição média de sites não otimizados (70% vs 30% em sites premium).</p>
              </div>
            </div>

            {/* Result Side */}
            <div className="border-l border-neutral-800 md:pl-12 pt-8 md:pt-0 border-t md:border-t-0">
               {fee ? (
                 <div className="animate-fade-in space-y-4">
                   <p className="font-serif text-3xl md:text-4xl leading-tight text-white">
                     Cada cliente que fecha a aba do seu site feio é <span className="text-red-500 line-through decoration-white/30 decoration-2">{fee}</span> jogado no lixo.
                   </p>
                 </div>
               ) : (
                 <div className="text-neutral-600 text-center py-8">
                   <p className="font-serif text-xl italic">Digite um valor para ver a realidade.</p>
                 </div>
               )}
            </div>
          </div>

          {/* Final CTA within Calculator Card */}
          <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
             <h3 className="text-white text-lg mb-6 font-light">
               Pare de parecer iniciante. Tenha uma presença digital do tamanho do seu nome.
             </h3>
             <a 
               href={`https://wa.me/5521969142576?text=${whatsappMessage}`}
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 bg-gold-600 text-white font-serif text-lg tracking-wide hover:bg-gold-700 transition-all duration-300 shadow-lg hover:shadow-gold-600/20"
             >
               <Send size={20} />
               Agendar Reunião Exclusiva
             </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Calculator;