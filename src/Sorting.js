import React, { Component } from "react";

export default class Sorting extends Component {
  render() {
    return (
      <div>
        <select defaultValue="Sort" onChange={this.props.handleSort}>
          <option disabled value="Sort">
            {" "}
            Sort by Date{" "}
          </option>
          <option value="createNewToOld">
            {" "}
            Created Date (Newest to Oldest){" "}
          </option>
          <option value="createOldToNew">
            {" "}
            Created Date (Oldest to Newest){" "}
          </option>
          <option value="updateNewToOld">
            {" "}
            Updated Date (Newest to Oldest){" "}
          </option>
          <option value="updateOldToNew">
            {" "}
            Updated Date (Oldest to Newest){" "}
          </option>
        </select>

        <select defaultValue="Sort" onChange={this.props.handleSort}>
          <option disabled value="Sort">
            {" "}
            Sort by Name{" "}
          </option>
          <option value="aToz"> Name (A - Z) </option>
          <option value="zToa"> Name (Z - A) </option>
        </select>
      </div>
    );
  }
}
