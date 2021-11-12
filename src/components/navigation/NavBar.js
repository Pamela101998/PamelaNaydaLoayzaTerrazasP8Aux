import React, {useContext} from "react";
import Button from "../UI/Button";
import "./NavBar.css";
import AuthContext from "../store/auth-context";

const NavBar = (props) => {
    const ctx = useContext(AuthContext);
    return (
        <nav className="navbar">
            <h1>Movies Sales Store</h1>
            <section className="links">
                {/* <a href="./#">Home</a>
                <a href="./#">About</a> */}
                <Button onClick={ctx.onLogout} onLogin={props.onLogin}>
                    Logout
                </Button>
            </section>
            
        </nav>
    );
};

export default NavBar;
 