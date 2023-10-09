import React from 'react';
import '../../Styles/Atoms/linkStyle.css';

const LinkAtom = ({ href, text }) => {
  return <a href={href} className="link">{text}</a>;
};

export default LinkAtom;
