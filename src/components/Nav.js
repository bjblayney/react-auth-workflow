import React from "react";
import { Link } from "react-router-dom";
import LoginBtn from "../components/LoginBtn";
import { withRouter } from "react-router";

class Nav extends React.Component {
  render() {
    return this.props.fakeAuth.isAuthenticated ? (
      <div>
        <p>
          Welcome!{" "}
          <button
            onClick={() => {
              this.props.fakeAuth.signout(() => {
                this.props.history.push("/");
              });
            }}
          >
            Sign out
          </button>
        </p>
        <Link to="/public">Public Page</Link>
        <Link to="/protected">Protected Page</Link>
      </div>
    ) : (
      <div>
        <p>You are not logged in.</p>
        <Link to="/public">Public Page</Link>
        <Link to="/protected">Protected Page</Link>
        <LoginBtn
          fakeAuth={this.props.fakeAuth}
          history={this.props.history}
          location={this.props.location}
        />
      </div>
    );
  }
}

export default withRouter(Nav);
