"use client";
import React, { useState, ReactNode} from 'react'

interface CDdProps { children: ReactNode; }

const ClientesDropdown: React.FC<CDdProps> = ({ children }) => {
   const [isOpen, setIsOpen] = useState(false);
   const toggleDropdown = () => { setIsOpen(!isOpen); };

   return (
      <div className={`relative overflow-hidden transition-height ${isOpen ? 'h-auto' : 'h-10'}`} >
         <button
            className="h-10 navButton"
            onClick={toggleDropdown}
            >
            {children}
         </button>
         <div className="absolute top-10 left-0 right-0">
            <button className="h-10 navButton" disabled>
               Novo Cliente
            </button>
            <button className="h-10 navButton" disabled>
               Consulta
            </button>
         </div>
      </div>
   );
};
export default ClientesDropdown