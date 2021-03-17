import React from "react";
import { Route, Switch } from "react-router-dom";


import HeaderContainer from "../header/HeaderContainer";
import ModalWindowContainer from '../modalWindow/ModalWindowContainer';
import FooterContainer from '../footer/FooterContainer';

import HomeFit from "./home/HomeFit";
import Ems from "./ems/Ems";


class Fit extends React.Component {
  render() {
    sessionStorage.setItem('Theme', 'fitZone');
    return (
      <>
        <ModalWindowContainer />
        <HeaderContainer />
        <main className="fit">
          <Switch>
            <Route path={"/fit/"} exact component={HomeFit} />
            <Route path={"/fit/ems"} exact component={Ems} />
          </Switch>

        </main>
        <FooterContainer/>
      </>
    );
  }
}

export default Fit;
