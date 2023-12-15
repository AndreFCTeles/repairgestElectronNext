/*
'use client';
import React, { useState } from 'react';
import fetchData from '@api/fetchData';

const ConstrutorTabela = () => {   
   const [path, setPath] = useState('');   
   const [tableData, setTableData] = useState(null);

   const fetchTableData = async () => {
      try {
         const response = await fetch('/api/fetchData?path=${path}');
         const data = await response.json();
         setTableData(data);
      } catch (error){
         console.error('Erro ao buscar dados:', error);
      }
   };
   
   const handleFetchClick = () => { fetchTableData(); };

   return (
      <>
         { tableData.map((item) => (            
            <tr key={item}>
               {}
               <td>{item.users.user_id}</td>
               <td>{item.users.user_name}</td>
               <td>{item.users.age}</td>
            </tr>
         )) }
      </>
   )
}

export default ConstrutorTabela
*/