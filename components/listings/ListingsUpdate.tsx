import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { modifyListing, updateListing } from '../../redux/listings/listingsSlice';
import { ListingsItemForm } from './ListingsItemForm';

export type ListingsUpdateProps = {
    isOpen: boolean;
};
export function ListingsUpdate(): React.ReactNode {
    const open = useSelector((state) => state.listings.updatingListing);
    const dispatch = useDispatch();
    const listing = useSelector((state) => state.listings.listings);
    const methods = useForm();
    const [picture, setPictures] = useState([]);
    const onSubmit = (values) => {
        // needed for building apis
        const formData = new FormData();
        const listingsLen = Number(listing[listing.length - 1].id);
        formData.append('id', listingsLen);
        formData.append('name', values.name);
        formData.append('details', values.details);
        formData.append('quantity', Number(values.quantity));
        formData.append('price', Number(values.price).toFixed(2));
        formData.append('tags', values.tags);
        formData.append(
            'img',
            picture.map((itm) => URL.createObjectURL(itm)),
        );
        dispatch(modifyListing(Array.from(formData)));
    };
    function handleClose() {
        dispatch(updateListing());
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Create a Listing">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <DialogTitle id="">Update Listing</DialogTitle>
                    <DialogContent>
                        <ListingsItemForm {...{ picture, setPictures }} />
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
}
