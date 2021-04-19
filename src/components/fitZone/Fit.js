import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderContainer from "../header/HeaderContainer";
import ModalWindowContainer from "../modalWindow/ModalWindowContainer";
import FooterContainer from "../footer/FooterContainer";

import HomeFit from "./home/HomeFit";
import Ems from "./ems/Ems";
import Stretching from "./stretching/Stretching";
import Fight from "./fight/Fight";
import Functional from "./functional/Functional";
import Workout from "./workout/Workout";

class Fit extends React.Component {
  render() {
    sessionStorage.setItem("Theme", "fitZone");
    return (
      <>
        <ModalWindowContainer />
        <HeaderContainer />
        <main className="fit">
          <Switch>
            <Route path={"/fit/"} exact component={HomeFit} />
            <Route path={"/fit/ems"} exact component={Ems} />
            <Route path={"/fit/stretching"} exact component={Stretching} />
            <Route path={"/fit/fight"} exact component={Fight} />
            <Route path={"/fit/functional"} exact component={Functional} />
            <Route path={"/fit/workout"} exact component={Workout} />
          </Switch>
        </main>
        <FooterContainer />
      </>
    );
  }
}

export default Fit;
