import React, { ReactNode } from 'react';
//import ConstrutorTabela from '@ui/partilhado/tabela';

interface DbDisplayContentProps {
   children: ReactNode;
}

const DbDisplay: React.FC<DbDisplayContentProps> = ({ children }) => {    
   return (
      <>
         <div className="p-2 flex flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            {/*<table>
               <thead>
                  <tr>{columns.map((column)=> <th key={column}>{column}</th> )}</tr>
               </thead>
               <tbody> */}
                  <p>Dados</p>
                  {children}
                  {/* <ConstrutorTabela /> */}
                  {/* records.map((record, index) => <tr key={index}>{ columns.map( (column)=> ( <td key={column}>{record[column]}</td> ))}</tr> )*/}
               {/* </tbody>
            </table> */}
         </div>
      </>
   )
}

export default DbDisplay;