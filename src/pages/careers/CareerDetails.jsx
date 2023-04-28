import React from 'react';
import styles from './CareerDetails.module.css';
import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetails = () => {
    const { id } = useParams();
    const career = useLoaderData();
    return (
        <div className={styles.container}>
            <h2>Career detail for: {career.title}</h2>
        </div>
    );
};
export default CareerDetails;

//loader function

export const careerDetailsLoader = async ({ params }) => {
    const { id } = params;
    const res = await fetch('https://foparty.github.io/' + id);
    return res.json();
};
