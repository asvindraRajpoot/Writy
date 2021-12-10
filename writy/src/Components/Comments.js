import React from "react";

class Comments extends React.Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <p></p>
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
    );
  }
}

export default Comments;
