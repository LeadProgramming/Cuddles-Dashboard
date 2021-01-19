import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import DeleteIcon from '@material-ui/icons/Delete';
import HistoryIcon from '@material-ui/icons/History';
import ListIcon from '@material-ui/icons/List';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { changeListingMode, createListing, deleteListing } from '../../redux/listings/listingsSlice';
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
    const mode = useSelector((state) => state.listings.listingMode);
    function handleMode() {
        dispatch(changeListingMode());
    }
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Typography variant="h6" align="left">
                    Listings
                </Typography>
                <IconButton color="inherit" aria-label="layout">
                    {mode ? (
                        <AppsIcon fontSize="large" onClick={handleMode} />
                    ) : (
                        <ListIcon fontSize="large" onClick={handleMode} />
                    )}
                </IconButton>
                <IconButton color="inherit" aria-label="New Listing">
                    <AddIcon fontSize="large" onClick={dispatch.bind(null, createListing())} />
                </IconButton>
                <IconButton color="inherit" aria-label="Delete Listing">
                    <DeleteIcon fontSize="large" onClick={dispatch.bind(null, deleteListing())} />
                </IconButton>
                <IconButton color="inherit" aria-label="History">
                    <HistoryIcon fontSize="large" />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
