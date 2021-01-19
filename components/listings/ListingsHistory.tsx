import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
export type ListingsHistoryProps = {
    isOpen: boolean;
};
export function ListingsHistory({ isOpen }: ListingsHistoryProps): React.ReactNode {
    const [open, setOpen] = useState(isOpen);
    function handleClose() {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Create a Listing">
            <DialogTitle id="">History</DialogTitle>
            <DialogContent>
                <DialogContentText>Show previous activities</DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="default">
                    Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                    Undo
                </Button>
            </DialogActions>
        </Dialog>
    );
}
