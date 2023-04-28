import React from 'react';
import styles from './NotFound.module.css';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className={styles.notfound}>
      oh... you got lost... <Link to={'/'}>Back Home</Link>
        </div>
    );
};
export default NotFound;
