import React, { Component } from "react";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemImage,
  List,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

class EventListItem extends Component {
  render() {
    const { event, selectEvent, deleteEvent } = this.props;
    return (
      <SegmentGroup>
        <Segment>
          <ItemGroup>
            <Item>
              <ItemImage size="tiny" circular src={event.hostPhotoURL} />
              <ItemContent>
                <ItemHeader as="a">{event.title}</ItemHeader>
                <ItemDescription>Hosted by {event.hostedBy}</ItemDescription>
              </ItemContent>
            </Item>
          </ItemGroup>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees &&
              event.attendees.map((attendee) => (
                <EventListAttendee attendee={attendee} key={attendee.id} />
              ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button
            onClick={() => deleteEvent(event.id)}
            as="a"
            color="red"
            floated="right"
            content="Delete"
          />
          <Button
            onClick={() => selectEvent(event)}
            as="a"
            color="teal"
            floated="right"
            content="View"
          />
        </Segment>
      </SegmentGroup>
    );
  }
}

export default EventListItem;
