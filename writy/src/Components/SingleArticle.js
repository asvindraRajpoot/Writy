import React from "react";
import { NavLink, useLocation, withRouter } from "react-router-dom";
import { articlesURL } from '../utils/constant';
import Comments from "./Comments";

class SingleArticle extends React.Component {
    state = {
        article: null,
        comments: [],
        slug: '',
        favoritesCount: 0,

    }



    handleHeart = (e) => {
        //console.log(e.target, 'heart', this.props.user.token);

        let slug = this.props.match.params.slug;
        if (!this.state.favoritesCount) {

            fetch(articlesURL + '/' + slug + '/favorite', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Token ${this.props.user.user.token}`
                },

            }).then((res) => res.json()).then((article) => this.setState({
                favoritesCount: article.article.favoritesCount
            }))


        } else {
            // console.log('inside else', this.state.favoritesCount);
            let slug = this.props.match.params.slug;
            fetch(articlesURL + '/' + slug + '/favorite', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    authorization: `Token ${this.props.user.user.token}`
                },

            }).then((res) => res.json()).then((article) => this.setState({
                favoritesCount: article.article.favoritesCount
            }))


        }
    }

    componentDidMount() {

        //console.log(this.props, 'compo in prop');
        let slug = this.props.match.params.slug;
        fetch(articlesURL + '/' + slug).then((data) => data.json()).then((data) => {
            console.log('fetched articles', data);
            this.setState({ article: data, slug: slug, favoritesCount: data.article.favoritesCount })
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();


        const comment = {
            body: e.target[0].value
        }
        // console.log(comment, 'comment');
        fetch(articlesURL + '/' + this.state.slug + '/comments/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                authorization: `Token ${this.props.user.user.token}`
            },
            body: JSON.stringify(comment)
        }).then((res) => res.json()).then((comment) => {
            console.log(comment, 'created comment');
            console.log(comment, 'created comment');
            e.target[0].value = '';
        })

    }



    render() {

        const { article } = this.state;
        const { user } = this.props;
        //console.log(article, 'this is props');



        if (!article) {
            return <h3 >
                Loading...

            </h3>
        } else {
            const a = article.article;
            return (
                <>
                    <div className="container">

                        <div className="single-article">
                            <div className='flex space-between'>
                                <strong className="title name">{a.title}</strong>

                                <div className='flex colom align-center' onClick={this.handleHeart}>
                                    <i class="fas fa-heart"></i>
                                    <span>{this.state.favoritesCount}</span>
                                </div>
                            </div>

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
                    {
                        this.props.user === null ? (<div>
                            <h2>
                                <NavLink to='/Login' className="navlink">Sign in</NavLink>or
                                <NavLink to='/Signup' className="navlink">Sign up</NavLink>
                                to add comments on this article.
                            </h2>
                        </div>) :
                            (<div className="container">
                                <form className='width' onSubmit={this.handleSubmit}>
                                    <textarea placeholder='Write comment...' />
                                    <div className="flex  align-center space-between">
                                        <strong className='name'>{user.user.username}</strong>
                                        <div><input value='Post Comment' className='post-comment' type='submit' /></div>
                                    </div>
                                </form>
                                {
                                    this.state.comments.length ? <Comments comments={''} /> : <></>
                                }

                            </div>)
                    }


                </>
            )
        }
    }





}

export default withRouter(SingleArticle);