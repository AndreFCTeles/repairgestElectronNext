import { NextApiRequest, NextApiResponse } from 'next';

const fetchData = async (req: NextApiRequest, res: NextApiResponse) => {
   try {
      // busca caminho para query
      const {path} = req.query;
      if (!path) return res.status(400).json({error: 'Caminho para dados inválido'});

      // busca dados segundo o caminho      
      const filePath = 'http://localhost:4000/${path}';
      const response = await fetch(filePath);
      if (!response.ok) throw new Error('Caminho (${filePath}) para busca de dados falhou. Estado: ${response.status}.')
      const jsonData = await response.json();

      // Retorna dados
      res.status(200).json(jsonData); 
      console.log(response.json())     
      //return response.json();
   } catch (error) {
      console.error('Erro ao buscar dados:', error);
      res.status(500).json({ error: 'Erro Interno de Servidor' });
   }
};
export default fetchData;