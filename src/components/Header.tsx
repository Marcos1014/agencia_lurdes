import React from 'react';
import { DollarSign } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-red-900 to-red-700 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <DollarSign className="w-10 h-10 mr-2 text-yellow-400" />
          <h1 className="text-4xl font-bold neon-text">Agencia Lurdes</h1>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Gallery</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition-colors duration-300">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;