import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ColDef, DataGrid } from '@material-ui/data-grid';
import { createNextState } from '@reduxjs/toolkit';
import { useState } from 'react';
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
export type ListingsEditorProps = {
    sortBy: string[];
    types: string[];
    listings: any;
};

export function ListingsEditor(): React.ReactNode {
    const listings = useSelector((state) => state.listings.listings);
    const dispatch = useDispatch();
    const cols: ColDef[] = [
        {
            field: 'img',
            headerName: 'Image',
            width: 100,
            sortable: false,
            renderCell: function render(itm) {
                return <img src={itm.value} alt={'Cuddles'} width={75} height={75} />;
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
            <DataGrid rows={rows} columns={cols} rowHeight={100} onSelectionChange={selectRow} checkboxSelection />
        </Box>
    );
}
