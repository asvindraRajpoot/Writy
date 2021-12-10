import React from "react";
import { tagsURL } from "../utils/constant";
import Loader from "./Loader";

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: null,
    };
  }

  componentDidMount() {
    fetch(tagsURL)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ tags: data });
      });
  }
  render() {
    const { tags } = this.state;
    if (tags) {
      return (
        <section className=" tags">
          {tags.tags.map((t) => {
            return (
              <span className="tag" onClick={() => this.props.addTab(t)}>
                {t}
              </span>
            );
          })}
        </section>
      );
    } else {
      return <h3>Loading...</h3>;
    }
  }
}

export default Tags;
