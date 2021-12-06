import React from "react";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const {article}=this.props;
        console.log('props',article);
        return (
            <>
                <div className="flex space-between align-center article ">
                    <div className="flex space-between colom">
                        <div>
                            <h3>{article.title}</h3>
                            <h4>{article.description}</h4>
                            <span>Read more...</span>
                        </div>


                        <div className="flex space-between align-center author-des">
                            <div>
                                <i class="fas fa-user"></i>
                            </div>
                            <div className="flex colom ">
                                <blockquote>{article.author.username}</blockquote>
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