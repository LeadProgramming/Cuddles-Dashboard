import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { modifyListing, updateDialog } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsItemForm } from './ListingsItemForm';

export const ListingsUpdate: React.FunctionComponent = () => {
    const open = useSelector((state: RootState) => state.listings.updateMode);
    const currRow = useSelector((state: RootState) => state.listings.curr);
    const dispatch = useDispatch();
    const methods = useForm();
    const onSubmit = (values) => {
        // needed for building apis
        const formData = new FormData();
        formData.append('id', currRow.id);
        formData.append('num_rating', currRow.num_rating);
        formData.append('rating', currRow.rating);
        formData.append('name', values.name);
        formData.append('details', values.details);
        formData.append('quantity', values.quantity);
        formData.append('price', Number(values.price).toFixed(2));
        formData.append('tags', values.tags);
        formData.append(
            'img',
            values.img.map((itm) => URL.createObjectURL(itm)),
        );
        dispatch(modifyListing(Array.from(formData)));
        handleClose();
    };
    function handleClose() {
        dispatch(updateDialog());
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Create a Listing">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <DialogTitle id="">Update Listing</DialogTitle>
                    <DialogContent>
                        <ListingsItemForm {...currRow} />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="default">
                            Cancel
                        </Button>
                        <Button type="submit" color="primary" variant="contained">
                            Update
                        </Button>
                    </DialogActions>
                </form>
            </FormProvider>
        </Dialog>
    );
};
