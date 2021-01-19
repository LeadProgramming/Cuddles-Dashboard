import { createSlice } from '@reduxjs/toolkit';

export const listingsSlice = createSlice({
    name: 'listings',
    initialState: {
        listings: [
            {
                img: 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
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
                img: 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
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
                img: 'https://cdn3.volusion.com/9nxdj.fchy5/v/vspfiles/photos/AR-01779-2.jpg?v-cache=1602075128',
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
        listingMode: false,
        creatingListing: false,
        viewingListing: false,
        updatingListing: false,
        deletingListing: false,
        historyListing: false,
        checkedListing: [],
    },
    reducers: {
        changeListingMode(state) {
            state.listingMode = !state.listingMode;
        },
        createListing(state) {
            state.creatingListing = !state.creatingListing;
        },
        viewListing(state) {
            state.viewingListing = !state.viewingListing;
        },
        updateListing(state) {
            state.updatingListing = !state.updatingListing;
        },
        deleteListing(state) {
            state.deletingListing = !state.deletingListing;
        },
        addListing(state, action) {
            state.listings.push(Object.fromEntries(action.payload));
        },
        // checkHistoryListing(state) {},
        checkListing(state, action) {
            const found = [];
            //get all the selected listings for recycling.
            for (const i of action.payload) {
                found.push(state.listings.find((itm) => itm.id == i));
            }
            state.checkedListing = found;
        },
        recycleListing(state) {
            const tmp = [];
            for (const i of state.listings) {
                let dontKeep = false;
                for (const j of state.checkedListing) {
                    if (i.id === j.id) {
                        dontKeep = true;
                        break;
                    }
                }
                if (!dontKeep) {
                    tmp.push(i);
                }
            }
            state.listings = tmp;
            state.checkedListing = [];
            state.deletingListing = false;
        },
        removeListing(state, action) {
            state.listings = state.listings.filter((itm) => itm.id !== action.payload.id);
        },
        // modifyListing(state, action) {},
    },
});
export const {
    addListing,
    changeListingMode,
    createListing,
    viewListing,
    updateListing,
    deleteListing,
    checkListing,
    recycleListing,
    removeListing,
    modifyListing,
} = listingsSlice.actions;

export default listingsSlice.reducer;