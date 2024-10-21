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
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Ponuda {invoiceNumber}</h2>
      <div className="bg-gray-100 p-4 rounded-lg border-t-4 border-blue-700">
        <div className="grid grid-cols-2 gap-4 text-sm">
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
    </div>
  );
};

export default InvoiceDetails;