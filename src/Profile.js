import React, { Component } from "react";
import "./font-awesome/css/font-awesome.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faComments, faBook } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import bg from "./image/banner.png";
import Repos from "./Repos";
import "./profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    fetch(`https://api.github.com/orgs/catalyst`)
      .then((response) => response.json())
      .then(
        (result) => {
          // console.log(result);
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading.. </div>;
    } else {
      return (
        // <div id = "">
        <div id="app">
          <ul className="bannerClass">
            <li>
              <h1>{data.name}</h1>
            </li>
            <li>
              <p>{data.description}</p>
            </li>
          </ul>
          <div className="totRepoDisplay">
            <p>
              <FontAwesomeIcon
                style={{ color: "#BB2025" }}
                icon={faBook}
                size="2x"
                id="faBook"
              />
              <span className="totRepo">{data.public_repos} Repositories</span>
            </p>
          </div>
          <Repos />
        </div>
      );
    }
  }
}

export default Profile;
