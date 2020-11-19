import React from "react";

export default ({ url }) => {
  const [contributors, setContributors] = React.useState(null);
  console.log("url ", url);

  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        result = result.slice(0, 5);
        // console.log("result from contributors ", result);
        setContributors(result);
      });
  }, [url]);

  // console.log("contributors :", contributors);

  return (
    contributors &&
    contributors.map((contributor) => {
      const avatarURL = `${contributor.avatar_url}.png`;
      return (
        <div className="contributors" key={contributor.login}>
          <div className="container">
            <a href="{contributor.url}">
              <img
                src={avatarURL}
                alt="Image"
                className="avatar"
                width="100"
                height="100"
              />
            </a>
            {contributor.login}
          </div>
        </div>
      );
    })
  );
};
