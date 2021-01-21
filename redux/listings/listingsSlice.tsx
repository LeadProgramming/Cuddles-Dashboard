import { createSlice, current } from '@reduxjs/toolkit';

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
        wallMode: false,
        createMode: false,
        viewMode: false,
        updateMode: false,
        deleteMode: false,
        actMode: false,
        checked: [],
        curr: {},
        activities: [],
        recall: [],
    },
    reducers: {
        changeWallMode(state) {
            state.wallMode = !state.wallMode;
        },
        actDialog(state) {
            state.actMode = !state.actMode;
        },
        createDialog(state) {
            state.createMode = !state.createMode;
        },
        viewDialog(state, action) {
            state.viewMode = !state.viewMode;
            state.curr = action.payload;
        },
        updateDialog(state, action) {
            state.updateMode = !state.updateMode;
            if (action.payload) {
                state.curr = action.payload;
            }
        },
        deleteDialog(state) {
            state.deleteMode = !state.deleteMode;
        },
        modifyListing(state, action) {
            //very ugly code
            const idx = state.listings.map((i) => i.id).indexOf(Number(Object.fromEntries(action.payload).id));
            state.listings[idx] = Object.fromEntries(action.payload);
            console.log(current(state.listings));
        },
        checkListing(state, action) {
            const found = [];
            //get all the selected listings for recycling.
            for (const i of action.payload) {
                found.push(state.listings.find((itm) => itm.id == i));
            }
            state.checked = found;
        },
        recycleListing(state) {
            const tmp = [];
            for (const i of state.listings) {
                let dontKeep = false;
                for (const j of state.checked) {
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
            state.checked = [];
            state.deleteMode = false;
        },
        createListing(state, action) {
            state.listings.push(Object.fromEntries(action.payload));
        },
        removeListing(state, action) {
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
    changeWallMode,
    createDialog,
    actDialog,
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
