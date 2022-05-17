import { Fragment } from "react";

const userName = () => {
  const adminUser = {
    username: "Kris",
  };

  return (
    <Fragment>
      <div className="grid-x align-center">
        <h2>
          Welcome, <span>{adminUser.username}</span>
        </h2>
      </div>
    </Fragment>
  );
};

export default userName;
