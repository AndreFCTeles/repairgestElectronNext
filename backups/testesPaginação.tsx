
'use client';
import { usePathname } from 'next/navigation';
import React from 'react';

const Caminho: React.FC = ()=>{
   const pathname = usePathname();
   return <p className='mr-3'>{pathname==='/'?'/Main':pathname}</p>
}

export default Caminho;