'use client';
//import * as data from '@lib/users_test.json';
import React, {useEffect, useState} from 'react';
import { NextApiRequest, NextApiResponse } from 'next';

const FetchUserData= (/*req:NextApiRequest, res:NextApiResponse*/) => {
   //res.status(200).json(data);

   const [column, setColumn] = useState<string[]>([]);
   const [records, setRecords] = useState<any[]>([])
   useEffect(()=>{
      fetch('@lib/users_test.json')
      .then(res => res.json())
      .then(data => {
         setColumn( Object.keys(data.users[0]) )
         setRecords( data.users )
      } )
   })
};

export default FetchUserData;

