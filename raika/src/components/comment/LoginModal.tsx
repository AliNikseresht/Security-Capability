import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Modal } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * Props for the `LoginModal` component.
 *
 * @interface
 * @property {Function} onClose - Callback function to close the modal.
 * @property {Function} onLogin - Callback function to handle the login process. Accepts username and password as arguments.
 */
interface LoginModalProps {
    onClose: () => void;
    onLogin: (username: string, password: string) => void;
}

/**
 * A modal component for user login.
 * Provides input fields for username and password and a submit button to perform login.
 * Upon submission, calls the `onLogin` function with username and password.
 *
 * @component
 * @param {LoginModalProps} props - The props for the component.
 * @returns {React.ReactElement} A modal with a form for login.
 *
 * @example
 * <LoginModal
 *   onClose={() => { console.log('Modal closed'); }}
 *   onLogin={(username, password) => { console.log(`Login for ${username}`); }}
 * />
 */
const LoginModal: React.FC<LoginModalProps> = ({ onClose, onLogin }) => {
    const [username, setUsername] = useState(''); // State for the username input
    const [password, setPassword] = useState(''); // State for the password input

    /**
 * Handles the form submission event.
 * Prevents the default form submission action and invokes the `onLogin` callback with username and password.
 *
 * @param {React.FormEvent} e - The form submission event.
 */
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Prevent default form submission
        onLogin(username, password); // Invoke the onLogin callback with username and password
    };

    return (
        <Modal
            open
            onClose={onClose}
            aria-labelledby="login-modal-title"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: '#fff',
                    p: "2em",
                    borderRadius: "1em",
                    mx: "2em"
                }}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography id="login-modal-title" variant="h6" component="h2">
                    Login
                </Typography>
                <TextField
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant="contained" sx={{ mr: 2 }}>
                    Login
                </Button>
                <Link style={{ color: "#000" }} to="/CSRF">Create account</Link>
            </Box>
        </Modal>
    );
};

export default LoginModal;
