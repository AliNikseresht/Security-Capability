import React from "react";
import { Box } from "@mui/material";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <Box sx={{
            display: "flex", justifyContent: "center", height: "100vh"
        }}>
            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "100%" }}>
                {children}
            </Box>
        </Box>
    );
};

export default Layout;
