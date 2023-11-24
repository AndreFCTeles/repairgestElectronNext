import Image from 'next/image'
import React from 'react';
import Layout from './layout';

const Home: React.FC = () => {
  return (
    <Layout>
      {/* Add your main content here */}
      <div className="p-4">
        Main Content
      </div>
    </Layout>
  );
};

export default Home;