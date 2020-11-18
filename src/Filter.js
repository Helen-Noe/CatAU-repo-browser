import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div>
        <select defaultValue="Filter" onChange={this.props.handleFilter}>
          <option disabled value="Filter">
            {" "}
            Filter{" "}
          </option>
          <option value="forked"> Forked </option>
          <option value="notForked"> Not Forked </option>
        </select>
      </div>
    );
  }
}
