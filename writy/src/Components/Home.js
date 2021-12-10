import React from "react";
import Articles from "./Articles";
import Tags from "./Tags";
import { articlesURL } from "../utils/constant";
import Pagination from "./Pagination";
import FeedNav from "./FeedNav";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: null,
      articlesCount: 0,
      articlesPerPage: 10,
      activePage: 1,
      activeTab: "",
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  emptyTab = () => {
    this.setState({ activeTab: "" });
  };
  addTab = (tag) => {
    this.setState({ activeTab: tag });
  };

  fetchData = () => {
    const limit = this.state.articlesPerPage;
    const offset = (this.state.activePage - 1) * limit;
    const tag = this.state.activeTab;
    fetch(
      articlesURL + `/?limit=${limit}&offset=${offset}` + (tag && `&tag=${tag}`)
    )
      .then((data) => data.json())
      .then((data) => {
        console.log("fetched articles", data);
        this.setState({ articles: data, articlesCount: data.articlesCount });
      });
  };

  updateCurrentPage = (index) => {
    this.setState({ activePage: index }, this.fetchData);
  };

  componentDidUpdate(_prevProps, prevState) {
    if (
      prevState.activePage !== this.state.activePage ||
      prevState.activeTab !== this.state.activeTab
    ) {
      this.fetchData();
    }
  }

  render() {
    return (
      <section className="container">
        <h1>Welcome to Writy world</h1>
        <div className=" home">
          <div className="article-box">
            <FeedNav
              activeTab={this.state.activeTab}
              emptyTab={this.emptyTab}
            />
            <Articles
              articles={this.state.articles}
              articlesCount={this.state.articlesCount}
              user={this.props.user}
            />
            <div className="pagination">
              <Pagination
                articlesCount={this.state.articlesCount}
                articlesPerPage={this.state.articlesPerPage}
                activePage={this.state.activePage}
                updateCurrentPage={this.updateCurrentPage}
              />
            </div>
          </div>
          <div className="tags-box">
            <p>Popular tags</p>
            <Tags addTab={this.addTab} />
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
