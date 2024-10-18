import React from 'react';

interface CustomerInfoProps {
  title: string;
  name: string;
  address: string;
  oib: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ title, name, address, oib }) => {
  return (
    <div className="w-[48%] bg-gray-100 p-4 rounded-lg">
      <h2 className="font-bold text-sm mb-1">{title}</h2>
      <p className="text-sm mb-1"><span className="font-semibold">OIB:</span> {oib}</p>
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-sm whitespace-normal">{address}</p>
    </div>
  );
};

export default CustomerInfo;