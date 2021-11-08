import React from "react";
import Button from "../UI/Button";
import "./NavBar.css";

const NavBar = (props) => {
    return (
        <nav className="navbar">
            <h1>Movies Sales Store</h1>
            <section className="links">
                {/* <a href="./#">Home</a>
                <a href="./#">About</a> */}
                <Button onClick={props.onLogout} onLogin={props.onLogin} >Logout</Button>
            </section>
            
        </nav>
    );
};

export default NavBar;
 