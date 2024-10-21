import React from 'react';

const InvoiceTable: React.FC = () => {
  return (
    <div className="mb-8 overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 text-left font-semibold border">R.br.</th>
            <th className="p-2 text-left font-semibold border">Šifra</th>
            <th className="p-2 text-left font-semibold border">Naziv proizvoda/usluge</th>
            <th className="p-2 text-right font-semibold border">Količina</th>
            <th className="p-2 text-right font-semibold border">Jed. cijena</th>
            <th className="p-2 text-right font-semibold border">Ukupno</th>
            <th className="p-2 text-right font-semibold border">Popust (%)</th>
            <th className="p-2 text-right font-semibold border">Iznos popusta</th>
            <th className="p-2 text-right font-semibold border">Iznos stavke</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2 border">1</td>
            <td className="p-2 border"></td>
            <td className="p-2 border">Oglas za posao - 15 dana</td>
            <td className="p-2 text-right border">1</td>
            <td className="p-2 text-right border">590,00 €</td>
            <td className="p-2 text-right border">590,00 €</td>
            <td className="p-2 text-right border">50</td>
            <td className="p-2 text-right border">295,00 €</td>
            <td className="p-2 text-right border">295,00 €</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-bold bg-gray-100">
            <td colSpan={5} className="p-2 text-right border">Ukupno:</td>
            <td className="p-2 text-right border">590,00 €</td>
            <td className="p-2 border"></td>
            <td className="p-2 text-right border">295,00 €</td>
            <td className="p-2 text-right border">295,00 €</td>
          </tr>
        </tfoot>
      </table>
      <div className="mt-4 text-right">
        <p className="font-bold text-sm">Iznos za uplatu: 295,00 €</p>
      </div>
    </div>
  );
};

export default InvoiceTable;