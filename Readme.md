# CLI Install

`ionic start [name of the app] [name of the template] --type=react`

`tabs`: A tabs based layout

`sidemenu`: A sidemenu based layout

`blank`: An empty project with a single page

--type: `react` or `angular`

example:
`ionic start myApp sidemenu --type=react`

See guides:

1. https://ionicframework.com/docs/building/starting
1. https://ionicframework.com/docs/react/your-first-app

## Generating New Features

The Ionic CLI can generate new app features with the `ionic generate` command. By running `ionic generate` in the command line, a selection prompt is displayed which lists the available features that can be generated.

# Build With Capacitor

### Modify your ionic.config.json

example:

```json
{
  "name": "com.myfirstapp",
  "integrations": {},
  "type": "react"
}
```

Type can be `angular, ionic-angular, ionic1, custom, react`

```
ionic integrations enable capacitor
```

```
ionic build
ionic cap add ios
ionic cap add android
```

```
ionic cap open ios
ionic cap open android
```

add to package.json for future builds

```json
"ionic:build": "npm run build && ionic capacitor copy"
```

Then in future builds run `npm run ionic:build`

# Build with Create-React-App

- `create-react-app . --typescript --use-npm`
- `npm i react-router react-router-dom @ionic/react @types/react-router @types/react-router-dom`

# USAGE

app.tsx

```typescript
import React, { Component } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import { IonApp } from "@ionic/react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <IonApp>
        <Router>
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </Router>
      </IonApp>
    );
  }
}

export default App;
```

pages/Home/index.tsx

```typescript
import React, { Component } from "react";
import {
  IonApp,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonRouterOutlet,
  IonIcon
} from "@ionic/react";
import { Route } from "react-router-dom";
import { IonPage } from "@ionic/react";
import Tab1 from "../Tab1";
import Tab2 from "../Tab2";
import Tab3 from "../Tab3";

class Home extends Component {
  render() {
    return (
      <IonApp>
        <IonPage>
          <IonTabs>
            <IonRouterOutlet>
              <Route path="/:tab(tab1)" component={Tab1} exact />
              <Route path="/:tab(tab2)" component={Tab2} exact />
              <Route path="/:tab(tab3)" component={Tab3} exact />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/tab1">
                <IonIcon name="home" />
                <IonLabel>Tab 1</IonLabel>
              </IonTabButton>
              <IonTabButton tab="settings" href="/tab2">
                <IonIcon name="settings" />
                <IonLabel>Tab 2</IonLabel>
              </IonTabButton>
              <IonTabButton tab="about" href="/tab3">
                <IonIcon name="information-circle" />
                <IonLabel>Tab 3</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonPage>
      </IonApp>
    );
  }
}

export default Home;
```

components/Tab1/index.tsx

```
import React from 'react'
import {
	IonContent,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonMenuButton,
	IonTitle,
	IonIcon,
	IonList,
	IonSelectOption,
	IonSelect,
	IonItem,
	IonLabel,
	IonDatetime
} from '@ionic/react'

export default class Tab1 extends React.Component {
	render() {
		return (<>
			<IonHeader>
				<IonToolbar color="primary">
					<IonButtons slot="start">
						<IonMenuButton></IonMenuButton>
					</IonButtons>
					<IonTitle>Tab 1</IonTitle>
				</IonToolbar>
			</IonHeader>

			<IonContent>
				<div className="ion-padding about-info">
					<h4>Just a regular title Tab 1</h4>

					<IonList lines="none">
						<IonItem>
							<IonIcon name="calendar" slot="start"></IonIcon>
							<IonLabel>Date Picker</IonLabel>
							<IonDatetime displayFormat="MMM DD, YYYY" max="2056" value={null}></IonDatetime>
						</IonItem>

						<IonItem>
							<IonIcon name="pin" slot="start"></IonIcon>
							<IonLabel>Selector</IonLabel>
							<IonSelect>
								<IonSelectOption value="madison" selected>Madison, WI</IonSelectOption>
								<IonSelectOption value="austin">Austin, TX</IonSelectOption>
								<IonSelectOption value="chicago">Chicago, IL</IonSelectOption>
								<IonSelectOption value="seattle">Seattle, WA</IonSelectOption>
							</IonSelect>
						</IonItem>
					</IonList>

					<p>
						Just a regular paragrah passing by
           		 	</p>
				</div>
			</IonContent>
		</>)
	}
}
```
