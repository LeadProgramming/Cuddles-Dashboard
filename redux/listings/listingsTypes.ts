export type listing = {
    img: string;
    id: number;
    name: string;
    rating: string;
    num_rating: number;
    price: string;
    details: string;
    tags: string[];
    quantity: number;
};
export type listingsState = {
    listings: listing[];
    wallMode: boolean;
    createMode: boolean;
    viewMode: boolean;
    updateMode: boolean;
    deleteMode: boolean;
    actMode: boolean;
    checked: listing[];
    curr: listing;
    activities: unknown[];
    recall: unknown[];
};
