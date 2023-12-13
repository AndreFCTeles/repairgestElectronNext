import { NextApiRequest, NextApiResponse } from 'next';

const fetchData = async (_req: NextApiRequest, res: NextApiResponse) => {
   try {
      const filePath = '@lib/users_test.json';
      const response = await fetch(filePath);
      const jsonData = await response.json();

      // Retorna dados
      res.status(200).json(jsonData);
      console.log(jsonData);
   } catch (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).json({ error: 'Erro Interno de Servidor' });
   }
};

export default fetchData;
