import React from "react";
import Articles from "./Articles";
import Tags from "./Tags";



class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }




    render() {

        return (
            <section className="container">
                <h1>Welcome to Writy world</h1>
                <div className=" home">
                    <div className="article-box">
                        <p>Global feed</p>
                        <Articles />
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