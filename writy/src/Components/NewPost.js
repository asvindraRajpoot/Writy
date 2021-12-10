import React from "react";
import { Link, useHistory, withRouter } from "react-router-dom";
import { articlesURL, localStorageKey } from "../utils/constant";
import Article from "./Articles";
import Home from "./Home";
import SingleArticle from "./SingleArticle";

class NewPost extends React.Component {
  state = {
    article: {
      title: "",
      description: "",
      body: "",
      tagList: [],
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target[0].value;
    const description = e.target[1].value;
    const body = e.target[2].value;

    const tagList = e.target[3].value.split(",");

    // console.log(tagList);
    this.setState(
      {
        article: {
          title: title,
          description: description,
          body: body,
          tagList: [...tagList],
        },
        createdArticle: "",
      },
      () => {
        //  console.log(this.state.article, 'taglist state')
        let article = {};
        article.article = this.state.article;

        //console.log(article)
        let storageKey = localStorage[localStorageKey];
        // console.log(storageKey, 'storagekey')
        console.log(this.props);

        if (storageKey) {
          fetch(articlesURL, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              authorization: `Token ${this.props.user.user.token}`,
            },
            body: JSON.stringify(article),
          })
            .then((res) => res.json())
            .then((article) => {
              this.setState({
                createdArticle: article,
                article: {
                  title: "",
                  description: "",
                  body: "",
                  tagList: "",
                },
              });
              this.props.history.push("/");

              console.log("this is props in new post");
            });
        }
      }
    );
  };

  render() {
    if (this.state.createdArticle) {
      return <Home />;
    }
    return (
      <>
        <div className="container post">
          <form onSubmit={this.handleSubmit}>
            <input name="title" placeholder="Article Title" type="text" />
            <textarea
              name="description"
              placeholder="Write your article"
              type="text"
            />

            <textarea
              name="body"
              placeholder="What's the article about"
              type="text"
            />
            <input name="tagList" placeholder="Enter tags" type="text" />
            <input type="submit" value="Publish Article" />
          </form>
        </div>
      </>
    );
  }
}

export default withRouter(NewPost);
