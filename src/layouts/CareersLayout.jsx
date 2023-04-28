import React from 'react';
import styles from './CareersLayout.module.css';
import { Outlet } from 'react-router-dom';

const CareersLayout = () => {
    return (
        <div className={styles.layout}>
            <h2>Careers</h2>
            <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at
        doloremque dolorum eligendi eum, impedit laboriosam, minus
        necessitatibus nisi nostrum obcaecati odit quaerat quisquam ratione
        repudiandae sapiente ullam veritatis vitae!
            </p>

            <Outlet />
        </div>
    );
};
export default CareersLayout;
