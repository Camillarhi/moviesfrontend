import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { claim } from './Auth/auth.model';
import AuthenticationContext from './Auth/AuthenticationContext';
import Menu from './Menu';
import routes from './RouteConfig';
import configureValidations from './Validations';
import configureInterceptor from "./Auth/httpInterceptor";

configureValidations();
configureInterceptor()
function App() {

  const [claims, setClaims] = useState<claim[]>([{ name: "role", value: "admin" }]);

  function isAdmin() {
    return claims.findIndex(claim => claim.name === "role" && claim.value === "admin") > -1;
  }
  return (

    <BrowserRouter>
      <AuthenticationContext.Provider value={{ claims, update: setClaims }}>
        <Menu />
        <div className="container">
          <Switch>
            {routes.map(route =>
              <Route key={route.path} path={route.path} exact={route.exact}>
                {route.isAdmin && !isAdmin() ? <>You are not allowed on this page</> :
                  <route.component />
                }
              </Route>)}

          </Switch>

        </div>
        <footer className="bd-footer py-5 mt-5 bg-light">
          <div className="container">
            React Movies {new Date().getFullYear().toString}
          </div>
        </footer>
      </AuthenticationContext.Provider>
    </BrowserRouter>


  )
}

export default App;
