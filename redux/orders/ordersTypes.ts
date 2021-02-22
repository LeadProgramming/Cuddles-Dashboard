export type orders = {
    img: string[];
    id: number;
    name: string;
    rating: string;
    num_rating: number;
    price: string;
    details: string;
    tags: string[];
    quantity: number;
    checked: boolean;
};
export type ordersState = {
    orders: orders[];
    displayMode: string;
    createMode: boolean;
    viewMode: boolean;
    updateMode: boolean;
    deleteMode: boolean;
    actMode: boolean;
    drawerMode: boolean;
    checked: listing[];
    curr: listing;
    activities: any[];
    recall: any[];
};
