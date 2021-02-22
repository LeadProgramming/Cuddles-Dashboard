import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import AppsIcon from '@material-ui/icons/Apps';
import DeleteIcon from '@material-ui/icons/Delete';
import ListIcon from '@material-ui/icons/List';
import RedoIcon from '@material-ui/icons/Redo';
import UndoIcon from '@material-ui/icons/Undo';
import { useDispatch, useSelector } from 'react-redux';

import {
    changeDisplay,
    createDialog,
    deleteDialog,
    redoListing,
    undoListing,
} from '../../redux/listings/listingsSlice';
import { RootState } from '../../redux/store';

export const ListingsControlDesktop: React.FunctionComponent = () => {
    const dispatch = useDispatch();
    // const mode = useSelector((state: RootState) => state.listings.wallMode);
    const activities = useSelector((state: RootState) => state.listings.activities);
    const undoed = useSelector((state: RootState) => state.listings.recall);
    const display = useSelector((state: RootState) => state.listings.displayMode);
    return (
        <>
            {activities.length > 0 && (
                <IconButton color="inherit" aria-label="Undo" onClick={dispatch.bind(null, undoListing())}>
                    <UndoIcon fontSize="large" />
                </IconButton>
            )}
            {undoed.length > 0 && (
                <IconButton color="inherit" aria-label="Redo" onClick={dispatch.bind(null, redoListing())}>
                    <RedoIcon fontSize="large" />
                </IconButton>
            )}
            <IconButton color="inherit" aria-label="Change Display" onClick={dispatch.bind(null, changeDisplay())}>
                {display == 'table' ? <AppsIcon fontSize="large" /> : <ListIcon fontSize="large" />}
            </IconButton>
            <IconButton color="inherit" aria-label="New Listing" onClick={dispatch.bind(null, createDialog())}>
                <AddIcon fontSize="large" />
            </IconButton>
            <IconButton color="inherit" aria-label="Delete Listing" onClick={dispatch.bind(null, deleteDialog())}>
                <DeleteIcon fontSize="large" />
            </IconButton>
        </>
    );
};
