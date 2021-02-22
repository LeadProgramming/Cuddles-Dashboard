import { Card, CardActions, CardMedia, Checkbox, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { makeStyles } from '@material-ui/styles';
import { useDispatch } from 'react-redux';

import { checkListing } from '../../redux/listings/listingsSlice';
import { ListingsEdit } from './ListingsEdit';
type ListingsWallItemProp = {
    name: string;
    img: string;
    price: string;
    rating: number;
    num_rating: number;
    children: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({}));
export const ListingsWallItem: React.FunctionComponent = (itm: ListingsWallItemProp) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const handleCheck = (e) => {
        dispatch(checkListing(e.target));
    };
    return (
        <Grid item key={itm.name} md={4} sm={12} xs={12}>
            <Card variant="outlined">
                <Checkbox onChange={handleCheck} value={itm.id} className={classes.checkbox} />
                <CardMedia
                    title={itm.name}
                    image={itm.img[0]}
                    style={{ width: '200px', height: '200px', margin: 'auto' }}
                />
                <Grid container direction="column">
                    <Grid container item direction="column" alignContent="center">
                        <Typography variant="h5" color="initial">
                            {itm.name}
                        </Typography>
                        <Typography variant="h6" color="initial">
                            ${itm.price}
                        </Typography>
                    </Grid>
                    <Grid container item justify="center">
                        <Rating
                            name={`${itm.name}Rating`}
                            value={itm.rating}
                            max={5}
                            precision={0.5}
                            icon={<FavoriteIcon fontSize="inherit" />}
                            size="small"
                            readOnly
                            style={{ marginRight: '5px' }}
                        />
                        <Typography variant="subtitle1" color="initial">
                            {itm.rating}
                        </Typography>
                    </Grid>
                    <Grid container item justify="center">
                        <Typography variant="subtitle1" color="initial">
                            {itm.num_rating} ratings
                        </Typography>
                    </Grid>
                </Grid>
                <CardActions style={{ justifyContent: 'center' }}>
                    <ListingsEdit {...itm} />
                </CardActions>
            </Card>
        </Grid>
    );
};
