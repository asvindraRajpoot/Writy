import React from "react";
import Article from "./Article";

function Articles(props) {
  const { articles, articlesCount, user } = props;
  console.log(articles, articlesCount, props, "inside articles profile");
  if (articlesCount) {
    return (
      <>
        <section className="">
          <hr />
          {articles.articles.map((a) => {
            return <Article article={a} user={user} />;
          })}
        </section>
      </>
    );
  } else {
    return <h3>Loading...</h3>;
  }
}

export default Articles;
