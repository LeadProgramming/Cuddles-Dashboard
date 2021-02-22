import { Grid, Hidden, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { createDialog, createListing, recordState } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsItemForm } from './ListingsItemForm';
import { ListingsPreview } from './ListingsPreview';
type defaultForm = {
    img: string[];
    name: string;
    details: string;
    quantity: number;
    price: number;
    tags: string;
};
export type ListingsCreateProps = {
    dfVal: defaultForm;
    isOpen: boolean;
    isPreview: boolean;
    children: React.ReactNode;
};
const useStyles = makeStyles((theme) => ({
    exit: {
        position: 'fixed',
        top: '5px',
        left: '10px',
    },
    preview: {},
}));
export const ListingsCreate: React.FunctionComponent = ({ dfVal, isOpen }: ListingsCreateProps) => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles(theme);
    const open = useSelector((state: RootState) => state.listings.createMode);
    const listing = useSelector((state: RootState) => state.listings.listings);
    const [preview, setPreview] = useState<boolean>(true);
    const methods = useForm({
        defaultValues: dfVal,
    });
    const onSubmit = (values) => {
        if (!values.img.length) {
            methods.setError('img', {
                type: 'manual',
                message: 'Missing Image(s)',
            });
        } else {
            // needed for building apis
            const formData = new FormData();
            const listingsLen = Number(listing[listing.length - 1]?.id) || 0;
            formData.append('id', String(listingsLen + 1));
            formData.append('name', values.name);
            formData.append('rating', (0).toFixed(1));
            formData.append('num_rating', (0).toString());
            formData.append('details', values.details);
            formData.append('quantity', values.quantity);
            formData.append('price', Number(values.price).toFixed(2));
            formData.append('tags', values.tags);
            formData.append(
                'img',
                values.img.map((itm) => itm),
            );
            dispatch(recordState());
            dispatch(createListing(Array.from(formData)));
            handleClose();
        }
    };
    function handleClose() {
        dispatch(createDialog());
    }
    function handlePreview() {
        setPreview(!preview);
    }
    const { control } = methods;
    return (
        <>
            <Dialog open={open || isOpen} onClose={handleClose} aria-labelledby="Create a Listing" fullScreen>
                <IconButton color="secondary" onClick={handleClose} className={classes.exit}>
                    <ExitToAppIcon fontSize="large" />
                </IconButton>
                <FormProvider {...methods}>
                    <Grid container justify="center" spacing={1}>
                        <Hidden smDown={true}>
                            <Grid
                                container
                                item
                                md={8}
                                justify="center"
                                alignContent="center"
                                className={classes.preview}
                            >
                                {preview && <ListingsPreview {...({ control } as unknown)} />}
                            </Grid>
                        </Hidden>
                        <Grid item md={4}>
                            <form onSubmit={methods.handleSubmit(onSubmit)}>
                                <DialogTitle>Create Listing</DialogTitle>
                                <DialogContent>
                                    <ListingsItemForm />
                                </DialogContent>
                                <DialogActions>
                                    {/* <Button onClick={handlePreview} color="secondary">
                                        Preview
                                    </Button> */}
                                    <Button onClick={handleClose} color="default">
                                        Cancel
                                    </Button>
                                    <Button color="primary" type="submit" variant="contained">
                                        Add
                                    </Button>
                                </DialogActions>
                            </form>
                        </Grid>
                    </Grid>
                </FormProvider>
            </Dialog>
        </>
    );
};
