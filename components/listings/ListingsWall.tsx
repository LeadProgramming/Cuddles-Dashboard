import { CardActions, Checkbox, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { checkListing } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsEdit } from './ListingsEdit';

export const ListingsWall: React.FunctionComponent = () => {
    const listings = useSelector((state: RootState) => state.listings.listings);
    const dispatch = useDispatch();
    const selectItm = (e) => {
        dispatch(checkListing(JSON.parse(e.target.value)));
    };
    return (
        <Box height="80vh" width="100%">
            <Grid container spacing={1} direction="row" style={{ margin: '5px 0' }}>
                {listings.map((itm) => {
                    return (
                        <Grid item key={itm.name} md={4} align="center">
                            <Card variant="outlined">
                                {/* <Checkbox checked={} value={JSON.stringify(itm)} onChange={selectItm} color="secondary" /> */}
                                <CardMedia
                                    title={itm.name}
                                    image={itm.img.split(',')[0]}
                                    style={{ width: '200px', height: '200px' }}
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
                                {/* <Typography variant="subtitle1" color="initial">
                                        {itm.tags.map((tag) => (
                                            <Chip key={tag} label={tag} />
                                        ))}
                                    </Typography> */}
                                <CardActions style={{ justifyContent: 'center' }}>
                                    <ListingsEdit {...itm} />
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};
