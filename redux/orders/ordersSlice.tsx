import { createSlice, current, PayloadAction } from '@reduxjs/toolkit';

import { orders, ordersState } from './ordersTypes';
export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [
            {
                id: 1,
                img: '/img/baek.jpg',
                item_id: 1,
                item_name: 'David',
                user_id: '1216',
                username: 'davidnguyen',
                fullname: 'David Nguyen',
                apt_num: '',
                address_1: '12345 Teddy Bear St.',
                address_2: '',
                city: 'Westminster',
                zip: '92683',
                state: 'CA',
                status: 'pending',
                price: (19.99).toFixed(2),
                quantity: 1,
            },
            {
                id: 2,
                img: '/img/earlGrey.jpg',
                item_id: 2,
                item_name: 'Earl Grey',
                user_id: '1201',
                username: 'DianeKai',
                fullname: 'Diane Kai',
                apt_num: '',
                address_1: '12121 Strawberry St.',
                address_2: '',
                city: 'Strawberry',
                zip: '93333',
                state: 'CA',
                status: 'pending',
                price: (39.99).toFixed(2),
                quantity: 1,
            },
            {
                id: 3,
                img: '/img/kai.jpg',
                item_id: 3,
                item_name: 'Phuong',
                user_id: '1200',
                username: 'penelope',
                fullname: 'Penelope Fam',
                apt_num: '213',
                address_1: 'Blueberry St.',
                address_2: '',
                city: 'Blueberry',
                zip: '93334',
                state: 'CA',
                status: 'pending',
                price: (29.99).toFixed(2),
                quantity: 1,
            },
        ],
        createMode: false,
        viewMode: false,
        updateMode: false,
        cancel: false,
        displayMode: 'table',
        curr: {},
        //undo & redo syntax
        activities: [],
        recall: [],
    } as ordersState,
    reducers: {
        changeDisplay(state) {
            if (state.displayMode == 'table') {
                state.displayMode = 'gallery';
            } else {
                state.displayMode = 'table';
            }
            //removes all checks from checkboxes.
            state.orders.map((i) => (i.checked = false));
        },
        createDialog(state) {
            state.createMode = !state.createMode;
        },
        viewDialog(state, action: PayloadAction<orders>) {
            state.viewMode = !state.viewMode;
            if (action.payload) state.curr = action.payload;
        },
        updateDialog(state, action: PayloadAction<orders>) {
            state.updateMode = !state.updateMode;
            if (action.payload) {
                state.curr = action.payload;
            }
        },
        cancelDialog(state) {
            state.cancel = !state.cancel;
        },
        modifyOrder(state, action: PayloadAction<Iterable<any[]>>) {
            //tags
            action.payload[7][1] = action.payload[7][1].split(',');
            //img
            action.payload[8][1] = action.payload[8][1].split(',');
            const idx = state.orders.map((i) => String(i.id)).indexOf(Object.fromEntries(action.payload).id);
            state.orders[idx] = Object.fromEntries(action.payload);
        },
        checkOrder(state, action: PayloadAction<any>) {
            //pc ?? mobile
            const idx = action.payload.data?.id ?? action.payload?.value;
            const check = action.payload?.isSelected ?? action.payload?.checked;
            const currIdx = state.orders.map((i) => i.id).indexOf(Number(idx));
            state.orders[currIdx].checked = check;
        },
        createOrder(state, action: PayloadAction<Iterable<any[]>>) {
            //tags
            action.payload[7][1] = action.payload[7][1].split(',');
            //imgs
            action.payload[8][1] = action.payload[8][1].split(',');
            state.orders.push(Object.fromEntries(action.payload));
        },
        removeOrder(state, action: PayloadAction<order>) {
            state.orders = state.orders.filter((itm) => itm.id !== action.payload.id);
        },
        recordState(state) {
            state.activities.push(state.orders);
            state.recall = [];
        },
        undoOrder(state) {
            state.recall.push(state.orders);
            state.Orders = state.activities.pop();
        },
        redoOrder(state) {
            state.activities.push(state.Orders);
            state.Orders = state.recall.pop();
        },
    },
});
export const {
    changeDisplay,
    createDialog,
    viewDialog,
    updateDialog,
    deleteDialog,
    modifyOrder,
    checkOrder,
    recycleOrder,
    createOrder,
    removeOrder,
    recordState,
    undoOrder,
    redoOrder,
} = ordersSlice.actions;

export default ordersSlice.reducer;
