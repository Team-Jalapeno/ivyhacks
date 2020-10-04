import React from 'react';
import '@ionic/react/css/core.css';
import { Route } from "react-router-dom";
import {IonApp, IonRouterOutlet} from "@ionic/react";
import {IonReactRouter} from "@ionic/react-router";
import Home from "./pages/home";
import './App.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';


function App() {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/" exact component={Home} />
          {/* <Route path="/about" exact component={About} /> */}
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}

export default App;
