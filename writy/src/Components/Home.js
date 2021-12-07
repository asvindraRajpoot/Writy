import React from "react";
import Articles from "./Articles";
import Tags from "./Tags";
import { articlesURL } from '../utils/constant';
import Pagination from './Pagination';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: null,
            articlesCount: 0,
            articlesPerPage: 10,
            activePage: 1,
        }
    }
    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        const limit = this.state.articlesPerPage;
        const offset = (this.state.activePage - 1) * limit;
        fetch(articlesURL + `/?limit=${limit}&offset=${offset}`).then((data) => data.json()).then((data) => {
            console.log('fetched articles', data);
            this.setState({ articles: data, articlesCount: data.articlesCount })
        })
    }

    updateCurrentPage = (index) => {
        this.setState({ activePage: index }, this.fetchData);
    }

    componentDidUpdate(_prevProps,prevState){
        if(prevState.activePage!==this.state.activePage){
            this.fetchData();
        }

    }






    render() {

        return (
            <section className="container">
                <h1>Welcome to Writy world</h1>
                <div className=" home">
                    <div className="article-box">
                        <p>Global feed</p>
                        <Articles articles={this.state.articles} articlesCount={this.state.articlesCount} />
                        <div className="pagination">
                            <Pagination articlesCount={this.state.articlesCount} articlesPerPage={this.state.articlesPerPage} activePage={this.state.activePage} updateCurrentPage={this.updateCurrentPage} />
                        </div>
                    </div>
                    <div className="tags-box">
                        <p>Popular tags</p>
                        <Tags />
                    </div>



                </div>

            </section>
        )
    }

}

export default Home;