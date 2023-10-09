import React from 'react';
import ContainerTemplate from './Template/containerTemplate';
import ContactMolecule from './Molecules/contactMolecule';

const App = () => {
    const links = [
        {
          href: 'mailto: luisalbagoz@gmail.com',
          text: 'E mail: luisalbagoz@gmail.com',
        },
        {  
          href: 'https://www.ejemplo2.com',
          text: 'Enlace 2',
        },
      ];
      //console.log(textLink.links)
  return (
    <div>
        <ContactMolecule links={links} />
        <ContainerTemplate />
    </div>
  );
};

export default App;
