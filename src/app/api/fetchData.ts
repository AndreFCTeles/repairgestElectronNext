import * as data from '@lib/users_test.json';
import { NextApiRequest, NextApiResponse } from 'next';

const userData = (/*req:NextApiRequest,*/ res:NextApiResponse) => {
   res.status(200).json(data);
};

export default userData;

