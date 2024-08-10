import React from "react";
import style from "./styles/Navbar.module.css"
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg w-100 m-0 navbar-dark sticky-top bg-dark">
            <div className= "container-fluid ">
                <a className= "navbar-brand text-white fw-semibold" href="#">Start Bootstrap</a>
                <button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link text-white" href="#about">About</a>
                        <a className="nav-link text-white" href="#services">Services</a>
                        <a className="nav-link text-white" href="#portfolio">Portfolio</a>
                        <a className="nav-link text-white" href="#contact">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default Navbar