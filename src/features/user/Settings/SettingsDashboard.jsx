import React from "react";
import PropTypes from "prop-types";
import { Grid, GridColumn } from "semantic-ui-react";
import SettingsNav from "./SettingsNav";
import BasicPage from "./BasicPage";
import { Redirect, Route, Switch } from "react-router-dom";
import AboutPage from "./AboutPage";
import PhotosPage from "./PhotosPage";
import AccountPage from "./AccountPage";

const SettingsDashboard = (props) => {
  return (
    <Grid>
      <GridColumn width={12}>
        <Switch>
          <Redirect exact from="/settings" to="/settings/basic" />
          <Route path="/settings/basic" component={BasicPage} />
          <Route path="/settings/about" component={AboutPage} />
          <Route path="/settings/photos" component={PhotosPage} />
          <Route path="/settings/account" component={AccountPage} />
        </Switch>
      </GridColumn>
      <GridColumn width={4}>
        <SettingsNav />
      </GridColumn>
    </Grid>
  );
};

SettingsDashboard.propTypes = {};

export default SettingsDashboard;
