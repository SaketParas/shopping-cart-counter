import React, { Component } from "react";
import logo from "./logo.svg";
import Counter from "./Count/Counter";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(e => {
      e.value = 0;
      return e;
    });
    this.setState({ counters });
  };
  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {...counter}
    counters[index].value++;
    this.setState({counters})

  };
  render() {
    return (
      <div>
        <button onClick={this.handleReset} class="btn btn-info">
          Reset
        </button>

        {this.state.counters.map(e => (
          <Counter
            key={e.id}
            counter={e}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default App;
