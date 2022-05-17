import { Fragment } from "react";

const PageTitle = ({ title, subtitle }) => {
  return (
    <Fragment>
      {title && <h1 className={`page-title ${subtitle ? "has-subtitle" : ""}`}>
        {title}
      </h1>}
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </Fragment>
  );
};

export default PageTitle;
