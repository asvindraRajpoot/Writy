import React from "react";
import { Link } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            username: "",
            email: "",
            password: "",
            errors: {
                username: "",
                email: "",
                password: "",
            }

        }
    }


    validateEmail = (email) => {
        const re = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
        return re.test(email);
    }

    handleInput = ({ target }) => {
        let { name, value } = target;
        let errors = this.state.errors;

        switch (name) {


            case "username":
                errors.username = value.length > 4 ? "" : "username must be length of 4";


                break;
            case "email":
                errors.email = this.validateEmail(value) ? "" : "email is not valid";


                break;
            case "password":
                errors.password = value.length < 6 ? "password must be length of 6 character" : "";


                break;

            default:
                break;
        }

        this.setState({
            errors, [name]: value,

        })

    }
    handleSubmit = () => {
        console.log(this.state.password)
        alert('username:' + this.state.username + 'password:' + this.state.password);
    }


    render() {
        let { email, password, username } = this.state.errors;
        return (
            <section className="container">
                <div className="form-top ">
                    <div className="flex colom align-center yellow ">

                        <span className="first">
                            <a href={"s"}> Sign Up</a>

                        </span>

                        <Link to="/Login">
                            <span className="second">
                                <a href={"s"}>  Have an account?</a>

                            </span>
                        </Link>


                    </div>
                </div>
                <div className="form-control">
                    <form className="primary" onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Username" name="username" required value={this.state.username} onChange={this.handleInput} className={username && "error"} />
                        <span className="margin">{username}</span>

                        <input type="email" placeholder="Email" name="email" required value={this.state.email} onChange={this.handleInput} className={email && "error"} />
                        <span className="margin">{email}</span>

                        <input type="password" placeholder="Password" name="password" required value={this.state.password} onChange={this.handleInput} className={password && "error"} />
                        <span className="margin">{password}</span>
                        <div><input type="submit" /></div>
                    </form>


                </div>



            </section>
        )
    }
}
export default Signup;