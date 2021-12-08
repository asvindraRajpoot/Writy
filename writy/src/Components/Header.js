import React from "react";
import { NavLink } from "react-router-dom";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    handleLogout = () => {
       console.log(this.props,'logout props');
        this.props.updateUser();



    }
    render() {
        console.log(this.props.userInfo, 'userInfo');
        return (
            <header>
                {
                    this.props.userInfo.isLoggedIn ? <AuthHeader handleLogout={this.handleLogout} /> : <NonAuthHeader />

                }
            </header>
        )
    }
}


function AuthHeader(props) {
    return (
        <nav className="container navlist">
            <div className="brand-name">
                <NavLink to="/">
                    <i class="fas fa-edit"></i> <a href={"s"} className="brand">Writy</a>
                </NavLink>
            </div>
            <div className="navigation">
                <NavLink to="/" activeClassName="active">  <a href={"s"}>Home</a></NavLink>
                <NavLink to="/newPost" activeClassName="active">  <a href={"s"}>New Post</a></NavLink>
                <NavLink to="/settings" activeClassName="active">  <a href={"s"}>Settings</a></NavLink>
                <NavLink to="/profile" activeClassName="active">  <a href={"s"}>user</a></NavLink>
                <NavLink to="/" activeClassName="active">  <a href={"s"} onClick={props.handleLogout}>Logout</a></NavLink>


            </div>
        </nav>

    )
}



function NonAuthHeader() {
    return (
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

    )
}





export default Header;