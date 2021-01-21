import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    changeWallMode,
    createDialog,
    deleteDialog,
    redoListing,
    undoListing,
} from '../../redux/listings/listingsSlice';
// export type ListingsToolbarProps = {
//     sortBy: string[];
//     types: string[];
// };
export function ListingsToolbar() {
    /*
        default: list mode
        alternative: gallery
    */
    const dispatch = useDispatch();
    const mode = useSelector((state) => state.listings.wallMode);
    const activities = useSelector((state) => state.listings.activities);
    const undoed = useSelector((state) => state.listings.recall);

    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" align="left">
                    Listings
                </Typography>
                {activities.length > 0 && (
                    <IconButton color="inherit" aria-label="Undo">
                        <UndoIcon fontSize="large" onClick={dispatch.bind(null, undoListing())} />
                    </IconButton>
                )}
                {undoed.length > 0 && (
                    <IconButton color="inherit" aria-label="Redo">
                        <RedoIcon fontSize="large" onClick={dispatch.bind(null, redoListing())} />
                    </IconButton>
                )}
                <IconButton color="inherit" aria-label="layout">
                    {mode ? (
                        <AppsIcon fontSize="large" onClick={dispatch.bind(null, changeWallMode())} />
                    ) : (
                        <ListIcon fontSize="large" onClick={dispatch.bind(null, changeWallMode())} />
                    )}
                </IconButton>
                <IconButton color="inherit" aria-label="New Listing">
                    <AddIcon fontSize="large" onClick={dispatch.bind(null, createDialog())} />
                </IconButton>
                <IconButton color="inherit" aria-label="Delete Listing">
                    <DeleteIcon fontSize="large" onClick={dispatch.bind(null, deleteDialog())} />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
