import React from "react";
import { Link } from 'react-router-dom';


class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { article } = this.props;
       // console.log('props', article);
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
                    <div className="heart">

                        <i class="fas fa-heart"></i>

                    </div>


                </div>
                <hr />
            </>


        )
    }

}

export default Article;