import React, { useState } from 'react';
import { Box, Button, Modal, Typography } from '@mui/material';
import LoginModal from './LoginModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Interface defining the props for the CommentForm component.
 *
 * @interface
 * @property {Function} onAddComment - Callback function to handle the addition of a new comment.
 */
interface Props {
    onAddComment: (comment: string) => void;
}

/**
 * Renders a form for adding a new comment. This component integrates a modal for user login,
 * handling comment submissions both for logged-in and anonymous users. It utilizes local storage
 * to simulate user authentication state.
 * 
 * IMPORTANT: For production environments, it's crucial to handle authentication and data persistence
 * through a secure backend server. The use of local storage for authentication status is only for
 * demonstration purposes and lacks security for real applications.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {React.ReactElement} The CommentForm component.
 *
 * @example
 * <CommentForm
 *   onAddComment={(comment) => console.log(`New comment added: ${comment}`)}
 * />
 */
const CommentForm: React.FC<Props> = ({ onAddComment }) => {
    const [comment, setComment] = useState('');
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        const loggedIn = localStorage.getItem('isLoggedIn');
        return loggedIn === 'true';
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!isLoggedIn) {
            // If the user is not logged in, the login modal is displayed
            setLoginModalOpen(true);
        } else {
            // If the user is logged in, the comment will be sent
            onAddComment(comment);
            setComment('');
        }
    };

    const handleCloseLoginModal = () => {
        setLoginModalOpen(false);
    };

    const handleUserLogin = (username: string, password: string) => {
        if (username === 'username' && password === 'password') {
            localStorage.setItem('isLoggedIn', 'true'); // Changes the login status to true
            setIsLoggedIn(true);// Updates the isLoggedIn status in state
            toast.success('You have successfully logged in.', {
                onClose: () => {
                    setLoginModalOpen(false); // Closes the modal after toast disappears
                    onAddComment(comment); // Sends the comment
                    setComment(''); // Clears the comment field
                }
            });
        } else {
            toast.error('The username or password is incorrect.');
        }
    };

    return (
        <>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& > :not(style)': { m: 1 },
                    width: "100%",
                }}
                onSubmit={handleSubmit}
            >
                <Box sx={{
                    width: { xs: "85%", sm: "90%", md: "65%" },
                    display: 'flex',
                    flexDirection: "column",
                }}>
                    <Typography variant="h5" color="initial"
                        sx={{
                            color: "#fff",
                            fontWeight: "600",
                            fontFamily: "inherit",
                            alignSelf: "flex-start",
                            fontSize: { xs: "0.8rem", sm: "1rem", md: "1rem", lg: "1.3rem" }
                        }}
                    >
                        Add a new comment
                    </Typography>
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        required
                        placeholder='Write a new comment'
                        style={{
                            width: '96.5%',
                            height: '130px',
                            padding: '16px',
                            resize: 'none',
                            outline: 'none',
                            border: '1px solid #10131f',
                            backgroundColor: '#10131f',
                            borderRadius: '1.2rem',
                            color: '#fff',
                            fontFamily: 'cursive',
                            margin: '1.5em 0em',
                        }}
                    />
                    <Button sx={{
                        fontWeight: "600",
                        textTransform: "capitalize",
                        alignSelf: "flex-end",
                        fontSize: { xs: "0.7rem", sm: "1rem", md: "1rem", }
                    }}
                        variant="contained"
                        color="primary"
                        type='submit'>
                        Post Comment
                    </Button>
                </Box>
            </Box >
            <Modal
                open={isLoginModalOpen}
                onClose={handleCloseLoginModal}
                aria-labelledby="login-modal-title"
            >
                <LoginModal onClose={handleCloseLoginModal} onLogin={handleUserLogin} />
            </Modal>
        </>
    );
};

export default CommentForm;
