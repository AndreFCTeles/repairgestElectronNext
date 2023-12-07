//import React, {useState} from "react";
import React from "react";

const HandleSubmit = async ( /*e: React.FormEvent*/ ) => {
   //const [formData, setFormData] = useState(true);
   const formData = [67,"matrix","juventude"];
   //e.preventDefault();

   try {
      const response = await fetch('/api/processData', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(formData),
      });

      if (response.ok){
         //onClose();
      } else {
         console.error('Erro ao processar dados no servidor'); 
      }
   } catch (error) {
      console.error('Erro na comunicação com servidor', error);
   }
};

export default HandleSubmit;