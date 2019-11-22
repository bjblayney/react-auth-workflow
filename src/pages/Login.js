import React from "react";
import LoginBtn from "../components/LoginBtn";
import { withRouter } from "react-router";

class LoginPage extends React.Component {
  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <LoginBtn
          fakeAuth={this.props.fakeAuth}
          location={this.props.location}
          history={this.props.history}
        />
      </div>
    );
  }
}

export default withRouter(LoginPage);
