import React from 'react'

//import HandleSubmit from '@utils/handleSubmit'


const LoginForm: React.FC<props> = () =>(
      <>
         {/* <form onSubmit={ HandleSubmit }> */}
         <form className = "flex flex-1 p-2 m-0" >
            <h1>{props.title}</h1>
            <label className = "pl-2" >
               Input 1:
               <input type="text" className = "ml-2" />
            </label>
            <label className = "pl-2" >
               Input 2:
               <input type="text" className = "ml-2" />
            </label>
            <button type="submit" className = "pl-2" onClick={props.onSubmit}>Submit</button>
         </form>
      </>
   );

export default LoginForm;