import { Box, Button, Typography } from '@mui/material';
import React from 'react';

/**
 * Props for the `DeleteComment` component.
 *
 * @interface
 * @property {string} comment - The comment text to be displayed.
 * @property {Function} onRemoveComment - Callback function to handle the deletion of a comment.
 */
interface Props {
    comment: string;
    onRemoveComment: () => void;
}

/**
 * A component that displays a single comment with a delete button.
 * When the delete button is clicked, it triggers a callback function to remove the comment.
 *
 * @component
 * @param {Props} props - The props for the component.
 * @returns {React.ReactElement} A box containing the comment and a delete button.
 *
 * @example
 * <DeleteComment
 *   comment="This is a sample comment."
 *   onRemoveComment={() => console.log('Comment deleted')}
 * />
 */
const DeleteComment: React.FC<Props> = ({ comment, onRemoveComment }) => {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: "auto",
            borderBottom: "1px solid #212121",
        }}>
            <Typography variant="h6" color="initial"
                sx={{
                    color: "#fff",
                    fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem" },
                    width: "55%",
                }}
            >
                {comment}
            </Typography>
            <Button
                variant="contained"
                color="error"
                type='button'
                onClick={onRemoveComment}
                sx={{
                    textTransform: "capitalize",
                    fontSize: { xs: "0.5rem", sm: "0.8rem", md: "1rem" },
                    my: "0.5em"
                }}
            >
                Delete comment
            </Button>
        </Box>
    );
};

export default DeleteComment;
