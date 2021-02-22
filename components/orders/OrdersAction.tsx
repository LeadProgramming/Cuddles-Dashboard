import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { cancelDialog, recordState, viewDialog } from '../../redux/orders/ordersSlice';
import { orders } from '../../redux/orders/ordersTypes';

type OrdersActionProp =
    | ({
          children: React.ReactNode;
      } & orders)
    | null;
export const OrdersAction: React.FunctionComponent = (props: OrdersActionProp) => {
    const [open, setOpen] = useState(null);
    const dispatch = useDispatch();
    function handleOpen(e) {
        setOpen(e.currentTarget);
    }
    function handleClose() {
        setOpen(null);
    }
    function handleViewOrder() {
        dispatch(viewDialog(props));
    }
    function handleCancelOrder() {
        dispatch(cancelDialog(props));
    }
    return (
        <>
            <Button
                aria-controls="edit-menu"
                aria-haspopup="true"
                variant={'contained'}
                color={'primary'}
                size={'medium'}
                onClick={handleOpen}
            >
                Action
            </Button>
            <FormControl>
                <Menu
                    open={Boolean(open)}
                    onClose={handleClose}
                    getContentAnchorEl={null}
                    anchorEl={open}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'center',
                    }}
                >
                    <MenuItem value={'viewOrder'} onClick={handleViewOrder}>
                        View Order
                    </MenuItem>
                    <MenuItem value={'cancelOrder'} onClick={handleCancelOrder}>
                        Cancel Order
                    </MenuItem>
                </Menu>
            </FormControl>
        </>
    );
};
