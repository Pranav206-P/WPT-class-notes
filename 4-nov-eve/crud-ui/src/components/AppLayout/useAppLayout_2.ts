import { useCallback, useState } from "react";

export function useAppLayout(){

    const [openDrawer, setOpenDrawer] = useState(false);

    const handleOpenDrawer = useCallback(() => {
        setOpenDrawer(true)
    },[]) 

    const handleCloseDrawer = useCallback(() => {
        setOpenDrawer(false);
    }, []) 

    return {
        openDrawer,
        handleOpenDrawer,
        handleCloseDrawer
    }
}