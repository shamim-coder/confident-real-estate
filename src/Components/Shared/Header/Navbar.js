import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../../Assets/logo-w.png";

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
                <div className="dropdown  lg:hidden">
                    <label tabIndex="0" className="btn  btn-primary btn-circle ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </label>

                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to={"/"} className="uppercase font-semibold tracking-wide">
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to={"/projects"} className="text-base-100">
                                Our Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/portfolio"} className="uppercase font-semibold">
                                Portfolio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"} className="uppercase font-semibold">
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
