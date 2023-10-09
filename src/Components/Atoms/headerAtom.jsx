import React from 'react';
import '../../Styles/Atoms/headerStyle.css';

const HeaderAtom = ({ texto, año }) => {
  return (
    <div className="header">
      <p className="texto">{texto}</p>
      <p className="año">{año}</p>
    </div>
  );
};

export default HeaderAtom;
