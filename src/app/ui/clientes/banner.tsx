import React, { ReactNode } from 'react';

interface ClientesBannerProps {  
   children: ReactNode;
}

const ClientesBanner: React.FC<ClientesBannerProps> = ({ children }) => {
   return (
      <div className="bg-blue-500 p-4 text-white flex flex-row">
         {children}
      </div>
   );
};

export default ClientesBanner;