import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// eslint-disable-next-line import/no-unresolved
import DayNightSwitcher from '@bit/navdeepsingh.react-components.ui.day-night-switcher';

const Header = ({ mode, themeSwitcher }) => (
  <nav aria-label="Primary">
    <ul className="links">
      <li>
        <Link to="/">About</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      <li>
        <Link to="/uses">Uses</Link>
      </li>
      <li>
        <DayNightSwitcher mode={mode} themeSwitcher={themeSwitcher} />
      </li>
    </ul>
  </nav>
);

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  themeSwitcher: PropTypes.func.isRequired,
};

export default Header;
