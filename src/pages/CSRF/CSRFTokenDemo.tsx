import React, { useState } from 'react';
import { createCsrfToken, verifyCsrfToken } from '../../services/CSRFTokenService';
import { Box, Button, Typography } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

/**
 * Demonstrates the implementation of CSRF (Cross-Site Request Forgery) protection in a React application.
 * This component showcases the process of generating a CSRF token, incorporating it within a form submission,
 * and subsequently verifying the token's validity to simulate server-side validation.
 *
 * Note: The `createCsrfToken` and `verifyCsrfToken` functions are placeholders for actual implementations
 * that should interact with a backend server. This example assumes these functions are imported from a
 * service module and are abstracted for demonstration purposes.
 *
 * IMPORTANT: For real-world applications, it's essential to implement CSRF protection on the server-side,
 * where the CSRF token is generated and validated against the user's session. This example serves as a
 * basic illustration and requires a backend implementation for full CSRF protection.
 *
 * @component
 * @example
 * return <CSRFTokenDemo />
 */
const CSRFTokenDemo = () => {
    // State for storing user input, specifically the text entered in the textarea.
    const [data, setData] = useState('');

    // CSRF token is generated upon component mount. In a real application, this should be received from the server.
    const csrfToken = createCsrfToken();

    /**
     * Handles form submission by verifying the CSRF token.
     * Simulates sending data to a server after successful CSRF verification.
     * Displays toast notifications based on the verification outcome.
     *
     * @param event - The form submission event.
     */
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Verify the CSRF token. Replace with server-side validation in a real application.
        if (verifyCsrfToken(csrfToken)) {
            toast.success('The request was successfully processed.');
            // Placeholder for server request logic. In practice, submit `data` along with `csrfToken` to your server.
        } else {
            toast.error('CSRF token error!');
            // Handle CSRF token validation failure. Typically involves logging and user notification.
        }
    };

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2em',
                borderRadius: '1em',
                background: '#10131f',
                color: '#fff',
            }}
        >
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <Typography
                gutterBottom
                sx={{ fontSize: { xs: "0.6rem", sm: "1rem", md: "1.3rem", lg: "1.6rem" } }}
            >
                Example implementation of CSRF protection
            </Typography>
            <form onSubmit={handleSubmit}
                style={{
                    width: '100%',
                    maxWidth: '400px',
                    marginTop: "2em",
                    marginBottom: "2em"
                }}>
                <Typography
                    sx={{
                        display: 'block',
                        marginBottom: '0.5rem',
                        color: '#fff',
                        textAlign: 'left',
                        fontSize: { xs: "0.6rem", sm: "1rem", md: "1.3rem", lg: "1.6rem" }
                    }}
                >
                    Name:
                </Typography>
                <textarea
                    value={data}
                    onChange={(e) => setData(e.target.value)}
                    required
                    placeholder='Write a new text'
                    style={{
                        width: '94%',
                        padding: '16px',
                        resize: 'none',
                        outline: 'none',
                        border: '1px solid #10131f',
                        backgroundColor: '#212121',
                        borderRadius: '1.2rem',
                        color: '#fff',
                        fontFamily: 'cursive',
                        margin: '2em 0em'
                    }}
                />
                <Button
                    variant="contained"
                    color="primary"
                    type='submit'
                    sx={{
                        width: '30%',
                        padding: '0.6rem 0em',
                        textTransform: "capitalize",
                        mt: "1.5em",
                        fontSize: { xs: "0.6rem", sm: "1rem", md: "1.3rem", lg: "1rem" }
                    }}>
                    Send
                </Button>
            </form>
        </Box>
    );
};

export default CSRFTokenDemo;
