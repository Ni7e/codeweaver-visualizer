import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex justify-center items-center space-x-4">
      <div className="bg-blue-100 p-2 rounded-lg">
        <Globe className="w-8 h-8 text-blue-500" />
      </div>
      <h1 className="text-3xl font-bold text-blue-700">raditi.eu</h1>
    </div>
  );
};

export default Header;