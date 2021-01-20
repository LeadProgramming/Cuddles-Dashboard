import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createListing } from '../../redux/listings/listingsSlice';
import { ListingsItemForm } from './ListingsItemForm';
// export type ListingsCreateProps = {};
export function ListingsCreate(): React.ReactNode {
    const dispatch = useDispatch();
    const open = useSelector((state) => state.listings.creatingListing);
    const listing = useSelector((state) => state.listings.listings);
    const methods = useForm();
    const onSubmit = (values) => {
        // needed for building apis
        const formData = new FormData();
        const listingsLen = Number(listing[listing.length - 1]?.id) || 0;
        formData.append('id', listingsLen + 1);
        formData.append('name', values.name);
        formData.append('rating', (0).toFixed(1));
        formData.append('num_rating', Number(0));
        formData.append('details', values.details);
        formData.append('quantity', Number(values.quantity));
        formData.append('price', Number(values.price).toFixed(2));
        formData.append('tags', values.tags);
        formData.append(
            'img',
            values.img.map((itm) => URL.createObjectURL(itm)),
        );
        dispatch(createListing(Array.from(formData)));
    };
    function handleClose() {
        dispatch(createListing());
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Create a Listing">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <DialogTitle>Create Listing</DialogTitle>
                    <DialogContent>
                        <ListingsItemForm />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="default">
                            Cancel
                        </Button>
                        <Button color="primary" type="submit" variant="contained">
                            Add
                        </Button>
                    </DialogActions>
                </form>
            </FormProvider>
        </Dialog>
    );
}
