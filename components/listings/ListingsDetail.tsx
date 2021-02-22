import { Chip, Divider, Grid, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px',
    },
    sku: {
        textAlign: 'right',
    },
}));
export type listingsDetailProps = {
    img: string;
    id: number;
    name: string;
    rating: string;
    num_rating: number;
    price: string;
    details: string;
    tags: string[];
    quantity: number;
    children: React.ReactNode;
};
export const ListingsDetail: React.FunctionComponent = (props: listingsDetailProps) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    return (
        <Grid container direction="column" className={classes.root}>
            <Grid container item>
                <Grid item xs={6}>
                    <Typography variant="h4" color="initial">
                        {props.name}
                    </Typography>
                </Grid>
                <Grid item xs={6} className={classes.sku}>
                    <Typography variant="subtitle1" color="inital">
                        SKU#: {props.id}
                    </Typography>
                </Grid>
            </Grid>
            <Typography variant="h4" color="initial">
                ${props.price}
            </Typography>
            {props.quantity > 0 ? (
                <Typography variant="h6" color="initial">
                    In Stock
                </Typography>
            ) : (
                <Typography variant="h6" color="initial">
                    Out of Stock
                </Typography>
            )}
            <Divider light />
            <Grid container item>
                <Rating
                    name={`${props.name}Rating`}
                    value={0}
                    max={5}
                    precision={0.5}
                    icon={<FavoriteIcon fontSize="inherit" />}
                    size="small"
                    readOnly
                    style={{ marginRight: '5px' }}
                />
                <Typography variant="h6" color="initial">
                    {props.rating}
                </Typography>
            </Grid>
            <Typography variant="subtitle1" color="initial">
                {props.num_rating} ratings
            </Typography>
            <Typography variant="h5" color="initial">
                Product Details
            </Typography>
            <Divider light />
            <Typography variant="subtitle1">{props.details}</Typography>
            <Grid container>
                {props.tags &&
                    props.tags.map((i) => {
                        return (
                            <Grid key={i} item xs={4} spacing={1}>
                                <Chip label={i} color="primary" />
                            </Grid>
                        );
                    })}
            </Grid>
        </Grid>
    );
};
