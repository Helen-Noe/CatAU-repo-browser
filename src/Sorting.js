import React, { Component } from "react";

export default class Sorting extends Component {
  render() {
    return (
      <div id="btn1">
        <select defaultValue="Sort" onChange={this.props.handleSort}>
          <option disabled value="Sort" className="textDropDown">
            {" "}
            Sort and Filter{" "}
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
          <option value="aToz"> Name (A - Z) </option>
          <option value="zToa"> Name (Z - A) </option>
          <option value="fork"> Forked </option>
          <option value="notForkes"> Not Forked </option>
        </select>
      </div>
    );
  }
}
