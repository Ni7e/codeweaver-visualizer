import React from 'react';

interface CustomerInfoProps {
  title: string;
  name: string;
  address: string;
  oib: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ title, name, address, oib }) => {
  return (
    <div className="w-[48%] bg-gray-100 p-4">
      <h2 className="font-bold text-2xl mb-2">{title}</h2>
      <p className="text-lg mb-1"><span className="font-semibold">OIB:</span> {oib}</p>
      <p className="text-xl font-semibold">{name}</p>
      <p className="text-base">{address}</p>
    </div>
  );
};

export default CustomerInfo;