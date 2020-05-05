import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
   
  }

  formetCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
  getBatch() {
    let colortext = "m-2 btn btn-";
    colortext += this.props.counter.value === 0 ? "danger" : "success";
    return colortext;
  }
  render() {
    //console.log("props-", this.props);
    return (
      <div className="mt-1">
        <span className={this.getBatch()}>{this.formetCount()}</span>
        <button onClick={() => this.props.onIncrement(this.props.counter)} class="btn btn-info">
          Increment
        </button>
        <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger m-2">Delete</button>
      </div>
    );
  }
}

export default Counter;
