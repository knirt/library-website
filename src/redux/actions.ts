import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    NAV_PAGE,
    FILTER_CONTENT,
} from "./types";

//ACTION CREATORS

//takes in product ID and either add or remove and dispatches to reducer
export const addToCart: ADD_TO_CART["func"] = function (productID) {
    return {
        type: "add",
        payload: productID,
    };
};

export const removeFromCart: REMOVE_FROM_CART["func"] = function (productID) {
    return {
        type: "remove",
        payload: productID,
    };
};

export const navPage: NAV_PAGE["func"] = function (page) {
    return {
        type: page,
    };
};

export const filterContent: FILTER_CONTENT["func"] = function (type, keyword) {
    return {
        type,
        payload: keyword,
    };
};
