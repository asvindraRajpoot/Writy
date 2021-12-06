import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header>
                <nav className="container navlist">
                    <div className="brand-name">
                        <Link to="/">
                            <i class="fas fa-edit"></i> <a href={"s"} className="brand">Writy</a>
                        </Link>
                    </div>
                    <div className="navigation">
                        <Link to="/">  <a href={"s"}>Home</a></Link>
                        <Link to="/Login">  <a href={"s"}>Sign in</a></Link>
                        <Link to="/Signup">  <a href={"s"}>Sign up</a></Link>



                    </div>
                </nav>
            </header>
        )
    }
}

export default Header;