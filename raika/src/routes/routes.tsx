import CSRFTokenDemo from "../pages/CSRF/CSRFTokenDemo";
import Comment from "../pages/Comments/Comment";

export const mainRoutes = [
    {
        path: '/csrf',
        element: <CSRFTokenDemo />,
        title: 'Main',
    },
    {
        path: '/',
        element: <Comment />,
        title: 'UserComments',
    },

];

