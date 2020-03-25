import React, { Component } from "react";
import { GridColumn, Grid } from "semantic-ui-react";
import EventList from "../EventList/EventList";
import { connect } from "react-redux";
import { createEvent, deleteEvent, updateEvent } from "../eventActions";

class EventDashboard extends Component {
  handleDeleteEvent = (id) => this.props.deleteEvent(id);

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <GridColumn width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} />
        </GridColumn>

        <GridColumn width={6}>
          <h2>Activity Feed</h2>
        </GridColumn>
      </Grid>
    );
  }
}

const mapState = (state) => ({
  events: state.events,
});

const mapDispatch = {
  createEvent,
  updateEvent,
  deleteEvent,
};

export default connect(mapState, mapDispatch)(EventDashboard);
