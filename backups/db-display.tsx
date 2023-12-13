import React from 'react';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () =>{
   try {
      const response = await fetch('@api/fetchData');
      const { columns, records } = await response.json();

      return {
         props: {
         columns,
         records,
         },
      };
   } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return {
         props: {
         error: 'Erro ao buscar dados',
         },
      };
   }
};

interface MainDbDisplayProps{
   columns:string[], 
   records:any[], 
   error?: string
}

const MainDbDisplay: React.FC<MainDbDisplayProps> = ({ columns, records, error}) => {
   
   if (!columns || !records){
      return <p className='p-2'>A carregar...</p>
   } else if (error) {
      return <p className='p-2'>Erro: {error}</p>
   }
   

   return (
      <>
         <div className="p-2 flex flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <table>
               <thead>
                  <tr>{ columns.map((column)=> <th key={column}>{column}</th> ) }</tr>
               </thead>
               <tbody>
                  { records.map((record, index) => <tr key={index}>{ columns.map( (column)=> ( <td key={column}>{record[column]}</td> ))}</tr> )}
               </tbody>
            </table>
         </div>
      </>
   )
}

export default MainDbDisplay;