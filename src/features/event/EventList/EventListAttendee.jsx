import React, { Component } from "react";
import { ItemImage, ListItem } from "semantic-ui-react";

class EventListAttendee extends Component {
  render() {
    const { attendee } = this.props;
    return (
      <ListItem>
        <ItemImage as="a" size="mini" circular src={attendee.photoURL} />
      </ListItem>
    );
  }
}

export default EventListAttendee;
