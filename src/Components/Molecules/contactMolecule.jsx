import React from 'react';
import LinkAtom from '../Atoms/linkAtom';
import '../../Styles/Molecules/contactStyle.css';

const ContactMolecule = ({ links }) => {
  return (
    <div className="contact-container">
      {links.map((link, index) => (
        <LinkAtom key={index} text={link.text} href={link.href}>
          
        </LinkAtom>
      ))}
    </div>
  );
};

export default ContactMolecule;
