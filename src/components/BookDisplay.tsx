import React from "react";
import Book from "./Book";
import { BOOK } from "../types";

interface PROPS {
    data: Array<BOOK>;
    inCart: boolean;
}

const BookDisplay: React.FC<PROPS> = function (props: PROPS) {
    const renderBooks = function (books: PROPS["data"]) {
        return books.map((book) => {
            return (
                <Book key={book.id} data={book} inCart={props.inCart}></Book>
            );
        });
    };

    return (
        <React.Fragment>
            <br />
            <div className="book-flex">{renderBooks(props.data)}</div>
        </React.Fragment>
    );
};

export default BookDisplay;
