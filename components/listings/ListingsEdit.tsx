import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { removeListing, updateListing, viewListing } from '../../redux/listings/listingsSlice';
export function ListingsEdit(props) {
    const [open, setOpen] = useState(null);
    const dispatch = useDispatch();
    function handleOpen(e) {
        setOpen(e.currentTarget);
    }
    function handleClose() {
        setOpen(null);
    }
    function handleViewListing() {
        dispatch(viewListing(props));
    }
    function handleUpdateListing() {
        dispatch(updateListing(props));
    }
    function handleRemoveListing() {
        dispatch(removeListing(props));
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
                Edit
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
                    <MenuItem value={'viewListing'} onClick={handleViewListing}>
                        View Listing
                    </MenuItem>
                    <MenuItem value={'updateListing'} onClick={handleUpdateListing}>
                        Update Listing
                    </MenuItem>
                    <MenuItem value={'removeListing'} onClick={handleRemoveListing}>
                        Remove Listing
                    </MenuItem>
                </Menu>
            </FormControl>
        </>
    );
}
