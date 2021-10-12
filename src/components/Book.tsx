import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { addToCart, removeFromCart } from "../redux/actions";
import { BOOK } from "../types";

interface PROPS {
    data: BOOK;
    inCart: boolean;
}

const Book: React.FC<PROPS> = function (props: PROPS) {
    //the only points in my app which changes state are nav bar and book items, changing page or
    //adding / removing from cart
    const dispatch = useAppDispatch();

    const addBookToCart = function () {
        if (props.data.inCart === false) {
            dispatch(addToCart(props.data.id));
            props.data.inCart = true;
        }
    };

    const removeBookFromCart = function () {
        dispatch(removeFromCart(props.data.id));
        props.data.inCart = false;
    };

    const renderImage = function () {
        if (props.data.imageRef !== false) {
            return (
                <img
                    className="book-display-img"
                    src={props.data.imageRef}
                    alt=""
                />
            );
        } else {
            return;
        }
    };

    const translated = function () {
        if (!props.data.isTranslated) {
            return;
        } else {
            return <li>{`Translator: ${props.data.secondAuth}`}</li>;
        }
    };

    return (
        <div className="book-box">
            <h2 className="book-title">{props.data.title}</h2>
            <div className="book-info-flex">
                <div className="book-info-box">
                    <ul>
                        <li>Author: {props.data.author}</li>
                        {translated()}
                        <li>Publisher: {props.data.publisher}</li>
                        <li>Date Published: {props.data.datePub}</li>
                        <li>Date First Published: {props.data.dateWrit}</li>
                    </ul>
                </div>
                <div className="book-image">{renderImage()}</div>
            </div>
            <div className="book-box-foot">
                <button className="book-box-btn book-wiki-btn">See wiki</button>
                <button
                    onClick={props.inCart ? removeBookFromCart : addBookToCart}
                    className="book-box-btn book-cart-btn"
                >
                    {props.inCart
                        ? "Remove from favorites"
                        : "Add to favorites"}
                </button>
            </div>
        </div>
    );
};

export default Book;
