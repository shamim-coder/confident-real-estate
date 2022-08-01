import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";
import AboutUs from "./Components/Pages/AboutUs";
import CompleteProjects from "./Components/Pages/CompleteProjects";
import OurServices from "./Components/Home/OurServices";
import NotFound from "./Components/Shared/NotFound/NotFound";
import Contact from "./Components/Pages/Contact";
import SisterConcern from "./Components/Pages/SisterConcern";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/projects" element={<CompleteProjects />} />
                <Route path="/services" element={<OurServices />} />
                <Route path="/sister-concern" element={<SisterConcern />} />
                <Route path="/contact-us" element={<Contact />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
