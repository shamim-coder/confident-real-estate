import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
    const navigate = useNavigate();
    return (
        <div className="banner flex flex-col justify-center items-center text-center py-10 md:py-32">
            <div className="lg:w-1/2 text-base-100">
                <h4 className="text-3xl uppercase mb-5">Welcome to </h4>
                <h1 className="text-4xl lg:text-6xl font-bold mb-5 leading-tight">
                    Confident <span className="bg-primary px-5">Real Estate</span> & Construction
                </h1>
                <p className="text-lg">You can dream, create, design, and build the most wonderful place in the world. But it requires more experience people to make the dream a reality.</p>
                <button onClick={() => navigate("/services")} className="btn btn-primary mt-10">
                    Explore Services
                </button>
            </div>
        </div>
    );
};

export default Banner;
