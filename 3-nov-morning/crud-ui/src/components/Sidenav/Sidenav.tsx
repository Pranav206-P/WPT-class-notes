import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import type { ISidenavProps } from "./types";
import { useSidenav } from "./useSidenav";
import { useNavigate } from "react-router-dom";
import { memo } from "react";

export const Sidenav = memo((props: ISidenavProps)=> {


    const { openDrawer, onDrawerClose } = props;

    const { drawerMenu } = useSidenav(props);

    const navigate = useNavigate();

    return (
        <Drawer open={openDrawer} onClose={onDrawerClose}>
            <Box sx={{ width: 250, overflow: 'auto', paddingTop: '60px' }}>
                <List>

                    {
                        drawerMenu.map((menuItem) => {
                            return (
                                <ListItem>
                                    <ListItemButton onClick={()=>{
                                        navigate(menuItem.path);
                                        onDrawerClose();
                                    }}>
                                        <ListItemIcon>
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