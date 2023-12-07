'use client';
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Image from 'next/image'

import LoginForm from '@components/BU/LoginForm';

/*
interface ModalProps {
   title: string,
   isOpen: boolean,
   children: React.ReactNode,
   onClose: ()=> void,
   onSubmit: ()=> void
}
*/

const Modal: React.FC = () => {
   // const [isLoading, setLoading] = useState(true);

   return (
      <ReactModal
         isOpen={true}
         className="modal"
         overlayClassName="overlay"
      >
         { /*
         isLoading ? (
            // Show loading gif
            <Image src="/path/to/loading.gif" alt="Loading" />
         ) : (
         // Show modal content after loading
         <>
            <h2>This is a Modal</h2>
            <LoginForm />
         </>
         )
         */ }

         <LoginForm />
      </ReactModal>
   );
};

export default Modal;