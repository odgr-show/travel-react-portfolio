// import React from "react";

import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Main } from "./Components/Main/Main";
import { Footer } from "./Components/Footer/Footer";

import "./App.scss";

export const App = () => {
    return (
        <>
            <Navbar />
            <Home />
            <Main />
            <Footer />
        </>
    );
};
