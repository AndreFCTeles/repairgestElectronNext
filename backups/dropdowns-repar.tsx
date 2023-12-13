import React, { useState, ReactNode} from 'react'

interface RDdProps { children: ReactNode; }

const ReparDropdown: React.FC<RDdProps> = ({ children }) => {
   const [topIsOpen, setTopIsOpen] = useState(false);
   const [topIsHidden, setTopIsHidden] = useState(true);
   const [botIsOpen, setBotIsOpen] = useState(false);
   const [botIsHidden, setBotIsHidden] = useState(true);
   const toggleTopDropdown = () => { 
      setTopIsOpen(!topIsOpen);
      setTopIsHidden(!topIsHidden);
      setBotIsHidden(true);
   };
   const toggleBotDropdown = () => { 
      setBotIsOpen(!botIsOpen); 
      setBotIsHidden(!botIsHidden);
      setTopIsHidden(true)
   };

   return (
      <div className={`relative overflow-hidden transition-height ${topIsOpen ? 'h-auto' : 'h-10'}`} >

         {/* toptoggler */}
         <button
            className="h-10 navButton"
            onClick={toggleTopDropdown}
            >
            {children} {/* Reparação */}
         </button>
         {/* /toptoggler */}

         {/* toggledTopDiv */}
         <div className="absolute top-10 left-0 right-0">
            
            <div className={`relative overflow-hidden transition-height ${botIsOpen ? 'h-auto' : 'h-10'}`} >
               {/* bottoggler */}
               <button
                  className="h-10 navButton"
                  onClick={toggleBotDropdown}
                  >
                  Nova Reparação
               </button>     
               {/* /bottoggler */}
               
               {/* toggledBotDiv */}
               <div className="absolute top-10 left-0 right-0 bg-white">
                  <button className="h-10 navButton" disabled>
                     Interna
                  </button>
                  <button className="h-10 navButton" disabled>
                     Externa
                  </button>
                  <button className="h-10 navButton" disabled>
                     Circuitos
                  </button>
               </div>
               {/* /toggledBotDiv */}
            </div>
            <button className="h-10 navButton" disabled>
               Consulta
            </button>
         </div>
         {/* /toggledTopDiv */}

      </div>
   );
};

export default ReparDropdown;