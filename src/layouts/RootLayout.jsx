import React from 'react';
import styles from './RootLayout.module.css';
import { Link, NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <div>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <h1>
                        <Link to={'/'}>Alfonso</Link>
                    </h1>
                    <div className={styles.navigation}>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'about'}>About Us</NavLink>
                        <NavLink to={'help'}>Help</NavLink>
                        <NavLink to={'careers'}>Careers</NavLink>
                    </div>
                </nav>
            </header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </div>
    );
};
export default RootLayout;
