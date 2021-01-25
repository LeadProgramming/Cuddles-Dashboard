import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { ColDef, DataGrid } from '@material-ui/data-grid';
import { useDispatch, useSelector } from 'react-redux';

import { checkListing } from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';
import { ListingsEdit } from './ListingsEdit';

export const ListingsTable: React.FunctionComponent = () => {
    const listings = useSelector((state: RootState) => state.listings.listings);
    const dispatch = useDispatch();
    const cols: ColDef[] = [
        {
            field: 'img',
            headerName: 'Image',
            width: 100,
            sortable: false,
            renderCell: function render(itm) {
                // first upload only.
                return <img src={JSON.stringify(itm.value).split(',')[0]} alt={'Cuddles'} width={75} height={75} />;
                // return <img src={itm.value.split(',')[0]} alt={'Cuddles'} width={75} height={75} />;
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
                return <ListingsEdit {...(load.row as any)} />;
            },
        },
    ];
    const rows = [...listings];
    const selectRow = (e) => {
        dispatch(checkListing(e.rowIds));
    };
    return (
        <Box height="85vh" width="100%">
            <DataGrid rows={rows} columns={cols} rowHeight={100} onSelectionChange={selectRow} checkboxSelection />
        </Box>
    );
};
