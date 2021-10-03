import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';
import Header from './Header';
import ProfilePicChanger from './ProfilePicChanger';
import '../sass/styles.scss';

deckDeckGoHighlightElement();

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('bright');
    } else {
      setTheme('dark');
    }
  };

  const bodyClass = classNames({
    container: true,
    bright: theme === 'bright',
  });

  return (
    <div className={bodyClass}>
      <main>
        <div className="body">{children}</div>
      </main>
      <Header mode={theme} themeSwitcher={toggleTheme} />
      <aside>
        <ProfilePicChanger />
        <a href="mailto:navdeep.er@gmail.com" className="contact">
          navdeep.er@gmail.com
        </a>
      </aside>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default Layout;
