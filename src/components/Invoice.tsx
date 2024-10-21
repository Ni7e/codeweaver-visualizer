import React from 'react';
import Header from './Header';
import CustomerInfo from './CustomerInfo';
import InvoiceDetails from './InvoiceDetails';
import InvoiceTable from './InvoiceTable';
import Footer from './Footer';

const Invoice: React.FC = () => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto p-8 bg-white font-sans text-sm shadow-lg">
      <Header />
      <hr className="my-4 border-gray-300" />
      <div className="flex justify-between mb-6">
        <CustomerInfo
          title="KUPAC"
          name="Electro Solutions d.o.o."
          address="Ulica Petra Zrinskog i Krste Frankopana 5, 49 000 Krapina, Hrvatska"
          oib="85888847024"
        />
        <CustomerInfo
          title="IZDAVATELJ"
          name="Raditi, obrt za poslovne usluge, vl. Hrvoje Brkić"
          address="B. Magovca 9, 10 000 Zagreb, Hrvatska"
          oib="58282261804"
        />
      </div>
      <InvoiceDetails
        invoiceNumber="48/1/1"
        creationDate="13.09.2024. 13:07h"
        validUntil="20.09.2024."
        deliveryDate="13.09.2024."
        processor="Hrvoje Brkić"
        paymentMethod="Transakcijski račun"
        iban="HR5724020061140441485"
      />
      <InvoiceTable />
      <Footer />
    </div>
  );
};

export default Invoice;