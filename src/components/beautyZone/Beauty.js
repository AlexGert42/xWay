import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderContainer from "../header/HeaderContainer";

import Certificate from "./certificate/Certificate";
import Price from "./price/Price";
import Services from "./services/Services";

class Beauty extends React.Component {
  render() {
    sessionStorage.setItem('ThemeHeader', 'BeautyZone');
    return (
      <>
        <HeaderContainer />
        <main className="beauty">
          <Switch>
            <Route path={"/beauty/"} exact component={Certificate} />
            <Route path={"/beauty/price"} component={Price} />
            <Route path={"/beauty/services"} component={Services} />
          </Switch>
        </main>
      </>
    );
  }
}

export default Beauty;
