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
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p className="flex justify-between"><span className="font-semibold">Vrijeme kreiranja:</span> <span className="text-right">{creationDate}</span></p>
            <p className="flex justify-between"><span className="font-semibold">Ponuda vrijedi do:</span> <span className="text-right">{validUntil}</span></p>
            <p className="flex justify-between"><span className="font-semibold">Datum isporuke:</span> <span className="text-right">{deliveryDate}</span></p>
          </div>
          <div className="space-y-1">
            <p className="flex justify-between"><span className="font-semibold">Obrada dokumenta:</span> <span className="text-right">{processor}</span></p>
            <p className="flex justify-between"><span className="font-semibold">Način plaćanja:</span> <span className="text-right">{paymentMethod}</span></p>
            <p className="flex justify-between"><span className="font-semibold">IBAN za uplatu:</span> <span className="text-right">{iban}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;