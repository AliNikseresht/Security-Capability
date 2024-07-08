import React, { useEffect, useState } from 'react';
import DeleteComment from './DeleteComment';
import { Box, Button, Typography } from '@mui/material';
import DOMPurify from 'dompurify';

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
 * Props for the CommentList component.
 * 
 * @interface
 * @property {CommentType[]} comments - Array of comment objects to display.
 * @property {(id: number) => void} onRemoveComment - Callback function to remove a comment by its id.
 */
interface Props {
    comments: CommentType[];
    onRemoveComment: (id: number) => void;
}

/**
 * Renders a list of comments with the ability to remove individual comments. It supports
 * pagination by limiting the number of visible comments and providing a "Load More" button
 * to display additional comments.
 *
 * Sanitizes comment text using DOMPurify to prevent XSS attacks.
 *
 * @component
 * @param {Props} props - The properties passed to the component.
 * @returns {React.ReactElement} The rendered list of comments with deletion and load more functionality.
 *
 * @example
 * <CommentList
 *   comments={[{ id: 1, text: "Sample comment" }]}
 *   onRemoveComment={(id) => console.log(`Remove comment with id: ${id}`)}
 * />
 */
const CommentList: React.FC<Props> = ({ comments, onRemoveComment }) => {
    const commentsPerPage = 3;
    const [visibleCount, setVisibleCount] = useState(commentsPerPage);

    // Reset visible count when comments array changes, e.g., when a comment is deleted.
    useEffect(() => {
        setVisibleCount(commentsPerPage);
    }, [comments]);

    return (
        <Box sx={{
            color: "#fff",
            width: { xs: "85%", sm: "90%", md: "80%", lg: "80%" },
            mt: "1em",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Typography variant="h5" color="initial"
                sx={{
                    color: "#fff",
                    fontWeight: "600",
                    fontFamily: "inherit",
                    alignSelf: "flex-start",
                    ml: { xs: "0", sm: "0", lg: "0.55em" }
                }}
            >
                Comments
            </Typography>
            <Box sx={{
                backgroundColor: "#10131f",
                color: "#fff",
                width: "96%",
                padding: "1em",
                borderRadius: "1em",
                mt: "2em",
            }}>
                {comments.slice(0, visibleCount).map((comment) => (
                    <DeleteComment
                        key={comment.id}
                        comment={DOMPurify.sanitize(comment.text)}
                        onRemoveComment={() => onRemoveComment(comment.id)}
                    />
                ))}
                {visibleCount < comments.length && (
                    <Button onClick={() => setVisibleCount(visibleCount + commentsPerPage)} sx={{ mt: 2 }}>
                        Load More
                    </Button>
                )}
            </Box>
        </Box>
    );
};
export default CommentList;
