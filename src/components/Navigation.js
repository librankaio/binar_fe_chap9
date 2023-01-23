import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Belajar React Router</h1>
            <nav>
                <Link to="home">Home</Link> | {" "}
                <Link to="Games">Games</Link> | {" "}
                <Link to="about">About</Link>
            </nav>
            <br />
            <hr />
        </div>
    );
}

export default Navigation;