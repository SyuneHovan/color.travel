import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { SongPage } from "./pages/SongPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/song/:songName" element={<SongPage />} />
            </Routes>
        </Router>
    );
}

export default App;