import React from "react";
import { Route, Switch } from "react-router-dom";

import HeaderContainer from "../header/HeaderContainer";
import ModalWindowContainer from "../modalWindow/ModalWindowContainer";
import FooterContainer from "../footer/FooterContainer";

import HomeBeauty from "./home/HomeBeauty";
import Cosmetology from "./cosmetology/Cosmetology";
import Massage from "./massage/Massage";
import Dipilation from "./dipilation/Dipilation";

class Beauty extends React.Component {
  render() {
    sessionStorage.setItem("Theme", "BeautyZone");
    return (
      <>
        <ModalWindowContainer />
        <HeaderContainer />
        <main className="beauty">
          <Switch>
            <Route path={"/beauty/"} exact component={HomeBeauty} />
            <Route path={"/beauty/cosmetology"} component={Cosmetology} />
            <Route path={"/beauty/massage"} component={Massage} />
            <Route path={"/beauty/dipilation"} component={Dipilation} />
          </Switch>
        </main>
        <FooterContainer />
      </>
    );
  }
}

export default Beauty;
