// components/Modal.tsx
import React, { useState, useEffect } from 'react';
import ReactModal from 'react-modal';
import Image from 'next/image'

interface ModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
   onFormSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onRequestClose, onFormSubmit  }) => {
   const [isLoading, setLoading] = useState(true);

   useEffect(() => {
      // Simulate loading time for the modal
      const modalLoadTimeout = setTimeout(() => {
         setLoading(false);
      }, 2000); // Adjust the time as needed 
      return () => clearTimeout(modalLoadTimeout);
   }, []);


   return (
      <ReactModal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         shouldCloseOnOverlayClick={!isLoading}
         className="modal"
         overlayClassName="overlay"
      >
         {isLoading ? (
            // Show loading gif
            <Image src="/path/to/loading.gif" alt="Loading" />
         ) : (
         // Show modal content after loading
         <>
            <h2>This is a Modal</h2>
            {/* Add your form elements here */}
            <form onSubmit={onFormSubmit}>
               <label>
               Input 1:
               <input type="text" />
               </label>
               <label>
               Input 2:
               <input type="text" />
               </label>
               <button type="submit">Submit</button>
            </form>
         </>
         )}
      </ReactModal>
   );
};

export default Modal;
