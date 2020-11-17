import React, { Component } from "react";
import SingleRepo from "./SingleRepo";

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Desc Default
      error: null,
      isLoaded: false,
      repo: [],
      contributors: [],
      sort: "",
      clickedRepoIndex: null,
    };
  }
  componentDidMount() {
    this.getRepos();
  }

  getRepos() {
    fetch(`https://api.github.com/orgs/catalyst/repos?per_page=100`)
      .then((response) => response.json())
      .then(
        (result) => {
          //   console.log(`result.length');
          console.log(result);
          this.setState({
            isLoaded: true,
            repo: result,
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

  viewMore(index) {
    this.setState((prevState) => ({ ...prevState, clickedRepoIndex: index }));
  }

  handleSort = (e) => {
    console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  render() {
    const { error, isLoaded, repo, createTimeSort } = this.state;

    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading.. </div>;
    } else {
      return (
        <div className="repoDetail">
          <select defaultValue="Sort" onChange={this.handleSort}>
            <option disabled value="Sort">
              {" "}
              Sort{" "}
            </option>
            <option value="create"> Created Date </option>
            <option value="update"> updated Date</option>
          </select>
          <ul>
            {repo.map((item, index) => (
              <SingleRepo
                item={item}
                onSingleRepoClick={() => this.viewMore(index)}
                clickedRepoIndex={this.state.clickedRepoIndex}
                currentRepoIndex={index}
              />
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Repos;
