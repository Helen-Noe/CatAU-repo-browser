import React from "react";
import Contributors from "./Contributor";

const SingleRepo = ({
  item,
  currentRepoIndex,
  clickedRepoIndex,
  onSingleRepoClick,
}) => {
  return (
    <li key={item.id}>
      Name: <a href="{item.git_url}">{item.name}</a> <br />
      Description: {item.description} <br />
      Created: {item.created_at} <br />
      Forked: {item.forks} <br />
      Watchers count: {item.watchers} <br />
      Star count:{item.stargazers_count} <br />
      License: {item.license === null ? "NULL" : item.license.name} <br />
      Language: {item.language} <br />
      Top 5 Contributors:
      <button onClick={onSingleRepoClick}>Click Me</button>
      {clickedRepoIndex > -1 && clickedRepoIndex === currentRepoIndex && (
        <Contributors url={item.contributors_url} />
      )}
      <br />
      <br />
    </li>
  );
};

export default SingleRepo;
