// src/components/strapi/views/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full py-5 px-6 bg-green-500 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">Bar Fractal</h1>
      <div className="space-y-2">
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
        <div className="w-8 h-0.5 bg-white"></div>
      </div>
    </header>
  );
};

export default Header;