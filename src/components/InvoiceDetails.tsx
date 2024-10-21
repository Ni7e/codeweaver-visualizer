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
      <h2 className="text-xl font-bold text-blue-600 mb-2">Ponuda {invoiceNumber}</h2>
      <div className="bg-blue-600 h-0.5 w-full mb-2"></div>
      <div className="grid grid-cols-2 gap-4 text-xs">
        <div>
          <p><span className="font-semibold">Vrijeme kreiranja:</span> {creationDate}</p>
          <p><span className="font-semibold">Ponuda vrijedi do:</span> {validUntil}</p>
          <p><span className="font-semibold">Datum isporuke:</span> {deliveryDate}</p>
        </div>
        <div>
          <p><span className="font-semibold">Obrada dokumenta:</span> {processor}</p>
          <p><span className="font-semibold">Način plaćanja:</span> {paymentMethod}</p>
          <p><span className="font-semibold">IBAN za uplatu:</span> {iban}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;