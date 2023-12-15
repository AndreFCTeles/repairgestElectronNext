import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
   // Fetch your data here and send it as the response
   const data = {
      opcaoSelecionada: 'principal',
      dropdowns: {
         top: { isOpen: false, isHidden: true },
         bot: { isOpen: false, isHidden: true },
         clientes: { isOpen: false, isHidden: true },
      },
   };

   res.status(200).json(data);
}
