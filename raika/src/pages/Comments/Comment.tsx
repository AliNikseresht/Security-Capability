import { useEffect, useState } from 'react';
import CommentForm from '../../components/comment/CommentForm';
import CommentList from '../../components/comment/CommentList';
import { Box, Container } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * Type definition for individual comments.
 * 
 * @interface
 * @property {number} id - Unique identifier for the comment.
 * @property {string} text - The content of the comment.
 */
interface CommentType {
    id: number;
    text: string;
}

/**
 * A container component that manages a list of comments. It handles adding new comments,
 * removing existing ones, and persisting comments to localStorage. It also imposes a rate limit
 * on how frequently comments can be added to prevent spam.
 *
 * @returns {React.ReactElement} The rendered comment section with form and list.
 * 
 * @example
 * return <Comment />
 */
const Comment = () => {
    // State to store the list of comments. Initializes from localStorage or defaults to an empty array.
    const [comments, setComments] = useState<CommentType[]>(() => {
        const savedComments = localStorage.getItem('comments');
        return savedComments ? JSON.parse(savedComments) : [];
    });

    // State to store the timestamp of the last comment to enforce rate limiting.
    const [lastCommentTime, setLastCommentTime] = useState<number | null>(() => {
        return parseInt(localStorage.getItem('lastCommentTime') || '0');
    });

    // Effect to persist comments to localStorage whenever the comments array changes.
    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);


    /**
     * Handles adding a new comment. Enforces a rate limit before allowing a new comment to be added.
     * 
     * @param {string} commentText - The text of the new comment to add.
     */
    const onAddComment = (commentText: string) => {
        const now = new Date().getTime();
        const limit = 7 * 1000; // 7 seconds
        if (lastCommentTime && now - lastCommentTime < limit) {
            toast.warn(`Please wait ${limit / 1000} seconds before posting another comment.`);
            return;
        }

        const newComment = { id: Date.now(), text: commentText };
        setComments([...comments, newComment]);
        setLastCommentTime(now);
        localStorage.setItem('lastCommentTime', now.toString());
    };

    /**
     * Handles the removal of a comment by its ID.
     * 
     * @param {number} commentId - The ID of the comment to remove.
     */
    const onRemoveComment = (commentId: number) => {
        const updatedComments = comments.filter(comment => comment.id !== commentId);
        setComments(updatedComments);
        localStorage.setItem('comments', JSON.stringify(updatedComments));
    };

    return (
        <Container>
            <ToastContainer position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover />
            <Box sx={{
                display: 'flex',
                flexDirection: "column",
                alignItems: 'center',
                width: "100%",
                height: '100vh'
            }}>
                <CommentForm onAddComment={onAddComment} />
                <CommentList comments={comments} onRemoveComment={onRemoveComment} />
            </Box>
        </Container>
    );
};

export default Comment;
