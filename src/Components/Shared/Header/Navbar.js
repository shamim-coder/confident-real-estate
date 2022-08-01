import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/logo-w.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    return (
        <div className="container mx-auto py-4">
            <div className="navbar justify-between items-center p-0">
                <div>
                    <Link to="/">
                        <img className="w-28" src={Logo} alt="" />
                    </Link>
                </div>
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 gap-5">
                        <li>
                            <NavLink to={"/"} className="tracking-wide text-base-100">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/about-us"} className="text-base-100">
                                About Us
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/projects"} className="text-base-100">
                                Our Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"} className="text-base-100">
                                Our Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/sister-concern"} className="text-base-100">
                                Sister Concern
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact-us"} className="text-base-100">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end lg:hidden">
                    <label tabIndex="0" className="p-2 cursor-pointer">
                        <FontAwesomeIcon className="text-2xl text-white" icon={faBars} />
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to={"/"} className="uppercase font-semibold tracking-wide">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/about-us"} className="uppercase font-semibold tracking-wide">
                                About Us
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/projects"} className="uppercase font-semibold">
                                Our Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/services"} className="uppercase font-semibold">
                                Our Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/sister-concern"} className="uppercase font-semibold">
                                Sister Concern
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact-us"} className="uppercase font-semibold">
                                Contact Us
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
