import React from 'react';
import Header from './Header';
import CustomerInfo from './CustomerInfo';
import InvoiceDetails from './InvoiceDetails';
import InvoiceTable from './InvoiceTable';
import Footer from './Footer';

const Invoice: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg">
      <Header />
      <hr className="my-6 border-gray-300" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <CustomerInfo
          title="KUPAC"
          name="Electro Solutions d.o.o."
          address="Ulica Petra Zrinskog i Krste Frankopana 5, 49 000 Krapina,"
          country="Hrvatska"
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