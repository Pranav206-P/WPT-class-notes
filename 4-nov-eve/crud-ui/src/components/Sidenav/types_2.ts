export interface ISidenavProps {
    openDrawer: boolean;
    onDrawerClose: () => void
}

export interface IDrawerMenuItem {
    text: string;
    icon: React.JSX.Element;
    path: string;
}
