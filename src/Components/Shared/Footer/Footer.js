import React from "react";
import Logo from "../../../Assets/logo-w.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer class="footer footer-center p-10 bg-secondary text-neutral-content">
            <div>
                <Link to="/">
                    <img className="w-[200px] mb-5" src={Logo} alt="" />
                </Link>
                <p class="font-bold">
                    <span className="text-xl">Confident Real Estate & Construction</span> <br />
                    Providing Real Estate & Construction Service since 2013
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;
