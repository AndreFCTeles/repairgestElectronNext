import React from 'react';

interface SidebarProps {
   // props inventados só para a interface não estar vazia:   
   children: string;
}

const Sidebar: React.FC<SidebarProps> = ({children}) => {
   return (
      <div className="bg-gray-200 p-4">
         {children}
      </div>
   );
}


export default Sidebar;