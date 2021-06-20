import React from "react";
import { Route } from "react-router-dom";

import Header from "@components/layouts/Header";

const Layout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Header />
          <Component {...props} />
        </>
      )}
    />
  );
};
export default Layout;
