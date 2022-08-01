import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import about from "../../Assets/about-img-1.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
    return (
        <section>
            <div class="container mx-auto min-h-screen py-24 hero">
                <div class="flex flex-col lg:flex-row gap-10">
                    <img src={about} class="w-full shadow-2xl" alt="" />
                    <div className="w-full">
                        <h1 class="text-5xl font-bold">
                            We Build Everything As Your <span className="text-primary">Dream</span>
                        </h1>
                        <p class="py-6">
                            <strong>Confident Real Estate & Construction</strong> is an owned Institution which have experience in constructing all kinds of Construction work (Building, Road, Bridge, Retaining wall, steel structure) drain, culvert
                            and supplying any types of products.
                        </p>
                        <ul className="mb-5">
                            <li className="mb-3 font-semibold">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> 100% Satisfaction Guarantee.
                            </li>
                            <li className="mb-3 font-semibold">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> Accurate Testing Processes.
                            </li>
                            <li className="mb-3 font-semibold">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> 35+ Years Of Experience.
                            </li>
                            <li className="mb-3 font-semibold">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> Strong Building Materials.
                            </li>
                            <li className="mb-3 font-semibold">
                                <FontAwesomeIcon className="text-primary mr-3" icon={faPlay} /> Eco-Friendly Build Materials.
                            </li>
                        </ul>
                        <Link to="/about-us" class="btn btn-primary">
                            Explore About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
