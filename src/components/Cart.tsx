import React from "react";
import { useAppSelector } from "../redux/hooks";
import BookDisplay from "./BookDisplay";

const Cart: React.FC = function () {
    const cartItems = useAppSelector((state) => state.cart);

    const renderItemsOrMessage = function () {
        if (!cartItems[0]) {
            return (
                <h2 className="title-text">
                    There are no items in your favorites right now, add some from the
                    shop page if they look interesting
                </h2>
            );
        } else {
            return <BookDisplay data={cartItems} inCart={true}></BookDisplay>;
        }
    };

    return (
        <div className="book-container cart-container">
            {renderItemsOrMessage()}
        </div>
    );
};

export default Cart;
