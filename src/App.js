import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Base from './components/base/Base'
import Beauty from './components/beautyZone/Beauty'
import Fit from './components/fitZone/Fit'

import { Provider } from "react-redux"
import {store} from './store/reducers'





class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Base} />
            <Route path={"/beauty"} component={Beauty} />
            <Route path={"/fit"} component={Fit} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
