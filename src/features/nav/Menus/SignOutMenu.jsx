import React from "react";
import PropTypes from "prop-types";
import { Button, MenuItem } from "semantic-ui-react";

const SignOutMenu = (props) => {
  const { signIn } = props;
  return (
    <MenuItem position="right">
      <Button basic inverted content="Login" onClick={signIn} />
      <Button
        basic
        inverted
        content="Register"
        style={{ marginLeft: "0.5em" }}
      />
    </MenuItem>
  );
};

SignOutMenu.propTypes = {};

export default SignOutMenu;
