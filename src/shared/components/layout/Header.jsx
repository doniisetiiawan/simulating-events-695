import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.scss';

const Header = (props) => {
  const { url = 'http://localhost:3000' } = props;

  return (
    <header className={styles.Header}>
      <a href={url}>Todo List - Server Side Rendering</a>
    </header>
  );
};

Header.propTypes = {
  url: PropTypes.string,
};

export default Header;
