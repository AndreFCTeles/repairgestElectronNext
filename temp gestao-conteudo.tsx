import React, { useState } from 'react';
import Sidebar from '@ui/partilhado/main-layout/sidebar';
import RenderConteudo from '@utils/conteudo-renderer';

interface Dropdown {
   isOpen: boolean;
   isHidden: boolean;
}

interface DropdownContent {
   reparacoes: JSX.Element;
   clientes: JSX.Element;
   [key: string]: JSX.Element;
}

const GestorConteudo: React.FC = () => {
   const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('principal');
   const [dropdowns, setDropdowns] = useState<Record<string, Dropdown>>({
      top: { isOpen: false, isHidden: true },
      bot: { isOpen: false, isHidden: true },
      clientes: { isOpen: false, isHidden: true },
   });

   const dropdownContent: DropdownContent = {
      reparacoes: (
         <>
         <button className="h-10 navButton" onClick={() => toggleDropdown('bot')}>
            Nova Reparação
         </button>
         <div className="absolute top-10 left-0 right-0">
            {['Interna', 'Externa', 'Circuitos'].map((subItem) => (
               <button key={subItem} className="h-10 navButton" disabled>
               {subItem}
               </button>
            ))}
         </div>
         <button className="h-10 navButton" disabled>
            Consulta
         </button>
         </>
      ),
      clientes: (
         <>
         <button className="h-10 navButton" disabled>
            Novo Cliente
         </button>
         <button className="h-10 navButton" disabled>
            Consulta
         </button>
         </>
      ),
   };

   const toggleDropdown = (dropdown: string) => {
      setDropdowns((prevDropdowns) => ({
         ...Object.fromEntries(
         Object.keys(prevDropdowns).map((key) => [key, { isOpen: false, isHidden: true }])
         ),
         [dropdown]: {
         isOpen: !prevDropdowns[dropdown].isOpen,
         isHidden: !prevDropdowns[dropdown].isHidden,
         },
      }));
   };

   const handleButtonClick = (opcao: string) => {
      setOpcaoSelecionada(opcao);
      setDropdowns({
         top: { isOpen: false, isHidden: true },
         bot: { isOpen: false, isHidden: true },
         clientes: { isOpen: false, isHidden: true },
      });
   };

   return (
      <>
         <Sidebar>
         {['reparacoes', 'clientes'].map((item) => (
            <div
               key={`DD${item}`}
               className={`relative overflow-hidden transition-height m-1 ${
               dropdowns[item].isOpen ? 'h-auto' : 'h-10'
               }`}
            >
               <button
               className="h-10 navButton"
               onClick={() => {
                  handleButtonClick(item);
                  toggleDropdown(item);
               }}
               >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
               </button>
               {dropdowns[item].isOpen && (
               <div className="absolute top-10 left-0 right-0">
                  {dropdownContent[item]}
               </div>
               )}
            </div>
         ))}
         {opcaoSelecionada !== 'principal' && (
            <button onClick={() => handleButtonClick('principal')} className="navButton mt-4">
               Voltar
            </button>
         )}
         </Sidebar>
         <div id="Content" className="flex flex-col flex-1 bg-gray-100">
         <RenderConteudo opcaoSelecionada={opcaoSelecionada} />
         </div>
      </>
   );
};

export default GestorConteudo;
