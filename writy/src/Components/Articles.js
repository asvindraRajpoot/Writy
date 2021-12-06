import React from "react";
import { articlesURL } from "../utils/constant";
import Loader from './Loader';
import Article from "./Article";

class Articles extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            articlesCount: 0,
        }
    }

    componentDidMount() {
        fetch(articlesURL).then((data) => data.json()).then((data) => {
            console.log('fetched articles', data);
            this.setState({ articles: data, articlesCount: data.articlesCount })
        })
    }
    render() {
        const { articles, articlesCount } = this.state;
        console.log(articles, 'articles');
        if (articlesCount) {
            console.log(articles, articlesCount);
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

}

export default Articles;