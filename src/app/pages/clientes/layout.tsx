import React from 'react'
import ClientesBanner from '@ui/clientes/banner';
import ClientesSidebar from '@ui/clientes/sidebar';

const ClientesLayout: React.FC = () => {
   return (
      <div className="flex flex-1 flex-col h-screen overflow-hidden">
         <ClientesBanner>
            <div className="pr-4">CLIENTES</div>
            <div>
               <input placeholder='Search'></input>
            </div>
         </ClientesBanner>
         <div className="flex h-screen">
            <ClientesSidebar>
               Sidebar Content
            </ClientesSidebar>
            <div className="p-4 flex flex-1 overflow-x-hidden overflow-y-auto bg-red-500">
               DBDisplay
               <button>Open Modal</button>
            </div>
         </div>
      </div>
   )
};

export default ClientesLayout;