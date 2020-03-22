import React, { Component } from "react";
import { Button, Form, FormField, Segment } from "semantic-ui-react";

class EventForm extends Component {
  render() {
    const { cancelFormOpen } = this.props;
    return (
      <Segment>
        <Form>
          <Form.Field>
            <label>Event Title</label>
            <input placeholder="First Name" />
          </Form.Field>
          <FormField>
            <label>Event Date</label>
            <input type="date" placeholder="Event Date" />
          </FormField>
          <Form.Field>
            <label>City</label>
            <input placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
