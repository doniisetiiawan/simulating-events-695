import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './About.scss';

const index = ({ isMobile }) => (
  <h1 className={styles.About}>About - {isMobile ? 'mobile' : 'desktop'}</h1>
);

index.propTypes = {
  isMobile: PropTypes.bool,
};

export default connect(({ device }) => ({
  isMobile: device.isMobile,
}))(index);
