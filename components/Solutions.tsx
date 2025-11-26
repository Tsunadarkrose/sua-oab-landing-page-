import React from 'react';
import { Crown, Zap, Scale } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const SolutionCard: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="group p-8 md:p-10 border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-900 hover:border-gold-600/50 transition-all duration-500">
    <div className="mb-6 text-neutral-500 group-hover:text-gold-500 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-serif text-2xl text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">
      {title}
    </h3>
    <p className="text-neutral-400 font-light leading-relaxed">
      {description}
    </p>
  </div>
);

const Solutions: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-matte-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SolutionCard 
            icon={<Crown size={40} strokeWidth={1} />}
            title="Design à altura da sua carreira"
            description="Estética minimalista e sóbria. Desenvolvemos interfaces que transmitem solidez, tradição e exclusividade. Nada de templates prontos."
          />
          <SolutionCard 
            icon={<Zap size={40} strokeWidth={1} />}
            title="Velocidade de elite"
            description="Seu cliente não tem tempo a perder. Otimizamos cada linha de código para carregamento instantâneo. Performance é a primeira impressão."
          />
          <SolutionCard 
            icon={<Scale size={40} strokeWidth={1} />}
            title="Posicionamento de Autoridade"
            description="Estrutura de conteúdo pensada para destacar seus êxitos e expertise. Transformamos visitantes em leads qualificados."
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;