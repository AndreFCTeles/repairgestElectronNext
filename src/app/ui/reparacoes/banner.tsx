import React, { ReactNode } from 'react';

interface ReparBannerProps {  
   children: ReactNode;
}

const ReparBanner: React.FC<ReparBannerProps> = ({ children }) => {
   return (
      <div className="bg-blue-500 p-4 text-white flex flex-row">
         {children}
      </div>
   );
};

export default ReparBanner;