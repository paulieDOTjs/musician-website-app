import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Links() {
  return (
    <>
      <Link className="WordNav" to="/">
        About
      </Link>
      <Link className="WordNav" to="/tour">
        Tour
      </Link>
      <Link className="WordNav" to="/store">
        Store
      </Link>
    </>
  );
}

export default Links;
