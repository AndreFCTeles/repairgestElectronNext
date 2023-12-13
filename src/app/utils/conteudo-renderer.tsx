import React from 'react';
// Conteúdos principais
import MainContent from '@ui/main/main-conteudo';
import ClientesConteudo from '@ui/clientes/clientes-conteudo';
import ReparConteudo from '@ui/reparacoes/reparacoes-conteudo';

//determina que opção foi selecionada na sidebar para gerar conteúdos
interface RenderConteudoProps { opcaoSelecionada: string; }

const RenderConteudo: React.FC<RenderConteudoProps> = ({opcaoSelecionada}) => {
   const componentes: Record<string, React.FC> = {
      reparacoes: ReparConteudo,
      clientes: ClientesConteudo,
      principal: MainContent
   };
   const ComponenteSelecionado = componentes[opcaoSelecionada];

   return (<ComponenteSelecionado />);
};
export default RenderConteudo;