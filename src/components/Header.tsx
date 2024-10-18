import React from 'react';
import { Globe } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="bg-gray-100 p-2 rounded-lg">
        <Globe className="w-8 h-8 text-blue-500" />
      </div>
      <h1 className="text-2xl font-bold text-blue-500">raditi.eu</h1>
    </div>
  );
};

export default Header;