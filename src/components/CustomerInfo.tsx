import React from 'react';

interface CustomerInfoProps {
  title: string;
  name: string;
  address: string;
  country?: string;
  oib: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ title, name, address, country, oib }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="font-bold text-lg mb-1">{title}</h2>
      <p className="font-semibold mb-2">OIB: {oib}</p>
      <p className="font-semibold">{name}</p>
      <p>{address}{country && `, ${country}`}</p>
    </div>
  );
};

export default CustomerInfo;