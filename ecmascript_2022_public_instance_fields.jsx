/*****************************************************************************
                 ECMAScript 2022 Public class fields
******************************************************************************/


/***** Before ECMAScript 2022 ****/

import React, { Component } from "react";

export class Incrementor extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increment = this.increment.bind(this); // bind methods
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <button onClick={this.increment}>Increment: {this.state.count}</button>
    );
  }
}

/***** After ECMAScript 2022 ****/

//You might be probably thinking “We have been able to do this in JavaScript for ages”,
//which is true. 
//But, it is not standard ECMAScript and isn’t enabled by default.
//Project created with create-react-app, enables it by default 
// Babel 7.14 enables class fields & private methods by default in @babel/preset-env.


export class IncrementorWithNewSyntax extends React.Component {
  state = { count: 0 };

  increment = () => this.setState({ count: this.state.count + 1 });

  render = () => (
    <button onClick={this.increment}>Increment: {this.state.count}</button>
  );
}