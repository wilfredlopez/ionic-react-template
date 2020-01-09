import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { AppPage } from "./declarations";

import Menu from "./components/Menu";
import Home from "./pages/Home";
import List from "./pages/List";

import { home, list, people } from "ionicons/icons";
import Wilfred from "./pages/Wilfred";

const appPages: AppPage[] = [
  {
    title: "Home",
    url: "/home",
    icon: home
  },
  {
    title: "List",
    url: "/home/list",
    icon: list
  },
  {
    title: "Wilfred",
    url: "/wilfred",
    icon: people
  }
];

const Routes = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu appPages={appPages} />
        <IonRouterOutlet id="main">
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/wilfred" component={Wilfred} exact={true} />
          <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
