import React from 'react';
import styles from './Careers.module.css';
import { useLoaderData, Link } from 'react-router-dom';

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

export const careersLoader = async () => {
    const response = await fetch(
        'https://reactrouter-test.netlify.app/data/data.json/careers'
    );

    return response.json();
};
