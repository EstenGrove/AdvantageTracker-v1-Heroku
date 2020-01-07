import React from "react";
import "./App.scss";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import { AppProviders } from "./state/AppProviders";
import Main from "./components/Main";
import NonAuthenticatedView from "./views/app/NonAuthenticatedView";
import AuthenticatedView from "./views/app/AuthenticatedView";
import PageNotFound from "./components/pages/PageNotFound";
import ProtectedRoute from "./auth/ProtectedRoute";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <AppProviders>
        <div className="App">
          <Main>
            <Switch>
              <Route exact path="/" component={NonAuthenticatedView} />
              <Route exact path="/login" component={NonAuthenticatedView} />
              <ProtectedRoute path="/dashboard" component={AuthenticatedView} />
              <Route exact path="/" component={PageNotFound} />
            </Switch>
          </Main>
        </div>
      </AppProviders>
    </Router>
  );
}

export default App;
