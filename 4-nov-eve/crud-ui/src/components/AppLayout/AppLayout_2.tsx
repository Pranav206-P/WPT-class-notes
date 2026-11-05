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
            <Box className="bg-gray-100 p-8 min-h-screen">
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