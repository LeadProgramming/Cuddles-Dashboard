import { Box } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createDialog, createListing, recordState } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsItemForm } from './ListingsItemForm';
export type defaultForm = {
    name: string;
    details: string;
    quantity: number;
    price: number;
    tags: string;
    img: string[];
};

export const ListingsCreate: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const open = useSelector((state: RootState) => state.listings.createMode);
    const listing = useSelector((state: RootState) => state.listings.listings);
    const [preview, setPreview] = useState<boolean>(false);
    const methods = useForm({
        defaultValues: {
            name: 'Kai',
            details:
                'The ultimate dancing teddy bear. He is the lead dancer for Bexo. He will hypotnize with his dance moves. ',
            quantity: 100,
            price: 20,
            tags: 'Dancing, Teddy Bear, Bexo',
            img: [],
        } as defaultForm,
    });
    const onSubmit = (values) => {
        // needed for building apis
        const formData = new FormData();
        const listingsLen = listing[listing.length - 1]?.id || 0;
        formData.append('id', listingsLen + 1);
        formData.append('name', values.name);
        formData.append('rating', (0).toFixed(1));
        formData.append('num_rating', (0).toString());
        formData.append('details', values.details);
        formData.append('quantity', values.quantity);
        formData.append('price', Number(values.price).toFixed(2));
        formData.append('tags', values.tags);
        formData.append(
            'img',
            values.img.map((itm) => URL.createObjectURL(itm)),
        );
        dispatch(recordState());
        dispatch(createListing(Array.from(formData)));
        handleClose();
    };
    function handleClose() {
        dispatch(createDialog());
    }
    function handlePreview() {
        setPreview(!preview);
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
                        <Button onClick={handlePreview} color="secondary">
                            Preview
                        </Button>
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
};
