import React from "react";
import { Link, withRouter } from "react-router-dom";
import { articlesURL } from "../utils/constant";

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesCount: 0,
    };
  }

  handleHeart = (e) => {
    //console.log(e.target, 'heart', this.props.user.token);
    if (this.props.user) {
      console.log("inside if", this.props);
      if (!this.state.favoritesCount) {
        fetch(articlesURL + "/" + this.props.article.slug + "/favorite", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${this.props.user.token}`,
          },
        })
          .then((res) => res.json())
          .then((article) =>
            this.setState({
              favoritesCount: article.article.favoritesCount,
            })
          );
      } else {
        fetch(articlesURL + "/" + this.props.article.slug + "/favorite", {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            authorization: `Token ${this.props.user.token}`,
          },
        })
          .then((res) => res.json())
          .then((article) =>
            this.setState({
              favoritesCount: article.article.favoritesCount,
            })
          );
      }
    }
  };

  componentDidMount() {
    fetch(articlesURL + "/" + this.props.article.slug)
      .then((res) => res.json())
      .then((article) => {
        this.setState({
          favoritesCount: article.article.favoritesCount,
        });
      });
  }

  render() {
    // console.log(this.state.favoriteCount);
    const { article } = this.props;
    // console.log('props', article.slug);
    return (
      <>
        <div className="flex space-between align-center article ">
          <div className="flex space-between colom">
            <Link to={`/article/${article.slug}`}>
              <div>
                <h3 className="title">{article.title}</h3>
                <h4 className="des">{article.description}</h4>
                <span>Read more...</span>
              </div>
            </Link>

            <div className="flex space-between align-center author-des">
              <div className="user-icon">
                <i class="fas fa-user"></i>
              </div>
              <div className="flex colom author-details">
                <Link to={`/article/${article.slug}`}>
                  <blockquote>{article.author.username}</blockquote>
                </Link>
                <time>{article.createdAt}</time>
              </div>
            </div>
          </div>
          <div className="heart flex colom" onClick={this.handleHeart}>
            <i class="fas fa-heart"></i>
            <span>{this.state.favoritesCount}</span>
          </div>
        </div>
        <hr />
      </>
    );
  }
}

export default withRouter(Article);
