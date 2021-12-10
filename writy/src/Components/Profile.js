import React from "react";
import { NavLink } from "react-router-dom";
import { articlesURL } from "../utils/constant";
import Articles from "./Articles";
import Pagination from "./Pagination";
class Profile extends React.Component {
  state = {
    activeTab: "author",
    articles: [],
    articlesCount: 0,
  };
  fetchData = () => {
    fetch(
      articlesURL + `/?${this.state.activeTab}=${this.props.user.user.username}`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log("fetched articles", data);
        this.setState({
          articles: data.articles,
          articlesCount: data.articlesCount,
        });
      });
  };
  handleActive = (tab) => {
    this.setState({ activeTab: tab }, () => {
      this.fetchData();
    });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    console.log(this.props, "props in profile");
    const { user } = this.props;
    const { activeTab } = this.state;
    return (
      <div className="container">
        <div className="flex colom align-center profile-data center">
          <strong>{user.user.username}</strong>
          <strong>{user.user.bio}</strong>
        </div>
        <NavLink to="/settings">
          <div className="edit-btn">
            <button>Edit profile settings</button>
          </div>
        </NavLink>

        <div className="flex profile-articles">
          <h6
            onClick={() => this.handleActive("author")}
            className={activeTab === "author" && "active"}
          >
            My Articles
          </h6>

          <h6
            onClick={() => this.handleActive("favorited")}
            className={activeTab === "favorited" && "active"}
          >
            Favorited Articles
          </h6>
        </div>
        <Articles
          articles={this.state}
          articlesCount={this.state.articlesCount}
        />
        <Pagination />
      </div>
    );
  }
}

export default Profile;
