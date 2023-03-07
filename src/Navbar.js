import React from "react";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
    return (
        <nav className="navbar Navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">DummyNews</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li ><NavLink className="NavLink" to="/">Home</NavLink></li>
                        <li><NavLink className="NavLink" to="/page1">Page1</NavLink></li>
                        <li><NavLink className="NavLink" to="/page2">Page2</NavLink></li>
                        <li><NavLink className="NavLink" to="/page3">Page3</NavLink></li>
                        <li><NavLink className="NavLink" to="/page4">Page4</NavLink></li>
                        <li><NavLink className="NavLink" to="/page5">Page5</NavLink></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;