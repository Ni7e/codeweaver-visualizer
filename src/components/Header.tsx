import React from 'react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-2 mb-4">
      <img src="/raditi-logo.png" alt="Raditi.eu Logo" className="w-8 h-8" />
      <h1 className="text-xl font-semibold text-blue-600">raditi.eu</h1>
    </div>
  );
};

export default Header;