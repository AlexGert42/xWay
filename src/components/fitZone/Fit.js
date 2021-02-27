import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../header/Header";

import HomeFit from "./home/HomeFit";


class Fit extends React.Component {
  render() {
    return (
      <>
        <Header />
        <main className="fit">
          <Switch>
            <Route path={"/fit/"} exact component={HomeFit} />
          </Switch>
        </main>
      </>
    );
  }
}

export default Fit;
