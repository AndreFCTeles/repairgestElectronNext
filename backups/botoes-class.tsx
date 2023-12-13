import React from "react";
import ReparDropdown from "@/ui/partilhado/main-layout/dropdowns/dropdowns-repar";
import ClientesDropdown from "@/ui/partilhado/main-layout/dropdowns/dropdown-clientes";

interface BotoesNavProps { 
   opcaoAtual: string
   opcaoSelecionada: (opcao: string) => void; 
}

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

export default BotoesNav;



// CASO SEJA PRECISO USAR CLASSES
/*
export default class BotoesNav extends React.Component<BotoesNavProps> {
   handleButtonClick = (opcao: string) => {
      this.props.opcaoSelecionada(opcao);
      //console.log(opcao);
   };
   render() {
      return (
         <>
            <ReparDropdown>
               <button onClick={()=> this.handleButtonClick('reparacoes')} className='navButton'>Reparações</button>
            </ReparDropdown>
            <ClientesDropdown>
               <button onClick={()=> this.handleButtonClick('clientes')} className='navButton'>Clientes</button>
            </ClientesDropdown>               
               { this.props.opcaoAtual !== 'principal' && (
                  <button onClick={()=> this.handleButtonClick('principal')} className='navButton mt-4'>Voltar</button>                  
               )}
         </>
      );
   };
};
*/