import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import SpeedDial, { SpeedDialProps } from '@material-ui/lab/SpeedDial';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    changeDisplay,
    createDialog,
    deleteDialog,
    redoListing,
    undoListing,
} from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';

export const ListingsControlMobile: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    const display = useSelector((state: RootState) => state.listings.displayMode);
    const activities = useSelector((state: RootState) => state.listings.activities);
    const undoed = useSelector((state: RootState) => state.listings.recall);
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };
    return (
        <SpeedDial
            ariaLabel="Listings Speed Dial"
            hidden={hidden}
            icon={<SpeedDialIcon />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
            direction={'left'}
            style={{ position: 'fixed', right: '15px', bottom: '5px', zIndex: 1 }}
        >
            <SpeedDialAction
                icon={<DeleteIcon />}
                tooltipTitle={'Delete a listing'}
                onClick={dispatch.bind(null, deleteDialog())}
            />
            <SpeedDialAction
                icon={<AddIcon />}
                tooltipTitle={'New Listing'}
                onClick={dispatch.bind(null, createDialog())}
            />
            {display == 'table' ? (
                <SpeedDialAction
                    icon={<AppsIcon />}
                    tooltipTitle={'Change display to gallery mode.'}
                    onClick={dispatch.bind(null, changeDisplay())}
                />
            ) : (
                <SpeedDialAction
                    icon={<ListIcon />}
                    tooltipTitle={'Change display to table mode'}
                    onClick={dispatch.bind(null, changeDisplay())}
                />
            )}

            {undoed.length > 0 && (
                <SpeedDialAction
                    icon={<RedoIcon />}
                    tooltipTitle={'Undo Action'}
                    onClick={dispatch.bind(null, redoListing())}
                />
            )}
            {activities.length > 0 && (
                <SpeedDialAction
                    icon={<UndoIcon />}
                    tooltipTitle={'Redo Action'}
                    onClick={dispatch.bind(null, undoListing())}
                />
            )}
        </SpeedDial>
    );
};
