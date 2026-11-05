import DashboardIcon from '@mui/icons-material/Dashboard';
import AddIcon from '@mui/icons-material/Add';
import ListAltIcon from '@mui/icons-material/ListAlt';
import type { IDrawerMenuItem, ISidenavProps } from './types';
import { useMemo } from 'react';


export function useSidenav(props: ISidenavProps){

    const { openDrawer, onDrawerClose } = props;

    const drawerMenu: IDrawerMenuItem[] = useMemo(()=>[
        { text: 'Dashboard', path:'/', icon: <DashboardIcon /> },
        { text: 'Create Product',  path:'/add-product', icon: <AddIcon /> },
        { text: 'Products List',  path:'/products-list', icon: <ListAltIcon /> }
    ],[]) ;

    return {
        drawerMenu
    }
}