import React from 'react';
import PropTypes from 'prop-types';
import s from './Navigation.module.css';
import { v4 as id } from 'uuid';
import { NavLink } from 'react-router-dom';

const Navigation = ({ links }) => {
  return (
    <>
      <ul className={s.nav}>
        {links.map(link => {
          // console.log(link);
          const { name, props } = link;
          return (
            <li key={id()}>
              <NavLink
                {...props}
                className={s.nav__list}
                activeClassName={s.active}
              >
                {name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </>
  );
};

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      props: PropTypes.shape({
        name: PropTypes.string,
        path: PropTypes.string,
      }),
    }),
  ),
};

export default Navigation;
