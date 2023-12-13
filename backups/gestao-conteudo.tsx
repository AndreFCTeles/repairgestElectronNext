import React, {useState} from 'react';
// componentes
import Sidebar from '@ui/partilhado/main-layout/sidebar';
import BotoesNav from '@utils/botoes-class';
import RenderConteudo from '@utils/conteudo-renderer';

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


// CASO SEJA PRECISO USAR CLASSES
/*
interface GestorConteudoEstado { opcaoSelecionada: string; }
// esta classe gera conteúdo segundo os botões da sidebar (botoes-class.tsx e conteudo-renderer.tsx)
export default class GestorConteudo extends React.Component<{}, GestorConteudoEstado> {
   state: GestorConteudoEstado = { opcaoSelecionada: 'principal'};
   handleOptionChange = (opcao: string)  => { this.setState({ opcaoSelecionada: opcao }); };
   render(){
      return (
         <>
            <Sidebar>
               <BotoesNav opcaoAtual={this.state.opcaoSelecionada} opcaoSelecionada={this.handleOptionChange} />
            </Sidebar>
            <div id="Content" className="flex flex-col flex-1 bg-gray-100">
               <RenderConteudo opcaoSelecionada={this.state.opcaoSelecionada} />
            </div>
         </>
      );
   }
};
*/