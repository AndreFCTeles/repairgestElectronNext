'use client'
import React, { ReactNode } from 'react';

// para testes de pagina
import { usePathname } from 'next/navigation'

interface MainBannerProps {  
   children: ReactNode;
}

const MainBanner: React.FC<MainBannerProps> = ({ children }) => {
   const pathname = usePathname();
   return (
      <div className="bg-white p-4 flex flex-row">
         <p className='mr-3'>{pathname==='/'?'/Main':pathname}</p>
         {children}
      </div>
   );
};

export default MainBanner;