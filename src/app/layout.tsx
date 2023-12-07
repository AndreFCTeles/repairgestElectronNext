import React, { Children } from 'react';
import Link from 'next/link';
//import type { Metadata } from 'next';

import '@styles/globals.css';
import { Inter } from 'next/font/google'
import MainBanner from '@ui/main/banner';
import MainSidebar from '@ui/main/sidebar';

// inicialização da font
const inter = Inter({ subsets: ['latin'] })

// metadados da app - atualmente em electron.js
/*
const metadata: Metadata = {
   title: 'RepairGest',
   description: 'Aplicação de gestão de reparações - Electrex / João R. Matos',
};
*/

// Elemento MAIN
const Layout: React.FC = () => {

   return (      
      <html lang="en">
         <body>
            <div className="flex flex-1 flex-col h-screen overflow-hidden">
               <MainBanner>
                  <div>
                     <form>   
                        <div className="relative">
                           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                 <svg 
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400" 
                                    aria-hidden="true" 
                                    fill="none" 
                                    viewBox="0 0 20 20">
                                    <path 
                                       stroke="currentColor" 
                                       strokeLinecap="round" 
                                       strokeLinejoin="round" 
                                       strokeWidth="2" 
                                       d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                 </svg>
                           </div>
                           <input 
                              type="search" 
                              id="default-search" 
                              className="searchInput" 
                              placeholder="Procurar" />
                           <button 
                              type="submit" 
                              className="searchButton">
                              Ir
                           </button>
                        </div>
                     </form>
                  </div>
               </MainBanner>
               <div className="flex h-screen">
                  <MainSidebar>
                     Funcionalidades
                     <Link 
                        href="/pages/clientes" 
                        className='generalButton'>
                        Clientes
                     </Link>
                     <Link 
                        href="/pages/reparacoes"
                        className='generalButton'>
                        Reparações
                     </Link>
                  </MainSidebar>
                  <div className="p-4 flex flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                     DADOS/FORMULÁRIOS
                  </div>
               </div>
            </div>
         </body>
      </html>
   );
};

export default Layout;