import React, { ReactNode } from 'react';

interface ReparSidebarProps { 
   children: ReactNode; 
}

const ReparSidebar: React.FC<ReparSidebarProps> = ({ children }) => {
   return (
      <div id="reparSidebar" className="bg-green-300 p-4 flex flex-row">
         {children}
      </div>
   );
};

export default ReparSidebar;