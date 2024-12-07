import React from "react";

function Navbar() {
    return (
        <div>
            <ul className="navbar">
                <li><a className="active" href="#home">Home</a></li>
                <li><a href="#news">About Me</a></li>
                <li><a href="#contact">Proyects</a></li>
                <li><a href="#about">Experience</a></li>
            </ul>
        </div>
    )
}

export default Navbar