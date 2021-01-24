import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';

import { deleteDialog, recordState, recycleListing } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';

export const ListingsDelete: React.FunctionComponent = () => {
    const checked = useSelector((state: RootState) => state.listings.checked);
    const open = useSelector((state: RootState) => state.listings.deleteMode);
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
                        {checked.map((i) => (
                            <Typography key={i.name}>
                                SKU: {i.id} Name: {i.name}{' '}
                            </Typography>
                        ))}
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
        <Dialog open={open} onClose={handleClose} aria-labelledby="Create a Listing">
            {checked.length ? <Deletable /> : <UnDeletable />}
        </Dialog>
    );
};
