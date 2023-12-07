import React, { ReactNode } from 'react';

interface MainSidebarProps { 
   children: ReactNode; 
}

const MainSidebar: React.FC<MainSidebarProps> = ({ children }) => {
   return (
      <div className="bg-gray-300 p-4 flex flex-col">
         {children}
      </div>
   );
};

export default MainSidebar;