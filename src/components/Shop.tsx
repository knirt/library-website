import React from "react";
import BookDisplay from "./BookDisplay";
import { useAppSelector } from "../redux/hooks";
import FilterBar from "./FilterBar";

const Shop: React.FC = function () {
    const content = useAppSelector((state) => state.shop);

    return (
        <React.Fragment>
            <FilterBar></FilterBar>
            <div className="book-container shop-container">
                <BookDisplay data={content} inCart={false}></BookDisplay>
            </div>
        </React.Fragment>
    );
};

export default Shop;
