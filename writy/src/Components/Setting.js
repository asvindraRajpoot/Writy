import React from "react";
import { articlesURL, localStorageKey, updateUser } from "../utils/constant";
import Prfile from "./Profile";

class Setting extends React.Component {
  state = {
    user: {
      username: "",
      email: "",
      bio: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    const bio = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;
    console.log(username, bio, email, password);
    this.setState(
      {
        user: {
          username: username,
          email: email,
          bio: bio,
          password: password,
        },
        updated: null,
      },
      () => {
        console.log(this.state, "user in seetinfg");
        let storageKey = localStorage[localStorageKey];
        console.log(storageKey, "storagekey");
        if (storageKey) {
          fetch(updateUser, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              authorization: `Token ${storageKey}`,
            },
            body: JSON.stringify(this.state),
          })
            .then((res) => res.json())
            .then((user) => {
              this.setState({
                user: {
                  username: "",
                  email: "",
                  bio: "",
                  password: "",
                },
                updated: user,
              });
            });
        }
      }
    );
  };

  render() {
    if (this.state.updated) {
      return <Prfile user={this.state.updated} />;
    }
    return (
      <>
        <h1>Your Settings</h1>
        <div className="container">
          <div className="container post">
            <form onSubmit={this.handleSubmit}>
              <input name="username" placeholder="New username" type="text" />

              <textarea
                name="bio"
                placeholder="Short bio about you"
                type="text"
              />
              <input name="email" placeholder="New mail" type="email" />
              <input
                name="password"
                placeholder="New Password"
                type="password"
              />
              <input type="submit" value="Update Settings" />
            </form>
          </div>
        </div>
      </>
    );
  }
}
export default Setting;
