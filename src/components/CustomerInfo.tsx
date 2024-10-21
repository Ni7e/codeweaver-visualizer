import React from 'react';

interface CustomerInfoProps {
  title: string;
  name: string;
  address: string;
  oib: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ title, name, address, oib }) => {
  return (
    <div className="w-[48%] bg-gray-100 p-4 relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-300"></div>
      <div className="mt-4">
        <h2 className="font-bold text-2xl mb-2">{title}</h2>
        <p className="text-lg mb-1"><span className="font-semibold">OIB:</span> {oib}</p>
        <p className="text-xl font-semibold mb-1">{name}</p>
        <p className="text-base">{address}</p>
      </div>
    </div>
  );
};

export default CustomerInfo;