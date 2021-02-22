import { Drawer, Grid, List, ListItem, ListItemText } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

export type ListingsToolbarProps = {
    children: React.ReactNode;
};
export const MainToolbar: React.FunctionComponent = ({ children }: ListingsToolbarProps) => {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const itm = [
        { name: 'home' },
        { name: 'metrics' },
        { name: 'orders' },
        { name: 'listings' },
        { name: 'customers' },
        { name: 'email' },
    ];
    return (
        <>
            <AppBar position="sticky" color="primary">
                <Toolbar component={Grid} container>
                    <Grid item xs={4} style={{ textAlign: 'left' }}>
                        <IconButton color="inherit" aria-label="DrawerToggler" onClick={setOpen.bind(null, !open)}>
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Grid>
                    {children}
                </Toolbar>
            </AppBar>
            <Drawer variant="temporary" anchor="left" open={open} onClose={setOpen.bind(null, !open)}>
                <List>
                    {itm.map((itm) => {
                        return (
                            <Link href={`/${itm.name}`} key={itm.name} prefetch={!process.env.STORYBOOK}>
                                <ListItem button key={itm.name}>
                                    <ListItemText primary={itm.name} />
                                </ListItem>
                            </Link>
                        );
                    })}
                </List>
            </Drawer>
        </>
    );
};
