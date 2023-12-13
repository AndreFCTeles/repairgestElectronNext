'use client';
import React, { useState } from "react";

interface BotoesNavProps { 
   opcaoAtual: string
   opcaoSelecionada: (opcao: string) => void; 
}

const BotoesNav: React.FC<BotoesNavProps> = ({ opcaoAtual, opcaoSelecionada }) => {
   // Estados
   // Reparações
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
   // Clientes
   const [isCliOpen, setCliIsOpen] = useState(false);
   const toggleClientesDropdown = () => { setCliIsOpen(!isCliOpen); };

   // Gestão de estados
   const handleButtonClick = (opcao: string) => { opcaoSelecionada(opcao); };

   return (
      <>
         {/* REPARAÇÕES */}
         <div className={`relative overflow-hidden transition-height ${topIsOpen ? 'h-auto' : 'h-10'}`} >
            {/* toptoggler */}
            <button
               className="h-10 navButton"
               onClick={ () => {handleButtonClick('reparacoes');toggleTopDropdown;} }
               >
               Reparações
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
         {/* /REPARAÇÕES */}

         {/* CLIENTES */}
         <div className={`relative overflow-hidden transition-height ${isCliOpen ? 'h-auto' : 'h-10'}`} >
            <button
               className="h-10 navButton"
               onClick={() => {handleButtonClick('clientes');toggleClientesDropdown}}
               >
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
         {/* /CLIENTES */}

         {/* VOLTAR */}
         {opcaoAtual !== 'principal' && (
            <button onClick={() => handleButtonClick('principal')} className="navButton mt-4">
               Voltar
            </button>
         )}
      </>
   );
};

export default BotoesNav;