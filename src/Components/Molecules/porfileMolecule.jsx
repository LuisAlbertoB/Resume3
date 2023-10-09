import React from 'react';
import PhotoAtom from './PhotoAtom';
import YourNameAtom from './YourNameAtom';
import TxtType1Atom from './TxtType1Atom';
import './ProfileMolecule.css';

const ProfileMolecule = ({ photoSrc, name, description }) => {
  return (
    <div className="profile-container">
      <PhotoAtom src={photoSrc} alt="Profile Photo" />
      <YourNameAtom>{name}</YourNameAtom>
      <TxtType1Atom>{description}</TxtType1Atom>
    </div>
  );
};

export default ProfileMolecule;
