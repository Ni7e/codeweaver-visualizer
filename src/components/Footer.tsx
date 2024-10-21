import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="mt-8 text-xs text-gray-600">
      <hr className="my-4 border-gray-300" />
      <div className="text-center space-y-0.5">
        <p>Raditi, obrt za poslovne usluge, vl. Hrvoje Brkić</p>
        <p>Božidara Magovca 9, 10000 Zagreb, Hrvatska • OIB: 58282261804</p>
        <p>Banka: Erste&Steiermarkische Bank d.d. • SWIFT: ESBCHR22 • IBAN: HR5724020061140441485</p>
      </div>
    </div>
  );
};

export default Footer;