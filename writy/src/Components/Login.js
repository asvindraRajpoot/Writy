import React from "react";
import { Link } from 'react-router-dom';
import { ROOT_URL } from '../utils/constant';
import User from "./user";
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errors: {
                email: "",
                password: "",
            },
            user: null,

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
    signUp = (data) => {
        // console.log('data', data[0].value, data[1].value, data[2].value);
        // console.dir(data);
        let user = {
            user: {

                email: data[0].value,
                password: data[1].value
            }
        }
        console.log(JSON.stringify(user));

        fetch(ROOT_URL + `users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)


        })
            .then((data) => data.json())
            .then((data) => {
                console.log("logedIn", data);
                this.setState({ user: data });
            });
    }


    handleSubmit = (e) => {
        e.preventDefault();

        this.signUp(e.target);
    };


    render() {
        if (this.state.user) {
            return <User user={this.state.user} />
        }
        let { email, password } = this.state.errors;
        return (
            <section className="container">
                <div className="form-top ">
                    <div className="flex colom align-center yellow ">
                        <span className="first">
                            <a href={"s"}> Sign In</a>
                        </span>
                        <Link to="/Signup">
                            <span className="second">
                                <a href={"s"}>Need an account?</a>

                            </span>
                        </Link>

                    </div>
                </div>
                <div className="form-control">
                    <form className="primary" onSubmit={this.handleSubmit}>

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
export default Login;