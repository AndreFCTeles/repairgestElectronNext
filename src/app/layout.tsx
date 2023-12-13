// Frameworks
import React from 'react';

// Estilos
import '@styles/globals.css';
import { Inter } from 'next/font/google' // arranjar maneira de instalar local
const inter = Inter({ subsets: ['latin'] })

// Componentes
import Banner from '@ui/partilhado/main-layout/banner';
import GestorConteudo from '@utils/gestao-conteudo';

// Elemento MAIN
const Layout: React.FC = () => { 
   // render dinâmico / server-side do layout da janela principal
   return (      
      <html lang="en">
         <body className={'${inter.className} antialiased'}>
            <div className="flex flex-1 flex-col h-screen overflow-hidden">
               <Banner />
               <div className="flex h-screen">
                  <GestorConteudo />
               </div>
            </div>
         </body>
      </html>
   );
};
export default Layout;