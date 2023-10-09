import React from 'react';
import '../../Styles/Atoms/photoStyle.css';

const PhotoAtom = ({ src, alt }) => {
  return <img src={src} alt={alt} className="photo" />;
};

export default PhotoAtom;
