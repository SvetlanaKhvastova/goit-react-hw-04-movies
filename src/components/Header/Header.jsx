import React from 'react';
import s from './Header.module.css';

const Header = ({ children }) => {
  return <nav className={s.header}>{children}</nav>;
};

export default Header;
