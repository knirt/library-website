import { BOOK, Tags } from "../types";

//These are all the types for my redux logic, ive tried to keep everything as strict as possible
//only allowing the action types that are possible for each reducer

//ACTION CREATOR TYPES
interface CART_ACTION {
    type: "add" | "remove";
    payload: number;
}

export interface ADD_TO_CART {
    func: (productID: number) => CART_ACTION;
    action: CART_ACTION;
}

export interface REMOVE_FROM_CART {
    func: (productID: number) => CART_ACTION;
    action: CART_ACTION;
}

type PAGE = "home" | "shop" | "cart";

interface PAGE_ACTION {
    type: PAGE;
}

export interface NAV_PAGE {
    func: (page: PAGE) => PAGE_ACTION;
    action: PAGE_ACTION;
}

interface FILTER_ACTION {
    type: "search" | "filter" | "all";
    payload: string;
}

export interface FILTER_CONTENT {
    func: (type: FILTER_ACTION["type"], keyword: string) => FILTER_ACTION;
    action: FILTER_ACTION;
}

type EMPTY_ARRAY = [];

//REDUCER TYPES

export interface REDUCERS {
    cart: (state: Array<BOOK>, action: CART_ACTION) => Array<BOOK>;
    page: (state: PAGE, action: PAGE_ACTION) => PAGE;
    shop: (
        state: Array<BOOK> | EMPTY_ARRAY,
        action: FILTER_ACTION
    ) => Array<BOOK> | EMPTY_ARRAY;
}

//IMPORT IMAGES
