import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import type { ISidenavProps } from "./types";
import { useSidenav } from "./useSidenav";
import { useLocation, useNavigate } from "react-router-dom";
import { memo } from "react";

export const Sidenav = memo((props: ISidenavProps)=> {


    const { openDrawer, onDrawerClose } = props;

    const { drawerMenu } = useSidenav(props);

    const navigate = useNavigate();
    const location = useLocation();

    return (
        <Drawer open={openDrawer} onClose={onDrawerClose}>
            <Box className="w-64 pt-15 h-full bg-white overflow-auto">
                <List>

                    {
                        drawerMenu.map((menuItem) => {
                            return (
                                <ListItem>
                                    <ListItemButton
                                        className={location.pathname === menuItem.path ? "rounded-lg bg-indigo-600 text-white":"rounded-lg text-gray-600"}
                                        // selected={location.pathname === menuItem.path}
                                    onClick={()=>{
                                        navigate(menuItem.path);
                                        onDrawerClose();
                                    }}>
                                        <ListItemIcon className={location.pathname === menuItem.path ? "text-white" : "text-indigo-600"}>
                                            {menuItem.icon}
                                        </ListItemIcon>
                                        <ListItemText>{menuItem.text}</ListItemText>
                                    </ListItemButton>
                                </ListItem>
                            )
                        })
                    }

                </List>
            </Box>
        </Drawer>

    )
}) 