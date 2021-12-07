import React from "react";
import { Link } from "react-router-dom";
function FeedNav(props) {
    return (
        <div className="feed">
            <div onClick={props.emptyTab}>
                <Link to="/">
                    <span >Global Feed</span>
                </Link>
            </div>
            {
                props.activeTab && (
                    <div>
                        <Link to="/">
                            <span className="feed1">
                                #{props.activeTab}
                            </span>
                        </Link>
                    </div>
                )
            }

        </div>
    )
}

export default FeedNav;