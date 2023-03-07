import React from "react";
import Navbar from "./Navbar";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {Page1,Page2,Page3,Page4,Page5,Home} from "./components";
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>

                    <Route path="/" element={<Home />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="/page3" element={<Page3 />} />
                    <Route path="/page4" element={<Page4 />} />
                    <Route path="/page5" element={<Page5 />} />
                </Routes>
            </BrowserRouter>
        </div>

    )
}
export default App;