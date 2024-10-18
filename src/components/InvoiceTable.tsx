import React from 'react';

const InvoiceTable: React.FC = () => {
  return (
    <div className="mb-8">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left font-semibold">R.br.</th>
            <th className="p-2 text-left font-semibold">Šifra</th>
            <th className="p-2 text-left font-semibold">Naziv proizvoda/usluge</th>
            <th className="p-2 text-right font-semibold">Količina</th>
            <th className="p-2 text-right font-semibold">Jed. cijena</th>
            <th className="p-2 text-right font-semibold">Ukupno</th>
            <th className="p-2 text-right font-semibold">Popust</th>
            <th className="p-2 text-right font-semibold">Iznos popusta</th>
            <th className="p-2 text-right font-semibold">Iznos stavke</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-200">
            <td className="p-2">1</td>
            <td className="p-2"></td>
            <td className="p-2 whitespace-nowrap">Oglas za posao - 15 dana</td>
            <td className="p-2 text-right">1</td>
            <td className="p-2 text-right whitespace-nowrap">590,00 €</td>
            <td className="p-2 text-right whitespace-nowrap">590,00 €</td>
            <td className="p-2 text-right">50%</td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-bold bg-gray-50">
            <td colSpan={5} className="p-2 text-right">Ukupno:</td>
            <td className="p-2 text-right whitespace-nowrap">590,00 €</td>
            <td colSpan={2}></td>
            <td className="p-2 text-right whitespace-nowrap">295,00 €</td>
          </tr>
        </tfoot>
      </table>
      <div className="text-right font-bold text-xl mt-4 bg-blue-100 p-4 rounded">
        <p>Iznos za uplatu: <span className="text-blue-700 whitespace-nowrap">295,00 €</span></p>
      </div>
    </div>
  );
};

export default InvoiceTable;