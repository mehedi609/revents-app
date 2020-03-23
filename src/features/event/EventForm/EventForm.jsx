import React, { Component } from "react";
import { Button, Form, FormField, Segment } from "semantic-ui-react";

class EventForm extends Component {
  constructor(props) {
    super(props);
    console.log("Event Form Contractor called..\n");
  }
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  };

  componentDidMount() {
    const { selectedEvent } = this.props;
    if (selectedEvent !== null) {
      this.setState({ ...selectedEvent });
    }
  }

  handleFormSubmit = (e) => {
    const { createEvent, updateEvent } = this.props;
    e.preventDefault();
    this.state.id ? updateEvent(this.state) : createEvent(this.state);
    /*if (this.state.id) {
      updateEvent(this.state);
    } else {
      createEvent(this.state);
    }*/
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  render() {
    const { cancelFormOpen } = this.props;
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
          <Button type="button" onClick={cancelFormOpen}>
            Cancel
          </Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
