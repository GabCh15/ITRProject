import React, { Component } from "react";

const getValue = () => {
  return new Promise((resolve, reject) => {
    resolve("Sucess promise class");
  });
};
export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { promise: null };
  }
  async componentDidMount() {
    this.setState({ promise: await getValue() });
  }

  render() {
    return <div>{"Class component: " + this.state.promise}</div>;
  }
}
