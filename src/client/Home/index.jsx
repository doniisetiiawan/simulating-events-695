import React from 'react';
import PropTypes from 'prop-types';
import styles from './Home.scss';

const index = props => (
  <h1 className={styles.Home}>Hello {props.name || 'World'}</h1>
);

index.propTypes = {
  name: PropTypes.string,
};

export default index;
