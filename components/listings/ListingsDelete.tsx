import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { deleteDialog, recordState, recycleListing } from '../../redux/listings/listingsSlice';
import { listing } from '../../redux/listings/listingsTypes';
import { RootState } from '../../redux/store';
export type ListingsDeleteProp = {
    sbOpen: boolean;
    sbChecked: listing[];
    children: React.ReactNode;
};
export const ListingsDelete: React.FunctionComponent = ({ sbOpen, sbChecked }: ListingsDeleteProp) => {
    const listings = useSelector((state: RootState) => sbChecked || state.listings.listings);
    const open = useSelector((state: RootState) => sbOpen || state.listings.deleteMode);
    const dispatch = useDispatch();
    function handleClose() {
        dispatch(deleteDialog());
    }
    function handleDelete() {
        dispatch(recordState());
        dispatch(recycleListing());
    }
    function Deletable() {
        // stopped here.
        return (
            <>
                <DialogTitle id="deletable">Delete Listing(s).</DialogTitle>
                <DialogContent>
                    <DialogContentText>Warning: Deleting listing(s) will be irreversible!</DialogContentText>
                    <DialogContentText>
                        Deleting:{' '}
                        {listings.map((i) => {
                            if (i.checked) {
                                return (
                                    <Typography key={i.name}>
                                        SKU: {i.id} Name: {i.name}{' '}
                                    </Typography>
                                );
                            }
                        })}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="default">
                        Cancel
                    </Button>
                    <Button onClick={handleDelete} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </>
        );
    }
    function UnDeletable() {
        return (
            <>
                <DialogTitle id="undeletable">Unable to delete.</DialogTitle>
                <DialogContent>
                    <DialogContentText>Select a listing to delete.</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="default">
                        Cancel
                    </Button>
                </DialogActions>
            </>
        );
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Delete a Listing">
            {listings.filter((i) => i.checked).length ? <Deletable /> : <UnDeletable />}
        </Dialog>
    );
};
