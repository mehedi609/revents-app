import React from "react";
import PropTypes from "prop-types";
import { Grid, GridColumn } from "semantic-ui-react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChat from "./EventDetailedChat";
import EventDetailedSideBar from "./EventDetailedSideBar";
import { connect } from "react-redux";

const EventDetailedPage = (props) => {
  const { event } = props;
  return (
    <Grid>
      <GridColumn width={10}>
        <EventDetailedHeader event={event} />
        <EventDetailedInfo event={event} />
        <EventDetailedChat />
      </GridColumn>
      <GridColumn width={6}>
        <EventDetailedSideBar attendees={event.attendees} />
      </GridColumn>
    </Grid>
  );
};

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = {};
  if (eventId && state.events.length > 0)
    event = state.events.filter((event) => event.id === eventId)[0];
  return { event };
};

EventDetailedPage.propTypes = { event: PropTypes.object.isRequired };

export default connect(mapState)(EventDetailedPage);
