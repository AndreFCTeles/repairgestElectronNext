export default async function modalHandler(req: any, res: any) {
   if (req.method === 'POST') {
      try {
         const formData = req.body;

         // processamento server-side

         //sucesso?
         res.status(200).json({success: true});
      } catch (error) {
         console.error('Erro a processar dados do servidor:', error);
         res.status(500).json({ error: 'Internal Server Error' });
      }
   } else {
      res.status(405).json({ error: 'Method Not Allowed' });
   }
}