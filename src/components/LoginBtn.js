import React from "react";
import { withRouter } from "react-router";

class LoginBtn extends React.Component {
  render() {
    console.log("location state:", this.props.location.state);
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let login = () => {
      this.props.fakeAuth.authenticate(() => {
        this.props.history.replace(from);
      });
    };

    return <button onClick={login}>Log in</button>;
  }
}

export default withRouter(LoginBtn);
