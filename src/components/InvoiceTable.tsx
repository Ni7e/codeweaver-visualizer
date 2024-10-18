import React from 'react';

const InvoiceTable: React.FC = () => {
  return (
    <div className="mb-8">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left font-semibold border">R.br.</th>
            <th className="p-2 text-left font-semibold border">Šifra</th>
            <th className="p-2 text-left font-semibold border">Naziv proizvoda/usluge</th>
            <th className="p-2 text-right font-semibold border">Količina (kom)</th>
            <th className="p-2 text-right font-semibold border">Jedinična cijena</th>
            <th className="p-2 text-right font-semibold border">Ukupna cijena</th>
            <th className="p-2 text-right font-semibold border">Popust (%)</th>
            <th className="p-2 text-right font-semibold border">Iznos popusta</th>
            <th className="p-2 text-right font-semibold border">Iznos stavke</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border">
            <td className="p-2 border">1</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">Oglas za posao - 15 dana</td>
            <td className="p-2 text-right border">1</td>
            <td className="p-2 text-right border whitespace-nowrap">590,00 €</td>
            <td className="p-2 text-right border whitespace-nowrap">590,00 €</td>
            <td className="p-2 text-right border">50</td>
            <td className="p-2 text-right border whitespace-nowrap">295,00 €</td>
            <td className="p-2 text-right border whitespace-nowrap">295,00 €</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-bold">
            <td colSpan={2} className="p-2 border"></td>
            <td className="p-2 text-left border">Ukupno:</td>
            <td className="p-2 border"></td>
            <td className="p-2 border"></td>
            <td className="p-2 text-right border whitespace-nowrap">590,00 €</td>
            <td className="p-2 border"></td>
            <td className="p-2 text-right border whitespace-nowrap">295,00 €</td>
            <td className="p-2 text-right border whitespace-nowrap">295,00 €</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceTable;