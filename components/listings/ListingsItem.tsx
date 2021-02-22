import { Button, Card, CardActions, CardMedia, Grid, Typography } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, useTheme } from '@material-ui/styles';

import { listing } from '../../redux/listings/listingsTypes';
export type ListingsItemProp = {
    itm: listing;
    children: React.ReactNode;
};
const useStyles = makeStyles((theme) => ({
    control: {
        justifyContent: 'center',
    },
    card: {
        textAlign: 'center',
    },
}));
export const ListingsItem: React.FunctionComponent = (itm: ListingsItemProp) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Grid item key={itm?.name || 'empty'}>
            <Card variant="outlined" className={classes.card}>
                {itm.img?.length ? (
                    <img
                        title={itm.name || 'empty'}
                        alt={itm.name || 'empty'}
                        src={itm.img[0] || 'empty'}
                        width={'200px'}
                        height={'200px'}
                    />
                ) : (
                    <Typography variant="h4" align="center">
                        {' '}
                        Empty Image
                    </Typography>
                )}
                <Grid container direction="column">
                    <Grid container item direction="column" alignContent="center">
                        <Typography variant="h5" color="initial">
                            {itm?.name || 'empty name'}
                        </Typography>
                        <Typography variant="h6" align="center" color="initial">
                            ${itm?.price || '0.00'}
                        </Typography>
                    </Grid>
                    <Grid container item justify="center">
                        <Rating
                            name={`${itm?.name}Rating`}
                            value={0}
                            max={5}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            size="small"
                            readOnly
                            style={{ marginRight: '5px' }}
                        />
                        <Typography variant="subtitle1" color="initial">
                            {itm?.rating || 0.0}
                        </Typography>
                    </Grid>
                    <Grid container item justify="center">
                        <Typography variant="subtitle1" color="initial">
                            {itm?.num_rating || 0} ratings
                        </Typography>
                    </Grid>
                </Grid>
                <CardActions className={classes.control}>
                    <Button>
                        <AddShoppingCartIcon />
                    </Button>
                    <Button>
                        <FavoriteIcon />
                    </Button>
                    <Button> View </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};
