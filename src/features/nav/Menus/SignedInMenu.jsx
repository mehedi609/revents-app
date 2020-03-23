import React from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  Image,
  MenuItem,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignedInMenu = (props) => {
  const { signOut } = props;
  return (
    <MenuItem position="right">
      <Image avatar spaced="right" src="/assets/user.png" />
      <Dropdown pointing="top left" text="Username">
        <DropdownMenu>
          <DropdownItem text="Create Event" icon="plus" />
          <DropdownItem text="My Events" icon="calendar" />
          <DropdownItem text="My Network" icon="users" />
          <DropdownItem text="My Profile" icon="user" />
          <DropdownItem
            as={Link}
            to="/settings"
            text="Settings"
            icon="settings"
          />
          <DropdownItem onClick={signOut} text="Sign Out" icon="power" />
        </DropdownMenu>
      </Dropdown>
    </MenuItem>
  );
};

SignedInMenu.propTypes = {};

export default SignedInMenu;
