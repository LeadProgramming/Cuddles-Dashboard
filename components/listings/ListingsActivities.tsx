import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actDialog, redoListing, undoListing } from '../../redux/listings/listingsSlice';
type openState = {
    actMode: boolean;
};
export const ListingsActivities: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: openState) => state.listings.actMode);
    const activities = useSelector((state) => state.listings.activities);
    function handleClose() {
        dispatch(actDialog());
    }
    function handleUndo() {
        dispatch(undoListing());
    }
    function handleRedo() {
        dispatch(redoListing());
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Create a Listing">
            <DialogTitle id="">Recent Activities</DialogTitle>
            <DialogContent>
                {/* {activities.map((act) => {
                    // return <DialogContentText key={}>act</DialogContentText>;
                })} */}
            </DialogContent>
            {/* <DialogActions>
                <Button onClick={handleClose} color="default">
                    Cancel
                </Button>
                <Button onClick={handleUndo} color="default">
                    Undo
                </Button>
                <Button onClick={handleRedo}>Redo</Button>
            </DialogActions> */}
        </Dialog>
    );
};
