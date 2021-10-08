import React from "react";
import image from "../images/library.png";

const Footer: React.FC = function () {
    return (
        <div className="footer-container">
            <h2 className="title-text" id="foot-line-top">
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </h2>
            <h2 className="title-text" id="quote">
                "You don't have to burn books to destroy a culture. Just get
                people to stop reading them."
            </h2>
            <h2 className="title-text" id="quotation">
                ~ Ray Bradbury
            </h2>
            <div className="footer-img-box">
                <img src={image} alt="" className="footer-img" />
            </div>
            <h2 className="title-text" id="foot-line">
                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
            </h2>
        </div>
    );
};

export default Footer;
