'use client';
import React, { useRef, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

//import LoginForm from '@components/LoginForm';
// import { dialog } from 'electron';
import HandleSubmit from '@utils/handleSubmit';


interface ModalProps {
   title: string;
   // isOpen: boolean;
   onClose: ()=> void;
   onSubmit: ()=> void;
   // children: React.ReactNode
}


const LoginModal: React.FC<ModalProps> = ( {title, /*isOpen,*/ onClose, onSubmit} ) => {
   const searchParams = useSearchParams();
   const modalRef = useRef<null | HTMLDialogElement>(null);
   const showTheModal = searchParams.get('showTheModal');

   useEffect(()=>{
      if ( showTheModal === 'y') {
         modalRef.current?.showModal();
      } else {
         modalRef.current?.close();
      }
   }, [showTheModal])

   const closeModal = () => {
      // isOpen = false;
      modalRef.current?.close();
      onClose();
   };
   const clickSubmitForm = () => {
     // HandleSubmit();
      onSubmit();
      closeModal();
   };

   const dialog: React.ReactElement | null = showTheModal === 'y'
      ?  (
            <dialog 
               ref= {modalRef}
               className = "fixed top-5 left-5 -translate-x-5 -translate-y-5 z-10 rounded-xl backdrop:bg-gray-800/50"
            >
               <form className = "flex flex-1 p-2 m-0" >
                  <h1 className = "flex flex-row p-2 m-0" >{title}</h1>
                  <label className = "pl-2" >
                     Input 1:
                     <input type="text" className = "ml-2" />
                  </label>
                  <label className = "pl-2" >
                     Input 2:
                     <input type="text" className = "ml-2" />
                  </label>
                  <button type="submit" className = "pl-2" onClick={clickSubmitForm}>Submit</button>
               </form>
            </dialog>
         )
      : null;

   return dialog;
};

export default LoginModal;