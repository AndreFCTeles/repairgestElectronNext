import React from 'react';

import ReparBanner from '@ui/reparacoes/banner';
import ReparSidebar from '@ui/reparacoes/sidebar';

const ReparLayout: React.FC = () => {
   return (
      <div className="flex flex-1 flex-col h-screen overflow-hidden">
         <ReparBanner>
            <div className="pr-4">REPARAÇÕES</div>
            <div>
               <input placeholder='Search'></input>
            </div>
         </ReparBanner>
         <div className="flex h-screen">
            <ReparSidebar>
               Sidebar Content
            </ReparSidebar>
            <div className="p-4 flex flex-1 overflow-x-hidden overflow-y-auto bg-red-500">
               DBDisplay
               <button>Open Modal</button>
            </div>
         </div>
      </div>
   )
};

export default ReparLayout;