import { REDUCERS } from "./types";
import { combineReducers } from "redux";
import Books from "../utils/dummy-data";
import { BOOK } from "../types";
import { filterShop, searchShop } from "../utils/funcs";

//REDUCERS
//cart reducer just checks for add or remove action and finds the book with proper ID and removes it
const cartReducer: REDUCERS["cart"] = function (state = [], action) {
    switch (action.type) {
        case "add":
            const newState = state.concat(
                Books.find((item: BOOK) => item.id === action.payload) || []
            );
            return newState;
        case "remove":
            return state.filter((item) => item.id !== action.payload);
        default:
            return state;
    }
};

//page reducer for shop, home, or cart page
const pageReducer: REDUCERS["page"] = function (state = "home", action) {
    switch (action.type) {
        case "home":
            state = "home";
            return state;
        case "shop":
            state = "shop";
            return state;
        case "cart":
            state = "cart";
            return state;
        default:
            return state;
    }
};

const shopReducer: REDUCERS["shop"] = function (state = Books, action) {
    switch (action.type) {
        case "search":
            state = searchShop(action.payload, Books);
            return state;
        case "filter":
            state = filterShop(action.payload, Books);
            return state;
        case "all":
            state = Books;
            return state;
        default:
            return state;
    }
};

//prettier-ignore
const reducer = combineReducers({cart: cartReducer, page: pageReducer, shop: shopReducer});

export default reducer;
