import React, { Fragment } from "react";
import { Image, Item, Label, List, Segment } from "semantic-ui-react";

const EventDetailedSideBar = (props) => {
  const { attendees } = props;
  const isHost = false;
  return (
    <Fragment>
      <Segment
        textAlign="center"
        style={{ border: "none" }}
        attached="top"
        secondary
        inverted
        color="teal"
      >
        {attendees && attendees.length}{" "}
        {attendees.length === 1 ? "Person" : "People"} Going
      </Segment>
      <Segment attached>
        {attendees &&
          attendees.map((attendee) => (
            <List relaxed divided key={attendee.id}>
              <Item style={{ position: "relative" }}>
                {isHost && (
                  <Label
                    style={{ position: "absolute" }}
                    color="orange"
                    ribbon="right"
                  >
                    Host
                  </Label>
                )}
                <Image
                  size="tiny"
                  src={attendee.photoURL}
                  verticalAlign="middle"
                />

                <Item.Content verticalAlign="middle" style={{ marginLeft: 10 }}>
                  <Item.Header as="h3">{attendee.name}</Item.Header>
                </Item.Content>
              </Item>
            </List>
          ))}
      </Segment>
    </Fragment>
  );
};

export default EventDetailedSideBar;
