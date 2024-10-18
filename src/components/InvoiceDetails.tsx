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
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div>
          <p className="font-semibold">Vrijeme kreiranja:</p>
          <p>{creationDate}</p>
        </div>
        <div>
          <p className="font-semibold">Ponuda vrijedi do:</p>
          <p>{validUntil}</p>
        </div>
        <div>
          <p className="font-semibold">Datum isporuke:</p>
          <p>{deliveryDate}</p>
        </div>
        <div>
          <p className="font-semibold">Obrada dokumenta:</p>
          <p>{processor}</p>
        </div>
        <div>
          <p className="font-semibold">Način plaćanja:</p>
          <p>{paymentMethod}</p>
        </div>
        <div>
          <p className="font-semibold">IBAN za uplatu:</p>
          <p>{iban}</p>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;