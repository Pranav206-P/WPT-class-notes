import { Sidenav } from "../Sidenav/Sidenav";
import { ApplicationTopBar } from "../ApplicationTopBar/ApplicationTopBar";
import { useAppLayout } from "./useAppLayout";
import { Box, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";
import { memo } from "react";

export const AppLayout = memo(() => {

    const {
        openDrawer,
        handleCloseDrawer,
        handleOpenDrawer
    } = useAppLayout();

    return (
        <>
            <ApplicationTopBar menuIconClickHandler={handleOpenDrawer} />
            <Sidenav openDrawer={openDrawer} onDrawerClose={handleCloseDrawer} />
            <Box sx={{ flexGrow: 1, p: 4 }}>
                {/* child component eg: Dashboard, Create product, product list
                
                    render the child passed from the Route component
                
                    react router dom has provided a component that is the placeholder of the child route 
                */}
                <Toolbar />
                <Outlet />

            </Box>
        </>
    )
}) 