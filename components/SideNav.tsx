import Collapse from '@material-ui/core/Collapse';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';

// import { makeStyles } from '@material-ui/core/styles';
// import { ReactComponent as Logo } from '../teddyLogo2.svg';
// import { NavBtn, NavBtnProps } from './NavBtn';
const useStyles = makeStyles(() =>
    createStyles({
        // drawer: {
        //      width: 200,
        // },
        drawerPaper: {
            width: 200,
        },
    }),
);
type NavNames = {
    name: string;
    subnames?: string[];
};
export type SideNavProps = {
    navNames: NavNames[];
};

export function SideNav({ navNames }: SideNavProps): React.ReactNode {
    const classes = useStyles();
    const [open, setOpen] = useState<boolean[]>(navNames.map(() => false));
    const handleOpen = (i: number) => {
        if ('subnames' in navNames[i]) {
            open[i] = !open[i];
            setOpen([...open]);
        }
    };
    return (
        <Drawer
            variant="permanent"
            anchor="left"
            // className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <List>
                {navNames.map((itm: NavNames, idx: number) => {
                    return (
                        <>
                            <ListItem button onClick={handleOpen.bind(null, idx)} key={itm.name}>
                                {/* <ListItemIcon>
                            </ListItemIcon> */}
                                <ListItemText primary={itm.name} />
                            </ListItem>
                            <Collapse in={open[idx]} timeout="auto" unmountOnExit>
                                <List disablePadding>
                                    {itm.subnames &&
                                        itm.subnames.map((sub) => {
                                            return (
                                                <ListItem button key={sub}>
                                                    <ListItemText primary={sub} />
                                                </ListItem>
                                            );
                                        })}
                                </List>
                            </Collapse>
                        </>
                    );
                })}
            </List>
        </Drawer>
    );
}
