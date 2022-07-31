import React from "react";
import AboutUs from "./AboutUs";
import Banner from "./Banner";
import CompleteProjects from "./CompleteProjects";
import OurClients from "./OurClients";
import OurInstrument from "./OurInstrument";
import OurServices from "./OurServices";

const Home = () => {
    return (
        <main>
            <Banner />
            <AboutUs />
            <OurClients />
            <OurServices />
            <CompleteProjects />
            <OurInstrument />
        </main>
    );
};

export default Home;
