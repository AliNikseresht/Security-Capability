import React, { useState } from 'react';
import { createCsrfToken, verifyCsrfToken } from '../services/CSRFTokenService';
import styles from './CSRFTokenDemo.module.css';

/**
 * A demonstration component for showcasing CSRF protection in a React application.
 * It simulates the process of creating a CSRF token, submitting a form with that token,
 * and verifying the token on the server-side (simulated here for demonstration).
 *
 * The `createCsrfToken` and `verifyCsrfToken` functions are imported from a service
 * module and are not defined within this component.
 */
const CSRFTokenDemo = () => {
    // State for storing user input, specifically the name entered in the form.
    // The `data` state is expected to be a string.
    const [data, setData] = useState('');

    // A CSRF token is created when the component mounts and is stored as a constant.
    // The token is not reactive to state changes.
    const csrfToken = createCsrfToken();

    /**
     * Handles the form submission event. Verifies the CSRF token and logs the result.
     * If the verification is successful, it logs the successful submission along with the data.
     * In case of failure, it logs an error. In a real application, upon successful verification,
     * this would involve sending a request to the server with the CSRF token and form data.
     * The server would then verify the token's validity.
     * 
     * @param event - The form submission event of type `React.FormEvent`.
     */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (verifyCsrfToken(csrfToken)) {
            console.log('The request was successfully processed.', data);
            // Logic for sending data to the "server" would be implemented here.
        } else {
            console.error('CSRF token error!');
            // Here you could implement logic to handle the error, such as displaying a message to the user.
        }
    };

    return (
        <div className={styles.container}>
            <h4 className={styles.header}>Profile Form</h4>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                    <label htmlFor="dataInput" className={styles.label}>Name:</label>
                    <input
                        id="dataInput"
                        type="text"
                        value={data}
                        className={styles.input}
                        onChange={(e) => setData(e.target.value)}
                    />
                </div>
                <button type="submit" className={styles.button}>Send</button>
            </form>
        </div>
    );
};

export default CSRFTokenDemo;
