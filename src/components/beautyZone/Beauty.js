import React from "react";
import { Route, Switch } from "react-router-dom";
import ScrollableAnchor from 'react-scrollable-anchor';

import HeaderContainer from "../header/HeaderContainer";
import ModalWindowContainer from "../modalWindow/ModalWindowContainer"
import FooterContainer from "../footer/FooterContainer"
import Contacts from "../contacts/Contacts"

import HomeBeauty from "./home/HomeBeauty";
import Price from "./price/Price";
import Services from "./services/Services";


class Beauty extends React.Component {
  render() {
    sessionStorage.setItem('Theme', 'BeautyZone');
    return (
      <>
        <ModalWindowContainer />
        <HeaderContainer />
        <main className="beauty">
          <Switch>
            <Route path={"/beauty/"} exact component={HomeBeauty} />
            <Route path={"/beauty/price"} component={Price} />
            <Route path={"/beauty/services"} component={Services} />
          </Switch>

          <ScrollableAnchor id={"contacts-beauty"}>
            <Contacts />
          </ScrollableAnchor>
        </main>
        <FooterContainer />
      </>
    );
  }
}

export default Beauty;
