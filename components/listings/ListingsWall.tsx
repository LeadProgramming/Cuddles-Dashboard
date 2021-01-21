import { CardActions, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Rating from '@material-ui/lab/Rating';
import { useDispatch, useSelector } from 'react-redux';

import { checkListing } from '../../redux/listings/listingsSlice';
import { ListingsEdit } from './ListingsEdit';

// type Listings = {
//     field?: string;
//     headerName?: string;
//     width: number;
//     sortable?: boolean;
//     renderCell?: React.ReactNode;
// };
export type ListingsWallProps = {
    sortBy: string[];
    types: string[];
    listings: any;
};

export function ListingsWall(): React.ReactNode {
    const listings = useSelector((state) => state.listings.listings);
    const dispatch = useDispatch();
    const cols: ColDef[] = [
        {
            field: 'img',
            headerName: 'Image',
            width: 100,
            sortable: false,
            renderCell: function render(itm) {
                // first upload only.
                return <img src={itm.value.split(',')[0]} alt={'Cuddles'} width={75} height={75} />;
            },
        },
        { field: 'id', headerName: 'SKU', width: 90 },
        { field: 'name', headerName: 'Name', width: 100 },
        { field: 'rating', headerName: 'Rating', width: 100 },
        { field: 'num_rating', headerName: '# of ratings', width: 100 },
        { field: 'price', headerName: 'Price $', width: 100 },
        { field: 'details', headerName: 'Details', width: 100 },
        { field: 'tags', headerName: 'Tags', width: 100 },
        { field: 'quantity', headerName: 'Quantity', width: 100 },
        {
            field: '-',
            width: 100,
            sortable: false,
            renderCell: function render(load) {
                return <ListingsEdit {...load.row} />;
            },
        },
    ];
    const rows = [...listings];
    const selectRow = (e) => {
        dispatch(checkListing(e.rowIds));
    };
    return (
        <Box height="80vh" width="100%">
            <Grid container spacing={1} direction="row" justify="center" wrap="nowrap" style={{ margin: '5px 0' }}>
                {listings.map((itm, idx) => {
                    return (
                        <Grid item key={itm.name}>
                            <Card variant="outlined">
                                <CardMedia
                                    title={itm.name}
                                    image={itm.img.split(',')[0]}
                                    style={{ width: '250px', height: '250px' }}
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
                                    <ListingsEdit />
                                </CardActions>
                            </Card>
                        </Grid>
                    );
                })}
            </Grid>
            {/* <DataGrid rows={rows} columns={cols} rowHeight={100} onSelectionChange={selectRow} checkboxSelection /> */}
        </Box>
    );
}
