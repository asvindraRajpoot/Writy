import React from "react";
import { useLocation } from "react-router-dom";
import { articlesURL } from '../utils/constant';

class SingleArticle extends React.Component {
    state = {
        article: null,

    }

    componentDidMount() {
        // let slug = this.props.matches[0].params.slug;
        // console.log(slug,'slug')
        // console.log('prop',this.props);
        console.log('loca', window.location.pathname.split('/article')[1].toString());
        const slug = window.location.pathname.split('/article')[1].toString()
        // console.log(new URLSearchParams(window.location));

        fetch(articlesURL + '/' + slug).then((data) => data.json()).then((data) => {
            console.log('fetched articles', data);
            this.setState({ article: data })
        })
    }



    render() {
       
        const { article } = this.state;
        


        if (!article) {
            return <h3>
                Loading...

            </h3>
        } else {
            const a=article.article;
            return (
                <>
                    <div className="container">

                        <div className="single-article">
                            <strong className="title">{a.title}</strong>

                            <div className="flex  align-center author-des">
                                <div className="user-icon">
                                    <i class="fas fa-user"></i>
                                </div>
                                <div className="flex colom author-details">

                                    <blockquote> {a.author.username}</blockquote>

                                    <time>{a.createdAt}</time>
                                </div>

                            </div>
                        </div>
                        <p className="article-description">
                            {a.description}
                        </p>
                        <hr />


                    </div>

                </>
            )
        }
    }





}

export default SingleArticle