import { useState } from "react";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";

import "./navbar.scss";

export const Navbar = () => {
    const [active, setActive] = useState("navBar");

    const showNav = () => {
        setActive("navBar activeNavbar");
    };

    const removeNav = () => {
        setActive("navBar");
    };

    return (
        <section className="navBarSection">
            <header className="header">
                <div className="logoDiv">
                    <a href="" className="logo flex">
                        <h1>
                            <MdOutlineTravelExplore className="icon" />
                            Travel.
                        </h1>
                    </a>
                </div>

                <div className={active}>
                    <ul className="navLists flex">
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Home
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Packages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Shop
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                About
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Pages
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                News
                            </a>
                        </li>
                        <li className="navItem">
                            <a href="#" className="navLink">
                                Contact
                            </a>
                        </li>

                        <button className="btn">
                            <a href="#">BOOK NOW</a>
                        </button>
                    </ul>

                    <div className="closeNavbar" onClick={removeNav}>
                        <AiFillCloseCircle className="icon" />
                    </div>
                </div>

                <div className="toggleNavbar" onClick={showNav}>
                    <TbGridDots className="icon" />
                </div>
            </header>
        </section>
    );
};
