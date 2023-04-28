import React from 'react';
import styles from './CareerDetails.module.css';
import { useLoaderData, useParams } from 'react-router-dom';
import { careers } from '../../../public/data/data.js';

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

export const careerDetailsLoader = ({ params }) => {
    const { id } = params;
    const res = `${careers}/` + id;
    return res;
};
