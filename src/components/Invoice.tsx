import React from 'react';
import Header from './Header';
import CustomerInfo from './CustomerInfo';
import InvoiceDetails from './InvoiceDetails';
import InvoiceTable from './InvoiceTable';
import Footer from './Footer';

const Invoice: React.FC = () => {
  return (
    <div className="w-[210mm] h-[297mm] mx-auto p-8 bg-white font-sans text-sm shadow-lg flex flex-col">
      <div className="flex-grow">
        <Header />
        <hr className="my-4 border-gray-300" />
        <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
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
        <div className="mt-8 text-xs text-gray-600">
          <p className="mb-1 font-semibold">NAPOMENA:</p>
          <p>IBAN: HR5724020061140441485 (Erste&Steiermarkische Bank d.d., Zagreb)</p>
          <p>Molimo Vas da prilikom plaćanja u rubriku "Poziv na broj" obavezno navedete broj ponude.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Invoice;