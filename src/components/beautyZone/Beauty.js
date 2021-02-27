import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Header from "../header/Header";

import Certificate from "./certificate/Certificate";
import Price from "./price/Price";
import Services from "./services/Services";

class Beauty extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <main className="beauty">
        BEAUTY
          <Switch>
            <Route path={"/beauty/"} exact component={Certificate} />
            <Route path={"/beauty/price"} component={Price} />
            <Route path={"/beauty/services"} component={Services} />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default Beauty;
