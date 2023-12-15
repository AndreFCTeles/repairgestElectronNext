'use client';
import { useState } from 'react';

export interface Dropdowns {
   isOpen: boolean;
   isHidden: boolean;
}

function useConteudoState() {
   const [opcaoSelecionada, setOpcaoSelecionada] = useState<string>('principal');
   const [dropdowns, setDropdowns] = useState<Record<string, Dropdowns>>({
      top: { isOpen: false, isHidden: true },
      bot: { isOpen: false, isHidden: true },
      clientes: { isOpen: false, isHidden: true },
   });

   const handleButtonClick = (opcao: string) => {
      setOpcaoSelecionada(opcao);
      setDropdowns({
         top: { isOpen: false, isHidden: true },
         bot: { isOpen: false, isHidden: true },
         clientes: { isOpen: false, isHidden: true },
      });
   };

   const toggleDropdown = (dropdown: string) => {
      setDropdowns((prevDropdowns) => {
         if (!(dropdown in prevDropdowns)) {
            return prevDropdowns;
         }
         const updatedDropdowns = {
            ...Object.fromEntries(
               Object.keys(prevDropdowns).map((key) => [key, { isOpen: false, isHidden: true }])
            ),
            [dropdown]: {
               isOpen: !prevDropdowns[dropdown].isOpen,
               isHidden: !prevDropdowns[dropdown].isHidden,
            },
         };
         return updatedDropdowns;
      });
   };

   return { opcaoSelecionada, dropdowns, handleButtonClick, toggleDropdown };
}

export default useConteudoState;