import React from "react";

export default ({ url }) => {
  const [contributors, setContributors] = React.useState(null);
  console.log("url ", url);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        result = result.slice(0, 5);
        console.log("result from contributors ", result);
        setContributors(result);
      });
  }, [url]);

  console.log("contributors :", contributors);

  return (
    contributors &&
    contributors.map((contributor) => {
      return <p key={contributors.login}>{contributor.login}</p>;
    })
  );
};
