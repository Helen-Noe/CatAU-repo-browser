import React, { Component } from "react";
import SingleRepo from "./SingleRepo";
import Sorting from "./Sorting";
import Filter from "./Filter";
import axios from "axios";
import ReactPaginate from "react-js-pagination";

class Repos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Desc Default
      error: null,
      isLoaded: false,
      repos: [],
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
            repos: result,
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
    // console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  handleFilter = (e) => {
    // console.log(e.target.value);
    this.setState({ sort: e.target.value });
  };

  render() {
    const { error, isLoaded, repos, reposCopy, sort } = this.state;
    let sortedRepos = repos.sort((a, b) => {
      if (sort === "createNewToOld") {
        // console.log(sort);
        return (
          parseInt(b.created_at.substring(0, 4)) -
          parseInt(a.created_at.substring(0, 4))
        );
      } else if (sort === "createOldToNew") {
        // console.log(sort);
        return (
          parseInt(a.created_at.substring(0, 4)) -
          parseInt(b.created_at.substring(0, 4))
        );
      } else if (sort === "updateNewToOld") {
        // console.log(sort);
        return (
          parseInt(b.updated_at.substring(0, 4)) -
          parseInt(a.updated_at.substring(0, 4))
        );
      } else if (sort === "updateOldToNew") {
        // console.log(sort);
        return (
          parseInt(a.updated_at.substring(0, 4)) -
          parseInt(b.updated_at.substring(0, 4))
        );
      } else if (sort === "aToz") {
        // console.log(sort);
        return a.name.localeCompare(b.name);
      } else if (sort === "zToa") {
        // console.log(sort);
        return b.name.localeCompare(a.name);
      }
    });

    if (sort === "forked") {
      repos.filter((repo, index) => {
        // not forked
        if (repo.fork) {
          console.log(index);
          console.log(repo);
        }
        // forked
      });
    }

    // repos.map((repo) => {
    //   if (sort === "forked") {
    //     return
    //   }
    // });

    if (error) {
      return <div> Error: {error.message} </div>;
    } else if (!isLoaded) {
      return <div> Loading.. </div>;
    } else {
      return (
        <div className="repoDetail">
          <Sorting handleSort={this.handleSort} />
          <Filter handleFilter={this.handleFilter} />
          <ul>
            {sortedRepos.map((item, index) => (
              <SingleRepo
                sortedRepo={sortedRepos}
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
