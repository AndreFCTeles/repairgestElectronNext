import React, { useState } from 'react';
import Layout from './layout';
import Modal from '../components/Modal';
import Image from 'next/image'

const Home: React.FC = () => {
  // Código para modals
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
    

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleFormSubmit = () => {
    // Handle form submission logic here
    // You can set a state to control the visibility of the main app content
    // For now, let's just close the modal
    setModalOpen(false);
  };

  return (
    <Layout>
      
      <div className="p-4">
        {/* Add loading gif here */}
        <Image src="/path/to/loading.gif" alt="Loading" />
        {/* Add your main content here */}
        <div style={{ visibility: isModalOpen ? 'hidden' : 'visible' }} className="p-4 h-screen">
          Main Content
        </div>
        
        {/* Add the modal */}
        <Modal isOpen={isModalOpen} onRequestClose={closeModal} onFormSubmit={handleFormSubmit} />
      </div>
    </Layout>
  );
};

export default Home;