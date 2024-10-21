import React from 'react';

interface CustomerInfoProps {
  title: string;
  name: string;
  address: string;
  oib: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ title, name, address, oib }) => {
  return (
    <div className="w-[48%] bg-gray-100 p-6 rounded-lg">
      <h2 className="font-bold text-2xl mb-1">{title}</h2>
      <p className="text-lg mb-4"><span className="font-normal">OIB:</span> {oib}</p>
      <p className="text-xl font-bold mb-1">{name}</p>
      <p className="text-lg">{address}</p>
    </div>
  );
};

export default CustomerInfo;