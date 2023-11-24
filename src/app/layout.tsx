import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import Banner from '../components/Banner'
import Sidebar from '../components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RepairGest',
  description: 'Aplicação de gestão de reparações - Electrex / João R. Matos',
}

interface LayoutProps {
    // props inventados só para a interface não estar vazia:
    
    children: string;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen">
        <Banner>
          {/* Add content for the banner here */}
          Banner Content
        </Banner>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Sidebar>
          {/* Add content for the sidebar here */}
          Sidebar Content
        </Sidebar>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
        </main>
      </div>
    </div>
  );
};

export default Layout;