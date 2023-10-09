import React from 'react';
import '../../Styles/Templates/containerStyle.css';
import HeaderAtom from '../Atoms/headerAtom';
import YourNameAtom from '../Atoms/yourNamerAtom';

const ContainerTemplate = () => {
  return (
    <div className="container">
        <HeaderAtom texto="Resume CV" año="2023" />
        <YourNameAtom children="Luis Alberto Batalla Gonzàlez" />
    </div>
  );
};

export default ContainerTemplate;
