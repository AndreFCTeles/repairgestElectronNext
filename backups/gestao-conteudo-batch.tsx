'use client';
// Frameworks
import React, { useState, ReactNode } from 'react';
// Conteúdos principais
import MainContent from '@ui/main/main-conteudo';
import ClientesConteudo from '@ui/clientes/clientes-conteudo';
import ReparConteudo from '@ui/reparacoes/reparacoes-conteudo';
// Componentes
import Sidebar from '@ui/partilhado/main-layout/sidebar';

// inicialização de props
interface RDdProps { children: ReactNode; }
interface CDdProps { children: ReactNode; }
interface RenderConteudoProps { opcaoSelecionada: string; }
interface BotoesNavProps { 
   opcaoAtual: string
   opcaoSelecionada: (opcao: string) => void; 
}


const ReparDropdown: React.FC<RDdProps> = ({ children }) => {
   const [topIsOpen, setTopIsOpen] = useState(false);
   const [topIsHidden, setTopIsHidden] = useState(true);
   const [botIsOpen, setBotIsOpen] = useState(false);
   const [botIsHidden, setBotIsHidden] = useState(true);
   const toggleTopDropdown = () => { 
      setTopIsOpen(!topIsOpen);
      setTopIsHidden(!topIsHidden);
      setBotIsHidden(true);
   };
   const toggleBotDropdown = () => { 
      setBotIsOpen(!botIsOpen); 
      setBotIsHidden(!botIsHidden);
      setTopIsHidden(true)
   };

   return (
      <div className={`relative overflow-hidden transition-height ${topIsOpen ? 'h-auto' : 'h-10'}`} >

         {/* toptoggler */}
         <button
            className="h-10 navButton"
            onClick={toggleTopDropdown}
            >
            {children} {/* Reparação */}
         </button>
         {/* /toptoggler */}

         {/* toggledTopDiv */}
         <div className="absolute top-10 left-0 right-0">
            
            <div className={`relative overflow-hidden transition-height ${botIsOpen ? 'h-auto' : 'h-10'}`} >
               {/* bottoggler */}
               <button
                  className="h-10 navButton"
                  onClick={toggleBotDropdown}
                  >
                  Nova Reparação
               </button>     
               {/* /bottoggler */}
               
               {/* toggledBotDiv */}
               <div className="absolute top-10 left-0 right-0 bg-white">
                  <button className="h-10 navButton" disabled>
                     Interna
                  </button>
                  <button className="h-10 navButton" disabled>
                     Externa
                  </button>
                  <button className="h-10 navButton" disabled>
                     Circuitos
                  </button>
               </div>
               {/* /toggledBotDiv */}
            </div>
            <button className="h-10 navButton" disabled>
               Consulta
            </button>
         </div>
         {/* /toggledTopDiv */}

      </div>
   );
};

const ClientesDropdown: React.FC<CDdProps> = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleDropdown = () => { setIsOpen(!isOpen); };

   return (
      <div className={`relative overflow-hidden transition-height ${isOpen ? 'h-auto' : 'h-10'}`} >
         <button
            className="h-10 navButton"
            onClick={toggleDropdown}
            >
            {children}
         </button>
         <div className="absolute top-10 left-0 right-0">
            <button className="h-10 navButton" disabled>
               Novo Cliente
            </button>
            <button className="h-10 navButton" disabled>
               Consulta
            </button>
         </div>
      </div>
   );
};

// Gerar botões de navegação
const BotoesNav: React.FC<BotoesNavProps> = ({ opcaoAtual, opcaoSelecionada }) => {
   const handleButtonClick = (opcao: string) => {
      opcaoSelecionada(opcao);
   };

   return (
      <>
         <ReparDropdown>
            <button onClick={() => handleButtonClick('reparacoes')} className="navButton">
               Reparações
            </button>
         </ReparDropdown>

         <ClientesDropdown>
            <button onClick={() => handleButtonClick('clientes')} className="navButton">
               Clientes
            </button>
         </ClientesDropdown>
         
         {opcaoAtual !== 'principal' && (
            <button onClick={() => handleButtonClick('principal')} className="navButton mt-4">
               Voltar
            </button>
         )}

      </>
   );
};

// Gerar conteúdo com base em estados
const RenderConteudo: React.FC<RenderConteudoProps> = ({opcaoSelecionada}) => {
   const componentes: Record<string, React.FC> = {
      reparacoes: ReparConteudo,
      clientes: ClientesConteudo,
      principal: MainContent
   };
   const ComponenteSelecionado = componentes[opcaoSelecionada];

   return (<ComponenteSelecionado />);
};

// Render final
const GestorConteudo: React.FC = () => {
   const [opcaoSelecionada, setOpcaoSelecionada] = useState('principal');

   const handleOptionChange = (opcao: string) => {
      setOpcaoSelecionada(opcao);
   };

   return (
      <>
         <Sidebar>
            <BotoesNav opcaoAtual={opcaoSelecionada} opcaoSelecionada={handleOptionChange} />
         </Sidebar>
         <div id="Content" className="flex flex-col flex-1 bg-gray-100">
            <RenderConteudo opcaoSelecionada={opcaoSelecionada} />
         </div>
      </>
   );
};

export default GestorConteudo;