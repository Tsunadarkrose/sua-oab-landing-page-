import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-matte-800 via-matte-900 to-black z-0" />
      
      {/* Subtle Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 z-0 mix-blend-overlay"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-block px-3 py-1 border border-gold-600/30 rounded-full bg-gold-600/10 backdrop-blur-sm mb-4">
          <span className="text-gold-400 text-xs tracking-[0.2em] uppercase font-medium">Conversão Jurídica Elite</span>
        </div>

        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.1] text-white">
          Sua OAB é de <span className="italic text-gold-500">Respeito</span>. <br />
          Seu site diz o <span className="text-neutral-500 line-through decoration-gold-600/50">contrário</span>.
        </h1>

        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
          O mercado jurídico não perdoa amadorismo. Se o seu site parece ter sido feito em 2010, 
          seu cliente assume que sua advocacia parou no tempo.
        </p>

        <div className="pt-8">
          <button 
            onClick={scrollToCalculator}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gold-600 text-white font-serif text-lg tracking-wide hover:bg-gold-700 transition-all duration-300 shadow-[0_0_20px_rgba(184,134,11,0.2)] hover:shadow-[0_0_30px_rgba(184,134,11,0.4)]"
          >
            Solicitar Diagnóstico de Imagem Digital
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;