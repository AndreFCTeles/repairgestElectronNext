// gestao-conteudo.tsx
import React from 'react';
import useSWR from 'swr';
import Sidebar from '@components/partilhado/main-layout/sidebar';
import RenderConteudo from '@utils/conteudo-renderer';

interface Dropdowns {
   isOpen: boolean;
   isHidden: boolean;
}

const fetchData = async (url: string) => {
   const response = await fetch(url);
   const data = await response.json();
   return data;
};

const GestorConteudo: React.FC = () => {
   const { data: conteudoState, error } = useSWR('/api/conteudo', fetchData);

   if (error) return <div>Error loading data</div>;
   if (!conteudoState) return <div>Loading...</div>;

   const { opcaoSelecionada, dropdowns, handleButtonClick, toggleDropdown } = conteudoState;

   // Rest of your component remains the same...

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
               }}
               >
               {item.charAt(0).toUpperCase() + item.slice(1)}
               </button>
               {dropdowns[item]?.isOpen && (
               <div className="absolute top-10 left-0 right-0">
                  <h2>{item} Content:</h2>
                  {/* Rest of your dropdown content... */}
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
