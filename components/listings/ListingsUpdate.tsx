import { IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { modifyListing, recordState, updateDialog } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsItemForm } from './ListingsItemForm';
import { ListingsPreview } from './ListingsPreview';

export type ListingsUpdateProps = {
    sbOpen: boolean;
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

export const ListingsUpdate: React.FunctionComponent = ({ sbOpen, sbCurrRow }: ListingsUpdateProps) => {
    const [preview, setPreview] = useState<boolean>(true);
    const open = useSelector((state: RootState) => sbOpen || state.listings.updateMode);
    const currRow = useSelector((state: RootState) => sbCurrRow || state.listings.curr);
    const dispatch = useDispatch();
    const theme = useTheme();
    const classes = useStyles(theme);
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
            values.img.map((itm) => itm),
        );
        dispatch(recordState());
        dispatch(modifyListing(Array.from(formData)));
        handleClose();
    };
    function handleClose() {
        dispatch(updateDialog());
    }
    function handlePreview() {
        setPreview(!preview);
    }
    const { control } = methods;

    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="Update a Listing" fullScreen>
            <IconButton color="secondary" onClick={handleClose} className={classes.exit}>
                <ExitToAppIcon fontSize="large" />
            </IconButton>
            <FormProvider {...methods}>
                <Grid container justify="center" spacing={1}>
                    <Hidden smDown={true}>
                        <Grid container item md={8} justify="center" alignContent="center" className={classes.preview}>
                            {preview && <ListingsPreview {...({ control } as unknown)} />}
                        </Grid>
                    </Hidden>
                    <Grid item md={4}>
                        <form onSubmit={methods.handleSubmit(onSubmit)}>
                            <DialogTitle>Update Listing</DialogTitle>
                            <DialogContent>
                                <ListingsItemForm {...currRow} />
                            </DialogContent>
                            <DialogActions>
                                {/* <Button onClick={handlePreview} color="secondary">
                                        Preview
                                    </Button> */}
                                <Button onClick={handleClose} color="default">
                                    Cancel
                                </Button>
                                <Button color="primary" type="submit" variant="contained">
                                    Update
                                </Button>
                            </DialogActions>
                        </form>
                    </Grid>
                </Grid>
            </FormProvider>
        </Dialog>
    );
};
