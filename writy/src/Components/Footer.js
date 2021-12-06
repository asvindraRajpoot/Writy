import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <footer>
                <center>
                    <nav className="container footer-list">
                        <small>
                            Copyright © 2021 Writy Pvt. Ltd. All Rights Reserved.
                        </small>

                    </nav>
                </center>
            </footer>
        )
    }
}

export default Footer;