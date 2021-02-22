import { Grid, IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

import { viewDialog } from '../../redux/listings/listingsSlice';
import { listing } from '../../redux/listings/listingsTypes';
import { RootState } from '../../redux/store';
import { ListingsDetail } from './ListingsDetail';
import { ListingsGallery } from './ListingsGallery';

const useStyles = makeStyles((theme) => ({
    close: {
        position: 'absolute',
    },
}));
export type ListingsViewProps = {
    sbItm: listing;
    sbOpen: boolean;
    children: React.ReactNode;
};
export const ListingsView: React.FunctionComponent = ({ sbItm, sbOpen }: ListingsViewProps) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const open = useSelector((state: RootState) => sbOpen || state.listings.viewMode);
    const itm = useSelector((state: RootState) => sbItm || state.listings.curr);
    const dispatch = useDispatch();
    function handleClose() {
        dispatch(viewDialog());
    }
    return (
        <Dialog open={open} onClose={handleClose} aria-labelledby="View a Listing" maxWidth="xl" fullWidth>
            <IconButton size="medium" onClick={handleClose} className={classes.close}>
                <HighlightOffIcon />
            </IconButton>
            <Grid container justify="center" alignContent="center">
                <Grid container justify="center" item md={8} sm={12} xs={12}>
                    <ListingsGallery {...itm} />
                </Grid>
                <Grid item md={4} sm={12} xs={12}>
                    <ListingsDetail {...itm} />
                </Grid>
            </Grid>
        </Dialog>
    );
};
