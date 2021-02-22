import { Checkbox, Container, Typography, useTheme } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

import { checkListing } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsWallItem } from './ListingsWallItem';

const useStyles = makeStyles((theme) => ({
    container: {
        margin: '10px auto',
    },
}));

export const ListingsWall: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    const listings = useSelector((state: RootState) => state.listings.listings);
    const classes = useStyles(theme);
    return (
        <Container maxWidth={'lg'} className={classes.container}>
            <Grid container spacing={1} justify="center">
                {listings.map((itm) => {
                    return (
                        <>
                            <ListingsWallItem key={itm.name} {...itm} />
                        </>
                    );
                })}
            </Grid>
            {listings.filter((i) => i.checked).length > 0 && (
                <Typography paragraph>
                    {listings.filter((i) => i.checked).length} of {listings.length} selected.
                </Typography>
            )}
        </Container>
    );
};
