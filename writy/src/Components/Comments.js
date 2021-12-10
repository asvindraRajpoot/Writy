import React from "react";
import Articles from "./Articles";
import { articlesURL } from "../utils/constant";

class Comments extends React.Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <p>

                    </p>
                    <div>
                        <div>
                            <strong>name</strong>
                            <time>time</time>
                        </div>
                        <div>
                            <i class="fas fa-trash-alt"></i>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Comments;