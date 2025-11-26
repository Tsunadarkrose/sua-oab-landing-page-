import React from 'react';

const Argument: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-black border-y border-neutral-900">
      <div className="max-w-5xl mx-auto text-center">
        <span className="block mb-6 w-px h-24 bg-gradient-to-b from-transparent via-gold-600 to-transparent mx-auto"></span>
        
        <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-tight mb-8">
          "Você resolve problemas complexos de <span className="text-gold-500 italic">milhões</span>. 
          Por que sua página na internet demora 10 segundos para carregar?"
        </h2>
        
        <p className="text-xl text-neutral-400 font-light tracking-wide uppercase">
          A incoerência custa caro.
        </p>

        <span className="block mt-6 w-px h-24 bg-gradient-to-b from-gold-600 via-transparent to-transparent mx-auto"></span>
      </div>
    </section>
  );
};

export default Argument;