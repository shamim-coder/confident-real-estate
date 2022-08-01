import React from "react";
import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header>
            <HeaderTop />
            <nav className="bg-secondary">
                <Navbar />
            </nav>
        </header>
    );
};

export default Header;
