import React, { ReactNode } from 'react';

interface ClientesSidebarProps { 
   children: ReactNode; 
}

const ClientesSidebar: React.FC<ClientesSidebarProps> = ({ children }) => {
   return (
      <div className="bg-green-300 p-4">
         {children}
      </div>
   );
};

export default ClientesSidebar;