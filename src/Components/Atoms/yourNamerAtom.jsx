import React from 'react';
import '../../Styles/Atoms/yourNameStyle.css';

const YourNameAtom = ({ children }) => {
  return <h1 className="your-name">{children}</h1>;
};

export default YourNameAtom;
