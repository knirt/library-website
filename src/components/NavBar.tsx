import React from "react";
import { useAppDispatch } from "../redux/hooks";
import { navPage } from "../redux/actions";

const NavBar: React.FC = function () {
    const dispatch = useAppDispatch();

    const navToHome = function () {
        dispatch(navPage("home"));
    };

    const navToCart = function () {
        dispatch(navPage("cart"));
    };

    const navToShop = function () {
        dispatch(navPage("shop"));
    };

    return (
        <div className="nav-container">
            <button id="nav-title-btn-wrap" onClick={navToHome}>
                <h1 id="nav-title">Matt's Personal Library</h1>
            </button>
            <div className="nav-flex">
                <button className="nav-box" onClick={navToShop}>
                    Shop
                </button>
                <button className="nav-box" onClick={navToCart}>
                   Favorites 
                </button>
            </div>
        </div>
    );
};
export default NavBar;
