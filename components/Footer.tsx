import React, { useState } from 'react';
import { X } from 'lucide-react';

const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'terms' | 'privacy' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <>
      <footer className="bg-black py-12 px-6 border-t border-neutral-900 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
             <div className="text-gold-500 font-serif text-xl font-bold tracking-wider mb-2">
               CONVERSÃO JURÍDICA ELITE
             </div>
             <p className="text-neutral-600 text-sm">
               © {new Date().getFullYear()}. Marketing de performance para a advocacia.
             </p>
          </div>
          
          <div className="flex gap-8 text-sm text-neutral-500 justify-center md:justify-end">
            <button 
              onClick={() => setActiveModal('terms')} 
              className="hover:text-gold-500 transition-colors"
            >
              Termos de Uso
            </button>
            <button 
              onClick={() => setActiveModal('privacy')} 
              className="hover:text-gold-500 transition-colors"
            >
              Política de Privacidade
            </button>
          </div>
        </div>
      </footer>

      {/* Legal Information Modal */}
      {activeModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div 
            className="bg-neutral-900 border border-neutral-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto p-8 relative shadow-[0_0_50px_rgba(0,0,0,0.5)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <h3 className="font-serif text-2xl text-white mb-6 border-b border-neutral-800 pb-4">
              {activeModal === 'terms' ? 'Termos de Uso' : 'Política de Privacidade'}
            </h3>

            <div className="space-y-4 text-neutral-400 font-light leading-relaxed text-sm md:text-base">
              {activeModal === 'terms' ? (
                <>
                  <p>
                    <strong className="text-gold-500">1. Compromisso de Excelência:</strong> A Conversão Jurídica Elite é uma consultoria especializada em posicionamento digital de alto padrão. Nossos diagnósticos são baseados em análise técnica de mercado e não constituem garantia de resultado em processos judiciais.
                  </p>
                  <p>
                    <strong className="text-gold-500">2. Propriedade Intelectual:</strong> Todo o material visual, código fonte e estratégia de branding desenvolvidos permanecem propriedade intelectual da Agência até a quitação integral dos honorários contratados pelo cliente.
                  </p>
                  <p>
                    <strong className="text-gold-500">3. Confidencialidade:</strong> Tratamos as informações estratégicas do seu escritório com o mesmo rigor ético que você trata os processos de seus clientes. Nenhuma estratégia é replicada sem autorização.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    <strong className="text-gold-500">1. Coleta de Dados:</strong> Coletamos estritamente as informações necessárias para o contato comercial (Nome e WhatsApp) e para a elaboração do diagnóstico de imagem.
                  </p>
                  <p>
                    <strong className="text-gold-500">2. Sigilo Absoluto:</strong> Seus dados jamais serão vendidos, alugados ou compartilhados com terceiros. A discrição é um pilar fundamental da nossa atuação com advogados seniores.
                  </p>
                  <p>
                    <strong className="text-gold-500">3. Segurança Digital:</strong> Utilizamos protocolos de criptografia padrão de mercado para proteger a integridade das informações trocadas através deste canal.
                  </p>
                </>
              )}
            </div>
            
            <div className="mt-8 pt-6 border-t border-neutral-800 text-center">
              <button 
                onClick={closeModal}
                className="text-neutral-500 hover:text-gold-500 text-sm uppercase tracking-widest transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;