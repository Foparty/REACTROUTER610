import React from 'react';
import styles from './Careers.module.css';
import { useLoaderData, Link } from 'react-router-dom';
import { careers } from '../../../public/data/data.js';

const Careers = () => {
    const career = useLoaderData();
    return (
        <div className={styles.careers}>
            {career.map((item) => (
                <Link to={item.id.toString()} key={item.id}>
                    <p>{item.title}</p>
                    <p>{item.location}</p>
                </Link>
            ))}
        </div>
    );
};
export default Careers;

export const careersLoader = () => {
    const response = careers;

    return response;
};
