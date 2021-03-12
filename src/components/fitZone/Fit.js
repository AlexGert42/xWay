import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderContainer from "../header/HeaderContainer";
import ModalWindowContainer from '../modalWindow/ModalWindowContainer';

import HomeFit from "./home/HomeFit";


class Fit extends React.Component {
  render() {
    sessionStorage.setItem('ThemeHeader', 'fitZone');
    return (
      <>
        <ModalWindowContainer />
        <HeaderContainer />
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
