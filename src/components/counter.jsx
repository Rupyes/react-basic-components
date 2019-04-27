import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    tags: []
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There's no tags!</p>;

    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrement = product => {
    this.setState({ count: this.state.count + 1 });
    console.log(product);
  };

  render() {
    return (
      // <div>
      //   {this.state.tags.length === 0 && "Please create a tag!"}
      //   {this.renderTags()}
      // </div>
      <div>
        <span className={this.getBadgeColor()}>{this.formatCount()}</span>
        <button
          onClick={() => {
            this.handleIncrement({ id: 1 });
          }}
          className="btn btn-secondary sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeColor() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
