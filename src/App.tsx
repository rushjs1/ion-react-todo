import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonContent,
  setupIonicReact,
} from "@ionic/react";
import { createContext } from "react";
import { IonReactRouter } from "@ionic/react-router";
import {
  personCircleOutline,
  archiveOutline,
  listOutline,
} from "ionicons/icons";
import Tab1 from "./pages/Tab1";
import Tab2 from "./pages/Tab2";
import Tab3 from "./pages/Tab3";
import ListOfListsView from "./components/ListOfListsView";
import AuthenticationPage from "./pages/auth/AuthenticationPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";
import LoginPage from "./pages/auth/LoginPage";
import RegistrationPage from "./pages/auth/RegistrationPage";

import { useAuth } from "./hooks/data/useAuth";

setupIonicReact();

const AuthContext = createContext(false);

const App: React.FC = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AuthContext.Provider value={isLoggedIn}>
      <IonApp>
        <IonContent>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route exact path="/auth">
                <AuthenticationPage />;
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/register">
                <RegistrationPage />
              </Route>
              <Route path="/tabs" render={() => <TabsRouterOutlet />} />
              <Route exact path="/">
                <Redirect to="/auth" />
              </Route>
            </IonRouterOutlet>
          </IonReactRouter>
        </IonContent>
      </IonApp>
    </AuthContext.Provider>
  );
};

const TabsRouterOutlet: React.FC = () => {
  return (
    <IonTabs>
      <IonRouterOutlet>
        <Route exact path="/tabs/tab1">
          <Tab1 />
        </Route>
        <Route path="/tabs/tab1/:id">
          <ListOfListsView />
        </Route>
        <Route exact path="/tabs/tab2">
          <Tab2 />
        </Route>
        <Route path="/tabs/tab3">
          <Tab3 />
        </Route>
        <Route exact path="/">
          <Redirect to="/tabs/tab1" />
        </Route>

        <Route exact path="/foo">
          <LoginPage />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
        <IonTabButton tab="tab1" href="/tabs/tab1">
          <IonIcon aria-hidden="true" icon={listOutline} />
          <IonLabel>Lists</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab2" href="/tabs/tab2">
          <IonIcon aria-hidden="true" icon={archiveOutline} />
          <IonLabel>Archive</IonLabel>
        </IonTabButton>
        <IonTabButton tab="tab3" href="/tabs/tab3">
          <IonIcon aria-hidden="true" icon={personCircleOutline} />
          <IonLabel>Account</IonLabel>
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  );
};

export default App;
