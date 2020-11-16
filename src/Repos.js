import React, { Component } from "react";
// import Profile from "./Profile";

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      repo: [],
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

  getContributors(url) {
    const contri = [];
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        //   console.log(`result.length');
        //   console.log(result);
        contri = result;
        return contri.name;
      })
      .catch(console.log);
  }

  render() {
    const { error, isLoaded, repo } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading.. </div>;
    } else {
      return (
        <div className="repoDetail">
          <ul>
            {repo.map((item) => (
              <li key={item.id}>
                Name:{item.name} <br />
                Description: {item.description} <br />
                GitHub URL: <a href="{item.git_url}">Click Here</a> <br />
                Forked: {item.forks} <br />
                Watchers count: {item.watchers} <br />
                Star count:{item.stargazers_count} <br />
                License: {item.license === null
                  ? "NULL"
                  : item.license.name}{" "}
                <br />
                Language: {item.language} <br />
                Top 5 Contributors:{" "}
                {this.getContributors(item.contributors_url)}
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default Repos;
