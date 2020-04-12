import React from 'react';
import propTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ message }) => {
  return (
    <div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
