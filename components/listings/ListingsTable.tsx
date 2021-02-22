import Container from '@material-ui/core/Container';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { ColDef, DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { checkListing } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsEdit } from './ListingsEdit';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '90vh',
        margin: '10px 0',
    },
}));
export const ListingsTable: React.FunctionComponent = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const listings = useSelector((state: RootState) => state.listings.listings);
    const dispatch = useDispatch();
    const cols: ColDef[] = [
        {
            field: 'img',
            headerName: 'Image',
            width: 100,
            sortable: false,
            renderCell: function render(itm) {
                return <img src={itm.value[0]} alt={'Cuddles'} width={75} height={75} />;
            },
        },
        { field: 'id', headerName: 'SKU', width: 90 },
        { field: 'name', headerName: 'Name', width: 100 },
        { field: 'rating', headerName: 'Rating', width: 100 },
        { field: 'num_rating', headerName: '# of ratings', width: 100 },
        { field: 'price', headerName: 'Price $', width: 100 },
        { field: 'details', headerName: 'Details', width: 100 },
        { field: 'tags', headerName: 'Tags', width: 250 },
        { field: 'quantity', headerName: 'Quantity', width: 100 },
        {
            field: '-',
            width: 100,
            sortable: false,
            renderCell: function render(load) {
                return <ListingsEdit {...(load.row as any)} />;
            },
        },
    ];
    const rows = [...listings];
    const selectRow = (e) => {
        dispatch(checkListing(e));
    };
    return (
        <Container maxWidth="xl" className={classes.container}>
            <DataGrid rows={rows} columns={cols} rowHeight={100} onRowSelected={selectRow} checkboxSelection />
        </Container>
    );
};
