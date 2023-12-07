import React from 'react'
import useSWR from 'swr';

interface Item {
   user_id:number;
   user_name: string;
   user_email: string;
}

interface MainDbDisplayProps {
   items: Item[];
}



const MainDbDisplay: React.FC<MainDbDisplayProps> = ({ items }) => {


   return (
      <div>
         <ul>
            {items.map(( item ) => (
               <li key={item.user_id}>{item.user_name} | {item.user_email}</li>
            ))}
         </ul>
      </div>
   )
}

export default MainDbDisplay;