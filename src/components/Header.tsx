import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4 mb-6">
      <img src="/raditi-logo.png" alt="Raditi.eu Logo" className="w-12 h-12" />
      <h1 className="text-3xl font-bold text-blue-700">raditi.eu</h1>
    </div>
  );
};

export default Header;