import React, { Component } from "react";
import { Button, Form, FormField, Segment } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";

class EventForm extends Component {
  state = { ...this.props.event };

  componentDidMount() {
    const { selectedEvent } = this.props;
    if (selectedEvent !== null) {
      this.setState({ ...selectedEvent });
    }
  }

  handleFormSubmit = (e) => {
    const { createEvent, updateEvent, history } = this.props;
    e.preventDefault();
    if (this.state.id) {
      updateEvent(this.state);
      history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
      };
      createEvent(newEvent);
      history.push(`/events`);
    }
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { title, date, city, hostedBy, venue } = this.state;

    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input
              placeholder="Event Title"
              name="title"
              value={title}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <FormField>
            <label>Event Date</label>
            <input
              type="date"
              placeholder="Event Date"
              name="date"
              value={date}
              onChange={this.handleInputChange}
            />
          </FormField>
          <Form.Field>
            <label>City</label>
            <input
              placeholder="City event is taking place"
              name="city"
              value={city}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input
              placeholder="Enter the Venue of the event"
              name="venue"
              value={venue}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input
              placeholder="Enter the name of person hosting"
              name="hostedBy"
              value={hostedBy}
              onChange={this.handleInputChange}
            />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button type="button" onClick={this.props.history.goBack}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;
  let event = { title: "", date: "", city: "", venue: "", hostedBy: "" };
  if (eventId && state.events.length > 0)
    event = state.events.filter((event) => event.id === eventId)[0];
  return { event };
};

const actions = {
  createEvent,
  updateEvent,
};

export default connect(mapState, actions)(EventForm);
