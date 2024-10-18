import React from 'react';

const InvoiceTable: React.FC = () => {
  return (
    <div className="mb-8 overflow-x-auto">
      <table className="w-full text-sm border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left font-semibold">R.br.</th>
            <th className="p-2 text-left font-semibold">Šifra</th>
            <th className="p-2 text-left font-semibold">Naziv proizvoda/usluge</th>
            <th className="p-2 text-right font-semibold">Količina</th>
            <th className="p-2 text-right font-semibold">Jed. cijena</th>
            <th className="p-2 text-right font-semibold">Ukupno</th>
            <th className="p-2 text-right font-semibold">Popust (%)</th>
            <th className="p-2 text-right font-semibold">Iznos popusta</th>
            <th className="p-2 text-right font-semibold">Iznos stavke</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-2">1</td>
            <td className="p-2"></td>
            <td className="p-2 whitespace-nowrap">Oglas za posao - 15 dana</td>
            <td className="p-2 text-right">1</td>
            <td className="p-2 text-right whitespace-nowrap">590,00 €</td>
            <td className="p-2 text-right whitespace-nowrap">590,00 €</td>
            <td className="p-2 text-right">50</td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-bold border-t">
            <td colSpan={2} className="p-2"></td>
            <td className="p-2 text-left">Ukupno:</td>
            <td className="p-2"></td>
            <td className="p-2"></td>
            <td className="p-2 text-right whitespace-nowrap">590,00 €</td>
            <td className="p-2"></td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default InvoiceTable;