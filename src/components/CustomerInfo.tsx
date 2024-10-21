import React from 'react';

interface CustomerInfoProps {
  title: string;
  name: string;
  address: string;
  oib: string;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ title, name, address, oib }) => {
  return (
    <div className="w-full md:w-[48%] bg-gray-100 p-3 relative rounded aspect-[3.5/1]">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-300 rounded-t"></div>
      <div className="mt-1 h-full flex flex-col justify-between">
        <div>
          <h2 className="font-bold text-xs mb-0.5">{title}</h2>
          <p className="text-[10px] mb-0.5"><span className="font-semibold">OIB:</span> {oib}</p>
          <p className="text-xs font-semibold mb-0.5">{name}</p>
        </div>
        <p className="text-[10px] leading-tight">{address}</p>
      </div>
    </div>
  );
};

export default CustomerInfo;