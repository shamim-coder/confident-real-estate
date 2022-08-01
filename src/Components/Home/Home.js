import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CompleteProjects from "./CompleteProjects";
import OurInstrument from "./OurInstrument";
import OurServices from "./OurServices";
import OurVision from "./OurVision";

const Home = () => {
    return (
        <main>
            <Banner />
            <AboutUs />
            <OurServices />
            <OurVision />
            <CompleteProjects />
            <OurInstrument />
        </main>
    );
};

export default Home;
