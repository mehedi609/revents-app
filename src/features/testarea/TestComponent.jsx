import React, { Component } from "react";
import { connect } from "react-redux";
import { decrementCounter, incrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter } = this.props;
    return (
      <div>
        <h1>TestComponent</h1>
        <h3>The answer is : {data}</h3>
        <Button onClick={incrementCounter} positive content="increment" />
        <Button onClick={decrementCounter} negative content="decrement" />
      </div>
    );
  }
}

const mapState = (state) => ({
  data: state.test.data,
});

const mapDispatch = {
  incrementCounter,
  decrementCounter,
};

export default connect(mapState, mapDispatch)(TestComponent);
