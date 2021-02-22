import { Box, Container } from '@material-ui/core';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { OrdersAction } from './OrdersAction';
export type OrdersTableProps = {
    children: React.ReactNode;
};

const useStyles = makeStyles((theme) => ({
    container: {
        height: '90vh',
        margin: '10px 0',
    },
}));

export const OrdersTable: React.FunctionComponent = () => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const orders = useSelector((state: RootState) => state.orders.orders);

    const dispatch = useDispatch();
    const cols: ColDef[] = [
        { field: 'id', headerName: 'Order ID', width: 90 },
        // { field: 'item_id', headerName: 'Item ID', width: 90 },
        {
            field: 'img',
            headerName: 'Image',
            width: 100,
            sortable: false,
            renderCell: function render(itm) {
                return <img src={itm.value} alt={'Cuddles'} width={75} height={75} />;
            },
        },
        { field: 'item_name', headerName: 'Item Name', width: 100 },
        // { field: 'user_id', headerName: 'User ID', width: 100 },
        { field: 'username', headerName: 'Username', width: 100 },
        { field: 'fullname', headerName: 'Full Name', width: 100 },
        { field: 'apt_num', headerName: 'Apt #', width: 75 },
        { field: 'address_1', headerName: 'Address #1', width: 150 },
        { field: 'address_2', headerName: 'Address #2', width: 150 },
        { field: 'city', headerName: 'City', width: 150 },
        { field: 'zip', headerName: 'ZIP', width: 100 },
        { field: 'state', headerName: 'State', width: 75 },
        { field: 'price', headerName: 'Price $', width: 100 },
        { field: 'quantity', headerName: 'Quantity', width: 100 },
        {
            field: '-',
            width: 100,
            sortable: false,
            renderCell: function render(load) {
                return <OrdersAction {...(load.row as any)} />;
            },
        },
    ];
    const rows = [...orders]; //...orders

    return (
        <Container maxWidth="xl" className={classes.container}>
            <DataGrid rows={rows} columns={cols} rowHeight={100} />
        </Container>
    );
};
