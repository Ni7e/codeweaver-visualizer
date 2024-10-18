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
      <h2 className="text-xl font-bold text-blue-500 mb-4">Ponuda {invoiceNumber}</h2>
      <div className="bg-gray-100 p-4 rounded-lg">
        <div className="grid grid-cols-2 gap-2">
          <p className="font-semibold">Vrijeme kreiranja:</p>
          <p className="text-right">{creationDate}</p>
          <p className="font-semibold">Ponuda vrijedi do:</p>
          <p className="text-right">{validUntil}</p>
          <p className="font-semibold">Datum isporuke:</p>
          <p className="text-right">{deliveryDate}</p>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <p className="font-semibold">Obrada dokumenta:</p>
          <p className="text-right">{processor}</p>
          <p className="font-semibold">Način plaćanja:</p>
          <p className="text-right">{paymentMethod}</p>
          <p className="font-semibold">IBAN za uplatu:</p>
          <p className="text-right">{iban}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;