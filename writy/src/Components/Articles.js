import React from "react";
import { articlesURL } from "../utils/constant";
import Loader from './Loader';
import Article from "./Article";

function Articles(props) {
    const { articles, articlesCount } = props;
    console.log(articles, articlesCount,props);
    if (articlesCount) {

        return (
            <>

                <section className="">

                    <hr />
                    {
                        articles.articles.map((a) => {
                            return <Article article={a} />
                        })

                    }

                </section>
            </>
        )
    } else {
        return (
            <h3>
                Loading...

            </h3>
        )
    }

}



export default Articles;