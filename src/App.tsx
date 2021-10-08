import React from "react";
import { useAppSelector } from "./redux/hooks";
import "./App.css";
import Shop from "./components/Shop";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

const App: React.FC = function () {
    const pageState = useAppSelector((state) => state.page);

    const renderPage = function () {
        switch (pageState) {
            case "home":
                return <Home></Home>;
            case "shop":
                return <Shop></Shop>;
            case "cart":
                return <Cart></Cart>;
            default:
                return <Home></Home>;
        }
    };

    return (
        <React.Fragment>
            <NavBar></NavBar>
            {renderPage()}
            <br />
            <Footer></Footer>
        </React.Fragment>
    );
};

export default App;
