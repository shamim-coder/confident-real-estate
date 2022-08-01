import React from "react";
import vision from "../../Assets/vision.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const OurVision = () => {
    return (
        <section>
            <div class="container mx-auto pt-10 pb-20 hero">
                <div class="flex flex-col lg:flex-row gap-10">
                    <div className="w-full order-2 lg:order-1">
                        <h1 class="text-5xl md:text-7xl font-bold">
                            Our <span className="text-primary">Vision</span>
                        </h1>
                        <p class="py-6 text-xl font-semibold">We have prioritized the following key quality assurance goals</p>
                        <ul className="mb-5">
                            <li className="mb-4 flex items-center gap-3 text-lg">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> We aim to meet our Client Project needs at the given time and budget with highest quality possible.
                            </li>
                            <li className="mb-4  flex items-center gap-3 text-lg">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> We want to increase our value to our customers so that they can be proud to be associated with our company.
                            </li>
                            <li className="mb-4 flex items-center gap-3 text-lg">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> We want implement to a project with the best possible solutions to meet the needs of a customer.
                            </li>
                            <li className="mb-4 flex items-center gap-3 text-lg">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> We are always considering the long term harm to the environment to the solutions we provide in a project.
                            </li>
                            <li className="mb-4  flex items-center gap-3 text-lg">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> <div>We want to involve our clients, Suppliers and our partners to our project with a aim to promote good practice.</div>
                            </li>
                        </ul>
                        <Link to="/about-us" class="btn btn-primary">
                            Explore About Us
                        </Link>
                    </div>
                    <img src={vision} class="w-full shadow-2xl object-cover order-1 lg:order-2" alt="" />
                </div>
            </div>
        </section>
    );
};

export default OurVision;
