import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }
    render() {
        return (
            <header>
                <nav className="container navlist">
                    <div className="brand-name">
                        <NavLink to="/">
                            <i class="fas fa-edit"></i> <a href={"s"} className="brand">Writy</a>
                        </NavLink>
                    </div>
                    <div className="navigation">
                        <NavLink to="/" activeClassName="active">  <a href={"s"}>Home</a></NavLink>
                        <NavLink to="/Login" activeClassName="active">  <a href={"s"}>Sign in</a></NavLink>
                        <NavLink to="/Signup" activeClassName="active">  <a href={"s"}>Sign up</a></NavLink>



                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;