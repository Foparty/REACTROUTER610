import React from 'react';
import styles from './HelpLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
    return (
        <div className={styles.layout}>
            <h2>Web Help</h2>
            <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
        rerum.
            </p>
            <nav className={styles.nav}>
                <NavLink to={'faq'}>View FAQ</NavLink>
                <NavLink to={'contact'}>View Contact</NavLink>
            </nav>
            <Outlet />
        </div>
    );
};
export default HelpLayout;
