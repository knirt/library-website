import React from "react";

interface PROPS {
    imgSrc: any;
}

const HomeImage: React.FC<PROPS> = function (props: PROPS) {
    return (
        <div className="home-img-box">
            <img src={props.imgSrc} alt="" className="home-img" />
        </div>
    );
};

export default HomeImage;
