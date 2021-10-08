import React from "react";
import HomeImage from "./HomeImage";
import { Images } from "../utils/dummy-data";

const Home: React.FC = function () {
    const renderImages = () => {
        return Images.map((img) => {
            return <HomeImage key={img} imgSrc={img}></HomeImage>;
        });
    };
    return (
        <div id="home-container">
            <h1 className="title-text">
                This is my library: all my favorite academic and literary works
                are here.
            </h1>
            <h2 className="title-text">
                Shop around in the shopping page and add books to your cart if
                you're interested.
            </h2>
            <br />
            <div className="img-flex">{renderImages()}</div>
        </div>
    );
};

export default Home;
