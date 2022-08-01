import React from "react";
import notFoundImage from "../../../Assets/404.jpg";

const NotFound = () => {
    return (
        <section className="bg-white">
            <div className="container mx-auto">
                <img className="w-8/12  mx-auto" src={notFoundImage} alt="" />
            </div>
        </section>
    );
};

export default NotFound;
