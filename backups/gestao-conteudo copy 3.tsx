'use client';
import React, { useState, useEffect } from 'react'; // para troubleshooting
// import React, { useState } from 'react';
import Sidebar from '@ui/partilhado/main-layout/sidebar';
import RenderConteudo from '@utils/conteudo-renderer';

// Inicialização dos props/estados para Dropdowns
interface Dropdowns {
   isOpen: boolean;
   isHidden: boolean;
}
// Inicialização dos Dropdowns propriamente ditos
interface DropdownContent {
   reparacoes: JSX.Element;
   clientes: JSX.Element;
   [key: string]: JSX.Element;
}

const GestorConteudo: React.FC = () => {
   // Estados da interface
   const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('principal');
   const [dropdowns, setDropdowns] = useState<Record<string, Dropdowns>>({
      top: { isOpen: false, isHidden: true },
      bot: { isOpen: false, isHidden: true },
      clientes: { isOpen: false, isHidden: true },
   });
   // Inicialização do conteúdo dos Dropdowns
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

   // Toggling dos dropdowns
   const toggleDropdown = (dropdown: string) => {      
      console.log(' ');
      console.log('Toggling dropdown: ', dropdown);
      console.log('Dropdown content: ', dropdownContent['reparacoes'].props);
      console.log('Dropdown content: ', dropdownContent['clientes'].props);
      console.log('is repar.top dropdown open? : ', (dropdowns['top'].isOpen ? 'open':'not open') );
      console.log('is repar.bot dropdown open? : ', (dropdowns['bot'].isOpen ? 'open':'not open') );
      console.log('is clientes dropdown open? : ', (dropdowns['clientes'].isOpen ? 'open':'not open') );
      setDropdowns((prevDropdowns) => {
         // Verificar se a key do dropdown existe. Se não existir, volta ao estado anterior
         if (!(dropdown in prevDropdowns)) { return prevDropdowns; }
         const updatedDropdowns = {
            ...Object.fromEntries(
               Object.keys(prevDropdowns).map((key) => [key, { isOpen: false, isHidden: true }])
            ),
            [dropdown]: {
               isOpen: !prevDropdowns[dropdown].isOpen,
               isHidden: !prevDropdowns[dropdown].isHidden,
            }
         }
         return updatedDropdowns;
      });
   };
   
   /*
   // Toggling dos dropdowns
   const toggleDropdown = (dropdown: string) => {
      setDropdowns((prevDropdowns) => {
         const updatedDropdowns = { ...prevDropdowns };

         // Close all dropdowns except the selected one
         Object.keys(updatedDropdowns).forEach((key) => {
            updatedDropdowns[key] = {
               isOpen: key === dropdown ? !prevDropdowns[key].isOpen : false,
               isHidden: key === dropdown ? !prevDropdowns[key].isHidden : true,
            };
         });

         return updatedDropdowns;
      });
   };
   */

   // Interatividade (User Experience) dos botões
   const handleButtonClick = (opcao: string) => {
      setOpcaoSelecionada(opcao);
      // Opcionalmente, fecha todos os dropdowns
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
                  dropdowns[item]?.isOpen ? 'h-auto' : 'h-10'
                  }`}
               >
                  <button
                  className="h-10 navButton"
                  onClick={() => {
                     handleButtonClick(item);
                     toggleDropdown(item);
                  }} >
                     {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                  {dropdowns[item]?.isOpen && (
                     <div className="absolute top-10 left-0 right-0">
                        <h2>{item} Content:</h2>
                        {dropdownContent[item]}
                     </div>
                     )}
               </div>
            ))}

            {/* Voltar */}
            {opcaoSelecionada !== 'principal' && (
               <button onClick={() => handleButtonClick('principal')} className="navButton mt-4">
                  Voltar
               </button>
            )}
         </Sidebar>

         {/* Conteúdo */}
         <div id="Content" className="flex flex-col flex-1 bg-gray-100">
            <RenderConteudo opcaoSelecionada={opcaoSelecionada} />
         </div>
      </>
   );
};

export default GestorConteudo;
