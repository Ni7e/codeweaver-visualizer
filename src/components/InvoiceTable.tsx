import React from 'react';

const InvoiceTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full mb-6">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 text-left">R.br.</th>
            <th className="p-2 text-left">Šifra</th>
            <th className="p-2 text-left">Naziv proizvoda/usluge</th>
            <th className="p-2 text-right">Količina (kom)</th>
            <th className="p-2 text-right">Jedinična cijena</th>
            <th className="p-2 text-right">Ukupna cijena</th>
            <th className="p-2 text-right">Popust (%)</th>
            <th className="p-2 text-right">Iznos popusta</th>
            <th className="p-2 text-right">Iznos stavke</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-2">1</td>
            <td className="p-2"></td>
            <td className="p-2">Oglas za posao - 15 dana</td>
            <td className="p-2 text-right">1</td>
            <td className="p-2 text-right">590,00 €</td>
            <td className="p-2 text-right">590,00 €</td>
            <td className="p-2 text-right">50</td>
            <td className="p-2 text-right">295,00 €</td>
            <td className="p-2 text-right">295,00 €</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className="font-bold">
            <td colSpan={5} className="p-2 text-right">Ukupno:</td>
            <td className="p-2 text-right">590,00 €</td>
            <td colSpan={2}></td>
            <td className="p-2 text-right">295,00 €</td>
          </tr>
        </tfoot>
      </table>
      <div className="text-right font-bold mb-6">
        <p>Iznos za uplatu: 295,00 €</p>
      </div>
    </div>
  );
};

export default InvoiceTable;