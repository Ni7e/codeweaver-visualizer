import React from 'react';

interface InvoiceDetailsProps {
  invoiceNumber: string;
  creationDate: string;
  validUntil: string;
  deliveryDate: string;
  processor: string;
  paymentMethod: string;
  iban: string;
}

const InvoiceDetails: React.FC<InvoiceDetailsProps> = ({
  invoiceNumber,
  creationDate,
  validUntil,
  deliveryDate,
  processor,
  paymentMethod,
  iban,
}) => {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">Ponuda {invoiceNumber}</h2>
      <div className="bg-gray-100 rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-0.5 bg-blue-600 text-white font-semibold">
          <div className="p-2">Vrijeme kreiranja:</div>
          <div className="p-2">Obrada dokumenta:</div>
          <div className="p-2">Način plaćanja:</div>
        </div>
        <div className="grid grid-cols-3 gap-0.5 bg-white">
          <div className="p-2">{creationDate}</div>
          <div className="p-2">{processor}</div>
          <div className="p-2">{paymentMethod}</div>
        </div>
        <div className="grid grid-cols-3 gap-0.5 bg-blue-600 text-white font-semibold">
          <div className="p-2">Ponuda vrijedi do:</div>
          <div className="p-2">Datum isporuke:</div>
          <div className="p-2">IBAN za uplatu:</div>
        </div>
        <div className="grid grid-cols-3 gap-0.5 bg-white">
          <div className="p-2">{validUntil}</div>
          <div className="p-2">{deliveryDate}</div>
          <div className="p-2">{iban}</div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;