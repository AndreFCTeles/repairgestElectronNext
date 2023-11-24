import React from 'react';

interface BannerProps {
   // props inventados só para a interface não estar vazia:
   
   children: string;
}

const Banner: React.FC<BannerProps> = ({children}) => {
   return (
      <div className="bg-blue-500 p-4 text-white">
         {children}
      </div>
   );
}


export default Banner;