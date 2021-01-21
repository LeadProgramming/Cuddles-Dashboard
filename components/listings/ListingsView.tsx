import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';

import { viewDialog } from '../../redux/listings/listingsSlice';
// export type ListingsViewProps = {
//     isOpen: boolean;
// };
export function ListingsView(): React.ReactNode {
    const open = useSelector((state) => state.listings.viewMode);
    const item = useSelector((state) => state.listings.curr);
    const dispatch = useDispatch();
    function handleClose() {
        dispatch(viewDialog());
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="View a Listing">
            <DialogTitle id="">{item.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>SKU#:{item.id}</DialogContentText>
                <img src={item.img} alt={'listing pictures'} width={350} />
            </DialogContent>
        </Dialog>
    );
}
