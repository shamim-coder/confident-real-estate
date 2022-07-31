import Home from "./Components/Home/Home";
import { Route, Routes } from "react-router-dom";
import Header from "./Components/Shared/Header/Header";
import Footer from "./Components/Shared/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
