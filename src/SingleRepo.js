import React from "react";
import Contributors from "./Contributor";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faComments,
  faBook,
  faStar,
  faEye,
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SingleRepo = ({
  keyid,
  item,
  currentRepoIndex,
  clickedRepoIndex,
  onSingleRepoClick,
}) => {
  return (
    <div className="single-repo">
      <hr />
      <li key={item.id}>
        Name:{" "}
        <a href={item.html_url} className="repo-name">
          {item.name}
        </a>{" "}
        <br />
        Description: {item.description} <br />
        <FontAwesomeIcon style={{ color: "#bb2025" }} icon={faStar} size="1x" />
        <span className="star-count">{item.stargazers_count} </span>
        {/* Created: {item.created_at.substring(0, 4)} <br /> */}
        {/* Updated: {item.updated_at.substring(0, 4)} <br /> */}
        {/* Forked: {item.fork ? "Forked" : "Not Forked"} <br /> */}
        <FontAwesomeIcon
          style={{ color: "#bb2025" }}
          icon={faEye}
          size="1x"
          className="eye-icon"
        />
        <span className="watcher-count">{item.watchers} </span>
        <span className="fork">
          Forked:{" "}
          {item.fork ? (
            <FontAwesomeIcon
              style={{ color: "#bb2025" }}
              icon={faCheckCircle}
              size="1x"
              className="check-icon"
            />
          ) : (
            <FontAwesomeIcon
              style={{ color: "#bb2025" }}
              icon={faTimesCircle}
              size="1x"
              className="times-icon"
            />
          )}
        </span>
        <br />
        <span className="language"> Language: {item.language}</span>
        <span className="license">
          {" "}
          License: {item.license === null ? "NULL" : item.license.name}
        </span>
        <br />
        <span className="create-yr">
          {" "}
          Create Year: {item.created_at.substring(0, 4)}
        </span>
        <span className="update-yr">
          Update Year: {item.updated_at.substring(0, 4)}
        </span>
        <br />
        <button className="view-more" onClick={onSingleRepoClick}>
          {" "}
          View Contributors
        </button>
        {clickedRepoIndex > -1 && clickedRepoIndex === currentRepoIndex && (
          <div>
            <br />
            <br />
            <br />
            <Contributors url={item.contributors_url} />
          </div>
        )}
        {/* <hr /> */}
        <br />
      </li>
    </div>
  );
};

export default SingleRepo;
