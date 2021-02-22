import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { listing, listingsState } from './listingsTypes';
export const listingsSlice = createSlice({
    name: 'listings',
    initialState: {
        listings: [
            {
                img: ['/img/baek.jpg'],
                id: 1,
                name: 'David',
                rating: (4.8).toFixed(1),
                num_rating: 100,
                price: (19.99).toFixed(2),
                details: 'Cute, warm, kind-hearted, and soft.',
                tags: ['Teddy Bears', 'brown', 'MED'],
                quantity: 100,
            },
            {
                img: ['/img/earlGrey.jpg', '/img/earlGrey2.jpg', '/img/earlGrey3.jpg'],
                id: 2,
                name: 'Diana',
                rating: (0).toFixed(1),
                num_rating: 0,
                price: (39.99).toFixed(2),
                details: 'Cute, sweet, kind-hearted, and soft.',
                tags: ['Teddy Bears', 'brown', 'MED'],
                quantity: 100,
            },
            {
                img: ['/img/kai.jpg', '/img/kai2.jpg', '/img/kai3.jpg'],
                id: 3,
                name: 'Phuong',
                rating: (4.75).toFixed(1),
                num_rating: 10,
                price: (29.99).toFixed(2),
                details: 'Fuddly, sweet, kind-hearted, and soft.',
                tags: ['Teddy Bears', 'brown', 'MED'],
                quantity: 100,
            },
        ],
        createMode: false,
        viewMode: false,
        updateMode: false,
        deleteMode: false,
        displayMode: 'table',
        curr: {},
        //undo & redo syntax
        activities: [],
        recall: [],
    } as listingsState,
    reducers: {
        changeDisplay(state) {
            if (state.displayMode == 'table') {
                state.displayMode = 'gallery';
            } else {
                state.displayMode = 'table';
            }
            //removes all checks from checkboxes.
            state.listings.map((i) => (i.checked = false));
        },
        createDialog(state) {
            state.createMode = !state.createMode;
        },
        viewDialog(state, action: PayloadAction<listing>) {
            state.viewMode = !state.viewMode;
            if (action.payload) state.curr = action.payload;
        },
        updateDialog(state, action: PayloadAction<listing>) {
            state.updateMode = !state.updateMode;
            if (action.payload) {
                state.curr = action.payload;
            }
        },
        deleteDialog(state) {
            state.deleteMode = !state.deleteMode;
        },
        modifyListing(state, action: PayloadAction<Iterable<any[]>>) {
            //tags
            action.payload[7][1] = action.payload[7][1].split(',');
            //img
            action.payload[8][1] = action.payload[8][1].split(',');
            const idx = state.listings.map((i) => String(i.id)).indexOf(Object.fromEntries(action.payload).id);
            state.listings[idx] = Object.fromEntries(action.payload);
        },
        checkListing(state, action: PayloadAction<any>) {
            //pc ?? mobile
            const idx = action.payload.data?.id ?? action.payload?.value;
            const check = action.payload?.isSelected ?? action.payload?.checked;
            const currIdx = state.listings.map((i) => i.id).indexOf(Number(idx));
            state.listings[currIdx].checked = check;
        },
        recycleListing(state) {
            state.listings = state.listings.filter((i) => !i.checked);
            state.deleteMode = false;
        },
        createListing(state, action: PayloadAction<Iterable<any[]>>) {
            //tags
            action.payload[7][1] = action.payload[7][1].split(',');
            //imgs
            action.payload[8][1] = action.payload[8][1].split(',');
            state.listings.push(Object.fromEntries(action.payload));
        },
        removeListing(state, action: PayloadAction<listing>) {
            state.listings = state.listings.filter((itm) => itm.id !== action.payload.id);
        },
        recordState(state) {
            state.activities.push(state.listings);
            state.recall = [];
        },
        undoListing(state) {
            state.recall.push(state.listings);
            state.listings = state.activities.pop();
        },
        redoListing(state) {
            state.activities.push(state.listings);
            state.listings = state.recall.pop();
        },
    },
});
export const {
    changeDisplay,
    createDialog,
    viewDialog,
    updateDialog,
    deleteDialog,
    modifyListing,
    checkListing,
    recycleListing,
    createListing,
    removeListing,
    recordState,
    undoListing,
    redoListing,
} = listingsSlice.actions;

export default listingsSlice.reducer;
